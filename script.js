const products = [
 {id:1,name:'Tissue Genie - Toilet Tissue',category:'Toilet Tissue',pack:'18 pack',ply:'2 ply',sheets:'200 sheets',size:'110mm x 100mm',code:'0746747120624',image:'product-01_tissue-genie-18-pack-2ply-200-sheets.png',year:'Products'},
 {id:2,name:'Tissue Genie - Toilet Tissue',category:'Toilet Tissue',pack:'48 pack',ply:'2 ply',sheets:'200 sheets',size:'110mm x 100mm',code:'0746747120617',image:'product-02_tissue-genie-48-pack-2ply-200-sheets.png',year:'Products'},
 {id:4,name:'Tissue Genie - Toilet Tissue',category:'Toilet Tissue',pack:'48 pack',ply:'1 ply',sheets:'500 sheets',size:'110mm x 100mm',code:'0746747120594',image:'product-04_tissue-genie-48-pack-1ply-500-sheets.png',year:'Products'},
 {id:6,name:'Tissue Genie - Toilet Tissue',category:'Toilet Tissue',pack:'48 pack',ply:'2 ply',sheets:'350 sheets',size:'110mm x 100mm',code:'074674712058',image:'product-06_tissue-genie-48-pack-2ply-350-sheets.png',year:'Products'},
 {id:11,name:'Tissue Genie - Toilet Tissue Dispenser Roll',category:'Dispenser Roll',pack:'8 pack',ply:'2 ply',code:'0746747120600',image:'product-10_tissue-genie-dispenser-roll-8-pack-2ply.png',year:'Products'},
 {id:12,name:'Tissue Genie - Toilet Tissue Dispenser Roll',category:'Dispenser Roll',pack:'1 roll',ply:'2 ply',code:'Product code not provided',image:'product-11_tissue-genie-dispenser-roll-1-roll-2ply-a.png',year:'Products'},
 {id:13,name:'Tissue Genie - Toilet Tissue Dispenser Roll',category:'Dispenser Roll',pack:'1 roll',ply:'2 ply',code:'Product code not provided',image:'product-12_tissue-genie-dispenser-roll-1-roll-2ply-b.png',year:'Products'},
 {id:15,name:'Superior Catering Serviettes',category:'Catering Serviettes',pack:'1000 Pack',ply:'2 ply',size:'330mm x 330mm',code:'Product code not provided',image:'product-15_superior-catering-serviettes-1000-2ply-330x330.png',year:'Products'},
 {id:16,name:'Serviettes',category:'Catering Serviettes',pack:'xxxx Pack',ply:'1 ply',size:'200mm x 300mm',code:'Product code not provided',image:'product-16_serviettes-xxxx-pack-1ply-200x300.png',year:'Products'},
 {id:17,name:'Virgin Catering Serviettes',category:'Catering Serviettes',ply:'1 ply',size:'200mm x 300mm',code:'Product code not provided',image:'product-17_virgin-catering-serviettes-1ply-200x300.png',year:'Products'},
 {id:18,name:'Superior Catering Serviettes',category:'Catering Serviettes',pack:'1000 Pack',ply:'1 ply',size:'300mm x 300mm',code:'Product code not provided',image:'product-18_superior-catering-serviettes-1000-1ply-300x300.png',year:'Products'},
 {id:19,name:'Superior Catering Serviettes',category:'Catering Serviettes',pack:'1000 Pack',ply:'2 ply',size:'300mm x 300mm',code:'Product code not provided',image:'product-19_superior-catering-serviettes-1000-2ply-300x300.png',year:'Products'}
];

const products2026 = [
 {_2026:true,id:'2026-01',name:'Recycle',category:'Toilet Tissue',pack:"48's",sheets:'400 sheet',image:'https://images.unsplash.com/photo-1585690359409-9020f3602bdb?auto=format&fit=crop&fm=jpg&q=80&w=1400',fallbackImage:'product-02_tissue-genie-48-pack-2ply-200-sheets.png',year:'Products 2026'},
 {_2026:true,id:'2026-02',name:'Virgin 1Ply',category:'Toilet Tissue',pack:"48's",sheets:'300 sheet',image:'https://images.unsplash.com/photo-1583496597467-d968d2fa33a8?auto=format&fit=crop&fm=jpg&q=80&w=1400',fallbackImage:'product-04_tissue-genie-48-pack-1ply-500-sheets.png',year:'Products 2026'},
 {_2026:true,id:'2026-03',name:'Virgin 1Ply',category:'Toilet Tissue',pack:"48's",sheets:'500 sheet',image:'https://images.unsplash.com/photo-1620778864482-5f20e3d9745a?auto=format&fit=crop&fm=jpg&q=80&w=1400',fallbackImage:'product-04_tissue-genie-48-pack-1ply-500-sheets.png',year:'Products 2026'},
 {_2026:true,id:'2026-04',name:'Virgin 2Ply',category:'Toilet Tissue',pack:"48's",sheets:'200 sheet',image:'product-02_tissue-genie-48-pack-2ply-200-sheets.png',year:'Products 2026'},
 {_2026:true,id:'2026-05',name:'Virgin 2Ply',category:'Toilet Tissue',pack:"48's",sheets:'350 sheet',image:'product-06_tissue-genie-48-pack-2ply-350-sheets.png',year:'Products 2026'},
 {_2026:true,id:'2026-06',name:'2kg jumbo wipes',category:'Jumbo Wipes',pack:'2kg',image:'product-2026-2-2.5kg-roll.webp',year:'Products 2026'},
 {_2026:true,id:'2026-07',name:'2.5 kg jumbo wipes',category:'Jumbo Wipes',pack:'2.5kg',image:'product-2026-2-2.5kg-roll.webp',year:'Products 2026'},
 {_2026:true,id:'2026-08',name:'5kg jumbo wipes',category:'Jumbo Wipes',pack:'5kg',image:'product-2026-5kg-roll.jpeg',images:['product-2026-5kg-roll.jpeg'],year:'Products 2026'},
 {_2026:true,id:'2026-09',name:'Cost cutters',category:'Jumbo Wipes',pack:'6 pack',image:'product-2026-cost-cutters.png',images:['product-2026-cost-cutters.png'],year:'Products 2026'},
 {_2026:true,id:'2026-10',name:'Econo Decca',category:'Jumbo Wipes',pack:'8 pack',image:'product-2026-econo-decca-500m-8-pack.png',images:['product-2026-econo-decca-500m-8-pack.png'],year:'Products 2026'},
 {_2026:true,id:'2026-11',name:'200 x 300 virgin',category:'Serviettes',size:'200 x 300',ply:'Virgin',image:'product-17_virgin-catering-serviettes-1ply-200x300.png',wetStrength:true,year:'Products 2026'},
 {_2026:true,id:'2026-12',name:'300x300 1ply',category:'Serviettes',size:'300 x 300',ply:'1 ply',image:'product-18_superior-catering-serviettes-1000-1ply-300x300.png',wetStrength:true,year:'Products 2026'},
 {_2026:true,id:'2026-13',name:'300x300 2Ply',category:'Serviettes',size:'300 x 300',ply:'2 ply',image:'product-19_superior-catering-serviettes-1000-2ply-300x300.png',wetStrength:true,year:'Products 2026'},
 {_2026:true,id:'2026-14',name:'330X330 2ply',category:'Serviettes',size:'330 x 330',ply:'2 ply',image:'product-15_superior-catering-serviettes-1000-2ply-330x330.png',wetStrength:true,year:'Products 2026'},
 {_2026:true,id:'2026-15',name:'Tissue Genie Single Ply Serviettes — 30 x 100',category:'Serviettes',pack:'30 x 100',size:'300 x 300 mm',ply:'single ply',image:'product-2026-15-tissue-genie-serviettes-30x100.jpeg',wetStrength:true,year:'Products 2026'},
 {_2026:true,id:'2026-16',name:'Tissue Genie Single Ply Serviettes — 40 x 50',category:'Serviettes',pack:'40 x 50',size:'300 x 300 mm',ply:'single ply',image:'product-2026-16-tissue-genie-serviettes-40x50.png',wetStrength:true,year:'Products 2026'}
];
const allProducts = [...products, ...products2026];

const STORAGE = {favourites:'banuTillyFavourites', compare:'banuTillyCompare'};
const WHATSAPP_NUMBER = '8210659224';
let favourites = new Set(JSON.parse(localStorage.getItem(STORAGE.favourites) || '[]'));
let compareIds = JSON.parse(localStorage.getItem(STORAGE.compare) || '[]');
let currentProduct = null;
let isZoomed = false;
let visibleCount = 12;
let catalogueFilter = 'all';

function qs(s,root=document){return root.querySelector(s)}
function qsa(s,root=document){return [...root.querySelectorAll(s)]}
function safeText(v){return v == null || v === '' ? '' : String(v)}
function productImages(p){return Array.isArray(p?.images) && p.images.length ? p.images : (p?.image ? [p.image] : []);}
function formatProductSpec(p){return [p.pack,p.ply,p.sheets,p.size,p.code].filter(Boolean).join(' ')}
function saveAll(){localStorage.setItem(STORAGE.favourites,JSON.stringify([...favourites]));localStorage.setItem(STORAGE.compare,JSON.stringify(compareIds));}

function initHeader(){
 const header=qs('.site-header');
 const toggle=qs('.mobile-toggle'); const menu=qs('.mobile-menu');
 const onScroll=()=>header?.classList.toggle('scrolled',window.scrollY>28);
 window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
 toggle?.addEventListener('click',()=>menu.classList.toggle('show'));
 qsa('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('show')));
 qsa('.nav-product-trigger').forEach(btn=>btn.addEventListener('click',(e)=>{
   e.stopPropagation();
   const parent=btn.closest('.nav-product-menu');
   const open=parent.classList.toggle('open');
   btn.setAttribute('aria-expanded',String(open));
 }));
 document.addEventListener('click',()=>qsa('.nav-product-menu.open').forEach(parent=>{
   parent.classList.remove('open');
   parent.querySelector('.nav-product-trigger')?.setAttribute('aria-expanded','false');
 }));
 updateActiveNavigation();
}
function updateActiveNavigation(){
 const path=location.pathname.split('/').pop() || 'index.html';
 qsa('.nav-links a,.mobile-menu a').forEach(a=>{
   const href=(a.getAttribute('href')||'').split('#')[0];
   const page=href || 'index.html';
   a.classList.toggle('active',page===path);
 });
}

function revealOnScroll(){
 const obs=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.1});
 qsa('.reveal').forEach(el=>obs.observe(el));
}

function productCard(p){
 const is2026=Boolean(p._2026);
 const fav=!is2026 && favourites.has(p.id);
 const compare=!is2026 && compareIds.includes(p.id);
 const specs=[
   p.pack?`<span>Pack / Weight <strong>${p.pack}</strong></span>`:'',
   p.ply?`<span>Ply <strong>${p.ply}</strong></span>`:'',
   p.sheets?`<span>Sheets <strong>${p.sheets}</strong></span>`:'',
   p.size?`<span>Size <strong>${p.size}</strong></span>`:'',
   p.wetStrength?`<span>Strength <strong>Wet strength</strong></span>`:''
 ].filter(Boolean).join('');
 return `<article class="product-card panel reveal ${is2026?'product-2026-card':''}">
   <div class="product-media">
     ${is2026?'<span class="year-badge">2026</span>':''}
     ${!is2026?`<div class="card-top-actions"><button class="icon-btn ${fav?'active':''}" aria-label="${fav?'Remove from':'Add to'} favourites" data-action="favourite" data-id="${p.id}">♥</button><button class="icon-btn ${compare?'active':''}" aria-label="${compare?'Remove from':'Add to'} comparison" data-action="compare" data-id="${p.id}">⇄</button></div>`:''}
     <img loading="lazy" src="${p.image}" alt="${p.name} — ${p.category}" data-action="details" data-id="${p.id}" data-is-2026="${is2026}" onerror="this.onerror=null;this.src='${p.fallbackImage||'2026-toilet-tissue.svg'}'">
   </div>
   <div class="product-body">
     <div class="product-badge-row"><span class="product-badge">${p.category}</span>${is2026?'<span class="product-badge year-badge-inline">2026 range</span>':''}</div>
     <h3>${p.name}</h3>
     <div class="specs">${specs || '<span>Specification <strong>Not specified in supplied list</strong></span>'}</div>
     ${!is2026 && p.code?`<div class="code"><strong>Code:</strong> ${p.code}</div>`:''}
     <div class="product-actions">
       <button type="button" class="btn btn-outline small" data-action="details" data-id="${p.id}" data-is-2026="${is2026}">More Details</button>
       <button type="button" class="btn btn-primary small" data-action="enquire" data-id="${p.id}" data-is-2026="${is2026}">Enquire</button>
     </div>
   </div>
 </article>`;
}

function getFilteredProducts(){
 const search=safeText(qs('#productSearch')?.value).trim().toLowerCase();
 const category=qs('#categoryFilter')?.value || 'all';
 const ply=qs('#plyFilter')?.value || 'all';
 const pack=qs('#packFilter')?.value || 'all';
 const sort=qs('#sortFilter')?.value || 'default';
 let list=allProducts.filter(p=>{
   const source=p._2026?'2026':'products';
   const hay=[p.name,p.category,p.code,p.pack,p.ply,p.sheets,p.size,p.wetStrength?'wet strength':'',source].filter(Boolean).join(' ').toLowerCase();
   return (!search||hay.includes(search)) && (catalogueFilter==='all'||source===catalogueFilter) && (category==='all'||p.category===category) && (ply==='all'||p.ply===ply) && (pack==='all'||p.pack===pack);
 });
 if(sort==='name')list.sort((a,b)=>a.name.localeCompare(b.name));
 if(sort==='category')list.sort((a,b)=>a.category.localeCompare(b.category));
 if(sort==='ply-desc')list.sort((a,b)=>parseInt(b.ply||'0')-parseInt(a.ply||'0'));
 if(sort==='pack')list.sort((a,b)=>(a.pack||'').localeCompare(b.pack||'',undefined,{numeric:true}));
 return list;
}
function renderProducts(reset=true){
 const grid=qs('#productGrid'); if(!grid)return;
 if(reset)visibleCount=12;
 const list=getFilteredProducts();
 const shown=list.slice(0,visibleCount);
 grid.innerHTML=shown.length?shown.map(productCard).join(''):`<div class="empty-state panel"><div class="empty-icon">⌕</div><h3>No catalogue products match your search.</h3><p>Try another keyword or clear the filters to view all ${allProducts.length} products.</p></div>`;
 const count=qs('#resultCount'); if(count)count.textContent=`Showing ${shown.length} of ${list.length} products`; const total=qs('#catalogueTotal'); if(total) total.textContent=list.length;
 const more=qs('#loadMore'); if(more)more.style.display=list.length>visibleCount?'inline-flex':'none';
 bindProductEvents();
 requestAnimationFrame(()=>qsa('#productGrid .reveal').forEach((el,i)=>setTimeout(()=>el.classList.add('visible'),Math.min(i*35,400))));
}
function bindProductEvents(){}
function initProductActionDelegation(){
 document.addEventListener('click',e=>{
   const trigger=e.target.closest('[data-action]');
   if(!trigger) return;
   if(!trigger.matches('[data-action="details"],[data-action="favourite"],[data-action="compare"],[data-action="enquire"]')) return;
   e.preventDefault();
   handleProductAction(e);
 });
}
function handleProductAction(e){
 const target=e.currentTarget?.dataset?.action ? e.currentTarget : e.target.closest('[data-action]');
 if(!target) return;
 const action=target.dataset.action;
 const rawId=target.dataset.id;
 const is2026=target.getAttribute('data-is-2026')==='true';
 const source=is2026?products2026:products;
 const id=is2026?rawId:Number(rawId);
 const p=source.find(x=>String(x.id)===String(id)); if(!p)return;
 if(action==='details')openProductModal(p,is2026);
 if(action==='enquire')startProductEnquiry(p,is2026);
 if(action==='favourite' && !is2026)toggleFavourite(id);
 if(action==='compare' && !is2026)toggleCompare(id);
}
function initFilters(){
 const params=new URLSearchParams(location.search);
 const categoryParam=params.get('category');
 const catalogueParam=params.get('catalogue');
 catalogueFilter = catalogueParam==='products' || catalogueParam==='2026' ? catalogueParam : 'all';
 if(qs('#catalogueFilter')) qs('#catalogueFilter').value=catalogueFilter;
 if(categoryParam && qs('#categoryFilter')) qs('#categoryFilter').value=categoryParam;
 ['#productSearch','#catalogueFilter','#categoryFilter','#plyFilter','#packFilter','#sortFilter'].forEach(sel=>{const el=qs(sel);el?.addEventListener('input',()=>{if(sel==='#catalogueFilter') catalogueFilter=el.value; renderProducts(true);});el?.addEventListener('change',()=>{if(sel==='#catalogueFilter') catalogueFilter=el.value; renderProducts(true);});});
 qs('#clearFilters')?.addEventListener('click',()=>{['#productSearch','#catalogueFilter','#categoryFilter','#plyFilter','#packFilter','#sortFilter'].forEach((sel,i)=>{const el=qs(sel);if(el)el.value=sel==='#sortFilter'?'default':'all'});catalogueFilter='all';renderProducts(true)});
 qs('#loadMore')?.addEventListener('click',()=>{visibleCount+=8;renderProducts(false)});
}

function openProductModal(product,is2026=false){
 currentProduct=product; if(!currentProduct)return;
 const modal=qs('#productModal'); if(!modal)return;
 const missing='Not specified in supplied product list';
 const gallery=productImages(currentProduct);
 const detailImage=qs('#detailImage',modal);
 if(detailImage){detailImage.src=gallery[0]||'';detailImage.alt=currentProduct.name;detailImage.onerror=()=>{detailImage.onerror=null;detailImage.src=currentProduct.fallbackImage||'2026-toilet-tissue.svg';};}
 const galleryWrap=qs('#detailGallery',modal);
 if(galleryWrap){
   galleryWrap.innerHTML=gallery.map((src,i)=>`<button type="button" class="detail-thumb ${i===0?'active':''}" data-detail-thumb="${i}" aria-label="View ${currentProduct.name} image ${i+1}"><img src="${src}" alt="${currentProduct.name} image ${i+1}" onerror="this.onerror=null;this.src='${currentProduct.fallbackImage||'2026-toilet-tissue.svg'}'"></button>`).join('');
   qsa('[data-detail-thumb]',galleryWrap).forEach(btn=>btn.addEventListener('click',()=>{
     const idx=Number(btn.dataset.detailThumb);
     if(detailImage && gallery[idx]){detailImage.src=gallery[idx];detailImage.alt=`${currentProduct.name} image ${idx+1}`;}
     qsa('[data-detail-thumb]',galleryWrap).forEach(x=>x.classList.toggle('active',x===btn));
   }));
 }
 qs('#detailTitle',modal).textContent=currentProduct.name;
 qs('#detailCategory',modal).textContent=currentProduct.category;
 qs('#detailPack',modal).textContent=currentProduct.pack||missing;
 qs('#detailPly',modal).textContent=currentProduct.ply||missing;
 qs('#detailSheets',modal).textContent=currentProduct.sheets||missing;
 qs('#detailSize',modal).textContent=currentProduct.size||missing;
 qs('#detailCode',modal).textContent=currentProduct.code||missing;
 qs('#detailEyebrow',modal).textContent=is2026?'2026 product range':'Catalogue product';
 const titleMeta=qs('#detailCategory',modal); if(titleMeta) titleMeta.textContent=is2026?`${currentProduct.category} · 2026`:currentProduct.category;
 let strength=qs('#detailStrength');
 if(!strength){
   const grid=qs('.detail-spec-grid',modal); const item=document.createElement('div'); item.className='detail-spec'; item.id='detailStrength'; item.innerHTML='<small>Strength</small><strong></strong>'; grid.appendChild(item); strength=item;
 }
 strength.querySelector('strong').textContent=currentProduct.wetStrength?'Wet strength':missing;
 modal.classList.add('show'); document.body.style.overflow='hidden';
 qs('#detailAdd')?.setAttribute('data-id',String(currentProduct.id));
 qs('#detailAdd')?.setAttribute('data-is-2026',String(is2026));
}
function closeProductModal(){const m=qs('#productModal');m?.classList.remove('show');document.body.style.overflow='';closeZoom()}
function imageZoom(){qs('#detailImageWrap')?.addEventListener('click',()=>{const src=qs('#detailImage')?.src;if(!src)return;qs('#zoomImage').src=src;qs('#zoomViewer').classList.add('show');isZoomed=true;});}
function closeZoom(){qs('#zoomViewer')?.classList.remove('show');isZoomed=false}

function toggleFavourite(id){
 if(favourites.has(id))favourites.delete(id);else favourites.add(id);saveAll();
 if(qs('#productGrid'))renderProducts(false); updateCounts();
}

function toggleCompare(id){
 if(compareIds.includes(id))compareIds=compareIds.filter(x=>x!==id);
 else {if(compareIds.length>=3){alert('You can compare up to 3 products at a time.');return;}compareIds.push(id)}
 saveAll();renderCompareBar();if(qs('#productGrid'))renderProducts(false);
}
function renderCompareBar(){
 const bar=qs('#compareBar');const items=qs('#compareItems');if(!bar||!items)return;
 items.innerHTML=compareIds.map(id=>{const p=products.find(x=>x.id===id);return p?`<div class="compare-mini"><img src="${p.image}" alt=""><div style="flex:1"><strong>${p.name}</strong><small>${p.pack||''} · ${p.ply||''}</small></div><button aria-label="Remove ${p.name} from compare" data-remove-compare="${p.id}">×</button></div>`:''}).join('');
 bar.classList.toggle('show',compareIds.length>0);
 qsa('[data-remove-compare]').forEach(b=>b.addEventListener('click',()=>toggleCompare(Number(b.dataset.removeCompare))));
 updateCounts();
}
function openCompareModal(){
 const modal=qs('#compareModal');if(!modal)return;
 if(!compareIds.length)return;
 const selected=compareIds.map(id=>products.find(p=>p.id===id)).filter(Boolean);
 const rows=[['Category',p=>p.category],['Pack',p=>p.pack||'Not specified in catalogue'],['Ply',p=>p.ply],['Sheets',p=>p.sheets||'Not specified in catalogue'],['Size',p=>p.size||'Not specified in catalogue'],['Product code',p=>p.code]];
 qs('#compareTable',modal).innerHTML=`<thead><tr><th>Specification</th>${selected.map(p=>`<th><div class="compare-product-cell"><img src="${p.image}" alt=""><span>${p.name}</span></div></th>`).join('')}</tr></thead><tbody>${rows.map(([label,getter])=>`<tr><th>${label}</th>${selected.map(p=>`<td>${getter(p)}</td>`).join('')}</tr>`).join('')}</tbody>`;
 modal.classList.add('show');document.body.style.overflow='hidden';
}
function closeCompareModal(){qs('#compareModal')?.classList.remove('show');if(!qs('.modal-backdrop.show'))document.body.style.overflow=''}

function startProductEnquiry(product,is2026=false){
 const p=product || currentProduct; if(!p)return;
 window.location.href=is2026||p._2026?`contact.html?product2026=${encodeURIComponent(p.id)}#enquiry`:`contact.html?product=${encodeURIComponent(p.id)}#enquiry`;
}
function updateCounts(){
 const compareCount=qs('[data-compare-count]');
 if(compareCount)compareCount.textContent=compareIds.length;
}

function getSelectedContactProduct(){
 const params=new URLSearchParams(location.search);
 const id=Number(params.get('product'));
 return products.find(p=>p.id===id) || null;
}
function getSelectedContactProduct2026(){
 const id=new URLSearchParams(location.search).get('product2026');
 return products2026.find(p=>p.id===id) || null;
}

function renderSelectedContactProduct(){
 const box=qs('#selectedProductBox');
 if(!box)return;
 const p=getSelectedContactProduct();
 const p2026=getSelectedContactProduct2026();
 if(!p && !p2026){box.hidden=true;box.innerHTML='';return;}
 const item=p || p2026;
 const specs=[item.pack,item.ply,item.sheets,item.size,item.wetStrength?'Wet strength':''].filter(Boolean).join(' · ');
 box.hidden=false;
 box.innerHTML=`<div class="selected-product-preview"><img src="${item.image}" alt="${item.name}"><div><span class="product-badge">${item.category}</span>${p2026?'<span class="product-badge year-badge-inline">2026</span>':''}<h3>${item.name}</h3><p>${specs||'Specification not supplied'}</p>${p?`<small>Product code: ${item.code}</small>`:'<small>2026 product-list entry — no product code supplied</small>'}</div></div>`;
}

function validatePhone(phone){
 const raw=String(phone||'').trim();
 if(!raw) return {ok:false,message:'Please enter your phone number.'};
 if(!/^[+0-9()\-\s.]+$/.test(raw)) return {ok:false,message:'Please enter a valid phone number using digits, spaces, +, -, parentheses or dots only.'};
 const digits=raw.replace(/\D/g,'');
 if(digits.length<7 || digits.length>15) return {ok:false,message:'Please enter a valid phone number with 7 to 15 digits.'};
 return {ok:true};
}
function buildEnquiryText(form){
 const value=(key)=>{const control=form.elements.namedItem(key);return control?String(control.value||'').trim():'';};
 const name=value('name'), company=value('company'), phone=value('phone'), email=value('email'), message=value('message');
 const p=getSelectedContactProduct();
 const p2026=getSelectedContactProduct2026();
 const lines=['*BANU & TILLY TRADING ENTERPRISES (PTY) LTD*','*NEW WEBSITE ENQUIRY*','', '*CUSTOMER DETAILS*',`Name: ${name||'Not provided'}`,`Company: ${company||'Not provided'}`,`Phone: ${phone||'Not provided'}`,`Email: ${email||'Not provided'}`,'','*MESSAGE*',message||'I would like to make an enquiry.',''];
 if(p || p2026){
   const selected=p || p2026;
   lines.push('*PRODUCT ENQUIRY*','',`*${selected.name}*`,`Category: ${selected.category}`);
   if(p2026)lines.push('Catalogue: 2026 product list');
   if(selected.pack)lines.push(`Pack: ${selected.pack}`);
   if(selected.ply)lines.push(`Ply: ${selected.ply}`);
   if(selected.sheets)lines.push(`Sheets: ${selected.sheets}`);
   if(selected.size)lines.push(`Size: ${selected.size}`);
   if(selected.wetStrength)lines.push('Wet strength: Yes');
   if(p)lines.push(`Product code: ${selected.code}`);
   lines.push('');
 }
 lines.push('*Please contact me regarding my enquiry.*');
 return lines.join('\n');
}
function buildWhatsAppUrl(message){return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;}
function openWhatsAppWithEnquiry(form){const message=buildEnquiryText(form);localStorage.setItem('banuTillyPreparedEnquiry',message);const url=buildWhatsAppUrl(message);const opened=window.open(url,'_blank','noopener,noreferrer');if(!opened)window.location.href=url;return message;}
function submitEnquiry(form){
 if(!form.reportValidity())return;
 const phoneInput=form.elements.namedItem('phone');
 const phoneCheck=validatePhone(phoneInput?.value);
 if(!phoneCheck.ok){phoneInput?.setCustomValidity(phoneCheck.message);phoneInput?.reportValidity();phoneInput?.setCustomValidity('');return;}
 const submitButton=form.querySelector('button[type=submit]');
 if(submitButton){submitButton.disabled=true;submitButton.textContent='Opening WhatsApp…';}
 try{
   const message=openWhatsAppWithEnquiry(form);
   const title=qs('#successModal h2'); if(title)title.textContent='WhatsApp message ready';
   const text=qs('#successModal .success-card p'); if(text)text.textContent='WhatsApp has been opened with your message already formatted. Review it and press Send in WhatsApp to contact Banu & Tilly.';
   qs('#successModal')?.classList.add('show'); document.body.style.overflow='hidden'; localStorage.setItem('banuTillyLastWhatsAppEnquiry',message);
 }catch(error){console.error(error);alert('We could not open WhatsApp. Please contact Banu & Tilly directly on 031 535 2401.');}
 finally{if(submitButton){submitButton.disabled=false;submitButton.textContent='Send Enquiry to WhatsApp';}}
}
function closeSuccess(){qs('#successModal')?.classList.remove('show');document.body.style.overflow=''}
function downloadPreparedEnquiry(){const text=localStorage.getItem('banuTillyPreparedEnquiry')||'';const blob=new Blob([text],{type:'text/plain'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='Banu-Tilly-Enquiry.txt';a.click();URL.revokeObjectURL(a.href)}
function prefillContactProduct(){
 const p=getSelectedContactProduct();
 const message=qs('#contactForm textarea');
 if(p && message && !message.value)message.value=`I would like more information about ${p.name} (${p.pack||'catalogue item'}).`;
 renderSelectedContactProduct();
}

function closeSuccess(){qs('#successModal')?.classList.remove('show');document.body.style.overflow=''}
function downloadPreparedEnquiry(){const text=localStorage.getItem('banuTillyPreparedEnquiry')||'';const blob=new Blob([text],{type:'text/plain'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='Banu-Tilly-Enquiry.txt';a.click();URL.revokeObjectURL(a.href)}
function prefillContactMessage(){const f=qs('#contactForm textarea');if(f&&Object.keys(enquiry).length)f.value='I would like to enquire about the products selected in my enquiry list.'}

function initCommonInteractions(){
 qs('#detailAdd')?.addEventListener('click',e=>{const is2026=e.currentTarget.getAttribute('data-is-2026')==='true';const source=is2026?products2026:products;const p=source.find(x=>String(x.id)===String(e.currentTarget.dataset.id));if(p)startProductEnquiry(p,is2026)});
 qs('#detailClose')?.addEventListener('click',closeProductModal);
 qs('#productModal')?.addEventListener('click',e=>{if(e.target===e.currentTarget)closeProductModal()});
 qs('#compareBtn')?.addEventListener('click',openCompareModal);qs('#compareClose')?.addEventListener('click',closeCompareModal);qs('#compareModal')?.addEventListener('click',e=>{if(e.target===e.currentTarget)closeCompareModal()});
 qs('#zoomClose')?.addEventListener('click',closeZoom);qs('#zoomViewer')?.addEventListener('click',e=>{if(e.target===e.currentTarget)closeZoom()});
 qs('#contactForm')?.addEventListener('submit',e=>{e.preventDefault();submitEnquiry(e.currentTarget)});
 qs('#contactPhone')?.addEventListener('input',e=>{e.currentTarget.setCustomValidity('')});
 qs('#successClose')?.addEventListener('click',closeSuccess);qs('#downloadPrepared')?.addEventListener('click',downloadPreparedEnquiry);qs('#successCall')?.addEventListener('click',()=>{const text=localStorage.getItem('banuTillyLastWhatsAppEnquiry')||'Hello Banu & Tilly, I would like to make an enquiry.';const url=buildWhatsAppUrl(text);window.open(url,'_blank','noopener,noreferrer')|| (window.location.href=url);});
 imageZoom();
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(isZoomed)closeZoom();else if(qs('#productModal')?.classList.contains('show'))closeProductModal();else if(qs('#compareModal')?.classList.contains('show'))closeCompareModal();else if(qs('#successModal')?.classList.contains('show'))closeSuccess();}});
}
function init(){initHeader();initCommonInteractions();initProductActionDelegation();updateCounts();renderCompareBar();revealOnScroll();initFilters();if(qs('#productGrid'))renderProducts(true);prefillContactProduct();}
document.addEventListener('DOMContentLoaded',init);
