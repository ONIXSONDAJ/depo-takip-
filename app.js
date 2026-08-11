'use strict';

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const STORAGE_KEY = 'depoTakipProV4';
const SESSION_KEY = 'depoTakipSession';

const roleNames = { super_admin:'Yönetici', admin:'Yönetici', depot:'Personel', machine:'Personel', sales:'Personel', accounting:'Muhasebe', viewer:'Personel' };
const OUT_TYPES=['Makine Çıkışı','Vinç Çıkışı','Satış'];
const seed = { version: 4, epochs: {}, products: [], users: [
  {id:'u1',name:'Alper',username:'Alper',password:'00120200',role:'super_admin',job:'Sistem Yöneticisi',assignment:'Genel',active:true,protected:true}
], movements: [], notifications: [] };

let db = loadDb();
let currentUser = null;

function deepClone(v){ return JSON.parse(JSON.stringify(v)); }
function uid(p){ return `${p}_${Date.now()}_${Math.random().toString(36).slice(2,7)}`; }
function normalizeText(v){ return String(v ?? '').toLocaleLowerCase('tr-TR').trim(); }
function formatQty(n){ return Number(n).toLocaleString('tr-TR',{maximumFractionDigits:2}); }
function formatNow(){ return new Date().toLocaleString('tr-TR',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}); }
function saveDb(){ try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(db)); }catch(e){ toast('Depolama alanı doldu. Bazı ürün görsellerini kaldırmayı deneyin.'); } }
function isAdmin(){ return currentUser && ['super_admin','admin'].includes(currentUser.role); }
function isPanelUser(){ return currentUser && ['super_admin','admin','accounting'].includes(currentUser.role); }
function canBill(){ return isPanelUser(); }
function canWrite(){ return currentUser && ['super_admin','admin','depot','sales'].includes(currentUser.role); }
function productById(id){ return db.products.find(p=>p.id===id); }
function userById(id){ return db.users.find(u=>u.id===id); }
function initials(name){ return String(name).split(/\s+/).map(x=>x[0]).filter(Boolean).slice(0,2).join('').toUpperCase(); }
function escapeHtml(v){ return String(v??'').replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c])); }
function toast(msg){ const el=$('#toast'); el.textContent=msg; el.classList.remove('hidden'); clearTimeout(toast.timer); toast.timer=setTimeout(()=>el.classList.add('hidden'),3200); }

function loadDb(){
  try{ const s=localStorage.getItem(STORAGE_KEY); if(s) return migrate(JSON.parse(s)); }
  catch(e){ console.error('Veri yüklenemedi', e); }
  return deepClone(seed);
}
function migrate(data){
  return {
    version:4,
    products:Array.isArray(data.products)?data.products.map((p,i)=>({...p,id:String(p.id||`p${i}`),category:p.category||'Genel',active:p.active!==false})):[],
    users:Array.isArray(data.users)&&data.users.length?data.users.map((u,i)=>({...u,id:String(u.id||`u${i}`),role:u.role||'depot',job:u.job||'',assignment:u.assignment||'Genel',active:u.active!==false})):deepClone(seed).users,
    movements:Array.isArray(data.movements)?data.movements.map((m,i)=>({...m,id:m.id||`m${i}`,ts:m.ts||Date.now()-i*60000,reference:m.reference||'',note:m.note||'',userId:m.userId||'',billing:OUT_TYPES.includes(m.type)?(m.billing||{status:'pending',invoiced:null,paid:null,unitPrice:null,note:''}):undefined})):[],
    notifications:Array.isArray(data.notifications)?data.notifications:[],
    epochs:(data.epochs&&typeof data.epochs==='object')?data.epochs:{}
  };
}
function statusOf(p){
  const total=Number(p.ostim)+Number(p.yenikent);
  if(total<=Number(p.min)) return {key:'critical',label:'Kritik',className:'pill-critical'};
  if(total<=Number(p.min)*1.7) return {key:'low',label:'Azalıyor',className:'pill-low'};
  return {key:'ok',label:'Yeterli',className:'pill-ok'};
}
function movementClass(t){ return t==='Giriş'||t==='İade'?'pill-ok':t==='Transfer'?'pill-transfer':t==='İptal'?'pill-inactive':t==='Satış'?'pill-low':'pill-critical'; }
function addNotification(title,body){ db.notifications.unshift({id:uid('n'),title,body,date:formatNow(),read:false}); db.notifications=db.notifications.slice(0,60); saveDb(); }

/* ---- Bulut senkronizasyonu (Supabase) ---- */
const CLOUD_URL='https://yxzctsssyngvevrwdwbg.supabase.co';
const CLOUD_KEY='sb_publishable_3WZyKcRRYcLO-Kva_JMQ1g_9c1eluk5';
const CLOUD_TABLES={products:'products',users:'app_users',movements:'movements'};
let cloudOk=null, syncTimer=null, syncBusy=false, cloudLastError='';
const dirtyIds={products:new Set(),users:new Set(),movements:new Set()};
function cloudHeaders(){ const h={'apikey':CLOUD_KEY,'Content-Type':'application/json'}; if(CLOUD_KEY.startsWith('eyJ')) h['Authorization']='Bearer '+CLOUD_KEY; return h; }
async function cloudFetch(path,opts={}){ const r=await fetch(`${CLOUD_URL}/rest/v1/${path}`,{...opts,headers:{...cloudHeaders(),...(opts.headers||{})}}); if(!r.ok){ const body=await r.text().catch(()=>''); throw new Error(`HTTP ${r.status} ${body.slice(0,140)}`); } const t=await r.text(); return t?JSON.parse(t):null; }
function setCloudStatus(ok){ if(ok) cloudLastError=''; if(cloudOk===ok) return; cloudOk=ok; $$('.cloud-chip').forEach(el=>{ el.textContent=ok?'● Bulut bağlı':'● Çevrimdışı'; el.classList.toggle('on',!!ok); }); }
function markDirty(kind,id){ dirtyIds[kind].add(id); scheduleSync(200); }
function markAllDirty(){ db.products.forEach(p=>dirtyIds.products.add(p.id)); db.users.forEach(u=>dirtyIds.users.add(u.id)); db.movements.forEach(m=>dirtyIds.movements.add(m.id)); scheduleSync(200); }
function scheduleSync(delay){ clearTimeout(syncTimer); syncTimer=setTimeout(cloudSync,delay??12000); }
function localList(kind){ return kind==='users'?db.users:kind==='products'?db.products:db.movements; }
async function cloudSync(){
  if(syncBusy){ scheduleSync(3000); return; }
  syncBusy=true;
  try{
    for(const kind of Object.keys(dirtyIds)){
      const ids=[...dirtyIds[kind]]; if(!ids.length) continue;
      const list=localList(kind);
      const rows=ids.map(id=>list.find(x=>x.id===id)).filter(Boolean).map(o=>({id:o.id,data:o,updated_at:new Date().toISOString()}));
      if(rows.length) await cloudFetch(CLOUD_TABLES[kind],{method:'POST',headers:{'Prefer':'resolution=merge-duplicates'},body:JSON.stringify(rows)});
      ids.forEach(id=>dirtyIds[kind].delete(id));
    }
    const [cp,cuRaw,cm]=await Promise.all([
      cloudFetch(CLOUD_TABLES.products+'?select=id,data'),
      cloudFetch(CLOUD_TABLES.users+'?select=id,data'),
      cloudFetch(CLOUD_TABLES.movements+'?select=id,data')
    ]);
    let changed=0;
    const metaRow=(cuRaw||[]).find(r=>r.id==='__meta__');
    const cu=(cuRaw||[]).filter(r=>r.id!=='__meta__');
    const cloudEpochs=metaRow?.data?.epochs||{};
    db.epochs=db.epochs||{};
    for(const kind of ['products','users','movements']){
      if((cloudEpochs[kind]||0)>(db.epochs[kind]||0)){
        dirtyIds[kind].clear();
        if(kind==='users') db.users=db.users.filter(u=>u.protected);
        else if(kind==='products') db.products=[];
        else db.movements=[];
        db.epochs[kind]=cloudEpochs[kind]; changed=1;
      }
    }
    changed|=applyCloud('products',cp); changed|=applyCloud('users',cu); changed|=applyCloud('movements',cm);
    if(currentUser&&!userById(currentUser.id)){ toast('Sistem yönetici tarafından sıfırlandı, yeniden giriş yapın.'); logout(); }
    if(changed){
      db.movements.sort((a,b)=>(b.ts||0)-(a.ts||0));
      saveDb();
      if(currentUser){ if(isPanelUser()) renderAll(); else renderStaffLast(); }
    }
    setCloudStatus(true);
    cloudAutoBackup();
  }catch(e){ cloudLastError=String(e.message||e); setCloudStatus(false); }
  syncBusy=false;
  scheduleSync();
}
function applyCloud(kind,rows){
  if(!Array.isArray(rows)) return 0;
  const list=localList(kind);
  const cloudMap=new Map(rows.map(r=>[r.id,r.data]));
  const localMap=new Map(list.map(o=>[o.id,o]));
  let changed=0;
  list.forEach(o=>{ if(!cloudMap.has(o.id)&&!dirtyIds[kind].has(o.id)) dirtyIds[kind].add(o.id); });
  const merged=[];
  cloudMap.forEach((data,id)=>{
    if(dirtyIds[kind].has(id)&&localMap.has(id)) merged.push(localMap.get(id));
    else{ const cur=localMap.get(id); if(!cur||JSON.stringify(cur)!==JSON.stringify(data)) changed=1; merged.push(data); }
  });
  list.forEach(o=>{ if(!cloudMap.has(o.id)) merged.push(o); });
  if(merged.length!==list.length) changed=1;
  if(kind==='users'){
    merged.sort((a,b)=>(b.protected?1:0)-(a.protected?1:0));
    const seen=new Set(); db.users=merged.filter(u=>{ const k=normalizeText(u.username); if(seen.has(k)) return false; seen.add(k); return true; });
  }
  else if(kind==='products') db.products=merged;
  else db.movements=merged;
  return changed;
}
async function cloudWipeTable(t){ await cloudFetch(`${t}?id=neq.__meta__`,{method:'DELETE'}); }
async function pushCloudMeta(){ await cloudFetch(CLOUD_TABLES.users,{method:'POST',headers:{'Prefer':'resolution=merge-duplicates'},body:JSON.stringify([{id:'__meta__',data:{_meta:true,epochs:db.epochs||{}},updated_at:new Date().toISOString()}])}); }
/* ---- Otomatik güvenlik yedekleri: sıfırlamadan önce veriler kaydedilir ---- */
const SNAPSHOT_KEY='depoTakipGuvenlikYedekleri';
function loadSnapshots(){ try{ return JSON.parse(localStorage.getItem(SNAPSHOT_KEY))||[]; }catch(e){ return []; } }
function takeSafetySnapshot(label){
  // Silinen veriler sistem içinde "Son Silinen" olarak saklanır; yeni bir sıfırlama yapılana kadar durur.
  try{
    localStorage.setItem(SNAPSHOT_KEY,JSON.stringify([{date:formatNow(),label:'Son silinen: '+label,data:deepClone(db)}]));
  }catch(e){
    try{
      const slim=deepClone(db); slim.products.forEach(p=>{ delete p.image; });
      localStorage.setItem(SNAPSHOT_KEY,JSON.stringify([{date:formatNow(),label:'Son silinen: '+label+' (görselsiz)',data:slim}]));
    }catch(e2){}
  }
}
function renderSnapshots(){
  const el=$('#snapshotList'); if(!el) return;
  const snaps=loadSnapshots();
  el.innerHTML=snaps.length?snaps.map((s,i)=>`<div class="snapshot-row"><div><b>${escapeHtml(s.label)}</b><small class="td-sub">${escapeHtml(s.date)} · ${s.data?.products?.length||0} ürün, ${s.data?.movements?.length||0} hareket</small></div><button class="mini-btn" data-snap-restore="${i}">Geri Yükle</button></div>`).join(''):'<div class="empty">Henüz silinen veri yok. Bir sıfırlama yapıldığında silinen veriler otomatik olarak buraya kaydedilir.</div>';
  $$('[data-snap-restore]').forEach(b=>b.onclick=()=>restoreSnapshot(Number(b.dataset.snapRestore)));
}
async function restoreSnapshot(i){
  const snaps=loadSnapshots(); const s=snaps[i]; if(!s) return;
  if(!confirm(`"${s.label}" (${s.date}) yedeği geri yüklensin mi? Mevcut veriler bu yedekle değiştirilecek ve tüm cihazlara yansıyacak.`))return;
  const now=Date.now();
  db=migrate(s.data); db.epochs={products:now,users:now,movements:now};
  saveDb(); markAllDirty();
  try{ if(cloudOk) await pushCloudMeta(); }catch(e){}
  refreshAuthView();
  if(currentUser&&isPanelUser()){ applyShellPerms(); renderAll(); renderSnapshots(); }
  toast('Yedek geri yüklendi.');
}

async function resetMovementsFormat(){
  if(currentUser?.role!=='super_admin') return;
  if(!confirm('TÜM hareket ve muhasebe kayıtları, TÜM cihazlardan kalıcı olarak silinecek. Ürünler, stoklar ve kullanıcılar kalır. Devam edilsin mi?'))return;
  if(!confirm('Son onay: bu işlem geri alınamaz. Önce yedek aldınız mı?'))return;
  takeSafetySnapshot('Hareket & muhasebe sıfırlama öncesi'); renderSnapshots();
  db.epochs=db.epochs||{}; db.epochs.movements=Date.now();
  dirtyIds.movements.clear(); db.movements=[];
  try{ if(cloudOk){ await cloudWipeTable(CLOUD_TABLES.movements); await pushCloudMeta(); } }catch(e){ toast('Bulut temizliği başarısız, tekrar deneyin: '+e.message); return; }
  saveDb(); renderAll(); toast('Hareket ve muhasebe kayıtları sıfırlandı. Yeni dönem başladı.');
}
function resetStocksFormat(){
  if(currentUser?.role!=='super_admin') return;
  if(!confirm('TÜM ürünlerin stok miktarları 0 yapılacak (ürün kartları kalır). Devam edilsin mi?'))return;
  takeSafetySnapshot('Stok sıfırlama öncesi'); renderSnapshots();
  db.products.forEach(p=>{ p.ostim=0; p.yenikent=0; markDirty('products',p.id); });
  saveDb(); renderAll(); toast('Tüm stok miktarları sıfırlandı.');
}
function splitDate(d){ const parts=String(d||'').split(' '); return {day:parts[0]||'',time:parts[1]||''}; }

/* ---- Oturum ---- */
function refreshAuthView(){
  const needsSetup=db.users.length===0;
  $('#loginForm').classList.toggle('hidden',needsSetup);
  $('#setupForm').classList.toggle('hidden',!needsSetup);
}
function completeSetup(e){
  e.preventDefault();
  const name=$('#setupName').value.trim(); const username=$('#setupUser').value.trim();
  const pass=$('#setupPass').value; const pass2=$('#setupPass2').value;
  if(!name||!username) return toast('Ad soyad ve kullanıcı adı gerekli.');
  if(pass.length<6) return toast('Şifre en az 6 karakter olmalı.');
  if(pass!==pass2) return toast('Şifreler eşleşmiyor.');
  const suid=uid('u'); db.users.push({id:suid,name,username,password:pass,role:'super_admin',job:'Sistem Yöneticisi',assignment:'Genel',active:true,protected:true});
  saveDb(); markDirty('users',suid); $('#setupForm').reset(); refreshAuthView();
  login(username,pass);
}
function enterApp(user){
  currentUser=user;
  localStorage.setItem(SESSION_KEY,user.id);
  $('#loginView').classList.add('hidden');
  if(isPanelUser()){
    $('#staffView').classList.add('hidden'); $('#appView').classList.remove('hidden');
    applyShellPerms();
    $('#currentName').textContent=user.name; $('#currentRole').textContent=roleNames[user.role]; $('#avatar').textContent=initials(user.name);
    renderAll(); goPage(localStorage.getItem('depoTakipLastPage')||'dashboard');
  }else{
    $('#appView').classList.add('hidden'); $('#staffView').classList.remove('hidden');
    $('#staffName').textContent=user.name;
    $('#staffHello').textContent=`Merhaba, ${user.name.split(' ')[0]}`;
    renderStaffLast();
  }
}
function login(username,password){
  const user=db.users.find(u=>!u._deleted&&normalizeText(u.username)===normalizeText(username));
  if(!user||user.password!==password){ toast('Kullanıcı adı veya şifre yanlış.'); return; }
  if(!user.active){ toast('Bu kullanıcı hesabı pasif durumda.'); return; }
  enterApp(user);
}
function logout(){ localStorage.removeItem(SESSION_KEY); currentUser=null; $('#appView').classList.add('hidden'); $('#staffView').classList.add('hidden'); $('#loginView').classList.remove('hidden'); $('#loginPass').value=''; refreshAuthView(); }

/* ---- Yönetici sayfaları ---- */
const pageTitles={dashboard:'Ana Sayfa',movements:'Hareketler',stocks:'Stok',muhasebe:'Muhasebe',reports:'Raporlar',products:'Ürünler',users:'Kullanıcılar',settings:'Ayarlar'};
function applyShellPerms(){ const restricted=!isAdmin(); $$('[data-admin-only]').forEach(el=>el.classList.toggle('hidden',restricted)); $$('[data-super-only]').forEach(el=>el.classList.toggle('hidden',currentUser?.role!=='super_admin')); $('#scanTopBtn').classList.toggle('hidden',!canWrite()); }
function goPage(page){
  if(!isPanelUser()) return;
  if(!isAdmin()&&['products','users','settings','reports'].includes(page)) page='dashboard';
  localStorage.setItem('depoTakipLastPage',page);
  if(page==='settings') renderSnapshots();
  if(page==='reports') renderReports();
  $$('.page').forEach(el=>el.classList.toggle('active',el.id===page));
  $$('.side-nav button').forEach(b=>b.classList.toggle('active',b.dataset.page===page));
  $$('.mobile-tabs button').forEach(b=>b.classList.toggle('active',b.dataset.page===page));
  $('#pageTitle').textContent=pageTitles[page]||'DEPO TAKİP';
  $('#sidebar').classList.remove('open'); $('#sidebarOverlay').classList.add('hidden');
  hideNotifPanel();
  window.scrollTo(0,0);
  if(page==='dashboard') renderDashboard();
  if(page==='movements') renderMovements();
  if(page==='stocks') renderStocks();
  if(page==='muhasebe') renderBilling();
  if(page==='products') renderProducts();
  if(page==='users') renderUsers();
}
function renderAll(){ if(!isPanelUser())return; renderDashboard(); renderMovements(); renderStocks(); renderProducts(); renderUsers(); renderBilling(); renderNotifications(); }

function renderDashboard(){
  const act=db.products.filter(p=>p.active&&!p._deleted);
  const ostim=act.reduce((s,p)=>s+Number(p.ostim),0);
  const yenikent=act.reduce((s,p)=>s+Number(p.yenikent),0);
  const critical=act.filter(p=>statusOf(p).key==='critical');
  const midnight=new Date(); midnight.setHours(0,0,0,0);
  const today=db.movements.filter(m=>Number(m.ts)>=midnight.getTime()).length;
  const ostimVar=act.filter(p=>Number(p.ostim)>0).length;
  const yenikentVar=act.filter(p=>Number(p.yenikent)>0).length;
  const ostimCrit=act.filter(p=>Number(p.min)>0&&Number(p.ostim)<=Number(p.min)).length;
  const yenikentCrit=act.filter(p=>Number(p.min)>0&&Number(p.yenikent)<=Number(p.min)).length;
  const fmtTl=v=>'₺'+Math.round(v).toLocaleString('tr-TR');
  const ostimVal=act.reduce((s,p)=>s+(Number(p.price)||0)*Number(p.ostim),0);
  const yenikentVal=act.reduce((s,p)=>s+(Number(p.price)||0)*Number(p.yenikent),0);
  $('#mOstim').textContent=ostimVar; $('#mYenikent').textContent=yenikentVar;
  $('#mOstimCrit').textContent=`${ostimCrit} kritik`; $('#mYenikentCrit').textContent=`${yenikentCrit} kritik`;
  $('#mOstimValue').textContent=fmtTl(ostimVal)+' stok değeri'; $('#mYenikentValue').textContent=fmtTl(yenikentVal)+' stok değeri';
  $('#mCritical').textContent=critical.length; $('#mToday').textContent=today;
  const open=db.movements.filter(m=>m.billing&&!m.cancelled&&billingStatus(m.billing)!=='done').length;
  $('#mBilling').textContent=open;
  const recent=db.movements.slice(0,8);
  $('#dashMovements').innerHTML=recent.map(m=>{const d=splitDate(m.date);return `<tr><td><b>${escapeHtml(d.time)}</b><small class="td-sub">${escapeHtml(d.day)}</small></td><td>${escapeHtml(m.user)}</td><td><span class="stock-pill ${movementClass(m.type)}">${escapeHtml(m.type)}</span></td><td><b>${escapeHtml(m.product)}</b></td><td class="num">${formatQty(m.qty)} ${escapeHtml(m.unit)}</td><td>${escapeHtml(m.target)}${m.note?`<small class="td-sub">${escapeHtml(m.note)}</small>`:''}</td></tr>`}).join('');
  $('#dashMovementsEmpty').classList.toggle('hidden',recent.length>0);
  $('#dashCritical').innerHTML=critical.length?critical.slice(0,6).map(p=>`<div class="critical-item"><div><b>${escapeHtml(p.name)}</b><small>${escapeHtml(p.code)} · Min. ${formatQty(p.min)} ${escapeHtml(p.unit)}</small></div><span class="stock-pill pill-critical">${formatQty(Number(p.ostim)+Number(p.yenikent))}</span></div>`).join(''):'<div class="empty">Kritik stok yok. 👍</div>';
  const totalVar=Math.max(ostimVar+yenikentVar,1);
  $('#dashBars').innerHTML=`<div class="bar-row"><div class="bar-label"><b>Ostim</b><span>${ostimVar} çeşit</span></div><div class="bar-track"><div class="bar-fill" style="width:${ostimVar/totalVar*100}%"></div></div></div><div class="bar-row"><div class="bar-label"><b>Yenikent</b><span>${yenikentVar} çeşit</span></div><div class="bar-track"><div class="bar-fill alt" style="width:${yenikentVar/totalVar*100}%"></div></div></div>`;
}
function renderMovements(){
  const q=normalizeText($('#movementSearch').value); const type=$('#movementType').value;
  const rows=db.movements.filter(m=>type==='all'||m.type===type).filter(m=>!q||normalizeText(`${m.product} ${m.user} ${m.source} ${m.target}`).includes(q)).slice(0,300);
  $('#movementRows').innerHTML=rows.map(m=>{const d=splitDate(m.date);return `<tr class="${m.negativeStock?'row-negative':''} ${m.cancelled?'row-cancelled':''}"><td><b>${escapeHtml(d.time)}</b><small class="td-sub">${escapeHtml(d.day)}</small></td><td>${escapeHtml(m.user)}</td><td><span class="stock-pill ${movementClass(m.type)}">${escapeHtml(m.type)}</span>${m.cancelled?'<small class="td-sub exception-note">İPTAL EDİLDİ</small>':''}</td><td><b>${escapeHtml(m.product)}</b></td><td class="num">${formatQty(m.qty)} ${escapeHtml(m.unit)}</td><td>${escapeHtml(m.source)}</td><td>${escapeHtml(m.target)}${m.note?`<small class="td-sub">${escapeHtml(m.note)}</small>`:''}${m.exceptionReason?`<small class="td-sub exception-note">İstisnai çıkış: ${escapeHtml(m.exceptionReason)}</small>`:''}</td><td>${isAdmin()&&!m.cancelled&&m.type!=='İptal'?`<button class="mini-btn danger" data-cancel-mv="${m.id}">İptal</button>`:''}</td></tr>`}).join('');
  $('#movementEmpty').classList.toggle('hidden',rows.length>0);
  $$('[data-cancel-mv]').forEach(b=>b.onclick=()=>cancelMovement(b.dataset.cancelMv));
}
/* ---- İptal / ters kayıt: hareketler silinmez, ters kayıtla düzeltilir ---- */
function cancelMovement(id){
  if(!isAdmin()) return;
  const m=db.movements.find(x=>x.id===id); if(!m||m.cancelled||m.type==='İptal') return;
  if(!confirm(`${m.date} tarihli "${m.type} · ${formatQty(m.qty)} ${m.unit} ${m.product}" işlemi iptal edilsin mi?\nİşlem silinmez; stok geri düzeltilir ve ters kayıt oluşturulur.`))return;
  const p=productById(m.productId);
  if(p){
    const dSrc=m.source==='Ostim Depo'?'ostim':m.source==='Yenikent Depo'?'yenikent':null;
    const dTgt=m.target==='Ostim Depo'?'ostim':m.target==='Yenikent Depo'?'yenikent':null;
    if(m.type==='Giriş'){ if(dTgt) p[dTgt]=Number(p[dTgt])-Number(m.qty); }
    else if(m.type==='Transfer'){ if(dSrc) p[dSrc]=Number(p[dSrc])+Number(m.qty); if(dTgt) p[dTgt]=Number(p[dTgt])-Number(m.qty); }
    else{ if(dSrc) p[dSrc]=Number(p[dSrc])+Number(m.qty); }
    markDirty('products',p.id);
  }
  m.cancelled=true; markDirty('movements',m.id);
  const rv={id:uid('m'),date:formatNow(),ts:Date.now(),type:'İptal',productId:m.productId,product:m.product,qty:m.qty,unit:m.unit,source:m.target,target:m.source,user:currentUser.name,userId:currentUser.id,reference:'İptal',note:`İptal edilen işlem: ${m.type} · ${m.date} · ${m.user}`,reversedId:m.id};
  db.movements.unshift(rv); markDirty('movements',rv.id);
  addNotification('↩ İşlem iptal edildi',`${currentUser.name}: ${m.type} · ${formatQty(m.qty)} ${m.unit} ${m.product} ters kayıtla iptal edildi.`);
  saveDb(); renderAll();
  toast('İşlem iptal edildi, ters kayıt oluşturuldu.');
}
function renderStocks(){
  const q=normalizeText($('#stockSearch').value);
  const rows=db.products.filter(p=>p.active&&!p._deleted).filter(p=>!q||normalizeText(`${p.name} ${p.code} ${p.category}`).includes(q));
  $('#stockRows').innerHTML=rows.map(p=>{const s=statusOf(p);return `<tr><td><div class="cell-user">${productThumb(p)}<div><b>${escapeHtml(p.name)}</b><small class="td-sub">${escapeHtml(p.category)} · ${escapeHtml(p.unit)}</small></div></div></td><td><code>${escapeHtml(p.code)}</code></td><td class="num">${formatQty(p.ostim)}</td><td class="num">${formatQty(p.yenikent)}</td><td class="num"><b>${formatQty(Number(p.ostim)+Number(p.yenikent))}</b></td><td><span class="stock-pill ${s.className}">${s.label}</span></td><td><div class="row-actions"><button class="mini-btn" data-ekstre="${p.id}">Ekstre</button><button class="mini-btn" data-qr="${p.id}">Etiket</button><button class="mini-btn" data-quick="${p.id}">İşlem</button></div></td></tr>`}).join('');
  $('#stockEmpty').classList.toggle('hidden',rows.length>0);
  $$('[data-qr]').forEach(b=>b.onclick=()=>openQr(b.dataset.qr));
  $$('[data-quick]').forEach(b=>b.onclick=()=>openQuickForProduct(b.dataset.quick));
  $$('[data-ekstre]').forEach(b=>b.onclick=()=>openEkstre(b.dataset.ekstre));
}
function renderProducts(){
  const q=normalizeText($('#productAdminSearch').value);
  const rows=db.products.filter(p=>!p._deleted).filter(p=>!q||normalizeText(`${p.name} ${p.code} ${p.category}`).includes(q));
  $('#productRows').innerHTML=rows.map(p=>`<tr><td><div class="cell-user">${productThumb(p)}<div><b>${escapeHtml(p.name)}</b></div></div></td><td><code>${escapeHtml(p.code)}</code></td><td>${escapeHtml(p.category)}</td><td>${escapeHtml(p.unit)}</td><td class="num">${formatQty(p.min)}</td><td><span class="stock-pill ${p.active?'pill-ok':'pill-inactive'}">${p.active?'Aktif':'Pasif'}</span></td><td><div class="row-actions"><button class="mini-btn" data-ekstre="${p.id}">Ekstre</button><button class="mini-btn" data-edit-product="${p.id}">Düzenle</button><button class="mini-btn danger" data-delete-product="${p.id}">Sil</button></div></td></tr>`).join('');
  $('#productEmpty').classList.toggle('hidden',rows.length>0);
  $$('[data-edit-product]').forEach(b=>b.onclick=()=>openProductModal(b.dataset.editProduct));
  $$('[data-delete-product]').forEach(b=>b.onclick=()=>deleteProduct(b.dataset.deleteProduct));
  $$('#productRows [data-ekstre]').forEach(b=>b.onclick=()=>openEkstre(b.dataset.ekstre));
}
function renderUsers(){
  const q=normalizeText($('#userSearch').value);
  const rows=db.users.filter(u=>!u._deleted).filter(u=>!q||normalizeText(`${u.name} ${u.username} ${u.job}`).includes(q));
  $('#userRows').innerHTML=rows.map(u=>`<tr><td><div class="cell-user"><div class="avatar sm">${initials(u.name)}</div><div><b>${escapeHtml(u.name)}</b><small class="td-sub">@${escapeHtml(u.username)}</small></div></div></td><td>${escapeHtml(u.job||'-')}</td><td><span class="stock-pill ${['super_admin','admin'].includes(u.role)?'pill-low':'pill-ok'}">${escapeHtml(roleNames[u.role]||u.role)}</span></td><td><span class="stock-pill ${u.active?'pill-ok':'pill-inactive'}">${u.active?'Aktif':'Pasif'}</span></td><td><div class="row-actions"><button class="mini-btn" data-edit-user="${u.id}">Düzenle</button><button class="mini-btn danger" data-delete-user="${u.id}" ${u.protected?'disabled':''}>Sil</button></div></td></tr>`).join('');
  $$('[data-edit-user]').forEach(b=>b.onclick=()=>openUserModal(b.dataset.editUser));
  $$('[data-delete-user]').forEach(b=>b.onclick=()=>deleteUser(b.dataset.deleteUser));
}
function renderNotifications(){
  const unread=db.notifications.filter(n=>!n.read).length;
  $('#notifCount').textContent=unread; $('#notifCount').classList.toggle('hidden',unread===0);
  $('#notifList').innerHTML=db.notifications.length?db.notifications.slice(0,40).map(n=>`<article class="notif-item ${n.read?'':'unread'}"><b>${escapeHtml(n.title)}</b><p>${escapeHtml(n.body)}</p><time>${escapeHtml(n.date)}</time></article>`).join(''):'<div class="empty">Bildirim yok.</div>';
}
function toggleNotifPanel(){
  const p=$('#notifPanel'); p.classList.toggle('hidden');
  if(!p.classList.contains('hidden')){
    renderNotifications();
    // Panel açılınca sayaç sıfırlanır (okunmamış vurgusu listede görünmeye devam eder)
    if(db.notifications.some(n=>!n.read)){ db.notifications.forEach(n=>n.read=true); saveDb(); $('#notifCount').textContent='0'; $('#notifCount').classList.add('hidden'); }
  }
}
function hideNotifPanel(){ $('#notifPanel').classList.add('hidden'); }


/* ---- Muhasebe ---- */
let billGroupIds=[], billInv=null, billPaid=null;
function billingStatus(b){ return b.paid===true?'done':b.paid===false?'askida':'pending'; }
function billingPill(s){ return s==='done'?'<span class="stock-pill pill-ok">Tamamlandı</span>':s==='askida'?'<span class="stock-pill pill-low">Askıda</span>':'<span class="stock-pill pill-inactive">Bekliyor</span>'; }
function yesNo(v,yes,no){ return v===true?`<span class="yn ok">✓ ${yes}</span>`:v===false?`<span class="yn no">✗ ${no}</span>`:'<span class="yn">—</span>'; }
function billTargetKey(m){ return normalizeText(m.target).replace(/[^a-zçğıöşü0-9]/g,''); }
function billGroupKeyOf(m){ return billTargetKey(m)+'|'+splitDate(m.date).day; }
function groupBillStatus(movs){
  if(movs.some(m=>billingStatus(m.billing)==='pending')) return 'pending';
  if(movs.some(m=>billingStatus(m.billing)==='askida')) return 'askida';
  return 'done';
}
function billingGroups(){
  const q=normalizeText($('#billSearch').value); const f=$('#billFilter').value;
  const groups=new Map();
  db.movements.filter(m=>m.billing&&!m.cancelled).forEach(m=>{
    const k=billGroupKeyOf(m);
    if(!groups.has(k)) groups.set(k,{key:k,movs:[],ts:0});
    const g=groups.get(k); g.movs.push(m); g.ts=Math.max(g.ts,Number(m.ts)||0);
  });
  let list=[...groups.values()];
  list.forEach(g=>g.movs.sort((a,b)=>(a.ts||0)-(b.ts||0)));
  list.sort((a,b)=>b.ts-a.ts);
  if(f!=='all') list=list.filter(g=>groupBillStatus(g.movs)===f);
  if(q) list=list.filter(g=>g.movs.some(m=>normalizeText(`${m.product} ${m.target} ${m.user}`).includes(q)));
  return list;
}
function renderBilling(){
  const groups=billingGroups();
  $('#billRows').innerHTML=groups.map(g=>{
    const movs=g.movs, first=movs[0], multi=movs.length>1;
    const s=groupBillStatus(movs); const d=splitDate(first.date);
    const priced=movs.filter(m=>m.billing.unitPrice);
    const total=priced.length?priced.reduce((sum,m)=>sum+m.billing.unitPrice*m.qty,0):null;
    const inv=movs.every(m=>m.billing.invoiced===true)?true:movs.every(m=>m.billing.invoiced===false)?false:null;
    const paid=movs.every(m=>m.billing.paid===true)?true:movs.every(m=>m.billing.paid===false)?false:null;
    const nameCell=multi
      ?`<b>${movs.length} kalem</b><small class="td-sub">${escapeHtml(movs.slice(0,3).map(m=>m.product).join(', '))}${movs.length>3?'…':''}</small>`
      :`<b>${escapeHtml(first.product)}</b><small class="td-sub">${escapeHtml(first.type)}</small>`;
    const qtyCell=multi?`${movs.length} ürün`:`${formatQty(first.qty)} ${escapeHtml(first.unit)}`;
    const unitCell=multi?'—':(first.billing.unitPrice?formatQty(first.billing.unitPrice):'—');
    return `<tr class="${s==='askida'?'row-askida':''}"><td><b>${escapeHtml(d.time)}</b><small class="td-sub">${escapeHtml(d.day)}</small></td><td>${nameCell}</td><td class="num">${qtyCell}</td><td>${escapeHtml(first.target)}${first.note?`<small class="td-sub">${escapeHtml(first.note)}</small>`:''}</td><td>${escapeHtml([...new Set(movs.map(m=>m.user))].join(', '))}</td><td class="num">${unitCell}</td><td class="num"><b>${total!=null?formatQty(total):'—'}</b></td><td>${yesNo(inv,'Kesildi','Kesilmedi')}</td><td>${yesNo(paid,'Alındı','Alınmadı')}</td><td>${billingPill(s)}</td><td>${canBill()?`<button class="mini-btn" data-bill="${g.key}">${s==='pending'?'İşle':'Düzenle'}</button>`:''}</td></tr>`;
  }).join('');
  $('#billEmpty').classList.toggle('hidden',groups.length>0);
  $$('[data-bill]').forEach(btn=>btn.onclick=()=>openBillingModal(btn.dataset.bill));
  const all=db.movements.filter(m=>m.billing&&!m.cancelled);
  const pending=all.filter(m=>billingStatus(m.billing)==='pending').length;
  const askida=all.filter(m=>billingStatus(m.billing)==='askida');
  const done=all.filter(m=>billingStatus(m.billing)==='done');
  const sum=list=>list.reduce((s,m)=>s+(m.billing.unitPrice?m.billing.unitPrice*m.qty:0),0);
  const priced=all.filter(m=>m.billing.unitPrice);
  const inv=priced.filter(m=>m.billing.invoiced===true);
  const noinv=priced.filter(m=>m.billing.invoiced===false);
  const invSum=sum(inv), noinvSum=sum(noinv);
  $('#billSummary').innerHTML=`
    <div class="bill-chip"><small>Bekleyen</small><b>${pending}</b></div>
    <div class="bill-chip warn"><small>Askıda</small><b>${askida.length}</b><span>${formatQty(sum(askida))} ₺</span></div>
    <div class="bill-chip ok"><small>Tahsil edilen</small><b>${done.length}</b><span>${formatQty(sum(done))} ₺</span></div>
    <div class="bill-chip inv"><small>Faturalı</small><b>${formatQty(invSum)} ₺</b><span>${inv.length} kayıt</span></div>
    <div class="bill-chip noinv"><small>Faturasız</small><b>${formatQty(noinvSum)} ₺</b><span>${noinv.length} kayıt</span></div>
    <div class="bill-chip total"><small>GENEL TOPLAM</small><b>${formatQty(invSum+noinvSum)} ₺</b><span>faturalı + faturasız</span></div>`;
}
function openBillingModal(key){
  const movs=db.movements.filter(m=>m.billing&&!m.cancelled&&billGroupKeyOf(m)===key).sort((a,b)=>(a.ts||0)-(b.ts||0));
  if(!movs.length) return;
  billGroupIds=movs.map(m=>m.id);
  const first=movs[0];
  billInv=movs.every(m=>m.billing.invoiced===true)?true:movs.every(m=>m.billing.invoiced===false)?false:null;
  billPaid=movs.every(m=>m.billing.paid===true)?true:movs.every(m=>m.billing.paid===false)?false:null;
  $('#billProductInfo').textContent=movs.length>1?`${first.target} · ${movs.length} kalem`:`${first.product} · ${formatQty(first.qty)} ${first.unit}`;
  $('#billMeta').innerHTML=`<span>${escapeHtml(splitDate(first.date).day)}</span><span>${escapeHtml(first.target)}</span><span>Personel: ${escapeHtml([...new Set(movs.map(m=>m.user))].join(', '))}</span>`;
  $('#billLines').innerHTML=movs.map(m=>`<div class="bill-line"><div class="bl-info"><b>${escapeHtml(m.product)}</b><small>${formatQty(m.qty)} ${escapeHtml(m.unit)} · ${escapeHtml(m.type)} · ${escapeHtml(splitDate(m.date).time)}</small></div><input type="number" min="0" step="0.01" inputmode="decimal" placeholder="birim ₺" value="${m.billing.unitPrice??''}" data-bl-price="${m.id}"><b class="bl-total" data-bl-total="${m.id}">—</b></div>`).join('');
  $('#billNote').value=first.billing.note||'';
  $$('[data-bl-price]').forEach(inp=>inp.oninput=updateBillTotal);
  updateBillSegs(); updateBillTotal();
  openModal('billingModal');
}
function updateBillSegs(){
  $('#segInvYes').classList.toggle('active',billInv===true);
  $('#segInvNo').classList.toggle('active',billInv===false);
  $('#segPaidYes').classList.toggle('active',billPaid===true);
  $('#segPaidNo').classList.toggle('active',billPaid===false);
}
function updateBillTotal(){
  let grand=0, any=false;
  billGroupIds.forEach(id=>{
    const m=db.movements.find(x=>x.id===id);
    const inp=document.querySelector(`[data-bl-price="${id}"]`);
    const out=document.querySelector(`[data-bl-total="${id}"]`);
    const price=Number(inp?.value);
    if(m&&price>0){ const t=price*m.qty; grand+=t; any=true; if(out) out.textContent=`${formatQty(t)} ₺`; }
    else if(out) out.textContent='—';
  });
  $('#billTotalTxt').textContent=any?`${formatQty(grand)} ₺`:'—';
}
function saveBilling(){
  const movs=billGroupIds.map(id=>db.movements.find(x=>x.id===id)).filter(m=>m&&m.billing);
  if(!movs.length) return;
  const prices={};
  for(const m of movs){
    const price=Number(document.querySelector(`[data-bl-price="${m.id}"]`)?.value);
    if(!price||price<=0) return toast(`Birim fiyat girin: ${m.product}`);
    prices[m.id]=price;
  }
  if(billInv===null) return toast('Fatura durumunu seçin: Kesildi veya Kesilmedi.');
  if(billPaid===null) return toast('Ödeme durumunu seçin: Alındı veya Alınmadı.');
  const note=$('#billNote').value.trim();
  let grand=0;
  movs.forEach(m=>{ grand+=prices[m.id]*m.qty; m.billing={invoiced:billInv,paid:billPaid,unitPrice:prices[m.id],note,status:billPaid?'done':'askida',updatedBy:currentUser.name,updatedAt:formatNow()}; markDirty('movements',m.id); });
  const label=movs.length>1?`${movs[0].target} (${movs.length} kalem)`:movs[0].product;
  if(billPaid) addNotification(`₺ Tahsilat: ${label}`,`${formatQty(grand)} ₺ — ${billInv?'faturalı':'faturasız/elden'}. (${currentUser.name})`);
  else addNotification(`⏳ Askıda: ${label}`,`${formatQty(grand)} ₺ ödeme bekleniyor — ${movs[0].target}. (${currentUser.name})`);
  saveDb(); closeModal('billingModal'); renderAll();
  toast(billPaid?'Kaydedildi: ödeme alındı olarak işaretlendi.':'Kaydedildi: ödeme askıya alındı.');
}
function downloadBillingCsv(){ csvDownload('muhasebe_kayitlari.csv',[['Tarih','Malzeme','İşlem','Miktar','Birim','Nereye','Personel','Birim Fiyat','Toplam','Fatura','Ödeme','Durum','Not'],...db.movements.filter(m=>m.billing).map(m=>{const b=m.billing;const s=billingStatus(b);return [m.date,m.product,m.type,m.qty,m.unit,m.target,m.user,b.unitPrice??'',b.unitPrice?b.unitPrice*m.qty:'',b.invoiced===true?'Kesildi':b.invoiced===false?'Kesilmedi':'',b.paid===true?'Alındı':b.paid===false?'Alınmadı':'',s==='done'?'Tamamlandı':s==='askida'?'Askıda':'Bekliyor',b.note||''];})]); toast('Muhasebe raporu indirildi.'); }

/* ---- Personel ekranı ---- */
function renderStaffLast(){
  const mine=db.movements.find(m=>m.userId===currentUser?.id);
  const el=$('#staffLast');
  if(!mine){ el.classList.add('hidden'); return; }
  el.classList.remove('hidden');
  el.innerHTML=`<small>SON İŞLEMİNİZ</small><b>${escapeHtml(mine.type)} · ${formatQty(mine.qty)} ${escapeHtml(mine.unit)} ${escapeHtml(mine.product)}</b><span>${escapeHtml(mine.date)} · ${escapeHtml(mine.source)} → ${escapeHtml(mine.target)}${mine.note?' · '+escapeHtml(mine.note):''}</span>`;
}

/* ---- Ürün / kullanıcı yönetimi ---- */
let productImgData=null;
function setProductImgPreview(){
  const box=$('#productImgBox');
  if(productImgData){ box.innerHTML=`<img src="${productImgData}" alt="">`; $('#removeImgBtn').classList.remove('hidden'); }
  else{ box.textContent='📷'; $('#removeImgBtn').classList.add('hidden'); }
}
function handleProductImage(file){
  const img=new Image();
  img.onload=()=>{
    const max=280; const scale=Math.min(1,max/Math.max(img.width,img.height));
    const c=document.createElement('canvas'); c.width=Math.round(img.width*scale); c.height=Math.round(img.height*scale);
    c.getContext('2d').drawImage(img,0,0,c.width,c.height);
    productImgData=c.toDataURL('image/jpeg',.72);
    setProductImgPreview();
    URL.revokeObjectURL(img.src);
  };
  img.onerror=()=>toast('Görsel okunamadı.');
  img.src=URL.createObjectURL(file);
}
function productThumb(p,cls='thumb'){
  return p.image?`<img class="${cls}" src="${p.image}" alt="">`:`<div class="${cls} thumb-letter">${escapeHtml((p.name||'Ü')[0].toLocaleUpperCase('tr-TR'))}</div>`;
}
function openProductModal(id=''){
  const p=id?productById(id):null; $('#productModalTitle').textContent=p?'Ürünü Düzenle':'Yeni Ürün'; $('#productId').value=p?.id||''; $('#productName').value=p?.name||''; $('#productCode').value=p?.code||''; $('#productCategory').value=p?.category||''; $('#productUnit').value=p?.unit||'Adet'; $('#productOstim').value=p?.ostim??0; $('#productYenikent').value=p?.yenikent??0; $('#productMin').value=p?.min??0; $('#productPrice').value=p?.price??0; $('#productActive').value=String(p?.active??true);
  productImgData=p?.image||null; setProductImgPreview();
  openModal('productModal');
}
function saveProduct(e){
  e.preventDefault(); const id=$('#productId').value; const code=$('#productCode').value.trim();
  if(db.products.some(p=>!p._deleted&&normalizeText(p.code)===normalizeText(code)&&p.id!==id)) return toast('Bu ürün kodu zaten kullanılıyor.');
  const data={name:$('#productName').value.trim(),code,category:$('#productCategory').value.trim()||'Genel',unit:$('#productUnit').value,ostim:Number($('#productOstim').value||0),yenikent:Number($('#productYenikent').value||0),min:Number($('#productMin').value||0),price:Number($('#productPrice').value||0),active:$('#productActive').value==='true',image:productImgData||undefined};
  let pid=id;
  if(id) Object.assign(productById(id),data);
  else{ pid=uid('p'); db.products.push({id:pid,...data}); }
  saveDb(); markDirty('products',pid); closeModal('productModal'); renderAll(); toast('Ürün kaydedildi.');
}
function deleteProduct(id){ const p=productById(id); if(!p)return; if(!confirm(`${p.name} ürününü silmek istiyor musunuz?`))return; p._deleted=true; p.active=false; saveDb(); markDirty('products',id); renderAll(); toast('Ürün silindi.'); }

function openUserModal(id=''){
  const u=id?userById(id):null; $('#userModalTitle').textContent=u?'Kullanıcıyı Düzenle':'Yeni Kullanıcı'; $('#userId').value=u?.id||''; $('#userNameField').value=u?.name||''; $('#usernameField').value=u?.username||''; $('#passwordField').value=u?.password||''; $('#roleField').value=u&&['super_admin','admin'].includes(u.role)?'admin':'depot'; $('#jobField').value=u?.job||''; $('#userActiveField').value=String(u?.active??true); openModal('userModal');
}
function saveUser(e){
  e.preventDefault(); const id=$('#userId').value; const username=$('#usernameField').value.trim();
  if(db.users.some(u=>!u._deleted&&normalizeText(u.username)===normalizeText(username)&&u.id!==id)) return toast('Bu kullanıcı adı zaten kullanılıyor.');
  const data={name:$('#userNameField').value.trim(),username,password:$('#passwordField').value,role:$('#roleField').value,job:$('#jobField').value.trim(),active:$('#userActiveField').value==='true'};
  let uidv=id;
  if(id){ const ex=userById(id); if(ex.protected){ data.role='super_admin'; data.active=true; } Object.assign(ex,data); }
  else{ uidv=uid('u'); db.users.push({id:uidv,...data,assignment:'Genel',protected:false}); }
  saveDb(); markDirty('users',uidv); closeModal('userModal'); renderAll(); toast('Kullanıcı kaydedildi.');
}
function deleteUser(id){ const u=userById(id); if(!u||u.protected)return; if(currentUser.id===id)return toast('Kendi hesabınızı silemezsiniz.'); if(!confirm(`${u.name} kullanıcısını silmek istiyor musunuz?`))return; u._deleted=true; u.active=false; saveDb(); markDirty('users',id); renderAll(); toast('Kullanıcı silindi.'); }

/* ---- QR etiketler ---- */
const OFFSET_KEY='depoTakipLabelOffset';
function labelOffsets(){ try{ return JSON.parse(localStorage.getItem(OFFSET_KEY))||{x:0,y:0}; }catch(e){ return {x:0,y:0}; } }
function saveLabelOffsets(){ localStorage.setItem(OFFSET_KEY,JSON.stringify({x:Number($('#offX').value)||0,y:Number($('#offY').value)||0})); }
function applyLabelOffset(pageEl){ const o=labelOffsets(); pageEl.style.transform=`translate(${o.x}mm,${o.y}mm)`; }
function printTestSheet(){
  const sheet=$('#labelSheet'); sheet.innerHTML='';
  const pageEl=document.createElement('div'); pageEl.className='label-page';
  for(let i=0;i<44;i++){ const c=document.createElement('div'); c.className='label-card test-cell'; c.textContent=i+1; pageEl.appendChild(c); }
  applyLabelOffset(pageEl); sheet.appendChild(pageEl);
  toast('Test sayfası: boş kağıda basın, etiket kağıdının üzerine tutup hizayı kontrol edin. Ölçek %100, kenar boşluğu Yok olmalı.');
  document.body.classList.add('print-labels');
  setTimeout(()=>{ window.print(); document.body.classList.remove('print-labels'); },300);
}
/* ---- Raporlar ---- */
let REPORT_DATA=null;
function periodStart(kind){
  const n=new Date();
  if(kind==='today'){ n.setHours(0,0,0,0); return n.getTime(); }
  if(kind==='week'){ const d=(n.getDay()+6)%7; n.setHours(0,0,0,0); return n.getTime()-d*86400000; }
  if(kind==='month'){ return new Date(n.getFullYear(),n.getMonth(),1).getTime(); }
  return 0;
}
function renderReports(){
  if(!isAdmin()) return;
  const kind=$('#reportPeriod').value;
  const periodName=$('#reportPeriod').selectedOptions[0].text;
  const start=periodStart(kind);
  const act=db.products.filter(p=>p.active&&!p._deleted);
  const mv=db.movements.filter(m=>!m.cancelled&&m.type!=='İptal'&&Number(m.ts)>=start);
  const outs=mv.filter(m=>OUT_TYPES.includes(m.type));
  const group=(list,keyFn)=>{ const map=new Map(); list.forEach(m=>{ const k=keyFn(m); if(!map.has(k)) map.set(k,[]); map.get(k).push(m); }); return map; };
  const sumQty=list=>list.reduce((s,m)=>s+Number(m.qty),0);
  const fmtTl=v=>'₺'+Math.round(v).toLocaleString('tr-TR');

  const byProduct=[...group(outs,m=>m.product).entries()].map(([k,l])=>({name:k,qty:sumQty(l),unit:l[0].unit,count:l.length})).sort((a,b)=>b.count-a.count).slice(0,10);
  const machines=[...group(outs.filter(m=>m.type!=='Satış'),m=>m.target).entries()].map(([k,l])=>({name:k,count:l.length,qtyDesc:[...group(l,x=>x.product).entries()].slice(0,3).map(([pn,pl])=>`${formatQty(sumQty(pl))} ${pl[0].unit} ${pn}`).join(', ')}));
  const byUser=[...group(mv,m=>m.user).entries()].map(([k,l])=>({name:k,count:l.length,out:l.filter(x=>OUT_TYPES.includes(x.type)).length,inn:l.filter(x=>x.type==='Giriş').length,tr:l.filter(x=>x.type==='Transfer').length})).sort((a,b)=>b.count-a.count);
  const sales=outs.filter(m=>m.type==='Satış');
  const salesTotal=sales.reduce((s,m)=>s+((m.billing?.unitPrice||0)*Number(m.qty)),0);
  const byCustomer=[...group(sales,m=>m.target).entries()].map(([k,l])=>({name:k,count:l.length,total:l.reduce((s,m)=>s+((m.billing?.unitPrice||0)*Number(m.qty)),0)})).sort((a,b)=>b.total-a.total).slice(0,10);
  const ins=mv.filter(m=>m.type==='Giriş');
  const insByProduct=[...group(ins,m=>m.product).entries()].map(([k,l])=>({name:k,qty:sumQty(l),unit:l[0].unit,count:l.length})).sort((a,b)=>b.count-a.count).slice(0,10);
  const critical=act.filter(p=>statusOf(p).key==='critical');
  const movedIds=new Set(mv.map(m=>m.productId));
  const dead=act.filter(p=>!movedIds.has(p.id));
  const ostimVal=act.reduce((s,p)=>s+(Number(p.price)||0)*Number(p.ostim),0);
  const yenikentVal=act.reduce((s,p)=>s+(Number(p.price)||0)*Number(p.yenikent),0);

  REPORT_DATA={periodName,byProduct,machines,byUser,sales,salesTotal,byCustomer,insByProduct,critical,dead,ostimVal,yenikentVal};

  const panel=(title,sub,bodyHtml)=>`<article class="panel"><div class="panel-head"><div><h3>${title}</h3><p>${sub}</p></div></div>${bodyHtml}</article>`;
  const table=(heads,rowsHtml,empty)=>rowsHtml?`<div class="table-wrap"><table><thead><tr>${heads.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rowsHtml}</tbody></table></div>`:`<div class="empty">${empty}</div>`;

  $('#reportContent').innerHTML=`
    <div class="report-summary">
      <div class="bill-chip"><small>Dönem</small><b>${escapeHtml(periodName)}</b></div>
      <div class="bill-chip"><small>Toplam İşlem</small><b>${mv.length}</b></div>
      <div class="bill-chip"><small>Satış Tutarı</small><b>${fmtTl(salesTotal)}</b></div>
      <div class="bill-chip total"><small>Stok Değeri</small><b>${fmtTl(ostimVal+yenikentVal)}</b><span>Ostim ${fmtTl(ostimVal)} · Yenikent ${fmtTl(yenikentVal)}</span></div>
    </div>
    ${panel('En Çok Kullanılan Malzemeler','İşlem sayısına göre ilk 10 · '+periodName,
      table(['Malzeme','İşlem','Toplam Miktar'],byProduct.map(r=>`<tr><td><b>${escapeHtml(r.name)}</b></td><td class="num">${r.count}</td><td class="num">${formatQty(r.qty)} ${escapeHtml(r.unit)}</td></tr>`).join(''),'Bu dönemde çıkış yok.'))}
    ${panel('Makine / Vinç Bazında Sarfiyat','Şantiyede ne var takibi · '+periodName,
      table(['Hedef','İşlem','Başlıca Malzemeler'],machines.map(r=>`<tr><td><b>${escapeHtml(r.name)}</b></td><td class="num">${r.count}</td><td>${escapeHtml(r.qtyDesc)}</td></tr>`).join(''),'Bu dönemde makine/vinç çıkışı yok.'))}
    ${panel('Personel Bazında İşlemler',periodName,
      table(['Personel','Toplam','Çıkış','Giriş','Transfer'],byUser.map(r=>`<tr><td><b>${escapeHtml(r.name)}</b></td><td class="num">${r.count}</td><td class="num">${r.out}</td><td class="num">${r.inn}</td><td class="num">${r.tr}</td></tr>`).join(''),'Bu dönemde işlem yok.'))}
    ${panel('Müşteriye Satışlar',`${sales.length} satış · Toplam ${fmtTl(salesTotal)} · ${periodName}`,
      table(['Müşteri','Satış','Tutar'],byCustomer.map(r=>`<tr><td><b>${escapeHtml(r.name)}</b></td><td class="num">${r.count}</td><td class="num">${fmtTl(r.total)}</td></tr>`).join(''),'Bu dönemde satış yok.'))}
    ${panel('Depo Girişleri','Tedarikçi alışları · '+periodName,
      table(['Malzeme','Giriş','Toplam Miktar'],insByProduct.map(r=>`<tr><td><b>${escapeHtml(r.name)}</b></td><td class="num">${r.count}</td><td class="num">${formatQty(r.qty)} ${escapeHtml(r.unit)}</td></tr>`).join(''),'Bu dönemde giriş yok.'))}
    ${panel('Kritik Stok','Şu an minimum seviyenin altında',
      table(['Malzeme','Kod','Mevcut','Minimum'],critical.map(p=>`<tr><td><b>${escapeHtml(p.name)}</b></td><td><code>${escapeHtml(p.code)}</code></td><td class="num">${formatQty(Number(p.ostim)+Number(p.yenikent))} ${escapeHtml(p.unit)}</td><td class="num">${formatQty(p.min)}</td></tr>`).join(''),'Kritik stok yok. 👍'))}
    ${panel('Ölü Stok',periodName+' içinde hiç hareket görmeyen ürünler',
      table(['Malzeme','Kod','Mevcut Stok'],dead.slice(0,30).map(p=>`<tr><td><b>${escapeHtml(p.name)}</b></td><td><code>${escapeHtml(p.code)}</code></td><td class="num">${formatQty(Number(p.ostim)+Number(p.yenikent))} ${escapeHtml(p.unit)}</td></tr>`).join(''),'Ölü stok yok, tüm ürünler hareket görmüş. 👍'))}
  `;
}
function downloadReportCsv(){
  if(!REPORT_DATA) renderReports();
  const r=REPORT_DATA; if(!r) return;
  const rows=[[`DEPO TAKİP RAPORU — ${r.periodName}`],[],
    ['EN ÇOK KULLANILAN MALZEMELER'],['Malzeme','İşlem','Miktar','Birim'],...r.byProduct.map(x=>[x.name,x.count,x.qty,x.unit]),[],
    ['MAKİNE/VİNÇ SARFİYAT'],['Hedef','İşlem','Başlıca Malzemeler'],...r.machines.map(x=>[x.name,x.count,x.qtyDesc]),[],
    ['PERSONEL İŞLEMLERİ'],['Personel','Toplam','Çıkış','Giriş','Transfer'],...r.byUser.map(x=>[x.name,x.count,x.out,x.inn,x.tr]),[],
    ['MÜŞTERİYE SATIŞLAR (Toplam: '+Math.round(r.salesTotal)+' TL)'],['Müşteri','Satış','Tutar (TL)'],...r.byCustomer.map(x=>[x.name,x.count,Math.round(x.total)]),[],
    ['DEPO GİRİŞLERİ'],['Malzeme','Giriş','Miktar','Birim'],...r.insByProduct.map(x=>[x.name,x.count,x.qty,x.unit]),[],
    ['KRİTİK STOK'],['Malzeme','Kod','Mevcut','Minimum'],...r.critical.map(p=>[p.name,p.code,Number(p.ostim)+Number(p.yenikent),p.min]),[],
    ['ÖLÜ STOK'],['Malzeme','Kod','Mevcut'],...r.dead.map(p=>[p.name,p.code,Number(p.ostim)+Number(p.yenikent)]),[],
    ['STOK DEĞERİ'],['Ostim (TL)','Yenikent (TL)','Toplam (TL)'],[Math.round(r.ostimVal),Math.round(r.yenikentVal),Math.round(r.ostimVal+r.yenikentVal)]];
  csvDownload('depo_raporu.csv',rows);
  toast('Rapor indirildi (Excel ile açabilirsiniz).');
}

/* ---- Ürün ekstresi (hareket kartı) ---- */
function openEkstre(id){
  const p=productById(id); if(!p) return;
  $('#ekstreProductInfo').textContent=`${p.name} · ${p.code}${p.category?' · '+p.category:''}`;
  $('#ekstreSummary').innerHTML=`
    <div class="bill-chip"><small>Ostim</small><b>${formatQty(p.ostim)}</b></div>
    <div class="bill-chip"><small>Yenikent</small><b>${formatQty(p.yenikent)}</b></div>
    <div class="bill-chip total"><small>Toplam</small><b>${formatQty(Number(p.ostim)+Number(p.yenikent))} ${escapeHtml(p.unit)}</b></div>`;
  const rows=db.movements.filter(m=>m.productId===p.id).slice(0,300);
  $('#ekstreRows').innerHTML=rows.map(m=>{
    const d=splitDate(m.date);
    const inc=m.type==='Giriş'||m.type==='İade';
    const tr=m.type==='Transfer';
    return `<tr class="${m.negativeStock?'row-negative':''} ${m.cancelled?'row-cancelled':''}"><td><b>${escapeHtml(d.time)}</b><small class="td-sub">${escapeHtml(d.day)}</small></td><td><span class="stock-pill ${movementClass(m.type)}">${escapeHtml(m.type)}</span>${m.cancelled?'<small class="td-sub exception-note">İPTAL EDİLDİ</small>':''}</td><td class="num"><b class="${tr?'':inc?'qty-in':'qty-out'}">${tr?'':inc?'+':'−'}${formatQty(m.qty)}</b> ${escapeHtml(m.unit)}</td><td>${escapeHtml(m.source)} → ${escapeHtml(m.target)}${m.note?`<small class="td-sub">${escapeHtml(m.note)}</small>`:''}${m.exceptionReason?`<small class="td-sub exception-note">İstisnai çıkış: ${escapeHtml(m.exceptionReason)}</small>`:''}</td><td>${escapeHtml(m.user)}</td></tr>`;
  }).join('');
  $('#ekstreEmpty').classList.toggle('hidden',rows.length>0);
  openModal('ekstreModal');
}

/* ---- Etiket yazdırma (ürün seçimli, adet girmeli) ---- */
let mixSel={}; // ürün id -> etiket adedi
function mixDefaultFor(p){
  if($('#mixUseStock')?.checked){
    const stock=Math.ceil(Number(p.ostim||0)+Number(p.yenikent||0));
    return Math.min(Math.max(stock,1),440);
  }
  return Math.min(Math.max(Math.floor(Number($('#mixDefaultQty').value)||1),1),440);
}
function mixProducts(){
  const q=normalizeText($('#mixSearch').value);
  return db.products.filter(p=>p.active&&!p._deleted).filter(p=>!q||normalizeText(`${p.name} ${p.code} ${p.category}`).includes(q));
}
function openMixQrModal(){
  const products=db.products.filter(p=>p.active&&!p._deleted);
  if(!products.length) return toast('Yazdırılacak ürün yok. Önce Ürünler bölümünden ürün ekleyin.');
  mixSel={}; $('#mixSearch').value='';
  renderMixList(); updateMixSummary();
  openModal('mixQrModal');
}
function renderMixList(){
  const rows=mixProducts();
  $('#mixList').innerHTML=rows.length?rows.map(p=>{
    const sel=mixSel[p.id]!==undefined;
    return `<div class="mix-row ${sel?'selected':''}" data-mix-row="${p.id}">
      <input type="checkbox" data-mix-check="${p.id}" ${sel?'checked':''}>
      <div class="mix-info"><b>${escapeHtml(p.name)}</b><small class="td-sub"><code>${escapeHtml(p.code)}</code> · Stok: ${formatQty(Number(p.ostim)+Number(p.yenikent))} ${escapeHtml(p.unit)}</small></div>
      <label class="mix-qty ${sel?'':'hidden'}">Adet <input type="number" min="1" max="440" value="${sel?mixSel[p.id]:''}" data-mix-qty="${p.id}"></label>
    </div>`;
  }).join(''):'<div class="empty">Aramaya uygun ürün yok.</div>';
  $$('[data-mix-check]').forEach(c=>c.onchange=()=>toggleMixProduct(c.dataset.mixCheck,c.checked));
  $$('[data-mix-row]').forEach(r=>r.onclick=e=>{
    if(e.target.closest('input'))return;
    const id=r.dataset.mixRow; toggleMixProduct(id,mixSel[id]===undefined);
  });
  $$('[data-mix-qty]').forEach(inp=>{
    inp.onclick=e=>e.stopPropagation();
    inp.oninput=()=>{ const v=Math.min(Math.max(Math.floor(Number(inp.value)||0),0),440); if(v>0) mixSel[inp.dataset.mixQty]=v; updateMixSummary(); };
  });
}
function toggleMixProduct(id,on){
  if(on){ const p=productById(id); mixSel[id]=p?mixDefaultFor(p):1; }
  else delete mixSel[id];
  renderMixList(); updateMixSummary();
}
function updateMixSummary(){
  const ids=Object.keys(mixSel);
  const total=ids.reduce((s,id)=>s+(mixSel[id]||0),0);
  $('#mixSummary').textContent=`${ids.length} ürün · ${total} etiket (${Math.ceil(total/44)||0} sayfa)`;
  $('#mixPrintBtn').disabled=!total;
}
function mixSelectAllToggle(){
  const rows=mixProducts();
  const allSelected=rows.length&&rows.every(p=>mixSel[p.id]!==undefined);
  if(allSelected){ rows.forEach(p=>delete mixSel[p.id]); }
  else{ rows.forEach(p=>{ if(mixSel[p.id]===undefined) mixSel[p.id]=mixDefaultFor(p); }); }
  renderMixList(); updateMixSummary();
}
function shuffleArray(arr){
  for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; }
  return arr;
}
function printMixQr(){
  if(!window.QRCode) return toast('QR bileşeni yüklenemedi. İnternet bağlantısını kontrol edin.');
  // Gruplar bir arada: kategoriye, sonra ada göre sırala; aynı ürünün etiketleri peş peşe
  const ordered=Object.keys(mixSel).map(id=>productById(id)).filter(Boolean)
    .sort((a,b)=>(a.category||'').localeCompare(b.category||'','tr')||a.name.localeCompare(b.name,'tr'));
  const items=[];
  ordered.forEach(p=>{ for(let i=0;i<(mixSel[p.id]||0);i++) items.push(p); });
  if(!items.length) return toast('Önce ürün seçin.');
  const sheet=$('#labelSheet'); sheet.innerHTML='';
  for(let i=0;i<items.length;i+=44){
    const page=items.slice(i,i+44);
    // Yukarıdan aşağıya akış: 1. sütun 1-11, 2. sütun 12-22... (kesme kolaylığı için)
    const cells=new Array(44).fill(null);
    page.forEach((p,k)=>{ const col=Math.floor(k/11), row=k%11; cells[row*4+col]=p; });
    const pageEl=document.createElement('div'); pageEl.className='label-page';
    cells.forEach(p=>{
      const card=document.createElement('div'); card.className='label-card';
      if(p){
        const qr=document.createElement('div'); qr.className='label-qr';
        const txt=document.createElement('div'); txt.className='label-text';
        const name=document.createElement('b'); name.textContent=p.name;
        const code=document.createElement('code'); code.textContent=p.code;
        txt.append(name,code); card.append(qr,txt);
        new QRCode(qr,{text:`DEPO-TAKIP|${p.code}`,width:132,height:132,colorDark:'#000000',colorLight:'#ffffff',correctLevel:QRCode.CorrectLevel.M});
      }
      pageEl.appendChild(card);
    });
    applyLabelOffset(pageEl); sheet.appendChild(pageEl);
  }
  closeModal('mixQrModal');
  toast(`${items.length} etiket hazırlandı (${Math.ceil(items.length/44)} sayfa) — aynı ürünler peş peşe, yukarıdan aşağıya. Kenar boşluğu "Yok", ölçek %100 olmalı.`);
  document.body.classList.add('print-labels');
  setTimeout(()=>{ window.print(); document.body.classList.remove('print-labels'); },300);
}
function openQr(id){
  const p=productById(id); if(!p)return; $('#qrProductName').textContent=p.name; $('#qrLabelName').textContent=p.name; $('#qrCodeText').textContent=p.code; $('#qrCode').innerHTML='';
  if(window.QRCode){ new QRCode($('#qrCode'),{text:`DEPO-TAKIP|${p.code}`,width:210,height:210,colorDark:'#0d1526',colorLight:'#ffffff',correctLevel:QRCode.CorrectLevel.H}); }
  else $('#qrCode').textContent='QR bileşeni yüklenemedi.';
  openModal('qrModal');
}

/* ---- QR tarama ve hızlı işlem ---- */
let scanStream=null, scanRafId=null, scanActive=false, scannedProduct=null, scanDetector=null, scanCanvas=null, lastMissText='', lastMissAt=0, scanMode='Çıkış', scanStartAt=0, lastDecodeAt=0, torchOn=false, slowHintShown=false, pendingManual=null, scanPass=0, scanZoom=1, negativeConfirmed=false;

function openScanner(){
  if(!canWrite()) return toast('Bu hesabın stok işlemi yetkisi yok.');
  pendingManual=null;
  openModal('scanModal'); showScanStep('mode');
}
function openScannerWithMode(mode){
  if(!canWrite()) return toast('Bu hesabın stok işlemi yetkisi yok.');
  pendingManual=null;
  openModal('scanModal'); scanMode=mode; startScanner();
}
function openQuickForProduct(id){
  if(!canWrite()) return toast('Bu hesabın stok işlemi yetkisi yok.');
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
  $('#manualPickBtn').classList.toggle('hidden',step!=='scan');
  $('#scanPickStep').classList.toggle('hidden',step!=='pick');
  $('#scanResult').classList.toggle('hidden',step!=='result');
  $('#scanModalDesc').textContent=step==='mode'?'Ne yapacaksınız?':step==='scan'?`${scanMode} için malzemenin QR etiketini kameraya gösterin.`:step==='pick'?`${scanMode} için ürünü listeden seçin.`:`${scanMode} bilgilerini doldurup kaydedin.`;
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
    scanStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'},width:{ideal:1920},height:{ideal:1080},advanced:[{focusMode:'continuous'}]},audio:false});
    const video=$('#scanVideo'); video.srcObject=scanStream; await video.play();
    if(!scanDetector&&'BarcodeDetector' in window){ try{ scanDetector=new BarcodeDetector({formats:['qr_code']}); }catch(e){ scanDetector=null; } }
    const caps=scanStream.getVideoTracks()[0]?.getCapabilities?.()||{};
    scanZoom=1; $('#zoomBtn').classList.toggle('hidden',!caps.zoom); $('#zoomBtn').textContent='1x';
    scanActive=true; scanStartAt=Date.now(); torchOn=false; slowHintShown=false; scanPass=0; status.textContent='QR kodu çerçeveye hizalayın…';
    scanLoop();
  }catch(e){ status.textContent='Kameraya erişilemedi. Tarayıcı ayarlarından kamera iznini verin.'; }
}
async function applyZoom(z){
  const track=scanStream?.getVideoTracks?.()[0]; if(!track) return;
  try{
    const caps=track.getCapabilities?.(); if(!caps||!caps.zoom) return;
    const val=Math.min(caps.zoom.max||z,Math.max(caps.zoom.min||1,z));
    await track.applyConstraints({advanced:[{zoom:val}]});
    scanZoom=val; $('#zoomBtn').textContent=`${Math.round(val*10)/10}x`;
  }catch(e){}
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
    }else if(window.jsQR&&Date.now()-lastDecodeAt>110){
      lastDecodeAt=Date.now();
      scanCanvas=scanCanvas||document.createElement('canvas');
      const ctx=scanCanvas.getContext('2d',{willReadFrequently:true});
      const vw=video.videoWidth, vh=video.videoHeight;
      const pass=scanPass++%3;
      let sx=0,sy=0,sw=vw,sh=vh,dw,dh;
      if(pass===0){ const scale=Math.min(1,1024/vw); dw=Math.round(vw*scale); dh=Math.round(vh*scale); }
      else if(pass===1){ const c=Math.round(Math.min(vw,vh)*0.62); sx=Math.round((vw-c)/2); sy=Math.round((vh-c)/2); sw=sh=c; dw=dh=c; }
      else{ const c=Math.round(Math.min(vw,vh)*0.42); sx=Math.round((vw-c)/2); sy=Math.round((vh-c)/2); sw=sh=c; dw=dh=c; }
      scanCanvas.width=dw; scanCanvas.height=dh;
      ctx.drawImage(video,sx,sy,sw,sh,0,0,dw,dh);
      const img=ctx.getImageData(0,0,dw,dh);
      const found=jsQR(img.data,img.width,img.height,{inversionAttempts:'attemptBoth'});
      if(found&&found.data) text=found.data;
    }
    if(!text&&!slowHintShown&&Date.now()-scanStartAt>7000){
      slowHintShown=true;
      $('#scanStatus').textContent='Okunmuyorsa: telefonu etikete 10-15 cm yaklaştırın ve sabit tutun. Küçük etiket için sağ alttaki 1x butonuyla yakınlaştırın, karanlıkta 💡 feneri açın.';
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
  const product=db.products.find(p=>p.active&&!p._deleted&&normalizeText(p.code)===normalizeText(code));
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
  $('#scanAvatar').innerHTML=product.image?`<img src="${product.image}" alt="">`:escapeHtml((product.name||'Ü')[0]);
  $('#scanProductName').textContent=product.name;
  $('#scanProductMeta').textContent=`${product.code} · ${product.category} · ${product.unit}`;
  $('#scanOstim').textContent=formatQty(product.ostim); $('#scanYenikent').textContent=formatQty(product.yenikent); $('#scanTotal').textContent=formatQty(Number(product.ostim)+Number(product.yenikent));
  const isIn=scanMode==='Giriş'; const isTransfer=scanMode==='Transfer';
  const badge=$('#scanModeBadge'); badge.textContent=scanMode.toLocaleUpperCase('tr-TR'); badge.className=`stock-pill ${isIn?'pill-ok':isTransfer?'pill-transfer':'pill-critical'}`;
  $('#quickDepotLabel').textContent=isIn?'Hangi depoya giriş yapılacak?':isTransfer?'Hangi depodan alınacak? (diğer depoya aktarılır)':'Hangi depodan çıkılacak?';
  $('#quickTargetField').classList.toggle('hidden',isIn||isTransfer);
  $('#quickNoteField').classList.toggle('hidden',isIn||isTransfer); $('#quickNote').value='';
  $('#quickReasonField').classList.add('hidden'); $('#quickReason').value='';
  $('#quickTarget').selectedIndex=0; // her zaman "Müşteriye Satış" ile başla
  updateQuickCustomer();
  negativeConfirmed=false;
  const qw=$('#quickWarning'); qw.classList.add('hidden'); qw.classList.remove('warning-big'); $('#quickQty').value=1;
  showScanStep('result');
}

function openManualPick(){ showScanStep('pick'); $('#pickSearch').value=''; renderPickList(); setTimeout(()=>$('#pickSearch').focus(),100); }
function renderPickList(){
  const q=normalizeText($('#pickSearch').value);
  const rows=db.products.filter(p=>p.active&&!p._deleted).filter(p=>!q||normalizeText(`${p.name} ${p.code}`).includes(q)).slice(0,30);
  $('#pickList').innerHTML=rows.length?rows.map(p=>`<button type="button" class="pick-item" data-pick="${p.id}">${productThumb(p,'thumb')}<span><b>${escapeHtml(p.name)}</b><small>${escapeHtml(p.code)} · Ostim ${formatQty(p.ostim)} · Yenikent ${formatQty(p.yenikent)}</small></span></button>`).join(''):'<div class="empty">Ürün bulunamadı.</div>';
  $$('[data-pick]').forEach(b=>b.onclick=()=>{ const p=productById(b.dataset.pick); if(p) populateScanResult(p); });
}
function updateQuickCustomer(){
  const show=scanMode==='Çıkış'&&$('#quickTarget').value==='customer';
  $('#quickCustomerField').classList.toggle('hidden',!show);
}
function submitQuick(e){
  e.preventDefault();
  if(!scannedProduct||!canWrite()) return;
  const p=productById(scannedProduct.id); if(!p) return;
  const qty=Number($('#quickQty').value); const warning=$('#quickWarning'); warning.classList.add('hidden');
  if(!qty||qty<=0) return toast('Geçerli bir miktar girin.');
  const depot=$('#quickDepot').value; const key=depot==='Ostim Depo'?'ostim':'yenikent';
  let type,source,target,outNote='',exceptionReason='';
  if(scanMode==='Giriş'){ type='Giriş'; source='Tedarikçi'; target=depot; p[key]=Number(p[key])+qty; }
  else if(scanMode==='Transfer'){
    const otherKey=key==='ostim'?'yenikent':'ostim';
    const otherDepot=depot==='Ostim Depo'?'Yenikent Depo':'Ostim Depo';
    if(Number(p[key])<qty){ warning.textContent=`Yetersiz stok: ${depot} deposunda ${formatQty(p[key])} ${p.unit} var.`; warning.classList.remove('hidden'); return; }
    type='Transfer'; source=depot; target=otherDepot;
    p[key]=Number(p[key])-qty; p[otherKey]=Number(p[otherKey])+qty;
  }
  else{
    outNote=$('#quickNote').value.trim();
    if(!outNote) return toast('Nereye gittiğini yazmadan çıkış kaydedilemez. "Nereye gidiyor?" alanını doldurun.');
    const t=$('#quickTarget').value;
    if(t==='customer'){ const cust=$('#quickCustomer').value.trim(); if(!cust) return toast('Müşteri adını girin.'); type='Satış'; target=cust; }
    else if(t==='Vinç 1'){ type='Vinç Çıkışı'; target=t; }
    else{ type='Makine Çıkışı'; target=t; }
    source=depot;
    if(Number(p[key])<qty){
      if(!isAdmin()){
        warning.innerHTML=`⛔ YETERSİZ STOK — İŞLEM YAPILAMAZ!<br>${depot} deposunda <b>${formatQty(p[key])} ${p.unit}</b> var. Stok eksiye düşemez.<br>İstisnai çıkış yetkisi yalnızca yöneticidedir.`;
        warning.classList.remove('hidden'); warning.classList.add('warning-big');
        return;
      }
      $('#quickReasonField').classList.remove('hidden');
      exceptionReason=$('#quickReason').value.trim();
      if(!negativeConfirmed){
        negativeConfirmed=true;
        warning.innerHTML=`⚠ STOK YETERSİZ — İSTİSNAİ ÇIKIŞ!<br>${depot} deposunda <b>${formatQty(p[key])} ${p.unit}</b> var, <b>${formatQty(qty)} ${p.unit}</b> çıkış yapıyorsunuz.<br>Devam etmek için <b>istisna nedenini</b> yazıp tekrar <b>Kaydet</b>'e basın.`;
        warning.classList.remove('hidden'); warning.classList.add('warning-big');
        return;
      }
      if(!exceptionReason){ toast('İstisna nedeni yazılmadan istisnai çıkış kaydedilemez.'); return; }
    }
    p[key]=Number(p[key])-qty;
  }
  const mv={id:uid('m'),date:formatNow(),ts:Date.now(),type,productId:p.id,product:p.name,qty,unit:p.unit,source,target,user:currentUser.name,userId:currentUser.id,reference:'QR',note:outNote};
  if(OUT_TYPES.includes(type)&&Number(p[key])<0) mv.negativeStock=true;
  if(exceptionReason){ mv.negativeStock=true; mv.exceptionReason=exceptionReason; addNotification('⚠ İstisnai çıkış',`${currentUser.name}: ${formatQty(qty)} ${p.unit} ${p.name} — Neden: ${exceptionReason}`); }
  if(OUT_TYPES.includes(type)) mv.billing={status:'pending',invoiced:null,paid:null,unitPrice:null,note:''};
  db.movements.unshift(mv);
  markDirty('movements',mv.id); markDirty('products',p.id);
  addNotification(`${type}: ${p.name}`,`${currentUser.name}, ${formatQty(qty)} ${p.unit} ${p.name} — ${source} → ${target}`);
  if(scanMode!=='Giriş'&&statusOf(p).key==='critical') addNotification('⚠ Kritik stok uyarısı',`${p.name} minimum seviyenin altına düştü (kalan: ${formatQty(Number(p.ostim)+Number(p.yenikent))} ${p.unit}).`);
  saveDb();
  toast(`Kaydedildi: ${formatQty(qty)} ${p.unit} ${p.name} · ${type}.`);
  $('#quickCustomer').value='';
  if(isPanelUser()) renderAll(); else renderStaffLast();
  pendingManual=null; closeModal('scanModal');
}


/* ---- Toplu Çıkış ---- */
let bulkParsed=null;
function bulkNorm(s){ return normalizeText(s).replace(/\s+/g,' ').trim(); }
function bulkMatchLine(line){
  const nl=bulkNorm(line);
  let best=null,bestLen=0;
  db.products.filter(p=>p.active&&!p._deleted).forEach(p=>{
    [p.code,p.name].forEach(key=>{
      const nk=bulkNorm(key); if(!nk) return;
      const idx=nl.indexOf(nk);
      if(idx===-1) return;
      const before=idx===0?' ':nl[idx-1];
      const after=(idx+nk.length>=nl.length)?' ':nl[idx+nk.length];
      if(before!==' '||after!==' ') return; // kelime sınırı: "SK415/2" vs "SK415/28" karışmasın
      if(nk.length>bestLen){ best=p; bestLen=nk.length; }
    });
  });
  return best;
}
function parseBulk(){
  const lines=$('#bulkText').value.split('\n').map(l=>l.trim()).filter(Boolean);
  const tally=new Map(); const unmatched=new Map();
  lines.forEach(l=>{
    const p=bulkMatchLine(l);
    if(p){ const e=tally.get(p.id)||{p,count:0}; e.count++; tally.set(p.id,e); }
    else unmatched.set(l,(unmatched.get(l)||0)+1);
  });
  bulkParsed={tally:[...tally.values()],unmatched:[...unmatched.entries()],totalLines:lines.length};
  renderBulkPreview();
}
function renderBulkPreview(){
  const box=$('#bulkPreview');
  if(!bulkParsed||!bulkParsed.totalLines){ box.innerHTML=''; $('#bulkSaveBtn').disabled=true; $('#bulkSaveBtn').textContent='Çıkışları Kaydet'; return; }
  const depot=$('#bulkDepot').value; const key=depot==='Ostim Depo'?'ostim':'yenikent';
  const rows=bulkParsed.tally.map(e=>{
    const have=Number(e.p[key])||0; const short=have<e.count;
    return `<div class="bulk-row ${short?'short':''}">${productThumb(e.p)}<div class="bulk-info"><b>${escapeHtml(e.p.name)}</b><small>${escapeHtml(e.p.code)} · ${depot}: ${formatQty(have)} ${escapeHtml(e.p.unit)}${short?' — ⚠ yetersiz':''}</small></div><b class="bulk-count">× ${e.count}</b></div>`;
  }).join('');
  const un=bulkParsed.unmatched.map(([l,n])=>`<div class="bulk-row un"><span>❓</span><div class="bulk-info"><b>${escapeHtml(l)}</b><small>eşleşmedi — ürün adını/kodunu kontrol edin</small></div><b class="bulk-count">× ${n}</b></div>`).join('');
  const totalQty=bulkParsed.tally.reduce((s,e)=>s+e.count,0);
  box.innerHTML=rows+un;
  $('#bulkSaveBtn').disabled=!bulkParsed.tally.length;
  $('#bulkSaveBtn').textContent=`Çıkışları Kaydet (${bulkParsed.tally.length} ürün · ${totalQty} adet)`;
}
function openBulkModal(){
  if(!isAdmin()) return;
  $('#bulkText').value=''; $('#bulkNote').value=''; $('#bulkCustomer').value='';
  bulkParsed=null; renderBulkPreview(); updateBulkCustomer();
  openModal('bulkModal');
}
function updateBulkCustomer(){ $('#bulkCustomerField').classList.toggle('hidden',$('#bulkTarget').value!=='customer'); }
async function saveBulk(){
  if(!isAdmin()||!bulkParsed||!bulkParsed.tally.length) return;
  if(bulkParsed.unmatched.length&&!confirm(`${bulkParsed.unmatched.length} satır eşleşmedi ve ATLANACAK. Sadece eşleşen ürünlerle devam edilsin mi?`)) return;
  const depot=$('#bulkDepot').value; const key=depot==='Ostim Depo'?'ostim':'yenikent';
  const t=$('#bulkTarget').value; let note=$('#bulkNote').value.trim();
  let type,target;
  if(t==='sayim'){ type='Sayım Düzeltme'; target=depot; if(!note) note='Fazla sayım düzeltmesi'; }
  else if(t==='customer'){ const cust=$('#bulkCustomer').value.trim(); if(!cust) return toast('Müşteri adını girin.'); type='Satış'; target=cust; }
  else if(t==='Vinç 1'){ type='Vinç Çıkışı'; target=t; }
  else{ type='Makine Çıkışı'; target=t; }
  if(!note) return toast('Açıklama alanını doldurun (nereye/neden).');
  const shorts=bulkParsed.tally.filter(e=>(Number(e.p[key])||0)<e.count);
  if(shorts.length&&!confirm(`⚠ ${shorts.length} üründe stok yetersiz, eksiye düşecek:\n${shorts.map(e=>`- ${e.p.name} (var: ${formatQty(e.p[key])}, çıkış: ${e.count})`).join('\n')}\nYine de devam edilsin mi?`)) return;
  let totalQty=0;
  bulkParsed.tally.forEach(e=>{
    const p=productById(e.p.id); if(!p) return;
    p[key]=Number(p[key])-e.count; totalQty+=e.count;
    const mv={id:uid('m'),date:formatNow(),ts:Date.now(),type,productId:p.id,product:p.name,qty:e.count,unit:p.unit,source:depot,target,user:currentUser.name,userId:currentUser.id,reference:'TOPLU',note};
    if(Number(p[key])<0){ mv.negativeStock=true; mv.exceptionReason=`Toplu çıkış: ${note}`; }
    if(OUT_TYPES.includes(type)) mv.billing={status:'pending',invoiced:null,paid:null,unitPrice:null,note:''};
    db.movements.unshift(mv);
    markDirty('movements',mv.id); markDirty('products',p.id);
  });
  addNotification(`📋 Toplu çıkış: ${target}`,`${currentUser.name}: ${bulkParsed.tally.length} ürün, ${formatQty(totalQty)} adet — ${depot}. ${note}`);
  saveDb(); closeModal('bulkModal'); renderAll();
  toast(`Toplu ${type==='Sayım Düzeltme'?'sayım düzeltmesi':'çıkış'} kaydedildi: ${bulkParsed.tally.length} ürün, ${formatQty(totalQty)} adet.${OUT_TYPES.includes(type)?' Muhasebe kuyruğuna eklendi.':''}`);
}
/* ---- Modal / araçlar ---- */
function openModal(id){ $('#modalOverlay').classList.remove('hidden'); $(`#${id}`).classList.remove('hidden'); }
function closeModal(id){ if(id==='scanModal'){ stopScanner(); pendingManual=null; } $(`#${id}`).classList.add('hidden'); if(!$$('.modal:not(.hidden)').length) $('#modalOverlay').classList.add('hidden'); }

function csvDownload(filename,rows){
  const csv='﻿'+rows.map(r=>r.map(v=>`"${String(v??'').replaceAll('"','""')}"`).join(';')).join('\n'); const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'})); a.download=filename; a.click(); URL.revokeObjectURL(a.href);
}
function downloadStockCsv(){ csvDownload('depo_stoklari.csv',[['Ürün','Kod','Kategori','Birim','Ostim','Yenikent','Toplam','Minimum','Durum'],...db.products.map(p=>[p.name,p.code,p.category,p.unit,p.ostim,p.yenikent,Number(p.ostim)+Number(p.yenikent),p.min,p.active?'Aktif':'Pasif'])]); toast('Stok raporu indirildi.'); }
function downloadMovementCsv(){ csvDownload('depo_hareketleri.csv',[['Tarih','İşlem','Ürün','Miktar','Birim','Nereden','Nereye','Personel'],...db.movements.map(m=>[m.date,m.type,m.product,m.qty,m.unit,m.source,m.target,m.user])]); toast('Hareket raporu indirildi.'); }
function downloadBackup(){
  // Güvenlik: şifreler yedek dosyasına dahil edilmez
  const safe=deepClone(db); safe.users.forEach(u=>{ delete u.password; }); safe._passwordsExcluded=true;
  const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([JSON.stringify(safe,null,2)],{type:'application/json'})); a.download=`depo_takip_yedek_${new Date().toISOString().slice(0,10)}.json`; a.click(); URL.revokeObjectURL(a.href);
  toast('Yedek indirildi. Güvenlik için şifreler dosyaya dahil edilmez.');
}
function restoreBackup(file){
  const reader=new FileReader(); reader.onload=async()=>{ try{
    const data=migrate(JSON.parse(reader.result));
    if(!confirm(`DİKKAT: Geri yükleme mevcut verilerin ÜZERİNE yazar ve TÜM cihazlara yansır.\n\nYedekte: ${data.products.length} ürün, ${data.movements.length} hareket\nŞu an: ${db.products.filter(p=>!p._deleted).length} ürün, ${db.movements.length} hareket\n\nDevam edilsin mi?`))return;
    if(!confirm('SON ONAY: Yedek eski tarihliyse, yedekten SONRA yapılan tüm işlemler kaybolur. Emin misiniz?'))return;
    // Şifresiz yedekte mevcut kullanıcıların şifreleri korunur
    data.users.forEach(u=>{ if(!u.password){ const cur=db.users.find(x=>normalizeText(x.username)===normalizeText(u.username)); u.password=cur?cur.password:'depo123'; } });
    const now=Date.now();
    db=data; db.epochs={products:now,users:now,movements:now};
    saveDb(); markAllDirty();
    try{ if(cloudOk) await pushCloudMeta(); }catch(e){}
    refreshAuthView(); if(currentUser&&isPanelUser()){ applyShellPerms(); renderAll(); goPage('dashboard'); } toast('Yedek yüklendi. Şifresi olmayan yeni kullanıcılar için geçici şifre: depo123'); }catch(e){toast('Yedek dosyası geçerli değil.');} }; reader.readAsText(file);
}
/* ---- Bulut otomatik yedek: günde 1 kez, 30 gün saklanır ---- */
async function cloudAutoBackup(){
  if(!currentUser||!isAdmin()) return;
  try{
    const today=new Date().toISOString().slice(0,10);
    if(localStorage.getItem('depoTakipLastCloudBackup')===today) return;
    const slim=deepClone(db); slim.users.forEach(u=>{ delete u.password; }); slim.products.forEach(p=>{ delete p.image; });
    await cloudFetch('auto_backups',{method:'POST',headers:{'Prefer':'resolution=merge-duplicates'},body:JSON.stringify([{id:today,data:slim}])});
    localStorage.setItem('depoTakipLastCloudBackup',today);
    const cutoff=new Date(Date.now()-30*86400000).toISOString().slice(0,10);
    await cloudFetch(`auto_backups?id=lt.${cutoff}`,{method:'DELETE'});
  }catch(e){ /* auto_backups tablosu yoksa sessizce geç */ }
}
async function resetSystem(){
  if(currentUser&&currentUser.role!=='super_admin') return toast('Bu işlemi sadece Sistem Yöneticisi yapabilir.');
  if(!confirm('FABRİKA FORMATI: ürünler, kullanıcılar, hareketler ve muhasebe — HER ŞEY, TÜM cihazlardan silinecek. Emin misiniz?'))return;
  if(!confirm('Son onay: bu işlem geri alınamaz. Önce "Tam Yedek Al" yaptınız mı?'))return;
  takeSafetySnapshot('Fabrika formatı öncesi');
  const now=Date.now();
  Object.values(dirtyIds).forEach(s=>s.clear());
  try{ if(cloudOk){ for(const t of Object.values(CLOUD_TABLES)) await cloudWipeTable(t); } }catch(e){ toast('Bulut temizliği başarısız: '+e.message); return; }
  localStorage.removeItem(SESSION_KEY);
  db=deepClone(seed); db.epochs={products:now,users:now,movements:now};
  try{ if(cloudOk) await pushCloudMeta(); }catch(e){}
  saveDb(); markAllDirty();
  currentUser=null; $('#appView').classList.add('hidden'); $('#staffView').classList.add('hidden'); $('#loginView').classList.remove('hidden'); refreshAuthView();
  toast('Sistem formatlandı. Yönetici hesabıyla giriş yapın.');
}

function bindEvents(){
  $('#loginForm').addEventListener('submit',e=>{e.preventDefault();login($('#loginUser').value,$('#loginPass').value);});
  $('#setupForm').addEventListener('submit',completeSetup);
  $('#logoutBtn').onclick=logout; $('#staffLogoutBtn').onclick=logout;
  $('#setupRestoreBtn').onclick=()=>$('#setupRestoreInput').click();
  $('#setupRestoreInput').onchange=e=>{ const f=e.target.files[0]; if(f) restoreBackup(f); e.target.value=''; };
  $$('[data-page]').forEach(b=>b.onclick=()=>goPage(b.dataset.page));
  $('#menuBtn').onclick=()=>{ $('#sidebar').classList.toggle('open'); $('#sidebarOverlay').classList.toggle('hidden'); };
  $('#tabMenuBtn').onclick=()=>{ $('#sidebar').classList.add('open'); $('#sidebarOverlay').classList.remove('hidden'); };
  $('#sidebarOverlay').onclick=()=>{ $('#sidebar').classList.remove('open'); $('#sidebarOverlay').classList.add('hidden'); };
  $('#scanTopBtn').onclick=openScanner;
  $('#notifBtn').onclick=toggleNotifPanel;
  $('#markReadBtn').onclick=()=>{ db.notifications.forEach(n=>n.read=true); saveDb(); renderNotifications(); };
  $('#staffScanIn').onclick=()=>openScannerWithMode('Giriş');
  $('#staffScanOut').onclick=()=>openScannerWithMode('Çıkış');
  $$('[data-close-modal]').forEach(b=>b.onclick=()=>closeModal(b.dataset.closeModal));
  $('#modalOverlay').onclick=()=>$$('.modal:not(.hidden)').forEach(m=>closeModal(m.id));
  $('#addProductBtn').onclick=()=>openProductModal(); $('#productForm').onsubmit=saveProduct;
  $('#pickImgBtn').onclick=()=>$('#productImgInput').click();
  $('#productImgInput').onchange=e=>{ const f=e.target.files[0]; if(f) handleProductImage(f); e.target.value=''; };
  $('#removeImgBtn').onclick=()=>{ productImgData=null; setProductImgPreview(); };
  $('#addUserBtn').onclick=()=>openUserModal(); $('#userForm').onsubmit=saveUser;
  $('#printQrBtn').onclick=()=>window.print(); $('#printAllQrBtn').onclick=openMixQrModal;
  $('#mixUseStock').onchange=()=>{
    $('#mixDefaultWrap').style.display=$('#mixUseStock').checked?'none':'';
    Object.keys(mixSel).forEach(id=>{ const p=productById(id); if(p) mixSel[id]=mixDefaultFor(p); });
    renderMixList(); updateMixSummary();
  };
  $('#mixPrintBtn').onclick=printMixQr;
  $('#mixSearch').addEventListener('input',renderMixList); $('#mixSelectAll').onclick=mixSelectAllToggle;
  $('#scanModeIn').onclick=()=>chooseScanMode('Giriş'); $('#scanModeOut').onclick=()=>chooseScanMode('Çıkış');
  $('#scanModeTransfer').onclick=()=>chooseScanMode('Transfer');
  $('#scanBackBtn').onclick=()=>{ pendingManual=null; showScanStep('mode'); };
  $('#manualPickBtn').onclick=openManualPick;
  $('#pickBackBtn').onclick=()=>startScanner();
  $('#pickSearch').addEventListener('input',renderPickList);
  $('#torchBtn').onclick=toggleTorch;
  $('#zoomBtn').onclick=()=>{ const next=scanZoom>=3?1:scanZoom>=2?3:2; applyZoom(next); };
  $('#quickForm').onsubmit=submitQuick; $('#quickTarget').onchange=updateQuickCustomer;
  $('#rescanBtn').onclick=()=>{ pendingManual=null; startScanner(); };
  $('#stockSearch').addEventListener('input',renderStocks);
  $('#movementSearch').addEventListener('input',renderMovements); $('#movementType').addEventListener('input',renderMovements);
  $('#productAdminSearch').addEventListener('input',renderProducts);
  $('#userSearch').addEventListener('input',renderUsers);
  $('#billSearch').addEventListener('input',renderBilling); $('#billFilter').addEventListener('input',renderBilling);
  $('#billCsvBtn').onclick=downloadBillingCsv;
  $('#segInvYes').onclick=()=>{billInv=true;updateBillSegs();};
  $('#segInvNo').onclick=()=>{billInv=false;updateBillSegs();};
  $('#segPaidYes').onclick=()=>{billPaid=true;updateBillSegs();};
  $('#segPaidNo').onclick=()=>{billPaid=false;updateBillSegs();};
  $('#billSaveBtn').onclick=saveBilling;
  $('#mBillingCard').onclick=()=>goPage('muhasebe');
  $('#stockCsvBtn').onclick=downloadStockCsv; $('#movementCsvBtn').onclick=downloadMovementCsv;
  $('#reportPeriod').onchange=renderReports; $('#reportCsvBtn').onclick=downloadReportCsv; $('#reportPdfBtn').onclick=()=>{ renderReports(); window.print(); };
  $('#settingsStockCsv').onclick=downloadStockCsv; $('#settingsMovementCsv').onclick=downloadMovementCsv;
  $('#backupBtn').onclick=downloadBackup; $('#restoreBtn').onclick=()=>$('#restoreInput').click();
  $('#restoreInput').onchange=e=>e.target.files[0]&&restoreBackup(e.target.files[0]);
  const off=labelOffsets(); $('#offX').value=off.x; $('#offY').value=off.y;
  $('#offX').addEventListener('input',saveLabelOffsets); $('#offY').addEventListener('input',saveLabelOffsets);
  $('#testSheetBtn').onclick=printTestSheet;
  $('#bulkOutBtn').onclick=openBulkModal;
  $('#bulkText').addEventListener('input',parseBulk);
  $('#bulkDepot').addEventListener('input',()=>renderBulkPreview());
  $('#bulkTarget').addEventListener('input',()=>{updateBulkCustomer();});
  $('#bulkSaveBtn').onclick=saveBulk;
  $('#resetBtn').onclick=resetSystem;
  $('#resetMovementsBtn').onclick=resetMovementsFormat;
  $('#resetStocksBtn').onclick=resetStocksFormat;
}

bindEvents();
refreshAuthView();
const savedSessionUser=userById(localStorage.getItem(SESSION_KEY)||'');
if(savedSessionUser&&savedSessionUser.active) enterApp(savedSessionUser);
$$('.cloud-chip').forEach(el=>el.onclick=()=>toast(cloudOk?'Bulut bağlantısı sorunsuz çalışıyor.':(cloudLastError?`Bulut hatası: ${cloudLastError}`:'Buluta bağlanılıyor, birkaç saniye bekleyin...')));
cloudSync();
document.addEventListener('visibilitychange',()=>{ if(document.visibilityState==='visible') scheduleSync(400); });
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(console.error));

/* ---- Mobil: yakinlastirma (zoom) ve yatay kayma engelleme ---- */
["gesturestart","gesturechange","gestureend"].forEach(ev=>document.addEventListener(ev,e=>e.preventDefault()));
let __lastTouchEnd=0;
document.addEventListener("touchend",e=>{ const now=Date.now(); if(now-__lastTouchEnd<300&&e.cancelable) e.preventDefault(); __lastTouchEnd=now; },{passive:false});
