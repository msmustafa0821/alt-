/* ================= ICONS & HELPERS ================= */
const ICON={home:'M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',store:'M4 7h16l-1.5-4h-13zM4 7v13h16V7M9 20v-6h6v6',plus:'M12 5v14M5 12h14',chat:'M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z',user:'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0',bell:'M6 8a6 6 0 0 1 12 0c0 7 3 8 3 8H3s3-1 3-8zM10 21h4',heart:'M12 21s-7.5-4.6-9.5-9.2A5.2 5.2 0 0 1 12 6.5a5.2 5.2 0 0 1 9.5 5.3C19.5 16.4 12 21 12 21z',bookmark:'M6 3h12v18l-6-4-6 4z',search:'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4',back:'M15 18l-6-6 6-6',next:'M9 18l6-6-6-6',check:'M4 12l5 5L20 6',shield:'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z',pin:'M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',spark:'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z',gear:'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1',send:'M22 2L11 13M22 2l-7 20-4-9-9-4z',edit:'M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z',flag:'M5 21V4h11l-2 4 2 4H5',alert:'M12 9v4M12 17h.01M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z',trash:'M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13',logout:'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9',comment:'M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z',camera:'M4 7h3l2-3h6l2 3h3v12H4zM12 10a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z',clock:'M12 7v5l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z',pin2:'M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z'};
const ic=(n,s=20)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${ICON[n]}"/></svg>`;
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid=()=>Math.random().toString(36).slice(2,9);
const wait=(v,ms=450)=>new Promise(r=>setTimeout(()=>r(v),ms));
const nowT=()=>new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'});
const inr=n=>'₹'+Number(n).toLocaleString('en-IN');
const GRADS=[['#1F6259','#3E9C8C'],['#F28B70','#F6B49C'],['#EFBD63','#F7D898'],['#173B3A','#2E6B67'],['#8E7DBE','#B9ABDD'],['#4F86C6','#9DBEF6']];
const hash=s=>[...String(s)].reduce((a,c)=>a+c.charCodeAt(0),0);
const gradOf=i=>`linear-gradient(135deg,${GRADS[i%6][0]},${GRADS[i%6][1]})`;
const tile=(emo,i=0,cls='')=>`<div class="tile ${cls}" style="background:${gradOf(i)}"><span>${emo}</span></div>`;
function av(name,cls=''){
  if(name===S.user.name&&S.user.photo)return `<span class="av ${cls}" style="background-image:url('${S.user.photo}')" aria-label="${esc(name)}"></span>`;
  const ini=String(name).split(' ').map(x=>x[0]).slice(0,2).join('').toUpperCase();
  return `<span class="av ${cls}" style="background:${GRADS[hash(name)%6][0]}" aria-hidden="true">${ini}</span>`;
}
const pillFor=st=>({active:'<span class="pill ok">Active</span>',sold:'<span class="pill">Sold</span>',paused:'<span class="pill warn">Paused</span>',pending:'<span class="pill warn">Pending</span>',approved:'<span class="pill ok">Approved</span>',rejected:'<span class="pill bad">Rejected</span>',open:'<span class="pill warn">Open</span>',resolved:'<span class="pill ok">Resolved</span>','in progress':'<span class="pill warn">In progress</span>',found:'<span class="pill ok">Found</span>',lost:'<span class="pill bad">Lost</span>',dismissed:'<span class="pill">Dismissed</span>'})[st]||`<span class="pill">${esc(st)}</span>`;

/* ================= DEMO DATA (separate from UI) ================= */
const DB={
  hoods:[{id:'h1',name:'Maple Heights Society',sub:'Blocks A–D · 340 homes'},{id:'h2',name:'Lakeview Residency',sub:'Towers 1–3 · 520 homes'},{id:'h3',name:'Sunrise Apartments',sub:'Phase 2 · 180 homes'}],
  posts:[
    {id:'p1',author:'Meera Iyer',type:'Announcement',kind:'text',time:'2h ago',text:'Diwali rangoli contest on the terrace this Saturday at 5 pm. Bring your colours! Prizes for kids and adults.',emo:'🎨',likes:24,liked:false,saved:false,comments:[{id:'c1',author:'Vikram Shah',text:'Count me in with my family!',time:'1h ago',replies:[{id:'r1',author:'Ananya Rao',text:'Can kids under 8 join too?',time:'40m ago'}]}]},
    {id:'v1',author:'Sunrise Society',type:'Promo',kind:'video',emo:'🏋️',dur:'0:42',sponsored:true,time:'3h ago',text:'Welcome to the new gym on Level 2. Free trial week for residents!',likes:112,liked:false,saved:false,comments:[]},
    {id:'p2',author:'Vikram Shah',type:'Alert',kind:'text',time:'5h ago',text:'Water supply in Block B will be paused tomorrow from 10 am to 2 pm for tank cleaning. Please store water in advance.',emo:'💧',likes:41,liked:true,saved:true,comments:[]},
    {id:'r2',author:'Green Basket Grocers',type:'Promo',kind:'reel',emo:'🥭',dur:'0:18',sponsored:true,time:'6h ago',text:'Fresh Alphonso mangoes just arrived at Gate 1 🥭',likes:86,liked:false,saved:false,comments:[]},
    {id:'p3',author:'Priya Nair',type:'Question',kind:'text',time:'Yesterday',text:'Does anyone know a reliable electrician who works on weekends? The ceiling fan in my bedroom needs a fix.',emo:'💡',likes:9,liked:false,saved:false,comments:[{id:'c2',author:'Rohan Das',text:'Try Spark Electricals. They came to our flat on a Sunday.',time:'Yesterday',replies:[]}]},
    {id:'p4',author:'Arjun Mehta',type:'Update',kind:'photo',time:'Yesterday',text:'The new children’s play area near Gate 2 is open now. Let’s keep it clean for everyone!',emo:'🛝',likes:58,liked:false,saved:false,comments:[]},
    {id:'r3',author:'Kavya Menon',type:'Update',kind:'reel',emo:'🏏',dur:'0:27',time:'Yesterday',text:'Evening nets at Gate 3 were amazing today!',likes:33,liked:false,saved:false,comments:[]},
    {id:'p5',author:'Ananya Rao',type:'Update',kind:'photo',time:'2 days ago',text:'First sourdough of the season, baked in the Block C kitchen.',emo:'🥖',likes:17,liked:false,saved:false,comments:[]},
    {id:'r1',author:'Ananya Rao',type:'Update',kind:'reel',emo:'🪴',dur:'0:21',time:'3 days ago',text:'How I keep my monstera happy in a small balcony.',likes:12,liked:false,saved:false,comments:[]}
  ],
  listings:[
    {id:'l1',title:'3-seater sofa, grey',price:6500,cat:'Furniture',emo:'🛋️',cond:'Like new',seller:'Meera Iyer',desc:'Barely used for a year. Moving out, so it needs to go this week. Pickup from Block C.',status:'active',mine:false,saved:false},
    {id:'l2',title:'Hybrid road bike, 21-speed',price:12000,cat:'Sports',emo:'🚲',cond:'Good',seller:'Arjun Mehta',desc:'Serviced last month with new tyres. Perfect for the loop around the lake.',status:'active',mine:false,saved:true},
    {id:'l3',title:'Engineering books bundle',price:800,cat:'Books',emo:'📚',cond:'Used',seller:'Kavya Menon',desc:'Six first-year engineering textbooks. Some highlighting, all pages intact.',status:'active',mine:false,saved:false},
    {id:'l4',title:'Kids study table with chair',price:2200,cat:'Kids',emo:'🪑',cond:'Good',seller:'Priya Nair',desc:'Wooden study table with a matching chair. Great for ages 6 to 12.',status:'paused',mine:false,saved:false},
    {id:'l5',title:'Large monstera plant',price:900,cat:'Home',emo:'🪴',cond:'Healthy',seller:'Ananya Rao',desc:'Healthy, well-potted monstera. I can share cuttings too.',status:'active',mine:true,saved:false}
  ],
  services:[
    {id:'s1',t:'Spark Electricals',cat:'Electrician',emo:'⚡',sub:'Fans, wiring and MCB fixes. Weekends OK.',meta:'★ 4.8 · 42 jobs',verified:true},
    {id:'s2',t:'AquaFix Plumbing',cat:'Plumbing',emo:'🔧',sub:'Leaks, geysers, tank cleaning.',meta:'★ 4.6 · 28 jobs',verified:true},
    {id:'s3',t:'Ms. Lakshmi, Maths tutor',cat:'Tutoring',emo:'📐',sub:'Class 6 to 10, home visits after 5 pm.',meta:'★ 4.9 · 15 students',verified:true},
    {id:'s4',t:'Green Leaf Yoga',cat:'Fitness',emo:'🧘',sub:'Morning yoga on the terrace, 6:30 am.',meta:'★ 4.7 · 60 members',verified:false}
  ],
  businesses:[
    {id:'b1',t:'Green Basket Grocers',cat:'Grocery',emo:'🥬',sub:'Fresh produce, daily delivery to Gate 1.',meta:'Open till 10 pm',verified:true},
    {id:'b2',t:'Sunrise Bakery',cat:'Food',emo:'🥐',sub:'Sourdough, cakes and celebration orders.',meta:'Open 7 am to 9 pm',verified:true},
    {id:'b3',t:'FitHub Studio',cat:'Fitness',emo:'🏋️',sub:'Gym, classes and personal training.',meta:'Open 5 am to 11 pm',verified:false}
  ],
  eventsports:[
    {id:'e1',type:'Events',t:'Diwali Rangoli Contest',cat:'Festival',emo:'🎨',sub:'Terrace, Block C. Prizes for kids and adults.',meta:'Sat, 5:00 pm',count:38,going:false},
    {id:'e2',type:'Events',t:'Kids Art Fest',cat:'Kids',emo:'🖍️',sub:'Community hall. Paints and crafts provided.',meta:'Sun, 10:00 am',count:21,going:false},
    {id:'e3',type:'Events',t:'Book Club: Monthly Pick',cat:'Books',emo:'📖',sub:'Garden corner, Gate 2. Bring a cup of chai.',meta:'Thu, 7:00 pm',count:12,going:true},
    {id:'m1',type:'Sports',t:'Badminton doubles',cat:'Badminton',emo:'🏸',sub:'Court 2, Clubhouse. Intermediate level.',meta:'Sat, 7:00 pm · need 2',count:2,going:false},
    {id:'m2',type:'Sports',t:'5-a-side football',cat:'Football',emo:'⚽',sub:'Ground behind Block D. Friendly match.',meta:'Sun, 6:30 am · need 3',count:9,going:false},
    {id:'m3',type:'Sports',t:'Evening cricket nets',cat:'Cricket',emo:'🏏',sub:'Practice nets near Gate 3.',meta:'Fri, 6:00 pm · open',count:5,going:true}
  ],
  lost:[
    {id:'f1',t:'Blue steel water bottle',cat:'Found',emo:'🧴',sub:'Found near the lift lobby, Tower 2.',meta:'Yesterday · Tower 2',status:'found'},
    {id:'f2',t:'Car key with a red keychain',cat:'Lost',emo:'🔑',sub:'Lost near the gym entrance. Reward offered.',meta:'Today · Clubhouse',status:'lost'}
  ],
  issues:[
    {id:'i1',t:'Lift 3 stops between floors',cat:'Lift',emo:'🛗',sub:'Happens around 9 am every day. Please check the sensor.',meta:'Block A · 12 upvotes',status:'open',count:12,going:false},
    {id:'i2',t:'Street light out near Gate 2',cat:'Electricity',emo:'💡',sub:'Dark path after 8 pm.',meta:'Gate 2 · 7 upvotes',status:'in progress',count:7,going:false},
    {id:'i3',t:'Garbage not collected in Block D',cat:'Cleanliness',emo:'🗑️',sub:'Pickup missed two days in a row.',meta:'Block D · resolved',status:'resolved',count:15,going:false}
  ],
  chats:[
    {id:'c1',with:'Meera Iyer',listing:'l1',msgs:[{me:false,t:'Hi! Is the sofa still available?',at:'10:12'},{me:true,t:'Yes, it is. Are you free this weekend?',at:'10:14'}]},
    {id:'c2',with:'Arjun Mehta',listing:'l2',msgs:[{me:false,t:'Can I test ride it tomorrow evening?',at:'Yesterday'}]}
  ],
  notifs:[
    {id:'n1',t:'Vikram Shah liked your post',time:'10 min ago',read:false,to:['post','p1']},
    {id:'n2',t:'Meera Iyer commented on the rangoli contest',time:'1 h ago',read:false,to:['post','p1']},
    {id:'n3',t:'Your listing "Large monstera plant" got a new chat',time:'3 h ago',read:false,to:['chat','c2']},
    {id:'n4',t:'Water supply notice from Block B',time:'Yesterday',read:true,to:['post','p2']}
  ],
  verifications:[
    {id:'v1',name:'Rohan Das',flat:'A-101',doc:'Electricity bill · Oct 2026',status:'pending'},
    {id:'v2',name:'Kavya Menon',flat:'D-210',doc:'Rent agreement · 2026',status:'pending'},
    {id:'v3',name:'Sanjay Pillai',flat:'B-033',doc:'Property tax receipt',status:'rejected'}
  ],
  reports:[
    {id:'rp1',type:'Spam listing',target:'Listing · Used bike (duplicate)',by:'Priya Nair',status:'open'},
    {id:'rp2',type:'Abusive comment',target:'Comment on water notice',by:'Arjun Mehta',status:'open'}
  ],
  followers:['Vikram Shah','Meera Iyer','Priya Nair','Arjun Mehta','Rohan Das','Kavya Menon'],
  history:[
    {place:'Lakeview Residency',period:'Mar 2023 – Dec 2024',note:'Joined as a tenant in Tower 2.',status:'past'},
    {place:'Sunrise Apartments',period:'Jan 2025 – Oct 2026',note:'Verified with an electricity bill.',status:'past'},
    {place:'Maple Heights Society',period:'Nov 2026 – present',note:'Current community · Flat C-402.',status:'current'}
  ]
};
const BOT=['Sounds good! Let me check and get back to you.','Sure, evening works for me.','Thanks for the quick reply!','Could you share a few more photos?'];

/* ================= REPOSITORY (replace with FastAPI calls later) ================= */
const Repo={
  async likePost(id){await wait(0,250);const p=DB.posts.find(x=>x.id===id);p.liked=!p.liked;p.likes+=p.liked?1:-1;},
  async savePost(id){await wait(0,200);const p=DB.posts.find(x=>x.id===id);p.saved=!p.saved;},
  async addComment(pid,text,parent){await wait(0,350);const p=DB.posts.find(x=>x.id===pid);const c={id:uid(),author:S.user.name,text,time:'just now'};if(parent){p.comments.find(x=>x.id===parent).replies.push(c)}else p.comments.push({...c,replies:[]});},
  async upsertPost(d){await wait(0,500);if(d.id){const p=DB.posts.find(x=>x.id===d.id);Object.assign(p,{type:d.type,text:d.text});return;}DB.posts.unshift({id:uid(),author:S.user.name,type:d.type,kind:d.kind,emo:d.emo,img:d.img||null,dur:d.kind==='text'?null:'0:30',time:'just now',text:d.text,likes:0,liked:false,saved:false,comments:[]});},
  async deletePost(id){await wait(0,300);DB.posts=DB.posts.filter(x=>x.id!==id);},
  async upsertListing(d){await wait(0,500);if(d.id){Object.assign(DB.listings.find(x=>x.id===d.id),d.data);return;}DB.listings.unshift({id:uid(),seller:S.user.name,mine:true,status:'active',saved:false,...d.data});},
  async setListingStatus(id,status){await wait(0,300);DB.listings.find(x=>x.id===id).status=status;},
  async toggleListingSaved(id){await wait(0,200);const l=DB.listings.find(x=>x.id===id);l.saved=!l.saved;},
  async sendMessage(cid,text){await wait(0,200);DB.chats.find(c=>c.id===cid).msgs.push({me:true,t:text,at:nowT()});},
  async saveProfile(d){await wait(0,500);Object.assign(S.user,d);},
  async submitProof(d){await wait(0,700);S.user.flat=d.flat;S.user.hood=d.hood;S.user.status='pending';},
  async decideVerification(id,dec){await wait(0,350);DB.verifications.find(v=>v.id===id).status=dec;},
  async resolveReport(id,dec){await wait(0,300);DB.reports.find(r=>r.id===id).status=dec;},
  async toggleItem(kind,id){await wait(0,200);const it=DB[kind].find(x=>x.id===id);it.going=!it.going;it.count+=it.going?1:-1;},
  async addIssue(d){await wait(0,500);DB.issues.unshift({id:uid(),t:d.title,cat:d.cat,emo:'📍',sub:d.desc,meta:`${d.loc||'Common area'} · 0 upvotes`,status:'open',count:0,going:false});},
  async addEvent(d){await wait(0,500);DB.eventsports.unshift({id:uid(),type:d.evType==='Sport'?'Sports':'Events',t:d.title,cat:d.evType,emo:d.evType==='Sport'?'🏸':'🎉',sub:d.desc,meta:d.when,count:1,going:true});},
  async toggleFollow(name){await wait(0,200);const f=S.user.following;const i=f.indexOf(name);i>=0?f.splice(i,1):f.push(name);},
  async switchHood(id){await wait(0,600);S.user.hood=id;S.user.status='pending';DB.history.forEach(h=>{if(h.status==='current')h.status='past';});DB.history.push({place:HOOD(id),period:'From now',note:'Switch requested · verification pending',status:'current'});}
};

/* ================= UI STATE ================= */
const S={
  stage:'splash',tab:'home',stack:[],overlay:null,reelId:null,slide:0,replyTo:null,typing:null,aiRes:null,pickFor:null,
  user:{name:'Ananya Rao',bio:'Weekend baker and Sunday badminton player. Dog-friendly flat.',flat:'C-402',hood:'h1',status:'approved',role:'resident',phone:'+91 98765 43210',photo:null,following:['Vikram Shah','Meera Iyer']},
  settings:{dark:false,lang:'English',publicProfile:true,showFlat:true,showActivity:false,notifs:{posts:true,chat:true,events:true,emergency:true}},
  draft:{},errors:{},q:{},filter:{},busy:false
};
const SLIDES=[{e:'🏘️',t:'Meet verified neighbours',d:'Every member confirms their address, so you always know who you are dealing with.'},{e:'🛍️',t:'Buy, sell and share locally',d:'Furniture, books, services and community updates, all inside your society.'},{e:'🤝',t:'Find your people',d:'Events, sports partners and community issues, with a helpful assistant.'}];
const HOOD=id=>DB.hoods.find(h=>h.id===id)?.name||'Your society';
const CATS=['All','Furniture','Sports','Books','Kids','Home'];
const KIND_TITLES={services:'Local services',businesses:'Businesses',eventsports:'Events & Sports',lost:'Lost & Found',issues:'Community issues'};

/* ================= TOAST & RENDER ================= */
let toastTimer;
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2600);}
const hdr=(title,o={})=>{
  const canBack=o.back!==false&&S.stack.length>0;
  return `<header class="top">${canBack?`<button class="back" data-a="back" aria-label="Go back">${ic('back',18)}Back</button>`:''}<div class="ttl"><b>${title}</b>${o.sub?`<small>${o.sub}</small>`:''}</div><div class="hdr-right" style="display:flex;gap:6px;align-items:center">${o.right||''}</div></header>`;
};
const page=(head,body)=>`${head}<main class="scroll">${body}</main>`;
const fld=(label,key,o={})=>{const err=S.errors[key];const v=S.draft[key]??'';const inp=o.area?`<textarea data-f="${key}" maxlength="${o.max||500}" placeholder="${esc(o.ph||'')}">${esc(v)}</textarea>`:`<input data-f="${key}" value="${esc(v)}" type="${o.type||'text'}" placeholder="${esc(o.ph||'')}" inputmode="${o.mode||'text'}" autocomplete="off" ${o.max?`maxlength="${o.max}"`:''}>`;return `<label class="fld"><span>${label}</span>${inp}${err?`<em class="err" role="alert">${err}</em>`:''}${o.hint?`<small class="muted">${o.hint}</small>`:''}</label>`};
const sel=(label,key,opts)=>`<label class="fld"><span>${label}</span><select data-f="${key}">${opts.map(o=>`<option ${S.draft[key]===o?'selected':''}>${o}</option>`).join('')}</select>${S.errors[key]?`<em class="err">${S.errors[key]}</em>`:''}</label>`;
const chipRow=(items,active,act,extra='')=>`<div class="chips">${items.map(i=>`<button class="chip ${i===active?'on':''}" data-a="${act}" data-v="${esc(i)}" ${extra}>${esc(i)}</button>`).join('')}</div>`;
const empty=(e,t,s='')=>`<div class="empty"><div class="e">${e}</div><b>${t}</b>${s}</div>`;
const gate=()=>`<div class="gate"><div class="e">🛡️</div><b>Verification needed</b><p>Only verified neighbours can post, sell and chat. Finish verification to unlock this.</p><button class="btn sm" data-a="go" data-n="verify">Check status</button></div>`;
const approved=()=>S.user.status==='approved';

function render(){
  const ae=document.activeElement;let focus=null;
  if(ae&&(ae.dataset.q||ae.dataset.f)){focus={k:ae.dataset.q?'data-q':'data-f',v:ae.dataset.q||ae.dataset.f,s:ae.selectionStart};}
  document.documentElement.dataset.theme=S.settings.dark?'dark':'light';
  $('#screen').innerHTML=view();
  const inApp=S.stage==='app';const root=!S.stack.length&&!S.overlay;
  const nav=$('#nav');nav.style.display=(inApp&&root)?'flex':'none';
  if(inApp&&root)nav.innerHTML=navHTML();
  $('#fab').style.display=(inApp&&root)?'grid':'none';
  $('#overlay').innerHTML=overlayHTML();
  if(focus){const el=document.querySelector(`[${focus.k}="${focus.v}"]`);if(el){el.focus();try{el.setSelectionRange(focus.s,focus.s)}catch(e){}}}
  const sc=document.querySelector('.scroll');
  if(sc&&S.stack.at(-1)?.n==='chat')sc.scrollTop=sc.scrollHeight;
  if(S.stage==='splash'&&!S._t){S._t=setTimeout(()=>{S.stage='onboard';S._t=null;render();},1600);}
}
const navHTML=()=>{
  const b=(t,label,ico)=>`<button class="nb ${S.tab===t?'on':''}" data-a="tab" data-v="${t}" aria-label="${label}"><span class="ni">${ic(ico,22)}</span><span>${label}</span></button>`;
  return b('home','Home','home')+b('market','Market','store')+`<button class="nb create" data-a="sheet" aria-label="Create a post or listing"><span class="ni">${ic('plus',28)}</span><span>Create</span></button>`+b('chats','Chat','chat')+b('profile','Profile','user');
};
function overlayHTML(){
  if(S.overlay==='create')return createSheet();
  if(S.overlay==='avatar')return avatarSheet();
  if(S.overlay==='reel')return reelHTML();
  return '';
}
function createSheet(){
  const opts=[['text','📝','Text post'],['photo','📷','Photo'],['reel','🎬','Reel or video'],['announce','📢','Announcement'],['sale','🛒','Buy and sell'],['event','🎉','Event'],['sport','🏸','Sports match'],['issue','📍','Report issue']];
  return `<div class="ov" data-a="closeOv"><div class="sheet" onclick="event.stopPropagation()"><div class="grab"></div><h3 style="margin:0 0 12px">Create</h3><div class="cgrid">${opts.map(([v,e,t])=>`<button class="cbtn" data-a="create" data-v="${v}"><span>${e}</span><b>${t}</b></button>`).join('')}</div><p class="muted" style="font-size:12px;text-align:center;margin:8px 0 0">Posting and selling require verified neighbour status.</p></div></div>`;
}
function avatarSheet(){
  return `<div class="ov" data-a="closeOv"><div class="sheet" onclick="event.stopPropagation()"><div class="grab"></div><h3 style="margin:0 0 12px">Profile photo</h3><button class="opt" data-a="pickAvatar"><span class="ico">🖼️</span><span><b>Upload from device</b><small>JPG or PNG, kept on this device for the demo</small></span></button>${S.user.photo?`<button class="opt" data-a="removeAvatar"><span class="ico">🗑️</span><span><b>Remove photo</b><small>Go back to your initials</small></span></button>`:''}<button class="btn ghost" data-a="closeOv">Cancel</button></div></div>`;
}
function reelHTML(){
  const p=DB.posts.find(x=>x.id===S.reelId);if(!p)return '';
  return `<div class="reelv" role="dialog" aria-label="Video by ${esc(p.author)}"><button class="x" data-a="closeOv" aria-label="Close video">✕</button><div class="bg" style="background:${gradOf(hash(p.id))}"><span>${p.emo}</span></div><div class="info"><div class="row">${av(p.author,'sm')}<b>${esc(p.author)}</b>${p.sponsored?'<span class="pill warn">Promo</span>':''}</div><p style="margin:8px 0 0;font-size:14px;line-height:1.45">${esc(p.text)}</p><div class="prog"><i></i></div><div class="row" style="justify-content:space-between;font-size:13px"><small style="opacity:.75">Demo video · playback simulated</small><button class="act" style="color:#fff;flex:none;width:auto" data-a="like" data-id="${p.id}">${ic('heart',20)} ${p.likes}</button></div></div></div>`;
}

function view(){
  if(S.stage==='splash')return V.splash();
  if(S.stage==='onboard')return V.onboard();
  if(S.stage==='login')return V.login();
  if(S.stage==='otp')return V.otp();
  if(S.stage==='hood')return V.hood();
  if(S.stage==='proof')return V.proof();
  if(S.stage==='verify')return V.verify();
  const top_=S.stack.at(-1);
  if(top_)return V[top_.n](top_.p||{});
  return V[S.tab]();
}

/* ================= SCREENS ================= */
const V={};
const LOGO=`<svg viewBox="0 0 100 100" width="92" height="92" aria-hidden="true"><circle cx="50" cy="50" r="46" fill="#1F6259"/><path d="M28 62a22 22 0 1 1 44 0" stroke="#EFBD63" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="72" cy="30" r="9" fill="#F28B70"/></svg>`;
V.splash=()=>`<div class="splash">${LOGO}<h1>LocalLoop AI</h1><p>Your neighbourhood, connected and trusted.</p></div>`;
V.onboard=()=>{const s=SLIDES[S.slide];const last=S.slide===SLIDES.length-1;return `<div class="ob"><div class="row" style="justify-content:flex-end"><button class="chip" data-a="skip">Skip</button></div><div class="hero-art"><div class="big" aria-hidden="true">${s.e}</div><h2 style="text-align:center;margin-top:20px;font-size:24px">${s.t}</h2><p class="muted" style="text-align:center;max-width:300px;line-height:1.5">${s.d}</p></div><div class="dots">${SLIDES.map((_,i)=>`<i class="${i===S.slide?'on':''}"></i>`).join('')}</div><button class="btn" data-a="next">${last?'Get started':'Next'}</button></div>`};
V.login=()=>`<div class="auth"><div class="logo-s">${ic('spark',26).replace('stroke="currentColor"','stroke="#EFBD63"')}</div><h1>Welcome to LocalLoop</h1><p class="muted" style="margin:6px 0 22px">Enter your mobile number. We will send a one-time code to verify it.</p>
  <label class="fld"><span>Mobile number</span><div class="phonein"><div class="pre">+91</div><input data-f="phone" value="${esc(S.draft.phone||'')}" type="tel" inputmode="numeric" maxlength="10" placeholder="10-digit number" style="flex:1"></div>${S.errors.phone?`<em class="err">${S.errors.phone}</em>`:''}<small class="muted">Demo: any valid Indian mobile number works.</small></label>
  <div style="margin-top:auto"><button class="btn" data-a="sendOtp" ${S.busy?'disabled':''}>${S.busy?'Sending…':'Send OTP'}</button><p class="muted" style="font-size:12px;text-align:center;margin:14px 0 0">By continuing you agree to the Terms and Privacy Policy.</p></div></div>`;
V.otp=()=>`<div class="auth"><button class="back" data-a="stageBack" style="margin-bottom:16px;align-self:flex-start">${ic('back',18)}Back</button><h1>Enter the code</h1><p class="muted" style="margin:6px 0 18px">We sent a 6-digit code to +91 ${esc(S.draft.phone||'')}.</p>
  <div class="otp"><input data-f="otp" maxlength="6" inputmode="numeric" placeholder="······" aria-label="One-time code" value="${esc(S.draft.otp||'')}"></div>${S.errors.otp?`<p class="err" style="text-align:center">${S.errors.otp}</p>`:''}
  <p class="muted" style="text-align:center;font-size:13px">Demo code: <b>123456</b></p>
  <div style="margin-top:auto"><button class="btn" data-a="verifyOtp" ${S.busy?'disabled':''}>${S.busy?'Verifying…':'Verify and continue'}</button><button class="btn ghost" style="margin-top:10px" data-a="sendOtp">Resend code</button></div></div>`;
V.hood=()=>{const q=(S.q.hood||'').toLowerCase();const list=DB.hoods.filter(h=>h.name.toLowerCase().includes(q));const isSwitch=S.stack.length>0;
  return page(isSwitch?hdr('Switch community',{sub:'Your new address will need verification'}):'', `<div class="${isSwitch?'':'auth'}">${isSwitch?'':`<h1>Choose your neighbourhood</h1><p class="muted" style="margin:6px 0 16px">You can only join one society. Your address proof will confirm it.</p>`}
  <div class="search">${ic('search',18)}<input data-q="hood" value="${esc(S.q.hood||'')}" placeholder="Search society or apartment"></div>
  <div class="opts">${list.map(h=>`<button class="radio ${(S.draft.hood||S.user.hood)===h.id?'on':''}" data-a="pickHood" data-v="${h.id}"><span class="rd"></span><span><b>${h.name}</b><small>${h.sub}</small></span></button>`).join('')||empty('🔎','No match','Try a different name.')}</div>
  ${S.errors.hood?`<p class="err">${S.errors.hood}</p>`:''}
  <div style="margin-top:16px">${isSwitch?`<button class="btn" data-a="switchHood">Request switch</button>`:`<button class="btn" data-a="hoodNext">Continue</button>`}</div></div>`)};
V.proof=()=>`<div class="auth"><button class="back" data-a="stageBack" style="margin-bottom:16px;align-self:flex-start">${ic('back',18)}Back</button><h1>Confirm your address</h1><p class="muted" style="margin:6px 0 18px">Upload one document showing your name and address. It is only used for verification and is never shown to other neighbours.</p>
  ${fld('Flat / house number','flat',{ph:'e.g. C-402',max:8})}
  ${sel('Document type','docType',['Electricity bill','Property tax receipt','Rent agreement','Society maintenance receipt'])}
  <button class="card" style="width:100%;text-align:left;font:inherit;color:inherit;cursor:pointer;display:flex;gap:12px;align-items:center" data-a="pickFile"><span style="font-size:26px">📄</span><span class="grow"><b>${S.draft.file?esc(S.draft.file):'Upload document'}</b><small class="muted" style="display:block">${S.draft.file?'Tap to replace':'PDF or photo, up to 5 MB'}</small></span></button>
  ${S.errors.file?`<p class="err">${S.errors.file}</p>`:''}
  <div style="margin-top:auto;padding-top:14px"><button class="btn" data-a="submitProof" ${S.busy?'disabled':''}>${S.busy?'Submitting…':'Submit for verification'}</button></div></div>`;
V.verify=()=>{
  const st=S.user.status;const stageMode=S.stage!=='app';
  const cfg={none:{bg:'linear-gradient(135deg,#8E7DBE,#6B5BA0)',e:'📨',t:'Not submitted yet',d:'Submit your address proof to become a verified neighbour.'},pending:{bg:'linear-gradient(135deg,#EFBD63,#D9A24B)',e:'⏳',t:'Verification pending',d:'Moderators usually review requests within 24 hours. We will notify you here.'},approved:{bg:'linear-gradient(135deg,#1F6259,#2E8A7C)',e:'✅',t:'You are verified',d:'Welcome to '+HOOD(S.user.hood)+'. You can now post, sell and chat with neighbours.'},rejected:{bg:'linear-gradient(135deg,#F28B70,#D9694E)',e:'⚠️',t:'Verification rejected',d:'The document was not clear enough to confirm your address. Please upload a clearer copy.'}}[st];
  const steps=[['Submit address proof',st!=='none'],['Moderator review',st==='approved'||st==='rejected'],['Verified access',st==='approved']];
  const firstOpen=steps.findIndex(s=>!s[1]);
  return page(hdr('Verification',{back:!stageMode&&S.stack.length>0}),`
   <div class="status-hero" style="background:${cfg.bg}"><div class="big">${cfg.e}</div><h2>${cfg.t}</h2><p>${cfg.d}</p></div>
   <div class="card"><b>Progress</b><div class="steps">${steps.map(([t,d],i)=>`<div class="step ${d?'done':(i===firstOpen?'now':'')}"><span class="n">${d?'✓':i+1}</span><span>${t}</span></div>`).join('')}</div>
   ${st==='rejected'?`<div class="banner"><span>⚠️</span><div><b>Reason</b><p>The address could not be confirmed from the uploaded bill. Use a bill where your name and flat number are clear.</p></div></div>`:''}
   ${st==='approved'?`<button class="btn" data-a="enterApp">Enter LocalLoop</button>`:''}
   ${st==='rejected'?`<button class="btn coral" data-a="resubmit">Upload a clearer document</button>`:''}</div>
   <div class="card" style="border-style:dashed"><b>Demo controls</b><p class="muted" style="font-size:13px;margin:6px 0 12px">Simulate the moderator decision to preview each state. Local only.</p>
   <div class="row" style="flex-wrap:wrap"><button class="btn sm" data-a="simApprove">Approve</button><button class="btn sm ghost" data-a="simReject">Reject</button><button class="btn sm ghost" data-a="simPending">Pending</button></div></div>`);
};

V.home=()=>{
  const unread=DB.notifs.filter(n=>!n.read).length;const f=S.filter.home||'All';const first=S.user.name.split(' ')[0];
  const head=`<header class="top"><div class="grow"><span class="muted" style="font-size:13px">Good evening</span><b style="display:block;font-size:20px">Hi, ${esc(first)} 👋</b><small class="muted" style="display:flex;gap:4px;align-items:center;margin-top:2px">${ic('pin',14)} ${esc(HOOD(S.user.hood))}</small></div><div style="display:flex;gap:8px"><button class="ib sos-ib" data-a="go" data-n="emergency" aria-label="Emergency help">🚨</button><button class="ib" data-a="go" data-n="notifs" aria-label="Notifications, ${unread} unread">${ic('bell')}${unread?'<span class="dot"></span>':''}</button></div></header>`;
  const reels=DB.posts.filter(p=>p.kind==='reel'||p.kind==='video');
  const feed=DB.posts.filter(p=>f==='All'||(f==='Posts'?(p.kind==='text'||p.kind==='photo'):f==='Videos'?(p.kind==='reel'||p.kind==='video'):p.type==='Announcement'||p.type==='Alert'));
  const shortcuts=[['🔧','Services','kind','services'],['🏪','Businesses','kind','businesses'],['🏸','Events & Sports','kind','eventsports'],['🔍','Lost & Found','kind','lost'],['📍','Issues','kind','issues'],['🛒','Marketplace','tab','market'],['✨','Ask AI','go','ai'],['🔖','Saved','go','saved']];
  return page(head,`
   ${!approved()?`<div class="banner"><span style="font-size:20px">🛡️</span><div class="grow"><b>Verification ${S.user.status==='pending'?'pending':'needed'}</b><p>Complete verification to post, sell and chat.</p><button class="btn sm ghost" style="width:auto" data-a="go" data-n="verify">View status</button></div></div>`:''}
   <div class="search" data-a="go" data-n="ai" style="cursor:pointer">${ic('search',18)}<input placeholder="Ask LocalLoop: plumber, weekend football, sofa…" readonly style="cursor:pointer"></div>
   <div class="short">${shortcuts.map(([e,t,a,x])=>`<button ${a==='tab'?`data-a="tab" data-v="${x}"`:a==='kind'?`data-a="go" data-n="kind" data-k="${x}"`:`data-a="go" data-n="${x}"`}><span class="e">${e}</span>${t}</button>`).join('')}</div>
   <div class="sec"><h3>Reels & promos</h3></div>
   <div class="hscroll">${reels.map(p=>`<button class="reelc" data-a="reel" data-id="${p.id}" aria-label="Play ${esc(p.author)} reel"><div class="tile" style="background:${gradOf(hash(p.id))}"><span>${p.emo}</span></div><b>${esc(p.author)}</b></button>`).join('')}</div>
   <div class="sec" style="margin-top:20px"><h3>Community feed</h3></div>
   ${chipRow(['All','Posts','Videos','Announcements'],f,'filterHome')}
   ${feed.map(p=>postCard(p)).join('')||empty('📭','Nothing here yet','Try another filter.')}`);
};
function mediaHTML(p){
  if(p.kind==='photo')return p.img?`<img class="media" src="${p.img}" alt="${esc((p.text||'Photo').slice(0,60))}">`:`<div class="tile" style="background:${gradOf(hash(p.id))};margin-top:8px"><span>${p.emo}</span></div>`;
  if(p.kind==='reel'||p.kind==='video')return `<button class="vid" data-a="reel" data-id="${p.id}" aria-label="Play video by ${esc(p.author)}"><div class="tile" style="background:${gradOf(hash(p.id))}"><span>${p.emo}</span></div><i class="play">▶</i><b class="dur">${p.dur}</b>${p.sponsored?'<em class="promo">Promo</em>':''}</button>`;
  return '';
}
function postCard(p){
  const comments=p.comments.length+p.comments.reduce((s,c)=>s+c.replies.length,0);
  return `<article class="card"><div class="row">${av(p.author)}<div class="grow"><b>${esc(p.author)}</b><div class="muted" style="font-size:12px">${esc(p.time)}${p.sponsored?' · Sponsored':''}</div></div><span class="pill">${esc(p.type)}</span></div>
  ${p.text?`<p class="post-text" data-a="go" data-n="post" data-id="${p.id}">${esc(p.text)}</p>`:''}${mediaHTML(p)}
  <div class="actions"><button class="act ${p.liked?'on':''}" data-a="like" data-id="${p.id}" aria-pressed="${p.liked}">${ic('heart',18)} ${p.likes}</button><button class="act" data-a="go" data-n="post" data-id="${p.id}">${ic('comment',18)} ${comments}</button><button class="act" data-a="share" data-id="${p.id}">↗ Share</button><button class="act save ${p.saved?'on':''}" data-a="save" data-id="${p.id}" aria-pressed="${p.saved}" aria-label="${p.saved?'Unsave':'Save'}">${ic('bookmark',18)}</button></div></article>`;
}
function listingCard(l,i){return `<button class="lcard" data-a="go" data-n="listing" data-id="${l.id}">${tile(l.emo,i)}<b>${esc(l.title)}</b><div class="price">${inr(l.price)}</div><div class="row" style="margin-top:4px"><span class="muted" style="font-size:12px">${esc(l.cond)}</span>${l.status!=='active'?pillFor(l.status):''}</div></button>`}

V.post=({id})=>{
  const p=DB.posts.find(x=>x.id===id);if(!p)return page(hdr('Post'),empty('🫥','Post not found','It may have been removed.'));
  const mine=p.author===S.user.name;
  const right=mine?`<button class="ib" data-a="go" data-n="newpost" data-id="${p.id}" aria-label="Edit post">${ic('edit')}</button><button class="ib" data-a="deletePost" data-id="${p.id}" aria-label="Delete post">${ic('trash')}</button>`:`<button class="ib" data-a="report" aria-label="Report post">${ic('flag')}</button>`;
  const rt=S.replyTo;
  const rep=rt?`<div class="row" style="margin-bottom:8px;font-size:13px"><span class="muted grow">Replying to <b style="color:var(--text)">${esc(rt.name)}</b></span><button class="chip" data-a="cancelReply">Cancel</button></div>`:'';
  return page(hdr('Post',{right}),`
   <div class="card"><div class="row">${av(p.author)}<div class="grow"><b>${esc(p.author)}</b><div class="muted" style="font-size:12px">${esc(p.time)}</div></div><span class="pill">${esc(p.type)}</span></div>
   ${p.text?`<p style="font-size:16px;line-height:1.6;margin:12px 0">${esc(p.text)}</p>`:''}${mediaHTML(p)}
   <div class="actions"><button class="act ${p.liked?'on':''}" data-a="like" data-id="${p.id}">${ic('heart',18)} ${p.likes} likes</button><button class="act save ${p.saved?'on':''}" data-a="save" data-id="${p.id}">${ic('bookmark',18)} ${p.saved?'Saved':'Save'}</button></div></div>
   <div class="sec"><h3>Comments (${p.comments.length})</h3></div>
   <div class="card" style="padding:12px">${rep}<div class="row"><input data-f="comment" value="${esc(S.draft.comment||'')}" placeholder="${rt?'Write a reply…':'Add a comment…'}" maxlength="300" style="flex:1;font:inherit;border:1.5px solid var(--line);border-radius:999px;padding:11px 16px;background:var(--bg);color:var(--text)" aria-label="Write a comment"><button class="ib" style="background:var(--accent);color:var(--onAccent);border:0" data-a="sendComment" aria-label="Send comment">${ic('send',18)}</button></div>${S.errors.comment?`<p class="err">${S.errors.comment}</p>`:''}</div>
   ${p.comments.length?p.comments.map(c=>`<div class="cmt"><div class="row">${av(c.author,'sm')}<b style="font-size:14px">${esc(c.author)}</b><span class="muted" style="font-size:12px">${esc(c.time)}</span></div><div class="body">${esc(c.text)}</div><div class="meta"><button data-a="replyTo" data-id="${c.id}" data-name="${esc(c.author)}">Reply</button></div>${c.replies.map(r=>`<div class="reply"><div class="row">${av(r.author,'sm')}<b style="font-size:13px">${esc(r.author)}</b><span class="muted" style="font-size:12px">${esc(r.time)}</span></div><div style="font-size:14px;margin-top:4px;padding-left:38px">${esc(r.text)}</div></div>`).join('')}</div>`).join(''):empty('💬','No comments yet','Start the conversation.')}`);
};

function feedGate(){return approved()}
V.newpost=({id})=>{
  const editing=!!id;
  if(!approved())return page(hdr('New post'),gate());
  const kind=S.draft.kind||'text';const titles={text:'Text post',photo:'Photo post',reel:'Reel or video'};
  const types=['Update','Announcement','Question','Alert'];
  const cover=['🌿','🎨','🍰','🏏','🛝','🪴','🎶','🌅'];
  return page(hdr(editing?'Edit post':titles[kind]),`
   ${editing?'':chipRow(['text','photo','reel'],kind,'setKind').replace(/data-v="(text|photo|reel)"/g,(m,v)=>`data-v="${v}"`).replace(/>text</,'>Text<').replace(/>photo</,'>Photo<').replace(/>reel</,'>Reel<')}
   <div class="sec" style="margin:8px 2px 8px"><h3>Post type</h3></div>${chipRow(types,S.draft.type||'Update','setType')}
   ${S.errors.type?`<p class="err">${S.errors.type}</p>`:''}
   ${kind!=='text'?`<div class="fld"><span>${kind==='reel'?'Video cover':'Photo'}</span>
     ${S.draft.img?`<img class="media" src="${S.draft.img}" alt="Selected photo">`:`<div class="tile" style="background:${gradOf(hash(S.draft.emo||'x'))}"><span>${S.draft.emo||'🌿'}</span></div>`}
     <div class="row" style="margin-top:10px;flex-wrap:wrap"><button class="btn sm ghost" style="width:auto" data-a="pickMedia">📁 Upload from device</button></div>
     <div class="chips" style="padding:8px 0 0">${cover.map(e=>`<button class="chip" style="font-size:18px;padding:6px 10px" data-a="pickEmo" data-v="${e}" aria-label="Cover ${e}">${e}</button>`).join('')}</div></div>`:''}
   <label class="fld"><span>Caption</span><textarea data-f="text" maxlength="280" placeholder="Share an update with your neighbours…" style="min-height:130px">${esc(S.draft.text||'')}</textarea>${S.errors.text?`<em class="err">${S.errors.text}</em>`:''}<div class="count">${(S.draft.text||'').length}/280 · minimum 10 characters</div></label>
   <div class="sticky-bar"><button class="btn ghost" data-a="back">Cancel</button><button class="btn" data-a="submitPost" ${S.busy?'disabled':''}>${S.busy?'Publishing…':editing?'Save changes':'Publish'}</button></div>`);
};

V.market=()=>{
  const cat=S.filter.market||'All';const q=(S.q.market||'').toLowerCase();const sort=S.q.sort||'Newest';
  let list=DB.listings.filter(l=>l.status!=='sold'&&(cat==='All'||l.cat===cat)&&(l.title+l.cat+l.seller).toLowerCase().includes(q));
  if(sort==='Price: low to high')list=[...list].sort((a,b)=>a.price-b.price);
  if(sort==='Price: high to low')list=[...list].sort((a,b)=>b.price-a.price);
  return page(hdr('Marketplace',{back:false,right:`<button class="chip" data-a="go" data-n="mylistings">My listings</button>`}),`
   <div class="search">${ic('search',18)}<input data-q="market" value="${esc(S.q.market||'')}" placeholder="Search furniture, books, bikes…"></div>
   ${chipRow(CATS,cat,'filterMarket')}
   <div class="row" style="margin:4px 0 12px"><span class="muted grow" style="font-size:13px">${list.length} items</span><select data-q="sort" aria-label="Sort" style="font:inherit;border:1px solid var(--line);border-radius:12px;padding:8px;background:var(--card);color:var(--text)">${['Newest','Price: low to high','Price: high to low'].map(o=>`<option ${sort===o?'selected':''}>${o}</option>`).join('')}</select></div>
   ${list.length?`<div class="grid2">${list.map((l,i)=>listingCard(l,i)).join('')}</div>`:empty('🛒','Nothing matches','Try another category or search.')}
   <button class="btn" style="margin-top:16px" data-a="go" data-n="newlisting">${ic('plus',18)} Sell an item</button>`);
};
V.listing=({id})=>{
  const l=DB.listings.find(x=>x.id===id);if(!l)return page(hdr('Listing'),empty('🫥','Listing not found',''));
  const bar=l.mine?`<div class="sticky-bar"><button class="btn ghost" data-a="go" data-n="newlisting" data-id="${l.id}">Edit listing</button><button class="btn" data-a="markSold" data-id="${l.id}">Mark as sold</button></div>`:`<div class="sticky-bar"><button class="ib" data-a="saveListing" data-id="${l.id}" aria-label="Save listing" style="width:52px;height:52px">${ic('bookmark')}</button><button class="btn" data-a="chatSeller" data-id="${l.id}">${ic('chat',18)} Chat with seller</button></div>`;
  return page(hdr('Listing',{right:l.saved?'<span class="pill ok">Saved</span>':''}),`
   ${tile(l.emo,DB.listings.indexOf(l))}
   <div class="row" style="margin-top:14px;align-items:flex-start"><div class="grow"><h2 style="font-size:22px">${esc(l.title)}</h2><div class="price" style="font-size:22px">${inr(l.price)}</div></div>${pillFor(l.status)}</div>
   <div class="card" style="margin-top:12px"><div class="kv"><span>Category</span><b>${l.cat}</b></div><div class="kv"><span>Condition</span><b>${l.cond}</b></div><div class="kv"><span>Pickup</span><b>${HOOD(S.user.hood)}</b></div></div>
   <div class="card"><b>Description</b><p class="muted" style="line-height:1.55;margin:8px 0 0">${esc(l.desc)}</p></div>
   <div class="card"><div class="row">${av(l.seller)}<div class="grow"><b>${esc(l.seller)}</b><div class="muted" style="font-size:12px">${l.mine?'You':'Verified neighbour'}</div></div>${l.mine?'':'<span class="pill ok">✓ Verified</span>'}</div></div>
   ${bar}`);
};
V.newlisting=({id})=>{
  const editing=!!id;
  if(!approved())return page(hdr('New listing'),gate());
  const emos=['🛋️','🚲','📚','🪑','🪴','📱','🧸','🍳','👕','🎮'];
  return page(hdr(editing?'Edit listing':'Sell an item'),`
   ${fld('Title','title',{ph:'e.g. Study table with chair',max:60})}
   ${fld('Price (₹)','price',{ph:'e.g. 2500',mode:'numeric',hint:'Enter 0 to give it away for free.'})}
   ${sel('Category','cat',['Furniture','Sports','Books','Kids','Home','Electronics'])}
   <div class="fld"><span>Condition</span>${chipRow(['Like new','Good','Used'],S.draft.cond||'Good','setCond')}</div>
   <div class="fld"><span>Photo (illustrated tile for the demo)</span><div class="chips" style="padding:0">${emos.map(e=>`<button class="chip ${S.draft.emo===e?'on':''}" style="font-size:20px;padding:6px 12px" data-a="pickEmo" data-v="${e}" aria-label="Choose ${e}">${e}</button>`).join('')}</div></div>
   ${fld('Description','desc',{area:true,ph:'Describe the item, its age and pickup details…',max:400})}
   <div class="sticky-bar"><button class="btn ghost" data-a="back">Cancel</button><button class="btn" data-a="submitListing" ${S.busy?'disabled':''}>${S.busy?'Saving…':editing?'Save changes':'Publish listing'}</button></div>`);
};
V.mylistings=()=>{
  const mine=DB.listings.filter(l=>l.mine);
  return page(hdr('My listings',{right:`<button class="ib" data-a="go" data-n="newlisting" aria-label="New listing">${ic('plus')}</button>`}),
    mine.length?mine.map((l,i)=>`<article class="card"><div class="row">${tile(l.emo,i,'sm')}<div class="grow"><b>${esc(l.title)}</b><div class="price" style="font-size:14px">${inr(l.price)}</div></div>${pillFor(l.status)}</div>
      <div class="row" style="margin-top:12px;flex-wrap:wrap"><button class="btn sm ghost" style="flex:1" data-a="go" data-n="newlisting" data-id="${l.id}">Edit</button>${l.status!=='sold'?`<button class="btn sm ghost" style="flex:1" data-a="toggleStatus" data-id="${l.id}">${l.status==='active'?'Pause':'Activate'}</button><button class="btn sm" style="flex:1" data-a="markSold" data-id="${l.id}">Mark sold</button>`:''}</div></article>`).join(''):empty('🏷️','No listings yet','Items you sell will appear here.'));
};

V.chats=()=>{
  const q=(S.q.chat||'').toLowerCase();const list=DB.chats.filter(c=>c.with.toLowerCase().includes(q));
  return page(hdr('Chat',{back:false}),`<div class="search">${ic('search',18)}<input data-q="chat" value="${esc(S.q.chat||'')}" placeholder="Search conversations"></div>
  ${list.length?list.map(c=>{const last=c.msgs.at(-1);return `<button class="card" style="width:100%;text-align:left;font:inherit;color:inherit;cursor:pointer;display:flex;gap:12px;align-items:center" data-a="go" data-n="chat" data-id="${c.id}">${av(c.with)}<span class="grow"><b style="display:block">${esc(c.with)}</b><small class="muted" style="display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(last?.t||'No messages yet')}</small></span><small class="muted">${last?.at||''}</small></button>`}).join(''):empty('💬','No conversations','Chat with a seller from any listing in the Market tab.')}`);
};
V.chat=({id})=>{
  const c=DB.chats.find(x=>x.id===id);if(!c)return page(hdr('Chat'),empty('🫥','Conversation not found',''));
  const l=DB.listings.find(x=>x.id===c.listing);
  return `${hdr(esc(c.with),{sub:l?`About: ${esc(l.title)}`:'Neighbour chat'})}
   <div style="margin:0 16px 8px;padding:10px 12px;border-radius:14px;background:var(--chip);font-size:12.5px;color:var(--sub)">Demo chat. Messages stay on this device and replies are simulated.</div>
   <main class="scroll" style="padding-bottom:100px">${c.msgs.map(m=>`<div class="bubble ${m.me?'me':'them'}">${esc(m.t)}<small>${m.at}</small></div>`).join('')}${S.typing===c.id?'<div class="muted" style="font-size:13px">typing…</div>':''}</main>
   <div class="composer"><input data-f="msg" value="${esc(S.draft.msg||'')}" placeholder="Type a message…" maxlength="500" aria-label="Message"><button class="send" data-a="send" data-id="${c.id}" aria-label="Send message">${ic('send',18)}</button></div>`;
};

V.profile=()=>{
  const u=S.user;const mine=DB.posts.filter(p=>p.author===u.name);const photos=mine.filter(p=>p.kind==='text'||p.kind==='photo');const reels=mine.filter(p=>p.kind==='reel'||p.kind==='video');
  const tab=S.filter.profile||'Posts';const grid=tab==='Posts'?photos:reels;
  return page(hdr('Profile',{back:false,right:`<button class="ib" data-a="go" data-n="settings" aria-label="Settings">${ic('gear')}</button>`}),`
   <div class="card" style="text-align:center;padding:22px 14px">
     <button class="avbtn" data-a="avatarSheet" aria-label="Change profile photo">${av(u.name,'lg')}<span class="camb">${ic('camera',16)}</span></button>
     <h2 style="margin-top:10px">${esc(u.name)}</h2><div class="muted" style="font-size:13px">Flat ${esc(u.settings?.showFlat===false?'hidden':u.flat)} · ${esc(HOOD(u.hood))}</div>
     <div style="margin-top:8px">${u.status==='approved'?'<span class="pill ok">✓ Verified neighbour</span>':pillFor(u.status==='none'?'pending':u.status)}</div>
     <p style="margin:12px 0 0;font-size:14px;line-height:1.5">${esc(u.bio)}</p>
     <div class="row" style="margin-top:14px"><button class="btn sm ghost" style="flex:1" data-a="go" data-n="editprofile">Edit profile</button><button class="btn sm ghost" style="flex:1" data-a="share">Share profile</button></div>
   </div>
   <div class="stats"><button class="stat" data-a="go" data-n="followers" data-v="Followers"><b>${mine.length}</b><small>Posts</small></button><button class="stat" data-a="go" data-n="followers" data-v="Followers"><b>${DB.followers.length}</b><small>Followers</small></button><button class="stat" data-a="go" data-n="followers" data-v="Following"><b>${u.following.length}</b><small>Following</small></button></div>
   <div class="menu">
     <button class="mrow" data-a="go" data-n="history"><span class="ico">${ic('clock',18)}</span><span class="grow">Community history</span><span class="ch">${ic('next',18)}</span></button>
     <button class="mrow" data-a="go" data-n="verify"><span class="ico">${ic('shield',18)}</span><span class="grow">Verification status</span>${pillFor(u.status==='none'?'pending':u.status)}</button>
     <button class="mrow" data-a="go" data-n="saved"><span class="ico">${ic('bookmark',18)}</span><span class="grow">Saved posts</span><span class="ch">${ic('next',18)}</span></button>
     <button class="mrow" data-a="go" data-n="settings"><span class="ico">${ic('gear',18)}</span><span class="grow">Settings</span><span class="ch">${ic('next',18)}</span></button>
   </div>
   <div class="seg" role="tablist"><button class="${tab==='Posts'?'on':''}" data-a="profileTab" data-v="Posts">▦ Posts</button><button class="${tab==='Reels'?'on':''}" data-a="profileTab" data-v="Reels">🎬 Reels</button></div>
   ${grid.length?`<div class="pgrid">${grid.map(p=>p.kind==='photo'&&p.img?`<button class="pg" style="background-image:url('${p.img}')" data-a="go" data-n="post" data-id="${p.id}" aria-label="Open post"></button>`:p.kind==='reel'||p.kind==='video'?`<button class="pg" style="background:${gradOf(hash(p.id))}" data-a="reel" data-id="${p.id}" aria-label="Play reel"><span>${p.emo}</span></button>`:`<button class="pg" style="background:${gradOf(hash(p.id))}" data-a="go" data-n="post" data-id="${p.id}" aria-label="Open post"><span>${p.emo}</span></button>`).join('')}</div>`:empty(tab==='Posts'?'📷':'🎬',tab==='Posts'?'No posts yet':'No reels yet',"Your posts will appear here. Tap + to share something.")}`);
};
V.editprofile=()=>{
  if(!S.draft.name&&S.draft.name!=='')S.draft={name:S.user.name,bio:S.user.bio,flat:S.user.flat};
  return page(hdr('Edit profile'),`
   <div style="display:flex;justify-content:center;margin:6px 0 16px"><button class="avbtn" data-a="avatarSheet" aria-label="Change photo">${av(S.draft.name||S.user.name,'lg')}<span class="camb">${ic('camera',16)}</span></button></div>
   ${fld('Full name','name',{max:40})}
   ${fld('Flat number','flat',{max:8,hint:'Shown to neighbours unless hidden in Settings.'})}
   ${fld('Bio','bio',{area:true,max:120,ph:'Tell neighbours a bit about you'})}
   <label class="fld"><span>Mobile number</span><input value="${esc(S.user.phone)}" disabled style="opacity:.6"><small class="muted">Phone number can only change through verification.</small></label>
   <div class="sticky-bar"><button class="btn ghost" data-a="back">Cancel</button><button class="btn" data-a="saveProfile" ${S.busy?'disabled':''}>${S.busy?'Saving…':'Save profile'}</button></div>`);
};
V.followers=({v})=>{
  const tab=v||'Followers';const list=tab==='Followers'?DB.followers:S.user.following;
  return page(hdr(S.user.name.split(' ')[0]+'’s network'),`<div class="seg"><button class="${tab==='Followers'?'on':''}" data-a="go" data-n="followers" data-v="Followers" data-replace="1">Followers (${DB.followers.length})</button><button class="${tab==='Following'?'on':''}" data-a="go" data-n="followers" data-v="Following">Following (${S.user.following.length})</button></div>
   <div class="card" style="padding:4px 14px">${list.map(n=>{const f=S.user.following.includes(n);return `<div class="mini-row">${av(n,'sm')}<div class="grow"><b>${esc(n)}</b><small>${HOOD(S.user.hood)}</small></div><button class="btn sm ${f?'ghost':''}" style="width:auto" data-a="follow" data-n="${esc(n)}">${f?'Following':'Follow'}</button></div>`}).join('')||empty('👥','No one here yet','')}</div>`);
};
V.history=()=>page(hdr('Community history',{sub:'Societies you have lived in'}),`
   <div class="card"><p class="muted" style="margin:0;font-size:13.5px;line-height:1.5">Your community history stays with your account and is visible only to you. Verification is needed each time you switch.</p></div>
   <div class="timeline">${DB.history.slice().reverse().map(h=>`<div class="tl ${h.status==='current'?'cur':''}"><div class="row" style="justify-content:space-between;align-items:flex-start"><b>${esc(h.place)}</b>${h.status==='current'?'<span class="pill ok">Current</span>':'<span class="pill">Past</span>'}</div><small class="muted" style="display:block;margin-top:2px">${esc(h.period)}</small><p style="margin:6px 0 0;font-size:14px;line-height:1.45">${esc(h.note)}</p></div>`).join('')}</div>
   <button class="btn" style="margin-top:8px" data-a="go" data-n="switchHood">Switch community</button>`);
V.switchHood=()=>V.hood();
V.settings=()=>{
  const s=S.settings;const sw=(on,a,extra='')=>`<button class="mrow" data-a="${a}" ${extra}><span class="grow">${''}</span><span class="switch ${on?'on':''}"></span></button>`;
  const row=(icon,label,on,a,extra='')=>`<button class="mrow" data-a="${a}" ${extra}><span class="ico">${icon}</span><span class="grow">${label}</span><span class="switch ${on?'on':''}" aria-hidden="true"></span></button>`;
  const nav=(icon,label,a,extra='',right='')=>`<button class="mrow" data-a="${a}" ${extra}><span class="ico">${icon}</span><span class="grow">${label}</span>${right||`<span class="ch">${ic('next',18)}</span>`}</button>`;
  const sec=t=>`<div class="sec" style="margin:14px 2px 8px"><h3 style="font-size:13px;text-transform:uppercase;letter-spacing:.06em;color:var(--sub)">${t}</h3></div>`;
  return page(hdr('Settings'),`
   ${sec('Account')}<div class="menu">
     ${nav(ic('user',18),'Edit profile','go','data-n="editprofile"')}
     ${nav(ic('shield',18),'Verification status','go','data-n="verify"',pillFor(S.user.status==='none'?'pending':S.user.status))}
     ${nav(ic('clock',18),'Community history','go','data-n="history"')}
     ${nav(ic('pin',18),'Switch community','go','data-n="switchHood"')}
     ${nav('📱','Phone number','noop','',`<span class="muted" style="font-size:13px">${esc(S.user.phone)}</span>`)}
   </div>
   ${sec('Privacy')}<div class="menu">
     ${row('🌐','Public profile',s.publicProfile,'setting','data-g="publicProfile"')}
     ${row('🏠','Show flat number',s.showFlat,'setting','data-g="showFlat"')}
     ${row('🕘','Show my activity',s.showActivity,'setting','data-g="showActivity"')}
   </div>
   ${sec('Notifications')}<div class="menu">
     ${row('💬','Posts and comments',s.notifs.posts,'notifSetting','data-k="posts"')}
     ${row('✉️','Chat messages',s.notifs.chat,'notifSetting','data-k="chat"')}
     ${row('🎉','Events and sports',s.notifs.events,'notifSetting','data-k="events"')}
     ${row('🚨','Emergency alerts',s.notifs.emergency,'notifSetting','data-k="emergency"')}
   </div>
   ${sec('Appearance')}<div class="menu">
     ${row('🌙','Dark mode',s.dark,'theme')}
     <label class="mrow" style="cursor:default"><span class="ico">🌐</span><span class="grow">Language</span><select data-lang style="font:inherit;border:1px solid var(--line);border-radius:10px;padding:6px;background:var(--card);color:var(--text)">${['English','Hindi','Kannada'].map(l=>`<option ${s.lang===l?'selected':''}>${l}</option>`).join('')}</select></label>
   </div>
   ${sec('Support')}<div class="menu">
     ${nav('❓','Help center','toastMsg','data-m="Help center opens in the full app (demo)."')}
     ${nav('🐞','Report a problem','toastMsg','data-m="Thanks, problem reports will be sent in the full app (demo)."')}
     ${nav('ℹ️','About LocalLoop','toastMsg','data-m="LocalLoop AI prototype v2 · demo data only."')}
   </div>
   ${S.user.role==='admin'?`${sec('Moderation')}<div class="menu">${nav(ic('shield',18),'Admin dashboard','go','data-n="admin"')}</div>`:''}
   <div class="menu">
     ${nav('🧪','Demo: view as '+(S.user.role==='admin'?'resident':'admin'),'toggleRole','','<span class="pill">Demo</span>')}
     <button class="mrow" data-a="logout" style="color:var(--danger)"><span class="ico">${ic('logout',18)}</span><span class="grow">Log out</span></button>
   </div>`);
};
V.emergency=()=>page(hdr('Emergency help'),`
   <button class="sos" data-a="sos"><div style="font-size:34px">🚨</div><b>Send SOS to society security</b><small>Shares your flat number and time (demo only, not sent)</small></button>
   <div class="sec"><h3>Call now</h3></div>
   <div class="card" style="padding:4px 14px">
     ${[['🚑','Ambulance','108'],['🚒','Fire brigade','101'],['👮','Police','100'],['🆘','National emergency','112']].map(([e,n,num])=>`<div class="mini-row"><span style="font-size:24px">${e}</span><div class="grow"><b>${n}</b><small>${num}</small></div><a class="btn sm" style="width:auto;text-decoration:none" href="tel:${num}">Call</a></div>`).join('')}
     <div class="mini-row"><span style="font-size:24px">🛡️</span><div class="grow"><b>Society security desk</b><small>Gate 1 · 24 × 7</small></div><button class="btn sm" style="width:auto" data-a="toastMsg" data-m="Demo: security desk number not configured yet.">Call</button></div>
   </div>
   <p class="muted" style="font-size:12.5px;line-height:1.5">In a life-threatening situation, call 112 first. Your location and flat number are shared only with the security desk.</p>`);
V.notifs=()=>page(hdr('Notifications',{right:`<button class="chip" data-a="markAllRead">Mark all read</button>`}),
  DB.notifs.map(n=>`<button class="mini-row" style="width:100%;background:none;border-left:0;border-right:0;border-top:0;font:inherit;color:inherit;text-align:left;cursor:pointer" data-a="notif" data-id="${n.id}"><span style="width:40px;height:40px;border-radius:14px;background:var(--chip);display:grid;place-items:center">${n.to[0]==='chat'?'💬':'🔔'}</span><span class="grow"><b style="${n.read?'font-weight:500;color:var(--sub)':''}">${esc(n.t)}</b><small>${n.time}</small></span>${n.read?'':'<span class="dot" style="position:static"></span>'}</button>`).join('')||empty('🔕','All caught up','No notifications yet.'));
V.saved=()=>{
  const sp=DB.posts.filter(p=>p.saved),sl=DB.listings.filter(l=>l.saved);
  return page(hdr('Saved'),`<div class="sec" style="margin-top:0"><h3>Posts</h3></div>${sp.map(p=>postCard(p)).join('')||'<p class="muted">No saved posts.</p>'}<div class="sec"><h3>Listings</h3></div><div class="grid2">${sl.map((l,i)=>listingCard(l,i)).join('')||'<p class="muted">No saved listings.</p>'}</div>`);
};
V.admin=()=>{
  if(S.user.role!=='admin')return page(hdr('Admin'),gate().replace('Only verified neighbours can post, sell and chat. Finish verification to unlock this.','Only moderators can open the admin dashboard.').replace('Verification needed','Admins only'));
  const tab=S.filter.admin||'Verifications';
  const pendV=DB.verifications.filter(v=>v.status==='pending').length;const openR=DB.reports.filter(r=>r.status==='open').length;
  return page(hdr('Admin dashboard',{sub:'Moderator view · demo data'}),`
   <div class="stat-tiles"><div><b>${DB.posts.length}</b><small>Posts</small></div><div><b>${DB.listings.filter(l=>l.status==='active').length}</b><small>Active listings</small></div><div><b>${pendV}</b><small>Pending verifications</small></div><div><b>${openR}</b><small>Open reports</small></div></div>
   <div class="seg"><button class="${tab==='Verifications'?'on':''}" data-a="adminTab" data-v="Verifications">Verifications</button><button class="${tab==='Reports'?'on':''}" data-a="adminTab" data-v="Reports">Reports</button></div>
   ${tab==='Verifications'?(DB.verifications.map(v=>`<article class="card"><div class="row">${av(v.name,'sm')}<div class="grow"><b>${esc(v.name)}</b><div class="muted" style="font-size:12.5px">Flat ${v.flat} · ${esc(v.doc)}</div></div>${pillFor(v.status)}</div>${v.status==='pending'?`<div class="row" style="margin-top:12px"><button class="btn sm" style="flex:1" data-a="decide" data-id="${v.id}" data-v="approved">Approve</button><button class="btn sm ghost" style="flex:1" data-a="decide" data-id="${v.id}" data-v="rejected">Reject</button></div>`:''}</article>`).join('')||empty('✅','Queue is clear','No verification requests.')):
   (DB.reports.map(r=>`<article class="card"><div class="row"><div class="grow"><b>${esc(r.type)}</b><div class="muted" style="font-size:12.5px">${esc(r.target)} · reported by ${esc(r.by)}</div></div>${pillFor(r.status)}</div>${r.status==='open'?`<div class="row" style="margin-top:12px"><button class="btn sm" style="flex:1" data-a="resolve" data-id="${r.id}" data-v="resolved">Resolve</button><button class="btn sm ghost" style="flex:1" data-a="resolve" data-id="${r.id}" data-v="dismissed">Dismiss</button></div>`:''}</article>`).join('')||empty('🎉','No reports','The community is behaving well.'))}`);
};

/* Generic community modules (Events & Sports merged into one) */
function itemCard(kind,it,i){
  const toggle=kind==='eventsports'||kind==='issues';
  const label=kind==='eventsports'?(it.going?'Going ✓':it.type==='Sports'?'Join':'I’m going'):kind==='issues'?(it.going?'Upvoted ✓':'Upvote'):({services:'Book',businesses:'Visit',lost:'Contact'})[kind];
  const btn=toggle?`<button class="btn sm ${it.going?'ghost':''}" style="width:auto" data-a="itemToggle" data-k="${kind}" data-id="${it.id}">${label}</button>`:`<button class="btn sm line" style="width:auto" data-a="itemAct">${label}</button>`;
  return `<article class="card"><div class="row" style="align-items:flex-start">${tile(it.emo,i,'sm')}<div class="grow"><button data-a="go" data-n="item" data-k="${kind}" data-id="${it.id}" style="all:unset;cursor:pointer;display:block"><b style="display:block;font-size:15px">${esc(it.t)}</b></button><small class="muted" style="display:block;font-size:12.5px;line-height:1.35">${esc(it.sub)}</small><div class="row" style="margin-top:6px;flex-wrap:wrap"><span class="pill">${esc(it.cat)}</span>${it.verified?'<span class="pill ok">✓ Verified</span>':''}${it.status?pillFor(it.status):''}${it.type?`<span class="pill">${it.type}</span>`:''}<span class="muted" style="font-size:12px">${esc(it.meta)}</span></div></div></div><div class="row" style="justify-content:flex-end;margin-top:10px">${btn}</div></article>`;
}
V.kind=({k})=>{
  const isES=k==='eventsports';const items=DB[k];
  const cats=isES?['All','Events','Sports']:['All',...new Set(items.map(i=>i.cat))];
  const cat=S.filter[k]||'All';const q=(S.q[k]||'').toLowerCase();
  const list=items.filter(i=>(cat==='All'||(isES?i.type===cat:i.cat===cat))&&(i.t+i.sub+i.cat).toLowerCase().includes(q));
  const addBtn=isES?`<button class="btn ghost" style="margin-bottom:12px" data-a="go" data-n="newevent" data-v="Event">${ic('plus',18)} Create event or match</button>`:k==='issues'?`<button class="btn ghost" style="margin-bottom:12px" data-a="go" data-n="newissue">${ic('alert',18)} Report issue</button>`:'';
  return page(hdr(KIND_TITLES[k]),`
   <div class="search">${ic('search',18)}<input data-q="${k}" value="${esc(S.q[k]||'')}" placeholder="Search ${KIND_TITLES[k].toLowerCase()}"></div>
   ${chipRow(cats,cat,'kindFilter',`data-k="${k}"`)}
   ${addBtn}
   ${list.map((it,i)=>itemCard(k,it,i)).join('')||empty('🔎','Nothing found','Try a different search or category.')}`);
};
V.item=({k,id})=>{
  const it=DB[k].find(x=>x.id===id);if(!it)return page(hdr('Details'),empty('🫥','Not found',''));
  const toggle=k==='eventsports'||k==='issues';
  const label=k==='eventsports'?(it.going?'Going ✓':it.type==='Sports'?'Join match':'I’m going'):k==='issues'?(it.going?'Upvoted ✓':'Upvote'):({services:'Book this service',businesses:'Visit business',lost:'Contact owner'})[k];
  return page(hdr(KIND_TITLES[k]),`${tile(it.emo,0)}<h2 style="margin:14px 0 4px;font-size:22px">${esc(it.t)}</h2><div class="row" style="flex-wrap:wrap;gap:6px"><span class="pill">${esc(it.cat)}</span>${it.status?pillFor(it.status):''}${it.type?`<span class="pill">${it.type}</span>`:''}</div>
   <div class="card" style="margin-top:12px"><div class="kv"><span>When / where</span><b style="text-align:right">${esc(it.meta)}</b></div>${it.count!==undefined?`<div class="kv"><span>People</span><b>${it.count}</b></div>`:''}</div>
   <div class="card"><p class="muted" style="margin:0;line-height:1.55">${esc(it.sub)}</p></div>
   <div class="sticky-bar">${toggle?`<button class="btn ${it.going?'ghost':''}" data-a="itemToggle" data-k="${k}" data-id="${it.id}">${label}</button>`:`<button class="btn" data-a="itemAct">${label}</button>`}</div>`);
};
V.newevent=()=>{
  if(!approved())return page(hdr('Create event'),gate());
  const isSport=S.draft.evType==='Sport';
  return page(hdr(isSport?'Create sports match':'Create event'),`
   <div class="fld"><span>Type</span>${chipRow(['Event','Sport'],S.draft.evType,'setEvType')}</div>
   ${fld(isSport?'Match name':'Event name','title',{ph:isSport?'e.g. Sunday badminton doubles':'e.g. Terrace movie night',max:60})}
   ${fld('When','when',{ph:'e.g. Sat, 6:30 pm',max:40})}
   ${fld('Where','place',{ph:'e.g. Clubhouse, Court 2',max:50})}
   ${fld('Details','desc',{area:true,max:300,ph:'What to bring, who can join, level of play…'})}
   <div class="sticky-bar"><button class="btn ghost" data-a="back">Cancel</button><button class="btn" data-a="submitEvent" ${S.busy?'disabled':''}>${S.busy?'Publishing…':'Publish'}</button></div>`);
};
V.newissue=()=>page(hdr('Report an issue'),`
   ${fld('Title','title',{ph:'e.g. Lift 2 door stuck',max:70})}
   ${sel('Category','cat',['Lift','Water','Electricity','Cleanliness','Security','Other'])}
   ${fld('Location','loc',{ph:'e.g. Block B, ground floor',max:60})}
   ${fld('Describe the problem','desc',{area:true,max:400,ph:'What happened, and when? At least 15 characters.'})}
   <div class="sticky-bar"><button class="btn ghost" data-a="back">Cancel</button><button class="btn" data-a="submitIssue" ${S.busy?'disabled':''}>${S.busy?'Sending…':'Submit'}</button></div>`);
V.ai=()=>{
  const res=S.aiRes;
  return page(hdr('Ask LocalLoop AI',{sub:'Demo search · not a live AI yet'}),`
   <div class="hero" style="margin-bottom:12px"><h2>What do you need nearby?</h2><p>Search services, events, sports partners, listings and posts. Live AI answers will come from the FastAPI backend.</p></div>
   <div class="search">${ic('spark',18)}<input data-f="aiq" value="${esc(S.draft.aiq||'')}" placeholder="e.g. plumber on weekends, sofa, football" aria-label="Ask LocalLoop"></div>
   <div class="row" style="margin-bottom:12px"><button class="btn sm" style="width:auto;flex:1" data-a="askAI">Search</button></div>
   <div class="chips">${['plumber','sofa','football','diwali','tutor'].map(s=>`<button class="chip" data-a="aiSuggest" data-v="${s}">${s}</button>`).join('')}</div>
   ${res?(res.length?`<div class="sec"><h3>${res.length} result${res.length>1?'s':''}</h3></div>${res.map(r=>`<button class="card" style="width:100%;text-align:left;font:inherit;color:inherit;cursor:pointer;display:flex;gap:12px;align-items:center" data-a="go" data-n="${r.n}" data-id="${r.id}" ${r.k?`data-k="${r.k}"`:''}>${tile(r.emo,0,'sm')}<span class="grow"><b style="display:block">${esc(r.t)}</b><small class="muted">${esc(r.sub)}</small></span><span class="pill">${r.tag}</span></button>`).join('')}`:empty('🔎','No matches yet','Try a broader word like "service" or "event".')):''}`);
};
V.newpost2=()=>'';

/* Post form uses kind + type state */
V.verifyGuard=()=>'';

/* ================= NAVIGATION & ACTIONS ================= */
function go(n,p={}){
  if(n==='newpost'){
    const ex=p.id?DB.posts.find(x=>x.id===p.id):null;
    S.draft=ex?{id:ex.id,kind:ex.kind,type:ex.type,text:ex.text,emo:ex.emo,img:ex.img}:{kind:p.kind||'text',type:p.type||'Update',text:'',emo:'🌿',img:null};
    S.errors={};
  }
  if(n==='newlisting'){const l=p.id?DB.listings.find(x=>x.id===p.id):null;S.draft=l?{title:l.title,price:String(l.price),cat:l.cat,cond:l.cond,emo:l.emo,desc:l.desc}:{title:'',price:'',cat:'Furniture',cond:'Good',emo:'🛋️',desc:''};S.errors={};}
  if(n==='newevent'){S.draft={evType:p.v||'Event',title:'',when:'',place:'',desc:''};S.errors={};}
  if(n==='newissue'){S.draft={title:'',cat:'Lift',loc:'',desc:''};S.errors={};}
  if(n==='editprofile'){S.draft={name:S.user.name,bio:S.user.bio,flat:S.user.flat};S.errors={};}
  if(n==='post'){S.draft.comment='';S.replyTo=null;}
  if(n==='chat'){S.draft.msg='';}
  if(n==='ai'){S.aiRes=null;}
  if(n==='switchHood'){S.draft.hood=null;}
  if(n==='mylistings'||n==='saved'||n==='history'||n==='settings'||n==='notifs'||n==='emergency'||n==='admin'||n==='kind'||n==='item'||n==='followers'||n==='verify'||n==='chat'||n==='listing'||n==='post'||n==='newevent'||n==='newissue'||n==='newlisting'||n==='newpost'||n==='editprofile'||n==='ai'||n==='switchHood'){/* routes */}
  S.overlay=null;S.stack.push({n,p});render();
}
function closeOv(){S.overlay=null;}
function gateOK(){if(approved())return true;toast('Verification needed for this action');S.stack=[];S.stage==='app'&&go('verify');return false;}
function searchAll(q){
  const words=q.split(/\s+/).filter(Boolean);const hit=s=>words.some(w=>s.toLowerCase().includes(w));const out=[];
  DB.services.forEach(s=>hit(s.t+s.cat+s.sub)&&out.push({n:'kind',k:'services',id:s.id,emo:s.emo,t:s.t,sub:s.sub,tag:'Service'}));
  DB.businesses.forEach(s=>hit(s.t+s.cat+s.sub)&&out.push({n:'item',k:'businesses',id:s.id,emo:s.emo,t:s.t,sub:s.sub,tag:'Business'}));
  DB.eventsports.forEach(s=>hit(s.t+s.cat+s.sub)&&out.push({n:'item',k:'eventsports',id:s.id,emo:s.emo,t:s.t,sub:s.meta,tag:s.type}));
  DB.listings.forEach(l=>hit(l.title+l.cat)&&l.status!=='sold'&&out.push({n:'listing',id:l.id,emo:l.emo,t:l.title,sub:inr(l.price),tag:'Market'}));
  DB.posts.forEach(p=>p.text&&hit(p.text)&&out.push({n:'post',id:p.id,emo:p.emo||'📣',t:p.text.slice(0,60)+'…',sub:p.author,tag:'Post'}));
  return out.slice(0,12);
}
async function act(a,d){
  switch(a){
    case 'skip':S.stage='login';break;
    case 'next':S.slide++;if(S.slide>=SLIDES.length){S.stage='login';S.slide=0;}break;
    case 'stageBack':if(S.stage==='otp')S.stage='login';else if(S.stage==='proof')S.stage='hood';else if(S.stage==='hood')S.stage='otp';S.errors={};break;
    case 'sendOtp':{const ph=(S.draft.phone||'').trim();if(!/^[6-9]\d{9}$/.test(ph)){S.errors={phone:'Enter a valid 10-digit mobile number starting with 6 to 9.'};break;}S.errors={};S.busy=true;render();await wait(0,700);S.busy=false;S.stage='otp';toast('Demo OTP sent. Use 123456.');break;}
    case 'verifyOtp':{if(S.draft.otp!=='123456'){S.errors={otp:'That code is incorrect. Use 123456 in this demo.'};break;}S.errors={};S.busy=true;render();await wait(0,600);S.busy=false;S.stage='hood';S.draft.hood=null;S.q={};break;}
    case 'pickHood':S.draft.hood=d.v;S.errors={};break;
    case 'hoodNext':if(!S.draft.hood){S.errors={hood:'Please choose your neighbourhood to continue.'};break;}S.user.hood=S.draft.hood;S.errors={};S.stage='proof';break;
    case 'switchHood':{if(!S.draft.hood||S.draft.hood===S.user.hood){toast('Choose a different community first');break;}S.busy=true;render();await Repo.switchHood(S.draft.hood);S.busy=false;S.stack=[];S.stage==='app'&&go('verify');toast('Switch requested. Verify your new address (demo).');return;}
    case 'pickFile':S.draft.file='electricity_bill_oct2026.pdf';toast('Demo: file attached');break;
    case 'submitProof':{const e={};if(!/^[A-Za-z]?-?\d{1,4}[A-Za-z]?$/.test((S.draft.flat||'').trim()))e.flat='Enter a valid flat number such as C-402.';if(!S.draft.file)e.file='Please attach a document.';S.errors=e;if(Object.keys(e).length)break;S.busy=true;render();await Repo.submitProof({flat:S.draft.flat.trim(),hood:S.user.hood});S.busy=false;S.stage='verify';toast('Submitted. A moderator will review it soon (demo).');break;}
    case 'simApprove':S.user.status='approved';toast('Demo: verification approved');break;
    case 'simReject':S.user.status='rejected';toast('Demo: verification rejected');break;
    case 'simPending':S.user.status='pending';toast('Demo: set to pending');break;
    case 'resubmit':S.user.status='none';S.stage='proof';S.draft.file=null;break;
    case 'enterApp':S.stage='app';S.tab='home';S.stack=[];break;
    case 'back':S.stack.pop();S.replyTo=null;break;
    case 'tab':S.tab=d.v;S.stack=[];S.overlay=null;break;
    case 'sheet':S.overlay=S.overlay==='create'?null:'create';break;
    case 'closeOv':S.overlay=null;break;
    case 'create':{S.overlay=null;S.stack=[];
      if(d.v==='text')go('newpost',{kind:'text',type:'Update'});
      else if(d.v==='photo')go('newpost',{kind:'photo',type:'Update'});
      else if(d.v==='reel')go('newpost',{kind:'reel',type:'Update'});
      else if(d.v==='announce')go('newpost',{kind:'text',type:'Announcement'});
      else if(d.v==='sale')go('newlisting');
      else if(d.v==='event')go('newevent',{v:'Event'});
      else if(d.v==='sport')go('newevent',{v:'Sport'});
      else if(d.v==='issue')go('newissue');
      return;}
    case 'go':{
      if(d.n==='verify'&&S.stage!=='app'){S.stage='verify';break;}
      if(['newpost','newlisting','newevent'].includes(d.n)&&!approved()){go(d.n,{id:d.id,v:d.v});break;}
      if(d.n==='kind'){go('kind',{k:d.k});return;}
      if(d.n==='item'){go('item',{k:d.k,id:d.id});return;}
      if(d.n==='followers'){go('followers',{v:d.v});return;}
      if(d.n==='chat'){go('chat',{id:d.id});return;}
      if(d.n==='post'){go('post',{id:d.id});return;}
      if(d.n==='listing'){go('listing',{id:d.id});return;}
      if(d.n==='editprofile'){go('editprofile');return;}
      if(d.n==='newevent'){go('newevent',{v:d.v});return;}
      if(d.n==='newpost'){go('newpost',{id:d.id});return;}
      if(d.n==='newlisting'){go('newlisting',{id:d.id});return;}
      if(d.n==='newissue'){go('newissue');return;}
      if(d.n==='notifs'){go('notifs');return;}
      if(d.n==='emergency'){go('emergency');return;}
      go(d.n,{});return;}
    case 'reel':S.reelId=d.id;S.overlay='reel';break;
    case 'like':await Repo.likePost(d.id);break;
    case 'share':toast('Share link copied (demo)');break;
    case 'save':{await Repo.savePost(d.id);toast(DB.posts.find(p=>p.id===d.id).saved?'Saved to your bookmarks':'Removed from saved');break;}
    case 'setType':S.draft.type=d.v;break;
    case 'setKind':S.draft.kind=d.v;break;
    case 'setEvType':S.draft.evType=d.v;break;
    case 'pickEmo':S.draft.emo=d.v;S.draft.img=null;break;
    case 'pickMedia':S.pickFor='post';$('#pick').click();return;
    case 'sendComment':{const t=(S.draft.comment||'').trim();if(t.length<2){S.errors={comment:'Comments need at least 2 characters.'};break;}S.errors={};S.busy=true;render();await Repo.addComment(S.stack.at(-1).p.id,t,S.replyTo?.id);S.busy=false;S.draft.comment='';S.replyTo=null;toast('Comment added (demo, kept in this session)');break;}
    case 'replyTo':S.replyTo={id:d.id,name:d.name};break;
    case 'cancelReply':S.replyTo=null;break;
    case 'deletePost':{await Repo.deletePost(d.id);S.stack=[];toast('Post deleted (demo)');break;}
    case 'report':toast('Thanks. A moderator will review this (demo).');break;
    case 'submitPost':{
      if(!S.draft.type){S.errors={type:'Choose a post type.'};break;}
      const t=(S.draft.text||'').trim();
      if(t.length<10){S.errors={text:'Please write at least 10 characters.'};break;}
      if(t.length>280){S.errors={text:'Keep it under 280 characters.'};break;}
      S.errors={};S.busy=true;render();
      const cur=S.stack.at(-1);
      await Repo.upsertPost({id:cur.p.id||null,kind:S.draft.kind||'text',type:S.draft.type,text:t,emo:S.draft.emo,img:S.draft.img});
      S.busy=false;S.stack.pop();S.draft={};
      toast(cur.p.id?'Post updated (demo)':'Published (demo, kept in this session)');break;}
    case 'filterHome':S.filter.home=d.v;break;
    case 'filterMarket':S.filter.market=d.v;break;
    case 'profileTab':S.filter.profile=d.v;break;
    case 'kindFilter':S.filter[d.k]=d.v;break;
    case 'adminTab':S.filter.admin=d.v;break;
    case 'saveListing':{await Repo.toggleListingSaved(d.id);toast(DB.listings.find(l=>l.id===d.id).saved?'Listing saved':'Removed from saved');break;}
    case 'chatSeller':{
      if(!gateOK())break;
      const l=DB.listings.find(x=>x.id===d.id);
      let c=DB.chats.find(x=>x.with===l.seller&&x.listing===l.id);
      if(!c){c={id:uid(),with:l.seller,listing:l.id,msgs:[]};DB.chats.unshift(c);}
      S.stack=[];S.tab='chats';go('chat',{id:c.id});return;}
    case 'send':{
      const t=(S.draft.msg||'').trim();if(!t)break;
      const c=DB.chats.find(x=>x.id===d.id);S.draft.msg='';
      await Repo.sendMessage(c.id,t);
      S.typing=c.id;render();
      setTimeout(()=>{S.typing=null;c.msgs.push({me:false,t:BOT[Math.floor(Math.random()*BOT.length)],at:nowT()});if(S.stack.at(-1)?.n==='chat')render();},1100);
      return;}
    case 'markSold':await Repo.setListingStatus(d.id,'sold');S.stack=[];toast('Marked as sold (demo)');break;
    case 'toggleStatus':{const l=DB.listings.find(x=>x.id===d.id);await Repo.setListingStatus(d.id,l.status==='active'?'paused':'active');toast(l.status==='active'?'Listing paused':'Listing active again (demo)');break;}
    case 'submitListing':{
      const e={};const title=(S.draft.title||'').trim();const price=Number(S.draft.price);const desc=(S.draft.desc||'').trim();
      if(title.length<4)e.title='Title needs at least 4 characters.';
      if(S.draft.price===''||isNaN(price)||price<0||price>1000000)e.price='Enter a price between 0 and 10,00,000.';
      if(desc.length<20)e.desc='Description needs at least 20 characters.';
      S.errors=e;if(Object.keys(e).length)break;
      S.busy=true;render();const cur=S.stack.at(-1);
      await Repo.upsertListing({id:cur.p.id||null,data:{title,price,cat:S.draft.cat,cond:S.draft.cond||'Good',emo:S.draft.emo||'🛋️',desc}});
      S.busy=false;S.stack.pop();toast(cur.p.id?'Listing updated (demo)':'Listing published (demo, kept in this session)');break;}
    case 'pickEmoL':break;
    case 'setCond':S.draft.cond=d.v;break;
    case 'submitEvent':{
      const e={};const title=(S.draft.title||'').trim();
      if(title.length<4)e.title='Name needs at least 4 characters.';
      if(!(S.draft.when||'').trim())e.when='Add a date or time.';
      if(!(S.draft.place||'').trim())e.place='Add a place.';
      S.errors=e;if(Object.keys(e).length)break;
      S.busy=true;render();await Repo.addEvent({evType:S.draft.evType,title,when:S.draft.when.trim(),desc:(S.draft.desc||'').trim()||'Community event.'});
      S.busy=false;S.stack.pop();toast('Published to Events & Sports (demo)');break;}
    case 'saveProfile':{
      const e={};if((S.draft.name||'').trim().length<2)e.name='Name needs at least 2 characters.';if(!(S.draft.flat||'').trim())e.flat='Flat number is required.';if((S.draft.bio||'').length>120)e.bio='Keep your bio under 120 characters.';
      S.errors=e;if(Object.keys(e).length)break;
      S.busy=true;render();const oldName=S.user.name;await Repo.saveProfile({name:S.draft.name.trim(),bio:(S.draft.bio||'').trim(),flat:S.draft.flat.trim()});
      if(oldName!==S.user.name)DB.posts.forEach(p=>{if(p.author===oldName)p.author=S.user.name;});
      S.busy=false;S.stack.pop();toast('Profile saved (demo)');break;}
    case 'avatarSheet':S.overlay='avatar';break;
    case 'pickAvatar':S.pickFor='avatar';S.overlay=null;$('#pick').click();return;
    case 'removeAvatar':S.user.photo=null;S.overlay=null;toast('Profile photo removed');break;
    case 'follow':await Repo.toggleFollow(d.n);break;
    case 'setting':S.settings[d.g]=!S.settings[d.g];break;
    case 'notifSetting':S.settings.notifs[d.k]=!S.settings.notifs[d.k];break;
    case 'theme':S.settings.dark=!S.settings.dark;break;
    case 'toastMsg':toast(d.m);break;
    case 'noop':break;
    case 'sos':toast('Demo: SOS is not sent. Connect the security desk to enable it.');break;
    case 'toggleRole':S.user.role=S.user.role==='admin'?'resident':'admin';toast('Demo view: '+(S.user.role==='admin'?'Admin':'Resident'));break;
    case 'logout':S.stage='login';S.tab='home';S.stack=[];S.draft={};S.overlay=null;toast('Logged out (demo)');break;
    case 'notif':{const n=DB.notifs.find(x=>x.id===d.id);n.read=true;S.stack=[];S.tab=n.to[0]==='chat'?'chats':'home';go(n.to[0]==='chat'?'chat':'post',{id:n.to[1]});return;}
    case 'markAllRead':DB.notifs.forEach(n=>n.read=true);toast('All notifications marked as read');break;
    case 'decide':await Repo.decideVerification(d.id,d.v);toast(d.v==='approved'?'Neighbour approved (demo)':'Request rejected (demo)');break;
    case 'resolve':await Repo.resolveReport(d.id,d.v);toast('Report '+d.v+' (demo)');break;
    case 'itemToggle':{await Repo.toggleItem(d.k,d.id);const it=DB[d.k].find(x=>x.id===d.id);toast(it.going?'Thanks for joining (demo)':'Removed (demo)');break;}
    case 'itemAct':toast('Demo: contact actions are not connected yet');break;
    case 'submitIssue':{
      const e={};if((S.draft.title||'').trim().length<4)e.title='Title needs at least 4 characters.';if((S.draft.desc||'').trim().length<15)e.desc='Description needs at least 15 characters.';
      S.errors=e;if(Object.keys(e).length)break;
      S.busy=true;render();await Repo.addIssue({title:S.draft.title.trim(),cat:S.draft.cat,loc:S.draft.loc,desc:S.draft.desc.trim()});
      S.busy=false;S.stack.pop();toast('Issue reported (demo, kept in this session)');break;}
    case 'askAI':{const q=(S.draft.aiq||'').trim().toLowerCase();if(q.length<2){toast('Type a few words to search');break;}S.aiRes=searchAll(q);break;}
    case 'aiSuggest':S.draft.aiq=d.v;S.aiRes=searchAll(d.v);break;
    case 'share2':break;
  }
  render();
}

/* ================= EVENTS ================= */
document.addEventListener('click',async e=>{
  const el=e.target.closest('[data-a]');if(!el||el.disabled)return;
  const d={...el.dataset};
  if(d.a==='go'&&el.tagName==='BUTTON'&&d.n==='ai'&&S.stack.length===0&&S.tab==='home'){/* allowed */}
  if(d.a==='reel'){await act('reel',d);return;}
  await act(d.a,d);
});
document.addEventListener('input',e=>{
  const t=e.target;
  if(t.dataset.f){
    if(t.dataset.f==='phone')t.value=t.value.replace(/\D/g,'').slice(0,10);
    if(t.dataset.f==='otp')t.value=t.value.replace(/\D/g,'').slice(0,6);
    S.draft[t.dataset.f]=t.value;
  }
  if(t.dataset.q){S.q[t.dataset.q]=t.value;render();}
});
document.addEventListener('change',e=>{
  const t=e.target;
  if(t.dataset.f)S.draft[t.dataset.f]=t.value;
  if(t.dataset.q){S.q[t.dataset.q]=t.value;render();}
  if(t.dataset.lang!==undefined){S.settings.lang=t.value;toast('Language set to '+t.value+' (demo, UI stays English)');render();}
});
document.addEventListener('keydown',e=>{
  if(e.key!=='Enter')return;
  const t=e.target;
  if(t.matches('[data-f="comment"]')){e.preventDefault();act('sendComment',{});}
  else if(t.matches('[data-f="msg"]')){e.preventDefault();const c=S.stack.at(-1);if(c&&c.n==='chat')act('send',{id:c.p.id});}
  else if(t.matches('[data-f="aiq"]')){e.preventDefault();act('askAI',{});}
  else if(t.matches('[data-f="otp"]')){e.preventDefault();act('verifyOtp',{});}
  else if(t.matches('[data-f="phone"]')){e.preventDefault();act('sendOtp',{});}
});
$('#pick').addEventListener('change',e=>{
  const f=e.target.files[0];if(!f)return;
  if(f.type&&!f.type.startsWith('image/')){toast('Please choose an image file');return;}
  const r=new FileReader();
  r.onload=()=>{
    if(S.pickFor==='avatar'){S.user.photo=r.result;toast('Profile photo updated (kept on this device for the demo)');}
    else{S.draft.img=r.result;toast('Photo attached');}
    render();
  };
  r.readAsDataURL(f);e.target.value='';
});
render();