'use strict';

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const STORAGE_KEY = 'depoTakipProV4';
const SESSION_KEY = 'depoTakipSession';

const roleNames = {
  super_admin: 'Yönetici', admin: 'Yönetici', depot: 'Depo Personeli',
  machine: 'Makine Personeli', sales: 'Satış', accounting: 'Muhasebe', viewer: 'Görüntüleyici'
};
const permissions = {
  super_admin: ['manage_users','manage_products','manage_settings','stock_write'],
  admin: ['manage_users','manage_products','manage_settings','stock_write'],
  depot: ['stock_write'],
  machine: [],
  sales: ['stock_write'],
  accounting: [],
  viewer: []
};

const seed = { version: 4, products: [], users: [
  {id:'u1',name:'Alper',username:'Alper',password:'00120200',role:'super_admin',job:'Sistem Yöneticisi',assignment:'Genel',active:true,protected:true}
], movements: [], notifications: [] };

let db = loadDb();
let currentUser = null;

function deepClone(value){ return JSON.parse(JSON.stringify(value)); }
function uid(prefix){ return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2,7)}`; }
function normalizeText(v){ return String(v ?? '').toLocaleLowerCase('tr-TR').trim(); }
function formatQty(n){ return Number(n).toLocaleString('tr-TR',{maximumFractionDigits:2}); }
function formatNow(){ return new Date().toLocaleString('tr-TR',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}); }
function saveDb(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(db)); }
function has(permission){ return currentUser && permissions[currentUser.role]?.includes(permission); }
function productById(id){ return db.products.find(p=>p.id===id); }
function userById(id){ return db.users.find(u=>u.id===id); }
function initials(name){ return String(name).split(/\s+/).map(x=>x[0]).filter(Boolean).slice(0,2).join('').toUpperCase(); }
function escapeHtml(v){ return String(v??'').replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c])); }
function toast(message){ const el=$('#toast'); el.textContent=message; el.classList.remove('hidden'); clearTimeout(toast.timer); toast.timer=setTimeout(()=>el.classList.add('hidden'),3200); }

function loadDb(){
  try{
    const stored = localStorage.getItem(STORAGE_KEY);
    if(stored) return migrate(JSON.parse(stored));
  }catch(error){ console.error('Veri yüklenemedi', error); }
  return deepClone(seed);
}
function migrate(data){
  return {
    version:4,
    products:Array.isArray(data.products)?data.products.map((p,i)=>({...p,id:String(p.id||`p${i}`),category:p.category||'Genel',active:p.active!==false})):[],
    users:Array.isArray(data.users)&&data.users.length?data.users.map((u,i)=>({...u,id:String(u.id||`u${i}`),role:u.role||'viewer',job:u.job||'',assignment:u.assignment||'Genel',active:u.active!==false})):deepClone(seed).users,
    movements:Array.isArray(data.movements)?data.movements.map((m,i)=>({...m,id:m.id||`m${i}`,ts:m.ts||Date.now()-i*60000,reference:m.reference||'',note:m.note||'',userId:m.userId||''})):[],
    notifications:[]
  };
}

function statusOf(product){
  const total=Number(product.ostim)+Number(product.yenikent);
  if(total<=Number(product.min)) return {key:'critical',label:'Kritik',className:'pill-critical'};
  if(total<=Number(product.min)*1.7) return {key:'low',label:'Azalıyor',className:'pill-low'};
  return {key:'ok',label:'Yeterli',className:'pill-ok'};
}
function movementClass(type){ return type==='Giriş'||type==='İade'?'pill-ok':type==='Satış'?'pill-low':'pill-critical'; }

// ---- Oturum ----
function refreshAuthView(){
  const needsSetup=db.users.length===0;
  $('#loginForm').classList.toggle('hidden',needsSetup);
  $('#setupForm').classList.toggle('hidden',!needsSetup);
}
function completeSetup(event){
  event.preventDefault();
  const name=$('#setupName').value.trim(); const username=$('#setupUser').value.trim();
  const pass=$('#setupPass').value; const pass2=$('#setupPass2').value;
  if(!name||!username) return toast('Ad soyad ve kullanıcı adı gerekli.');
  if(pass.length<6) return toast('Şifre en az 6 karakter olmalı.');
  if(pass!==pass2) return toast('Şifreler eşleşmiyor.');
  db.users.push({id:uid('u'),name,username,password:pass,role:'super_admin',job:'Sistem Yöneticisi',assignment:'Genel',active:true,protected:true});
  saveDb(); $('#setupForm').reset(); refreshAuthView();
  login(username,pass);
}
function enterApp(user){
  currentUser=user;
  localStorage.setItem(SESSION_KEY,user.id);
  $('#loginView').classList.add('hidden'); $('#appView').classList.remove('hidden');
  $('#currentName').textContent=user.name; $('#currentRole').textContent=roleNames[user.role]||user.role;
  applyPermissions(); goPage('home');
}
function login(username,password){
  const user=db.users.find(u=>normalizeText(u.username)===normalizeText(username));
  if(!user||user.password!==password){ toast('Kullanıcı adı veya şifre yanlış.'); return; }
  if(!user.active){ toast('Bu kullanıcı hesabı pasif durumda.'); return; }
  enterApp(user);
}
function logout(){ localStorage.removeItem(SESSION_KEY); currentUser=null; $('#appView').classList.add('hidden'); $('#loginView').classList.remove('hidden'); $('#loginPass').value=''; refreshAuthView(); }

function applyPermissions(){
  $$('[data-permission]').forEach(el=>el.classList.toggle('hidden',!has(el.dataset.permission)));
}
function goPage(page){
  const need={products:'manage_products',users:'manage_users',settings:'manage_settings'};
  if(need[page]&&!has(need[page])) page='home';
  $$('.page').forEach(el=>el.classList.toggle('active',el.id===page));
  window.scrollTo(0,0);
  if(page==='stocks') renderStocks();
  if(page==='movements') renderMovements();
  if(page==='products') renderProductAdmin();
  if(page==='users') renderUsers();
}

// ---- Listeler ----
function renderStocks(){
  const q=normalizeText($('#stockSearch').value);
  const rows=db.products.filter(p=>p.active).filter(p=>!q||normalizeText(`${p.name} ${p.code} ${p.category}`).includes(q));
  $('#stockList').innerHTML=rows.map(p=>{const s=statusOf(p);const total=Number(p.ostim)+Number(p.yenikent);return `
    <article class="list-card">
      <div class="list-main"><b>${escapeHtml(p.name)}</b><small>${escapeHtml(p.code)} · ${escapeHtml(p.unit)}</small></div>
      <div class="list-qty"><span>Ostim <b>${formatQty(p.ostim)}</b></span><span>Yenikent <b>${formatQty(p.yenikent)}</b></span><span class="stock-pill ${s.className}">${formatQty(total)}</span></div>
      <div class="list-actions"><button class="mini-btn" data-qr="${p.id}">Etiket</button>${has('stock_write')?`<button class="mini-btn" data-quick="${p.id}">İşlem</button>`:''}</div>
    </article>`}).join('');
  $('#stockEmpty').classList.toggle('hidden',rows.length>0);
  $$('[data-qr]').forEach(b=>b.onclick=()=>openQr(b.dataset.qr));
  $$('[data-quick]').forEach(b=>b.onclick=()=>openQuickForProduct(b.dataset.quick));
}
function renderMovements(){
  const q=normalizeText($('#movementSearch').value);
  const rows=db.movements.filter(m=>!q||normalizeText(`${m.product} ${m.user} ${m.source} ${m.target} ${m.type}`).includes(q)).slice(0,200);
  $('#movementList').innerHTML=rows.map(m=>`
    <article class="list-card">
      <div class="list-main"><b>${escapeHtml(m.product)}</b><small>${escapeHtml(m.source)} → ${escapeHtml(m.target)} · ${escapeHtml(m.user)}</small><small>${escapeHtml(m.date)}</small></div>
      <div class="list-qty"><span class="stock-pill ${movementClass(m.type)}">${escapeHtml(m.type)}</span><b class="qty-big">${formatQty(m.qty)} ${escapeHtml(m.unit)}</b></div>
    </article>`).join('');
  $('#movementEmpty').classList.toggle('hidden',rows.length>0);
}
function renderProductAdmin(){
  const q=normalizeText($('#productAdminSearch').value);
  const rows=db.products.filter(p=>!q||normalizeText(`${p.name} ${p.code} ${p.category}`).includes(q));
  $('#productAdminList').innerHTML=rows.map(p=>`
    <article class="list-card">
      <div class="list-main"><b>${escapeHtml(p.name)}</b><small>${escapeHtml(p.code)} · ${escapeHtml(p.category)} · ${escapeHtml(p.unit)} ${p.active?'':'· <span class=\"inactive-tag\">PASİF</span>'}</small></div>
      <div class="list-qty"><span>Ostim <b>${formatQty(p.ostim)}</b></span><span>Yenikent <b>${formatQty(p.yenikent)}</b></span></div>
      <div class="list-actions"><button class="mini-btn" data-edit-product="${p.id}">Düzenle</button><button class="mini-btn danger" data-delete-product="${p.id}">Sil</button></div>
    </article>`).join('');
  $('#productAdminEmpty').classList.toggle('hidden',rows.length>0);
  $$('[data-edit-product]').forEach(b=>b.onclick=()=>openProductModal(b.dataset.editProduct));
  $$('[data-delete-product]').forEach(b=>b.onclick=()=>deleteProduct(b.dataset.deleteProduct));
}
function renderUsers(){
  $('#userList').innerHTML=db.users.map(u=>`
    <article class="list-card">
      <div class="avatar">${initials(u.name)}</div>
      <div class="list-main"><b>${escapeHtml(u.name)}</b><small>@${escapeHtml(u.username)} · ${escapeHtml(roleNames[u.role]||u.role)} ${u.active?'':'· <span class=\"inactive-tag\">PASİF</span>'}</small></div>
      <div class="list-actions"><button class="mini-btn" data-edit-user="${u.id}">Düzenle</button><button class="mini-btn danger" data-delete-user="${u.id}" ${u.protected?'disabled':''}>Sil</button></div>
    </article>`).join('');
  $$('[data-edit-user]').forEach(b=>b.onclick=()=>openUserModal(b.dataset.editUser));
  $$('[data-delete-user]').forEach(b=>b.onclick=()=>deleteUser(b.dataset.deleteUser));
}

// ---- Ürün yönetimi ----
function openProductModal(id=''){
  const p=id?productById(id):null; $('#productModalTitle').textContent=p?'Ürünü Düzenle':'Yeni Ürün'; $('#productId').value=p?.id||''; $('#productName').value=p?.name||''; $('#productCode').value=p?.code||''; $('#productCategory').value=p?.category||''; $('#productUnit').value=p?.unit||'Adet'; $('#productOstim').value=p?.ostim??0; $('#productYenikent').value=p?.yenikent??0; $('#productMin').value=p?.min??0; $('#productActive').value=String(p?.active??true); openModal('productModal');
}
function saveProduct(event){
  event.preventDefault(); const id=$('#productId').value; const code=$('#productCode').value.trim();
  if(db.products.some(p=>normalizeText(p.code)===normalizeText(code)&&p.id!==id)) return toast('Bu ürün kodu zaten kullanılıyor.');
  const data={name:$('#productName').value.trim(),code,category:$('#productCategory').value.trim()||'Genel',unit:$('#productUnit').value,ostim:Number($('#productOstim').value||0),yenikent:Number($('#productYenikent').value||0),min:Number($('#productMin').value||0),active:$('#productActive').value==='true'};
  if(id) Object.assign(productById(id),data);
  else db.products.push({id:uid('p'),...data});
  saveDb(); closeModal('productModal'); renderProductAdmin(); toast('Ürün kaydedildi.');
}
function deleteProduct(id){ const p=productById(id); if(!p)return; if(!confirm(`${p.name} ürününü silmek istiyor musunuz?`))return; db.products=db.products.filter(x=>x.id!==id); saveDb(); renderProductAdmin(); toast('Ürün silindi.'); }

// ---- Kullanıcı yönetimi ----
function openUserModal(id=''){
  const u=id?userById(id):null; $('#userModalTitle').textContent=u?'Kullanıcıyı Düzenle':'Yeni Kullanıcı'; $('#userId').value=u?.id||''; $('#userNameField').value=u?.name||''; $('#usernameField').value=u?.username||''; $('#passwordField').value=u?.password||''; $('#roleField').value=u&&$('#roleField').querySelector(`option[value="${u.role}"]`)?u.role:'depot'; $('#jobField').value=u?.job||''; $('#userActiveField').value=String(u?.active??true); openModal('userModal');
}
function saveUser(event){
  event.preventDefault(); const id=$('#userId').value; const username=$('#usernameField').value.trim();
  if(db.users.some(u=>normalizeText(u.username)===normalizeText(username)&&u.id!==id)) return toast('Bu kullanıcı adı zaten kullanılıyor.');
  const data={name:$('#userNameField').value.trim(),username,password:$('#passwordField').value,role:$('#roleField').value,job:$('#jobField').value.trim(),active:$('#userActiveField').value==='true'};
  if(id){ const existing=userById(id); if(existing.protected){ data.role='super_admin'; data.active=true; } Object.assign(existing,data); }
  else db.users.push({id:uid('u'),...data,assignment:'Genel',protected:false});
  saveDb(); closeModal('userModal'); renderUsers(); toast('Kullanıcı kaydedildi.');
}
function deleteUser(id){ const u=userById(id); if(!u||u.protected)return; if(currentUser.id===id)return toast('Kendi hesabınızı silemezsiniz.'); if(!confirm(`${u.name} kullanıcısını silmek istiyor musunuz?`))return; db.users=db.users.filter(x=>x.id!==id); saveDb(); renderUsers(); toast('Kullanıcı silindi.'); }

// ---- QR etiketler ----
function printAllQr(){
  const products=db.products.filter(p=>p.active);
  if(!products.length) return toast('Yazdırılacak ürün yok. Önce Ürünler bölümünden ürün ekleyin.');
  if(!window.QRCode) return toast('QR bileşeni yüklenemedi. İnternet bağlantısını kontrol edin.');
  let copies=Number(prompt('Her üründen kaç adet etiket basılsın? (44\'lü A4 etiket kağıdı)','1'));
  if(!copies||copies<1) return;
  copies=Math.min(Math.floor(copies),440);
  const items=[]; products.forEach(p=>{ for(let i=0;i<copies;i++) items.push(p); });
  const sheet=$('#labelSheet'); sheet.innerHTML='';
  for(let i=0;i<items.length;i+=44){
    const pageEl=document.createElement('div'); pageEl.className='label-page';
    items.slice(i,i+44).forEach(p=>{
      const card=document.createElement('div'); card.className='label-card';
      const qr=document.createElement('div'); qr.className='label-qr';
      const txt=document.createElement('div'); txt.className='label-text';
      const name=document.createElement('b'); name.textContent=p.name;
      const code=document.createElement('code'); code.textContent=p.code;
      txt.append(name,code); card.append(qr,txt); pageEl.appendChild(card);
      new QRCode(qr,{text:`DEPO-TAKIP|${p.code}`,width:132,height:132,colorDark:'#000000',colorLight:'#ffffff',correctLevel:QRCode.CorrectLevel.M});
    });
    sheet.appendChild(pageEl);
  }
  toast(`${items.length} etiket hazırlandı (${Math.ceil(items.length/44)} sayfa). Yazdırma ayarında kenar boşluğu "Yok", ölçek %100 olmalı.`);
  document.body.classList.add('print-labels');
  setTimeout(()=>{ window.print(); document.body.classList.remove('print-labels'); },300);
}
function openQr(productId){
  const p=productById(productId); if(!p)return; $('#qrProductName').textContent=p.name; $('#qrLabelName').textContent=p.name; $('#qrCodeText').textContent=p.code; $('#qrCode').innerHTML='';
  if(window.QRCode){ new QRCode($('#qrCode'),{text:`DEPO-TAKIP|${p.code}`,width:210,height:210,colorDark:'#0b1f3a',colorLight:'#ffffff',correctLevel:QRCode.CorrectLevel.H}); }
  else $('#qrCode').textContent='QR bileşeni yüklenemedi.';
  openModal('qrModal');
}

// ---- QR tarama ve hızlı işlem ----
let scanStream=null, scanRafId=null, scanActive=false, scannedProduct=null, scanDetector=null, scanCanvas=null, lastMissText='', lastMissAt=0, scanMode='Çıkış', scanStartAt=0, lastDecodeAt=0, torchOn=false, slowHintShown=false, pendingManual=null;

function openScanner(){
  if(!has('stock_write')) return toast('Bu hesabın stok işlemi yetkisi yok.');
  pendingManual=null;
  openModal('scanModal'); showScanStep('mode');
}
function openQuickForProduct(id){
  if(!has('stock_write')) return toast('Bu hesabın stok işlemi yetkisi yok.');
  const p=productById(id); if(!p) return;
  pendingManual=p;
  openModal('scanModal'); showScanStep('mode');
}
function showScanStep(step){
  if(step!=='scan') stopScanner();
  $('#scanModeStep').classList.toggle('hidden',step!=='mode');
  $('#scanStage').classList.toggle('hidden',step!=='scan');
  $('#scanStatus').classList.toggle('hidden',step!=='scan');
  $('#scanBackBtn').classList.toggle('hidden',step!=='scan');
  $('#scanResult').classList.toggle('hidden',step!=='result');
  $('#scanModalDesc').textContent=step==='mode'?'Ne yapacaksınız?':step==='scan'?`${scanMode} için malzemenin QR etiketini kameraya gösterin.`:`${scanMode} bilgilerini doldurup kaydedin.`;
}
function chooseScanMode(mode){
  scanMode=mode;
  if(pendingManual){ populateScanResult(pendingManual); return; }
  startScanner();
}
async function startScanner(){
  scannedProduct=null; pendingManual=null;
  showScanStep('scan');
  const status=$('#scanStatus'); status.textContent='Kamera başlatılıyor…';
  if(!navigator.mediaDevices?.getUserMedia){ status.textContent='Bu tarayıcı kamera erişimini desteklemiyor. Güncel Chrome veya Safari kullanın.'; return; }
  try{
    scanStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'},width:{ideal:1920},height:{ideal:1080}},audio:false});
    const video=$('#scanVideo'); video.srcObject=scanStream; await video.play();
    if(!scanDetector&&'BarcodeDetector' in window){ try{ scanDetector=new BarcodeDetector({formats:['qr_code']}); }catch(e){ scanDetector=null; } }
    scanActive=true; scanStartAt=Date.now(); torchOn=false; slowHintShown=false; status.textContent='QR kodu çerçeveye hizalayın…';
    scanLoop();
  }catch(error){ status.textContent='Kameraya erişilemedi. Tarayıcı ayarlarından kamera iznini verin.'; }
}
async function toggleTorch(){
  const track=scanStream?.getVideoTracks?.()[0]; if(!track) return;
  try{
    const caps=track.getCapabilities?.();
    if(!caps||!caps.torch) return toast('Bu cihazda fener desteği yok.');
    torchOn=!torchOn;
    await track.applyConstraints({advanced:[{torch:torchOn}]});
  }catch(e){ toast('Fener açılamadı.'); }
}
function stopScanner(){
  scanActive=false;
  if(scanRafId){ cancelAnimationFrame(scanRafId); scanRafId=null; }
  if(scanStream){ scanStream.getTracks().forEach(t=>t.stop()); scanStream=null; }
  const video=$('#scanVideo'); if(video) video.srcObject=null;
}
async function scanLoop(){
  if(!scanActive) return;
  const video=$('#scanVideo'); let text=null;
  if(video.readyState>=2&&video.videoWidth){
    if(scanDetector){
      try{ const codes=await scanDetector.detect(video); if(codes.length) text=codes[0].rawValue; }catch(e){ scanDetector=null; }
    }else if(window.jsQR&&Date.now()-lastDecodeAt>120){
      lastDecodeAt=Date.now();
      scanCanvas=scanCanvas||document.createElement('canvas');
      const scale=Math.min(1,900/video.videoWidth);
      scanCanvas.width=video.videoWidth*scale; scanCanvas.height=video.videoHeight*scale;
      const ctx=scanCanvas.getContext('2d',{willReadFrequently:true});
      ctx.drawImage(video,0,0,scanCanvas.width,scanCanvas.height);
      const img=ctx.getImageData(0,0,scanCanvas.width,scanCanvas.height);
      const found=jsQR(img.data,img.width,img.height,{inversionAttempts:'attemptBoth'});
      if(found&&found.data) text=found.data;
    }
    if(!text&&!slowHintShown&&Date.now()-scanStartAt>7000){
      slowHintShown=true;
      $('#scanStatus').textContent='Okunmuyorsa: telefonu etikete 10-15 cm yaklaştırın, sabit tutun. Karanlıksa 💡 ile feneri açın.';
    }
  }
  if(text&&handleScanResult(text)) return;
  scanRafId=requestAnimationFrame(scanLoop);
}
function parseScanCode(text){
  const raw=String(text||'').trim();
  if(raw.startsWith('DEPO-TAKIP|')) return raw.split('|')[1]?.trim()||'';
  return raw;
}
function handleScanResult(text){
  const code=parseScanCode(text);
  const product=db.products.find(p=>p.active&&normalizeText(p.code)===normalizeText(code));
  if(!product){
    if(text!==lastMissText||Date.now()-lastMissAt>2500){
      lastMissText=text; lastMissAt=Date.now();
      $('#scanStatus').textContent=`Bu kod kayıtlı değil: "${code||text}". Ürün başka cihazda eklendiyse bu cihazda görünmez.`;
    }
    return false;
  }
  stopScanner();
  if(navigator.vibrate) navigator.vibrate(80);
  populateScanResult(product);
  return true;
}
function populateScanResult(product){
  scannedProduct=product;
  $('#scanAvatar').textContent=product.name[0]||'Ü';
  $('#scanProductName').textContent=product.name;
  $('#scanProductMeta').textContent=`${product.code} · ${product.category} · ${product.unit}`;
  $('#scanOstim').textContent=formatQty(product.ostim); $('#scanYenikent').textContent=formatQty(product.yenikent); $('#scanTotal').textContent=formatQty(Number(product.ostim)+Number(product.yenikent));
  const isIn=scanMode==='Giriş';
  const badge=$('#scanModeBadge'); badge.textContent=scanMode.toLocaleUpperCase('tr-TR'); badge.className=`stock-pill ${isIn?'pill-ok':'pill-critical'}`;
  $('#quickDepotLabel').textContent=isIn?'Hangi depoya giriş yapılacak?':'Hangi depodan çıkılacak?';
  $('#quickTargetField').classList.toggle('hidden',isIn);
  updateQuickCustomer();
  $('#quickWarning').classList.add('hidden'); $('#quickQty').value=1;
  showScanStep('result');
}
function updateQuickCustomer(){
  const show=scanMode==='Çıkış'&&$('#quickTarget').value==='customer';
  $('#quickCustomerField').classList.toggle('hidden',!show);
}
function submitQuick(event){
  event.preventDefault();
  if(!scannedProduct||!has('stock_write')) return;
  const p=productById(scannedProduct.id); if(!p) return;
  const wasManual=!!pendingManual;
  const qty=Number($('#quickQty').value); const warning=$('#quickWarning'); warning.classList.add('hidden');
  if(!qty||qty<=0) return toast('Geçerli bir miktar girin.');
  const depot=$('#quickDepot').value; const key=depot==='Ostim Depo'?'ostim':'yenikent';
  let type,source,target;
  if(scanMode==='Giriş'){ type='Giriş'; source='Tedarikçi'; target=depot; p[key]=Number(p[key])+qty; }
  else{
    const t=$('#quickTarget').value;
    if(t==='customer'){ const cust=$('#quickCustomer').value.trim(); if(!cust) return toast('Müşteri adını girin.'); type='Satış'; target=cust; }
    else if(t==='Vinç 1'){ type='Vinç Çıkışı'; target=t; }
    else{ type='Makine Çıkışı'; target=t; }
    source=depot;
    if(Number(p[key])<qty){ warning.textContent=`Yetersiz stok: ${depot} deposunda ${formatQty(p[key])} ${p.unit} var.`; warning.classList.remove('hidden'); return; }
    p[key]=Number(p[key])-qty;
  }
  db.movements.unshift({id:uid('m'),date:formatNow(),ts:Date.now(),type,productId:p.id,product:p.name,qty,unit:p.unit,source,target,user:currentUser.name,userId:currentUser.id,reference:'QR',note:''});
  saveDb();
  toast(`Kaydedildi: ${formatQty(qty)} ${p.unit} ${p.name} · ${type}.`);
  $('#quickCustomer').value='';
  if(wasManual){ pendingManual=null; closeModal('scanModal'); renderStocks(); }
  else startScanner();
}

// ---- Modal / yardımcılar ----
function openModal(id){ $('#modalOverlay').classList.remove('hidden'); $(`#${id}`).classList.remove('hidden'); }
function closeModal(id){ if(id==='scanModal'){ stopScanner(); pendingManual=null; } $(`#${id}`).classList.add('hidden'); if(!$$('.modal:not(.hidden)').length) $('#modalOverlay').classList.add('hidden'); }

function csvDownload(filename,rows){
  const csv='﻿'+rows.map(row=>row.map(v=>`"${String(v??'').replaceAll('"','""')}"`).join(';')).join('\n'); const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'})); a.download=filename; a.click(); URL.revokeObjectURL(a.href);
}
function downloadStockCsv(){ csvDownload('depo_stoklari.csv',[['Ürün','Kod','Kategori','Birim','Ostim','Yenikent','Toplam','Minimum','Durum'],...db.products.map(p=>[p.name,p.code,p.category,p.unit,p.ostim,p.yenikent,Number(p.ostim)+Number(p.yenikent),p.min,p.active?'Aktif':'Pasif'])]); toast('Stok raporu indirildi.'); }
function downloadMovementCsv(){ csvDownload('depo_hareketleri.csv',[['Tarih','İşlem','Ürün','Miktar','Birim','Kaynak','Hedef','Kullanıcı','Referans'],...db.movements.map(m=>[m.date,m.type,m.product,m.qty,m.unit,m.source,m.target,m.user,m.reference])]); toast('Hareket raporu indirildi.'); }
function downloadBackup(){ const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([JSON.stringify(db,null,2)],{type:'application/json'})); a.download=`depo_takip_yedek_${new Date().toISOString().slice(0,10)}.json`; a.click(); URL.revokeObjectURL(a.href); toast('Yedek indirildi.'); }
function restoreBackup(file){
  const reader=new FileReader(); reader.onload=()=>{ try{ const data=migrate(JSON.parse(reader.result)); if(!confirm('Seçilen yedek bu cihazdaki verilerin üzerine yazılacak. Devam edilsin mi?'))return; db=data; saveDb(); refreshAuthView(); if(currentUser) goPage('home'); toast('Yedek yüklendi.'); }catch(error){toast('Yedek dosyası geçerli değil.');} }; reader.readAsText(file);
}
function resetSystem(){ if(!confirm('TÜM veriler (ürünler, kullanıcılar, hareketler) kalıcı olarak silinecek. Emin misiniz?'))return; localStorage.removeItem(STORAGE_KEY); localStorage.removeItem(SESSION_KEY); db=deepClone(seed); currentUser=null; $('#appView').classList.add('hidden'); $('#loginView').classList.remove('hidden'); refreshAuthView(); toast('Sistem sıfırlandı. Yönetici hesabıyla giriş yapın.'); }

function bindEvents(){
  $('#loginForm').addEventListener('submit',e=>{e.preventDefault();login($('#loginUser').value,$('#loginPass').value);});
  $('#setupForm').addEventListener('submit',completeSetup);
  $('#logoutBtn').onclick=logout;
  $('#homeBtn').onclick=()=>goPage('home');
  $('#loginResetBtn').onclick=()=>{
    if(!confirm('Şifre kurtarma olmadığı için tek çözüm bu cihazdaki TÜM depo verilerini silip yeniden kurulum yapmaktır. Devam edilsin mi?'))return;
    if(!confirm('Son onay: bu işlem geri alınamaz. Veriler kalıcı olarak silinsin mi?'))return;
    localStorage.removeItem(STORAGE_KEY); localStorage.removeItem(SESSION_KEY); db=deepClone(seed); $('#loginPass').value=''; refreshAuthView(); toast('Veriler silindi. Yönetici hesabıyla giriş yapın.');
  };
  $('#setupRestoreBtn').onclick=()=>$('#setupRestoreInput').click();
  $('#setupRestoreInput').onchange=e=>{ const f=e.target.files[0]; if(f) restoreBackup(f); e.target.value=''; };
  $$('[data-page]').forEach(b=>b.onclick=()=>goPage(b.dataset.page));
  $('#homeScanBtn').onclick=openScanner;
  $('#homePrintBtn').onclick=printAllQr;
  $$('[data-close-modal]').forEach(b=>b.onclick=()=>closeModal(b.dataset.closeModal));
  $('#modalOverlay').onclick=()=>$$('.modal:not(.hidden)').forEach(m=>closeModal(m.id));
  $('#addProductBtn').onclick=()=>openProductModal(); $('#productForm').onsubmit=saveProduct;
  $('#addUserBtn').onclick=()=>openUserModal(); $('#userForm').onsubmit=saveUser;
  $('#printQrBtn').onclick=()=>window.print();
  $('#scanModeIn').onclick=()=>chooseScanMode('Giriş'); $('#scanModeOut').onclick=()=>chooseScanMode('Çıkış');
  $('#scanBackBtn').onclick=()=>{ pendingManual=null; showScanStep('mode'); };
  $('#torchBtn').onclick=toggleTorch;
  $('#quickForm').onsubmit=submitQuick; $('#quickTarget').onchange=updateQuickCustomer;
  $('#rescanBtn').onclick=()=>{ pendingManual=null; startScanner(); };
  $('#stockSearch').addEventListener('input',renderStocks);
  $('#movementSearch').addEventListener('input',renderMovements);
  $('#productAdminSearch').addEventListener('input',renderProductAdmin);
  $('#settingsStockCsv').onclick=downloadStockCsv; $('#settingsMovementCsv').onclick=downloadMovementCsv;
  $('#backupBtn').onclick=downloadBackup; $('#restoreBtn').onclick=()=>$('#restoreInput').click();
  $('#restoreInput').onchange=e=>e.target.files[0]&&restoreBackup(e.target.files[0]);
  $('#resetBtn').onclick=resetSystem;
}

bindEvents();
refreshAuthView();
const savedSessionUser=userById(localStorage.getItem(SESSION_KEY)||'');
if(savedSessionUser&&savedSessionUser.active) enterApp(savedSessionUser);
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(console.error));
