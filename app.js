'use strict';

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const STORAGE_KEY = 'depoTakipProV4';

const roleNames = {
  super_admin: 'Süper Yönetici', admin: 'Yönetici', depot: 'Depo Personeli',
  machine: 'Makine Personeli', sales: 'Satış', accounting: 'Muhasebe', viewer: 'Görüntüleyici'
};
const permissions = {
  super_admin: ['dashboard','stocks','transaction','movements','products','users','settings','manage_users','manage_products','manage_settings','stock_write','reports'],
  admin: ['dashboard','stocks','transaction','movements','products','users','settings','manage_users','manage_products','manage_settings','stock_write','reports'],
  depot: ['dashboard','stocks','transaction','movements','stock_write','reports'],
  machine: ['dashboard','stocks','movements'],
  sales: ['dashboard','stocks','transaction','movements','stock_write','reports'],
  accounting: ['dashboard','stocks','movements','reports'],
  viewer: ['dashboard','stocks','movements']
};

const seed = { version: 4, products: [], users: [], movements: [], notifications: [] };

let db = loadDb();
let currentUser = null;
let deferredInstallPrompt = null;

function deepClone(value){ return JSON.parse(JSON.stringify(value)); }
function uid(prefix){ return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2,7)}`; }
function normalizeText(v){ return String(v ?? '').toLocaleLowerCase('tr-TR').trim(); }
function formatQty(n){ return Number(n).toLocaleString('tr-TR',{maximumFractionDigits:2}); }
function formatNow(){ return new Date().toLocaleString('tr-TR',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}); }
function saveDb(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(db)); }
function has(permission){ return currentUser && permissions[currentUser.role]?.includes(permission); }

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
    users:Array.isArray(data.users)?data.users.map((u,i)=>({...u,id:String(u.id||`u${i}`),role:u.role||'viewer',job:u.job||'',assignment:u.assignment||'Genel',active:u.active!==false})):[],
    movements:Array.isArray(data.movements)?data.movements.map((m,i)=>({...m,id:m.id||`m${i}`,ts:m.ts||Date.now()-i*60000,reference:m.reference||'',note:m.note||'',userId:m.userId||''})):[],
    notifications:Array.isArray(data.notifications)?data.notifications:[]
  };
}

function toast(message){ const el=$('#toast'); el.textContent=message; el.classList.remove('hidden'); clearTimeout(toast.timer); toast.timer=setTimeout(()=>el.classList.add('hidden'),2800); }
function statusOf(product){
  const total=Number(product.ostim)+Number(product.yenikent);
  if(total<=Number(product.min)) return {key:'critical',label:'Kritik',className:'pill-critical'};
  if(total<=Number(product.min)*1.7) return {key:'low',label:'Azalıyor',className:'pill-low'};
  return {key:'ok',label:'Yeterli',className:'pill-ok'};
}
function movementClass(type){ return type==='Giriş'||type==='İade'?'pill-ok':type==='Satış'?'pill-low':'pill-critical'; }
function initials(name){ return String(name).split(/\s+/).map(x=>x[0]).filter(Boolean).slice(0,2).join('').toUpperCase(); }
function productById(id){ return db.products.find(p=>p.id===id); }
function userById(id){ return db.users.find(u=>u.id===id); }
function addNotification(title, body){ db.notifications.unshift({id:uid('n'),title,body,date:formatNow(),read:false}); saveDb(); }

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
  addNotification('Sistem kuruldu',`${name} için yönetici hesabı oluşturuldu.`);
  saveDb(); $('#setupForm').reset(); refreshAuthView();
  login(username,pass);
  toast('Yönetici hesabınız oluşturuldu, hoş geldiniz.');
}
function login(username,password){
  const user=db.users.find(u=>normalizeText(u.username)===normalizeText(username));
  if(!user||user.password!==password){ toast('Kullanıcı adı veya şifre yanlış.'); return; }
  if(!user.active){ toast('Bu kullanıcı hesabı pasif durumda.'); return; }
  currentUser=user;
  $('#loginView').classList.add('hidden'); $('#appView').classList.remove('hidden');
  $('#currentName').textContent=user.name; $('#currentRole').textContent=roleNames[user.role]||user.role; $('#welcomeName').textContent=user.name.split(' ')[0]; $('#avatar').textContent=initials(user.name);
  applyPermissions(); renderAll(); goPage('dashboard');
}
function logout(){ currentUser=null; $('#appView').classList.add('hidden'); $('#loginView').classList.remove('hidden'); $('#loginPass').value=''; refreshAuthView(); }

function applyPermissions(){
  $$('[data-permission]').forEach(el=>el.classList.toggle('hidden',!has(el.dataset.permission)));
  $$('[data-admin-only]').forEach(el=>el.classList.toggle('hidden',!has('manage_products')));
  if(!has('stock_write')) $$('[data-open="transaction"],[data-type]').forEach(el=>el.classList.add('hidden'));
}
function goPage(page){
  if(['products','users','settings'].includes(page)&&!has({products:'manage_products',users:'manage_users',settings:'manage_settings'}[page])) page='dashboard';
  $$('.page').forEach(el=>el.classList.toggle('active',el.id===page));
  $$('[data-page]').forEach(el=>el.classList.toggle('active',el.dataset.page===page));
  const titles={dashboard:'Ana Panel',stocks:'Stok Yönetimi',transaction:'Yeni İşlem',movements:'Hareketler',products:'Ürün Yönetimi',users:'Kullanıcı Yönetimi',settings:'Sistem & Yedek'};
  $('#pageTitle').textContent=titles[page]||'DEPO TAKİP';
  $('.sidebar').classList.remove('open');
  if(page==='transaction') refreshTransactionOptions();
  if(page==='stocks') renderStocks();
  if(page==='movements') renderMovements();
  if(page==='products') renderProductAdmin();
  if(page==='users') renderUsers();
}

function renderAll(){
  renderDashboard(); renderStocks(); renderMovements(); renderProductAdmin(); renderUsers(); renderNotifications(); refreshTransactionOptions();
}
function renderDashboard(){
  const activeProducts=db.products.filter(p=>p.active);
  const ostim=activeProducts.reduce((sum,p)=>sum+Number(p.ostim),0);
  const yenikent=activeProducts.reduce((sum,p)=>sum+Number(p.yenikent),0);
  const critical=activeProducts.filter(p=>statusOf(p).key==='critical');
  $('#ostimTotal').textContent=formatQty(ostim); $('#yenikentTotal').textContent=formatQty(yenikent); $('#criticalTotal').textContent=critical.length; $('#userTotal').textContent=db.users.filter(u=>u.active).length;
  $('#recentActivity').innerHTML=db.movements.slice(0,6).map(m=>`<div class="activity-item"><div class="activity-icon">${m.type==='Giriş'?'↧':m.type==='Satış'?'₺':'⇄'}</div><div><b>${escapeHtml(m.type)} · ${escapeHtml(m.product)}</b><small>${formatQty(m.qty)} ${escapeHtml(m.unit)} · ${escapeHtml(m.source)} → ${escapeHtml(m.target)}</small></div><time>${escapeHtml(m.date)}</time></div>`).join('')||'<div class="empty">Henüz hareket yok.</div>';
  $('#criticalList').innerHTML=critical.length?critical.slice(0,5).map(p=>`<div class="critical-item"><div><b>${escapeHtml(p.name)}</b><small>${escapeHtml(p.code)} · Min. ${formatQty(p.min)} ${escapeHtml(p.unit)}</small></div><span class="stock-pill pill-critical">${formatQty(Number(p.ostim)+Number(p.yenikent))}</span></div>`).join(''):'<div class="empty">Kritik stok bulunmuyor.</div>';
  const total=Math.max(ostim+yenikent,1);
  $('#warehouseBars').innerHTML=`<div class="bar-row"><div class="bar-label"><b>Ostim Depo</b><span>${formatQty(ostim)}</span></div><div class="bar-track"><div class="bar-fill" style="width:${ostim/total*100}%"></div></div></div><div class="bar-row"><div class="bar-label"><b>Yenikent Depo</b><span>${formatQty(yenikent)}</span></div><div class="bar-track"><div class="bar-fill alt" style="width:${yenikent/total*100}%"></div></div></div>`;
}
function filteredStocks(){
  const q=normalizeText($('#stockSearch')?.value); const status=$('#stockStatusFilter')?.value||'all'; const wh=$('#stockWarehouseFilter')?.value||'all';
  return db.products.filter(p=>p.active).filter(p=>!q||normalizeText(`${p.name} ${p.code} ${p.category}`).includes(q)).filter(p=>status==='all'||statusOf(p).key===status).filter(p=>wh==='all'||(wh==='ostim'&&Number(p.ostim)>0)||(wh==='yenikent'&&Number(p.yenikent)>0));
}
function renderStocks(){
  const rows=filteredStocks();
  $('#stockRows').innerHTML=rows.map(p=>{const s=statusOf(p);return `<tr><td><div class="table-product"><div class="product-avatar">${escapeHtml(p.name[0]||'Ü')}</div><div><b>${escapeHtml(p.name)}</b><small>${escapeHtml(p.unit)}</small></div></div></td><td><code>${escapeHtml(p.code)}</code></td><td>${escapeHtml(p.category)}</td><td>${formatQty(p.ostim)}</td><td>${formatQty(p.yenikent)}</td><td><b>${formatQty(Number(p.ostim)+Number(p.yenikent))}</b></td><td><span class="stock-pill ${s.className}">${s.label}</span></td><td><div class="action-group"><button class="mini-btn" data-qr="${p.id}">QR</button>${has('stock_write')?`<button class="mini-btn" data-txn-product="${p.id}">İşlem</button>`:''}</div></td></tr>`}).join('');
  $('#stockEmpty').classList.toggle('hidden',rows.length>0);
  $$('[data-qr]').forEach(b=>b.onclick=()=>openQr(b.dataset.qr)); $$('[data-txn-product]').forEach(b=>b.onclick=()=>{goPage('transaction');$('#txnProduct').value=b.dataset.txnProduct;updateTransactionSummary();});
}
function filteredMovements(){
  const q=normalizeText($('#movementSearch')?.value); const type=$('#movementTypeFilter')?.value||'all';
  return db.movements.filter(m=>!q||normalizeText(`${m.product} ${m.user} ${m.source} ${m.target} ${m.reference} ${m.note}`).includes(q)).filter(m=>type==='all'||m.type===type);
}
function renderMovements(){
  const rows=filteredMovements();
  $('#movementRows').innerHTML=rows.map(m=>`<tr><td>${escapeHtml(m.date)}</td><td><span class="stock-pill ${movementClass(m.type)}">${escapeHtml(m.type)}</span></td><td><b>${escapeHtml(m.product)}</b></td><td>${formatQty(m.qty)} ${escapeHtml(m.unit)}</td><td>${escapeHtml(m.source)}</td><td>${escapeHtml(m.target)}</td><td>${escapeHtml(m.user)}</td><td>${escapeHtml(m.reference||'-')}</td></tr>`).join('');
  $('#movementEmpty').classList.toggle('hidden',rows.length>0);
}
function renderProductAdmin(){
  const q=normalizeText($('#productAdminSearch')?.value); const state=$('#productAdminStatus')?.value||'all';
  const rows=db.products.filter(p=>!q||normalizeText(`${p.name} ${p.code} ${p.category}`).includes(q)).filter(p=>state==='all'||(state==='active'&&p.active)||(state==='inactive'&&!p.active));
  $('#productAdminRows').innerHTML=rows.map(p=>`<tr><td><div class="table-product"><div class="product-avatar">${escapeHtml(p.name[0]||'Ü')}</div><div><b>${escapeHtml(p.name)}</b><small>${formatQty(p.ostim)} Ostim · ${formatQty(p.yenikent)} Yenikent</small></div></div></td><td><code>${escapeHtml(p.code)}</code></td><td>${escapeHtml(p.category)}</td><td>${escapeHtml(p.unit)}</td><td>${formatQty(p.min)}</td><td>${formatQty(Number(p.ostim)+Number(p.yenikent))}</td><td><span class="stock-pill ${p.active?'pill-ok':'pill-inactive'}">${p.active?'Aktif':'Pasif'}</span></td><td><div class="action-group"><button class="mini-btn" data-edit-product="${p.id}">Düzenle</button><button class="mini-btn" data-toggle-product="${p.id}">${p.active?'Pasife Al':'Aktifleştir'}</button><button class="mini-btn danger" data-delete-product="${p.id}">Sil</button></div></td></tr>`).join('');
  $$('[data-edit-product]').forEach(b=>b.onclick=()=>openProductModal(b.dataset.editProduct)); $$('[data-toggle-product]').forEach(b=>b.onclick=()=>toggleProduct(b.dataset.toggleProduct)); $$('[data-delete-product]').forEach(b=>b.onclick=()=>deleteProduct(b.dataset.deleteProduct));
}
function renderUsers(){
  const q=normalizeText($('#userSearch')?.value); const role=$('#userRoleFilter')?.value||'all';
  const rows=db.users.filter(u=>!q||normalizeText(`${u.name} ${u.username} ${u.job} ${u.assignment}`).includes(q)).filter(u=>role==='all'||u.role===role);
  $('#allUserCount').textContent=db.users.length; $('#activeUserCount').textContent=db.users.filter(u=>u.active).length; $('#adminUserCount').textContent=db.users.filter(u=>['super_admin','admin'].includes(u.role)).length; $('#fieldUserCount').textContent=db.users.filter(u=>['depot','machine'].includes(u.role)).length;
  $('#userRows').innerHTML=rows.map(u=>`<tr><td><div class="table-product"><div class="avatar">${initials(u.name)}</div><div><b>${escapeHtml(u.name)}</b><small>@${escapeHtml(u.username)}</small></div></div></td><td>${escapeHtml(u.job||'-')}</td><td><span class="stock-pill pill-ok">${escapeHtml(roleNames[u.role]||u.role)}</span></td><td>${escapeHtml(u.assignment||'Genel')}</td><td><span class="stock-pill ${u.active?'pill-ok':'pill-inactive'}">${u.active?'Aktif':'Pasif'}</span></td><td><div class="action-group"><button class="mini-btn" data-edit-user="${u.id}">Düzenle</button><button class="mini-btn" data-toggle-user="${u.id}" ${u.protected?'disabled':''}>${u.active?'Pasife Al':'Aktifleştir'}</button><button class="mini-btn danger" data-delete-user="${u.id}" ${u.protected?'disabled':''}>Sil</button></div></td></tr>`).join('');
  $$('[data-edit-user]').forEach(b=>b.onclick=()=>openUserModal(b.dataset.editUser)); $$('[data-toggle-user]').forEach(b=>b.onclick=()=>toggleUser(b.dataset.toggleUser)); $$('[data-delete-user]').forEach(b=>b.onclick=()=>deleteUser(b.dataset.deleteUser));
}
function renderNotifications(){
  const unread=db.notifications.filter(n=>!n.read).length; $('#notificationCount').textContent=unread; $('#notificationCount').classList.toggle('hidden',unread===0);
  $('#notificationList').innerHTML=db.notifications.length?db.notifications.map(n=>`<article class="notification-item ${n.read?'':'unread'}"><b>${escapeHtml(n.title)}</b><p>${escapeHtml(n.body)}</p><time>${escapeHtml(n.date)}</time></article>`).join(''):'<div class="empty">Bildirim yok.</div>';
}

function refreshTransactionOptions(){
  const active=db.products.filter(p=>p.active); $('#txnProduct').innerHTML=active.map(p=>`<option value="${p.id}">${escapeHtml(p.name)} (${escapeHtml(p.code)})</option>`).join('');
  updateTransactionLocations(); updateTransactionSummary();
}
function updateTransactionLocations(){
  const type=$('#txnType').value;
  let sources=['Ostim Depo','Yenikent Depo']; let targets=[];
  if(type==='Giriş'){sources=['Tedarikçi'];targets=['Ostim Depo','Yenikent Depo'];}
  else if(type==='Makine Çıkışı'){targets=['Sondaj Makinesi 1','Sondaj Makinesi 2','Sondaj Makinesi 3'];}
  else if(type==='Vinç Çıkışı'){targets=['Vinç 1'];}
  else if(type==='Satış'){targets=[];}
  else if(type==='Transfer'){targets=['Yenikent Depo'];}
  else if(type==='İade'){sources=['Sondaj Makinesi 1','Sondaj Makinesi 2','Sondaj Makinesi 3','Vinç 1'];targets=['Ostim Depo','Yenikent Depo'];}
  else if(type==='Sayım Düzeltme'){targets=['Ostim Depo','Yenikent Depo'];sources=['Sayım'];}
  const isSale=type==='Satış';
  $('#txnTarget').classList.toggle('hidden',isSale); $('#txnTargetText').classList.toggle('hidden',!isSale);
  $('#txnSource').innerHTML=sources.map(v=>`<option>${v}</option>`).join(''); $('#txnTarget').innerHTML=targets.map(v=>`<option>${v}</option>`).join('');
  if(type==='Transfer') updateTransferTarget();
}
function txnTargetValue(){ return $('#txnType').value==='Satış'?$('#txnTargetText').value.trim():$('#txnTarget').value; }
function updateTransferTarget(){ if($('#txnType').value==='Transfer') $('#txnTarget').innerHTML=`<option>${$('#txnSource').value==='Ostim Depo'?'Yenikent Depo':'Ostim Depo'}</option>`; }
function updateTransactionSummary(){
  const p=productById($('#txnProduct').value); const type=$('#txnType').value; const source=$('#txnSource').value; const target=txnTargetValue(); const qty=Number($('#txnQty').value||0);
  $('#txnSummary').innerHTML=`<div class="summary-line"><span>İşlem</span><b>${escapeHtml(type)}</b></div><div class="summary-line"><span>Ürün</span><b>${escapeHtml(p?.name||'-')}</b></div><div class="summary-line"><span>Miktar</span><b>${formatQty(qty)} ${escapeHtml(p?.unit||'')}</b></div><div class="summary-line"><span>Kaynak</span><b>${escapeHtml(source||'-')}</b></div><div class="summary-line"><span>Hedef</span><b>${escapeHtml(target||'-')}</b></div>`;
}
function submitTransaction(event){
  event.preventDefault(); if(!has('stock_write')) return toast('Bu hesabın stok işlemi yetkisi yok.');
  const type=$('#txnType').value; const p=productById($('#txnProduct').value); const qty=Number($('#txnQty').value); let source=$('#txnSource').value; let target=txnTargetValue(); const ref=$('#txnReference').value.trim(); const note=$('#txnNote').value.trim();
  const warning=$('#txnWarning'); warning.classList.add('hidden');
  if(!p||!qty||qty<=0) return toast('Ürün ve miktar bilgilerini kontrol edin.');
  if(type==='Satış'&&!target) return toast('Müşteri adını girin.');
  const sourceKey=source==='Ostim Depo'?'ostim':source==='Yenikent Depo'?'yenikent':null; const targetKey=target==='Ostim Depo'?'ostim':target==='Yenikent Depo'?'yenikent':null;
  if(['Makine Çıkışı','Vinç Çıkışı','Satış','Transfer'].includes(type)&&(!sourceKey||Number(p[sourceKey])<qty)){ warning.textContent=`Yetersiz stok: ${source} deposunda ${formatQty(sourceKey? p[sourceKey]:0)} ${p.unit} var.`; warning.classList.remove('hidden'); return; }
  if(type==='Giriş'||type==='İade') p[targetKey]+=qty;
  else if(type==='Transfer'){ p[sourceKey]-=qty; p[targetKey]+=qty; }
  else if(type==='Sayım Düzeltme'){ p[targetKey]=qty; }
  else p[sourceKey]-=qty;
  const movement={id:uid('m'),date:formatNow(),ts:Date.now(),type,productId:p.id,product:p.name,qty,unit:p.unit,source,target,user:currentUser.name,userId:currentUser.id,reference:ref,note};
  db.movements.unshift(movement); addNotification(`${type} kaydedildi`,`${currentUser.name}, ${p.name} için ${formatQty(qty)} ${p.unit} işlem yaptı.`); saveDb(); renderAll(); $('#transactionForm').reset(); refreshTransactionOptions(); toast('İşlem kaydedildi ve stok güncellendi.'); goPage('dashboard');
}

function openProductModal(id=''){
  const p=id?productById(id):null; $('#productModalTitle').textContent=p?'Ürünü Düzenle':'Yeni Ürün'; $('#productId').value=p?.id||''; $('#productName').value=p?.name||''; $('#productCode').value=p?.code||''; $('#productCategory').value=p?.category||''; $('#productUnit').value=p?.unit||'Adet'; $('#productOstim').value=p?.ostim??0; $('#productYenikent').value=p?.yenikent??0; $('#productMin').value=p?.min??0; $('#productActive').value=String(p?.active??true); openModal('productModal');
}
function saveProduct(event){
  event.preventDefault(); const id=$('#productId').value; const code=$('#productCode').value.trim();
  if(db.products.some(p=>normalizeText(p.code)===normalizeText(code)&&p.id!==id)) return toast('Bu ürün kodu zaten kullanılıyor.');
  const data={name:$('#productName').value.trim(),code,category:$('#productCategory').value.trim()||'Genel',unit:$('#productUnit').value,ostim:Number($('#productOstim').value||0),yenikent:Number($('#productYenikent').value||0),min:Number($('#productMin').value||0),active:$('#productActive').value==='true'};
  if(id){ Object.assign(productById(id),data); addNotification('Ürün güncellendi',`${data.name} bilgileri ${currentUser.name} tarafından güncellendi.`); }
  else{ db.products.push({id:uid('p'),...data}); addNotification('Yeni ürün eklendi',`${data.name} ürün kataloğuna eklendi.`); }
  saveDb(); closeModal('productModal'); renderAll(); toast('Ürün kaydedildi.');
}
function toggleProduct(id){ const p=productById(id); if(!p)return; p.active=!p.active; saveDb(); renderAll(); toast(p.active?'Ürün aktifleştirildi.':'Ürün pasife alındı.'); }
function deleteProduct(id){ const p=productById(id); if(!p)return; if(Number(p.ostim)+Number(p.yenikent)>0) return toast('Stok miktarı sıfır olmayan ürün silinemez; önce pasife alın.'); if(!confirm(`${p.name} ürününü kalıcı olarak silmek istiyor musunuz?`))return; db.products=db.products.filter(x=>x.id!==id); saveDb(); renderAll(); toast('Ürün silindi.'); }

function openUserModal(id=''){
  const u=id?userById(id):null; $('#userModalTitle').textContent=u?'Kullanıcıyı Düzenle':'Yeni Kullanıcı'; $('#userId').value=u?.id||''; $('#userNameField').value=u?.name||''; $('#usernameField').value=u?.username||''; $('#passwordField').value=u?.password||''; $('#roleField').value=u?.role||'viewer'; $('#jobField').value=u?.job||''; $('#assignmentField').value=u?.assignment||'Genel'; $('#userActiveField').value=String(u?.active??true); openModal('userModal');
}
function saveUser(event){
  event.preventDefault(); const id=$('#userId').value; const username=$('#usernameField').value.trim();
  if(db.users.some(u=>normalizeText(u.username)===normalizeText(username)&&u.id!==id)) return toast('Bu kullanıcı adı zaten kullanılıyor.');
  const data={name:$('#userNameField').value.trim(),username,password:$('#passwordField').value,role:$('#roleField').value,job:$('#jobField').value.trim(),assignment:$('#assignmentField').value,active:$('#userActiveField').value==='true'};
  if(id){ const existing=userById(id); if(existing.protected&&data.role!=='super_admin') return toast('Sistem sahibinin rolü değiştirilemez.'); Object.assign(existing,data); addNotification('Kullanıcı güncellendi',`${data.name} hesabı güncellendi.`); }
  else{ db.users.push({id:uid('u'),...data,protected:false}); addNotification('Yeni kullanıcı eklendi',`${data.name} için kullanıcı hesabı açıldı.`); }
  saveDb(); closeModal('userModal'); renderAll(); toast('Kullanıcı kaydedildi.');
}
function toggleUser(id){ const u=userById(id); if(!u||u.protected)return; if(currentUser.id===id)return toast('Kendi hesabınızı pasife alamazsınız.'); u.active=!u.active; saveDb(); renderAll(); toast(u.active?'Kullanıcı aktifleştirildi.':'Kullanıcı pasife alındı.'); }
function deleteUser(id){ const u=userById(id); if(!u||u.protected)return; if(currentUser.id===id)return toast('Kendi hesabınızı silemezsiniz.'); if(!confirm(`${u.name} kullanıcısını kalıcı olarak silmek istiyor musunuz?`))return; db.users=db.users.filter(x=>x.id!==id); saveDb(); renderAll(); toast('Kullanıcı silindi.'); }

function printAllQr(){
  const products=db.products.filter(p=>p.active);
  if(!products.length) return toast('Yazdırılacak ürün yok. Önce Ürün Yönetimi\'nden ürün ekleyin.');
  if(!window.QRCode) return toast('QR bileşeni yüklenemedi. İnternet bağlantısını kontrol edin.');
  const sheet=$('#labelSheet'); sheet.innerHTML='';
  products.forEach(p=>{
    const card=document.createElement('div'); card.className='label-card';
    const qr=document.createElement('div'); qr.className='label-qr';
    const name=document.createElement('b'); name.textContent=p.name;
    const code=document.createElement('code'); code.textContent=p.code;
    card.append(qr,name,code); sheet.appendChild(card);
    new QRCode(qr,{text:`DEPO-TAKIP|${p.code}`,width:150,height:150,colorDark:'#000000',colorLight:'#ffffff',correctLevel:QRCode.CorrectLevel.H});
  });
  document.body.classList.add('print-labels');
  setTimeout(()=>{ window.print(); document.body.classList.remove('print-labels'); },250);
}
function openQr(productId){
  const p=productById(productId); if(!p)return; $('#qrProductName').textContent=p.name; $('#qrLabelName').textContent=p.name; $('#qrCodeText').textContent=p.code; $('#qrCode').innerHTML='';
  if(window.QRCode){ new QRCode($('#qrCode'),{text:`DEPO-TAKIP|${p.code}`,width:210,height:210,colorDark:'#0b1f3a',colorLight:'#ffffff',correctLevel:QRCode.CorrectLevel.H}); }
  else $('#qrCode').textContent='QR bileşeni yüklenemedi.';
  openModal('qrModal');
}
function openModal(id){ $('#modalOverlay').classList.remove('hidden'); $(`#${id}`).classList.remove('hidden'); }
function closeModal(id){ if(id==='scanModal') stopScanner(); $(`#${id}`).classList.add('hidden'); if(!$$('.modal:not(.hidden)').length) $('#modalOverlay').classList.add('hidden'); }

// ---- QR tarama (kamera ile giriş/çıkış) ----
let scanStream=null, scanRafId=null, scanActive=false, scannedProduct=null, scanDetector=null, scanCanvas=null, lastMissText='', lastMissAt=0, scanMode='Çıkış';

function openScanner(){
  if(!has('stock_write')) return toast('Bu hesabın stok işlemi yetkisi yok.');
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
function chooseScanMode(mode){ scanMode=mode; startScanner(); }
async function startScanner(){
  scannedProduct=null;
  showScanStep('scan');
  const status=$('#scanStatus'); status.textContent='Kamera başlatılıyor…';
  if(!navigator.mediaDevices?.getUserMedia){ status.textContent='Bu tarayıcı kamera erişimini desteklemiyor. Güncel Chrome veya Safari kullanın.'; return; }
  try{
    scanStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'},width:{ideal:1280},height:{ideal:720}},audio:false});
    const video=$('#scanVideo'); video.srcObject=scanStream; await video.play();
    if(!scanDetector&&'BarcodeDetector' in window){ try{ scanDetector=new BarcodeDetector({formats:['qr_code']}); }catch(e){ scanDetector=null; } }
    scanActive=true; status.textContent='QR kodu çerçeveye hizalayın…';
    scanLoop();
  }catch(error){ status.textContent='Kameraya erişilemedi. Tarayıcı ayarlarından kamera iznini verin.'; }
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
    }else if(window.jsQR){
      scanCanvas=scanCanvas||document.createElement('canvas');
      const scale=Math.min(1,640/video.videoWidth);
      scanCanvas.width=video.videoWidth*scale; scanCanvas.height=video.videoHeight*scale;
      const ctx=scanCanvas.getContext('2d',{willReadFrequently:true});
      ctx.drawImage(video,0,0,scanCanvas.width,scanCanvas.height);
      const img=ctx.getImageData(0,0,scanCanvas.width,scanCanvas.height);
      const found=jsQR(img.data,img.width,img.height,{inversionAttempts:'dontInvert'});
      if(found) text=found.data;
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
      $('#scanStatus').textContent=`Kayıtlı ürün bulunamadı: "${code||text}" — taramaya devam ediliyor…`;
    }
    return false;
  }
  if(navigator.vibrate) navigator.vibrate(80);
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
  return true;
}
function updateQuickCustomer(){
  const show=scanMode==='Çıkış'&&$('#quickTarget').value==='customer';
  $('#quickCustomerField').classList.toggle('hidden',!show);
}
function submitQuick(event){
  event.preventDefault();
  if(!scannedProduct||!has('stock_write')) return;
  const p=productById(scannedProduct.id); if(!p) return;
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
  addNotification(`${type} kaydedildi`,`${currentUser.name}, ${p.name} için ${formatQty(qty)} ${p.unit} ${type.toLocaleLowerCase('tr-TR')} yaptı (QR).`);
  saveDb(); renderAll();
  toast(`Kaydedildi: ${formatQty(qty)} ${p.unit} ${p.name} · ${type}. Sıradaki ürünü okutabilirsiniz.`);
  $('#quickCustomer').value='';
  startScanner();
}
function openDrawer(){ $('#notificationDrawer').classList.remove('hidden'); $('#drawerOverlay').classList.remove('hidden'); }
function closeDrawer(){ $('#notificationDrawer').classList.add('hidden'); $('#drawerOverlay').classList.add('hidden'); }

function csvDownload(filename,rows){
  const csv='\uFEFF'+rows.map(row=>row.map(v=>`"${String(v??'').replaceAll('"','""')}"`).join(';')).join('\n'); const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'})); a.download=filename; a.click(); URL.revokeObjectURL(a.href);
}
function downloadStockCsv(){ csvDownload('depo_stoklari.csv',[['Ürün','Kod','Kategori','Birim','Ostim','Yenikent','Toplam','Minimum','Durum'],...db.products.map(p=>[p.name,p.code,p.category,p.unit,p.ostim,p.yenikent,Number(p.ostim)+Number(p.yenikent),p.min,p.active?'Aktif':'Pasif'])]); toast('Stok CSV raporu indirildi.'); }
function downloadMovementCsv(){ csvDownload('depo_hareketleri.csv',[['Tarih','İşlem','Ürün','Miktar','Birim','Kaynak','Hedef','Kullanıcı','Referans','Açıklama'],...db.movements.map(m=>[m.date,m.type,m.product,m.qty,m.unit,m.source,m.target,m.user,m.reference,m.note])]); toast('Hareket CSV raporu indirildi.'); }
function downloadBackup(){ const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([JSON.stringify(db,null,2)],{type:'application/json'})); a.download=`depo_takip_yedek_${new Date().toISOString().slice(0,10)}.json`; a.click(); URL.revokeObjectURL(a.href); toast('Tam sistem yedeği indirildi.'); }
function restoreBackup(file){
  const reader=new FileReader(); reader.onload=()=>{ try{ const data=migrate(JSON.parse(reader.result)); if(!confirm('Seçilen yedek mevcut tarayıcı verilerinin üzerine yazılacak. Devam edilsin mi?'))return; db=data; saveDb(); renderAll(); toast('Yedek başarıyla geri yüklendi.'); }catch(error){toast('Yedek dosyası geçerli değil.');} }; reader.readAsText(file);
}
function resetSystem(){ if(!confirm('TÜM veriler (ürünler, kullanıcılar, hareketler) kalıcı olarak silinecek ve sistem ilk kurulum ekranına dönecek. Emin misiniz?'))return; localStorage.removeItem(STORAGE_KEY); db=deepClone(seed); currentUser=null; $('#appView').classList.add('hidden'); $('#loginView').classList.remove('hidden'); refreshAuthView(); toast('Sistem sıfırlandı. Yeni yönetici hesabı oluşturun.'); }
function escapeHtml(v){ return String(v??'').replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c])); }

function bindEvents(){
  $('#loginForm').addEventListener('submit',e=>{e.preventDefault();login($('#loginUser').value,$('#loginPass').value);}); $('#setupForm').addEventListener('submit',completeSetup); $('#logoutBtn').onclick=logout;
  $('#loginResetBtn').onclick=()=>{
    if(!confirm('Şifre kurtarma olmadığı için tek çözüm bu cihazdaki TÜM depo verilerini (ürünler, kullanıcılar, hareketler) silip yeniden kurulum yapmaktır. Devam edilsin mi?'))return;
    if(!confirm('Son onay: bu işlem geri alınamaz. Veriler kalıcı olarak silinsin mi?'))return;
    localStorage.removeItem(STORAGE_KEY); db=deepClone(seed); $('#loginPass').value=''; refreshAuthView(); toast('Veriler silindi. Yeni yönetici hesabınızı oluşturun.');
  };
  $$('[data-page]').forEach(b=>b.onclick=()=>goPage(b.dataset.page)); $$('[data-open]').forEach(b=>b.onclick=()=>goPage(b.dataset.open)); $$('[data-type]').forEach(b=>b.onclick=()=>{goPage('transaction');$('#txnType').value=b.dataset.type;updateTransactionLocations();updateTransactionSummary();});
  $('#mobileMenu').onclick=()=>$('.sidebar').classList.toggle('open');
  $('#notificationBtn').onclick=openDrawer; $$('[data-close-drawer]').forEach(b=>b.onclick=closeDrawer); $('#markAllReadBtn').onclick=()=>{db.notifications.forEach(n=>n.read=true);saveDb();renderNotifications();toast('Bildirimler okundu.');};
  $$('[data-close-modal]').forEach(b=>b.onclick=()=>closeModal(b.dataset.closeModal)); $('#modalOverlay').onclick=()=>$$('.modal:not(.hidden)').forEach(m=>closeModal(m.id));
  $('#addProductBtn').onclick=()=>openProductModal(); $('#productForm').onsubmit=saveProduct; $('#addUserBtn').onclick=()=>openUserModal(); $('#userForm').onsubmit=saveUser; $('#printQrBtn').onclick=()=>window.print();
  $('#scanBtn').onclick=openScanner; $('#quickScanBtn').onclick=openScanner; $('#txnScanBtn').onclick=openScanner; $('#rescanBtn').onclick=startScanner;
  $('#scanModeIn').onclick=()=>chooseScanMode('Giriş'); $('#scanModeOut').onclick=()=>chooseScanMode('Çıkış'); $('#scanBackBtn').onclick=()=>showScanStep('mode');
  $('#quickForm').onsubmit=submitQuick; $('#quickTarget').onchange=updateQuickCustomer;
  $('#printAllQrBtn').onclick=printAllQr;
  $('#transactionForm').onsubmit=submitTransaction; $('#txnType').onchange=()=>{updateTransactionLocations();updateTransactionSummary();}; $('#txnSource').onchange=()=>{updateTransferTarget();updateTransactionSummary();}; ['txnTarget','txnTargetText','txnProduct','txnQty'].forEach(id=>$(`#${id}`).addEventListener('input',updateTransactionSummary));
  ['stockSearch','stockStatusFilter','stockWarehouseFilter'].forEach(id=>$(`#${id}`).addEventListener('input',renderStocks)); ['movementSearch','movementTypeFilter'].forEach(id=>$(`#${id}`).addEventListener('input',renderMovements)); ['productAdminSearch','productAdminStatus'].forEach(id=>$(`#${id}`).addEventListener('input',renderProductAdmin)); ['userSearch','userRoleFilter'].forEach(id=>$(`#${id}`).addEventListener('input',renderUsers));
  $('#stockCsvBtn').onclick=downloadStockCsv; $('#movementCsvBtn').onclick=downloadMovementCsv; $('#settingsStockCsv').onclick=downloadStockCsv; $('#settingsMovementCsv').onclick=downloadMovementCsv; $('#backupBtn').onclick=downloadBackup; $('#restoreBtn').onclick=()=>$('#restoreInput').click(); $('#restoreInput').onchange=e=>e.target.files[0]&&restoreBackup(e.target.files[0]); $('#resetBtn').onclick=resetSystem;
  window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstallPrompt=e;$('#installBtn').classList.remove('hidden');}); $('#installBtn').onclick=async()=>{if(!deferredInstallPrompt){toast('iPhone için Safari → Paylaş → Ana Ekrana Ekle yolunu kullanın.');return;} deferredInstallPrompt.prompt(); await deferredInstallPrompt.userChoice; deferredInstallPrompt=null; $('#installBtn').classList.add('hidden');};
}

bindEvents();
refreshAuthView();
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(console.error));