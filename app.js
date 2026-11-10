const people=[
 {id:'HLQ-01',name:'刘胡兰',image:'assets/people/liu-hulan.jpg',imagePosition:'center 28%',era:'革命时期',life:'1932—1947',place:'山西省文水县',mapPlace:'文水县',coords:[37.44,112.03],color:'#c94d45',role:'革命烈士 · 青年女共产党员',tags:['坚定信念','群众工作','青春担当'],story:'刘胡兰1932年出生于山西文水。1942年起参加儿童团，1945年进入文水县妇女干部训练班学习，随后回村开展妇女与群众工作。1946年，她被吸收为中国共产党候补党员。1947年1月12日，面对敌人的威胁，她拒绝屈服，英勇就义。',contributions:['妇救会与支前群众工作','青年女性革命精神象征','胡兰精神传承'],source:{org:'共产党员网',title:'刘胡兰：生的伟大，死的光荣',url:'https://www.12371.cn/special/zgjs/lhljs/',accessed:'2026-11-05'}},
 {id:'SJL-01',name:'申纪兰',image:'assets/people/shen-jilan.jpg',imagePosition:'center 18%',era:'社会主义革命和建设时期',life:'1929—2020',place:'山西省平顺县',mapPlace:'平顺县',coords:[36.20,113.44],color:'#c6a35f',role:'全国劳动模范 · 共和国勋章获得者',tags:['男女同工同酬','人民代表','乡村建设'],story:'申纪兰1929年出生于山西平顺。1951年，她参与西沟农业生产合作社工作，推动妇女参加集体劳动。1954年当选第一届全国人大代表，此后连续当选十三届。她长期扎根西沟，参与乡村建设与基层治理；2019年获授“共和国勋章”。',contributions:['男女同工同酬写入宪法','十三届全国人大代表','共和国勋章（2019）'],source:{org:'人民网·中国共产党新闻网',title:'申纪兰同志生平',url:'https://cpc.people.com.cn/GB/n1/2020/0629/c87393-31762623.html',accessed:'2026-11-05'}},
 {id:'FSP-01',name:'范素萍',image:'assets/people/fan-suping.jpg',imagePosition:'center 30%',era:'改革开放和新时代',life:'1965—',place:'山西省和顺县',mapPlace:'和顺县',coords:[37.33,113.57],color:'#4ea477',role:'和顺牵绣传承人 · 全国乡村工匠名师',tags:['非遗传承','女性就业','乡村振兴'],story:'范素萍1965年出生于山西和顺，自幼接触当地牵绣。成年后，她持续学习、整理并改进牵绣技法，把传统鞋垫纹样拓展到装饰画与生活用品。她通过工作坊和培训传播技艺，并探索把手工生产与乡村女性就业相结合。',contributions:['和顺牵绣保护与创新','女性居家就业培训','非遗助力乡村振兴'],source:{org:'中国新闻网',title:'山西和顺牵绣传承人：让千年硬质绣广为人知',url:'https://www.chinanews.com.cn/m/cul/2017/12-22/8407036.shtml',accessed:'2026-11-05'}}
];
const eras={
 revolution:{image:'assets/eras/revolution.jpg',period:'1930年代—1949',eventYear:'1947',yearNote:'点击查看代表事件',kicker:'战争动员与妇女参与',title:'烽火中的群体选择',description:'抗日战争与解放战争时期，山西妇女通过识字教育、生产劳动、救护和支前等方式进入公共行动。基层妇女组织成为连接家庭、乡村与革命动员的重要力量。',milestone:'时代注脚：妇女救国组织、支前生产与基层动员不断发展。',person:'HLQ-01',event:{date:'1947年1月12日',place:'山西省文水县云周西村',title:'刘胡兰英勇就义',summary:'敌军包围云周西村后，以威胁和利诱逼迫群众交代革命活动。刘胡兰拒绝屈服并英勇就义；这一事件成为革命年代青年女性坚定信念与牺牲精神的重要见证。',actorLine:'当事人：刘胡兰 · 文水县云周西村',source:'共产党员网',url:'https://www.12371.cn/special/zgjs/lhljs/'}},
 construction:{image:'assets/eras/construction.jpg',period:'1949—1978',eventYear:'1954',yearNote:'点击查看代表事件',kicker:'劳动参与与制度平等',title:'建设中的权利确认',description:'农业合作化和社会主义建设推动农村劳动组织发生变化，妇女更广泛地参加集体生产。劳动报酬、基层民主和公共参与成为妇女争取平等地位的重要议题。',milestone:'时代注脚：1954年宪法确认妇女在政治、经济、文化、社会和家庭生活等方面享有同男子平等的权利。',person:'SJL-01',event:{date:'1954年',place:'山西省平顺县西沟村',title:'男女同工同酬写入宪法',summary:'西沟妇女以实际劳动争取同工同酬，相关实践得到全国关注。1954年，“男女同工同酬”原则写入新中国第一部宪法，劳动实践由此上升为制度层面的平等保障。',actorLine:'当事人：申纪兰 · 平顺县西沟村',source:'共产党员网',url:'https://www.12371.cn/2021/05/31/VIDE1622435170888903.shtml'}},
 reform:{image:'assets/eras/reform.jpg',period:'1978—至今',eventYear:'2006',yearNote:'点击查看代表事件',kicker:'文化传承与乡村发展',title:'传统技艺的当代转化',description:'改革开放以来，市场渠道、文化遗产保护和乡村产业为女性手工艺者提供了新的公共空间。非遗保护逐渐与技艺培训、居家就业和地方文化传播相连接。',milestone:'时代注脚：2006年，和顺牵绣被列入山西省第一批非物质文化遗产扩展项目。',person:'FSP-01',event:{date:'2006年',place:'山西省晋中市和顺县',title:'和顺牵绣入选省级非遗',summary:'和顺牵绣被列入山西省第一批非物质文化遗产扩展项目，传统硬质绣由民间手艺进入制度化保护与传播体系，为后续技艺整理、培训和产业转化提供了新的公共平台。',actorLine:'当事人：范素萍 · 和顺牵绣传承实践',source:'中国新闻网',url:'https://www.chinanews.com.cn/m/cul/2017/12-22/8407036.shtml'}}
};
const eventCollections={
 revolution:{title:'革命时期代表事件',period:'革命时期',items:[
  {title:'太行妇救会',image:'assets/events/taihang-women-salvation-association.jpg',body:'全称晋东南妇女救国总会，1939年3月8日在山西沁县成立。它的核心任务是动员妇女支援抗战：组织妇女赶制军鞋军粮、成立拥军招待所慰劳部队，组建妇女自卫队直接参与军事活动，同时开办识字班开展扫盲和抗日宣传。为支撑这些工作，中共中央北方局1940年在山西武乡石圪垤村举办妇女干部训练班，卓琳任班长、刘志兰任党支部书记。课程涵盖马列理论、抗战形势和军事知识，学员还深入农村办识字班、教唱抗日歌曲，帮助妇女挣脱封建束缚。'},
  {title:'山西女兵连',image:'assets/events/shanxi-women-soldiers.jpg',body:'1936年至1937年，牺盟会在太原国民师范举办军政训练班女兵连，前后共有190余名学员，来自全国17个省市，多数是青年学生，平均年龄20岁左右，最小的仅十四五岁。她们按正规军建制编组，接受严格军事训练，同时学政治理论，还组织歌咏队、话剧组上街宣传抗日。指导员刘亚雄是大革命时期的老党员。抗战爆发后，这批学员分赴前线，有的参加八路军主力，有的组织县区游击队。民族女英雄李林、抗日女战士江涛都出自这支队伍。'},
  {title:'太行奶娘',image:'assets/events/taihang-nurse.jpg',imagePosition:'center 20%',body:'抗战时期太行根据地妇女哺育八路军后代、烈士遗孤的群体，多数人一生未留下照片。据2015年新华社、人民网走访：张招弟1941年接下八路军女婴，日军扫荡时抱孩子躲山洞；暴二梅1940年哺育八路军后代，家贫挖野菜，仍用小米玉米糊糊贴补奶水；赵引弟在日军扫荡时抱起两个八路军孩子往山上跑，自己的孩子留在家中；桑狗为护住给八路军孩子下蛋的母鸡，被日军刺刀捅死。'}
 ]},
 construction:{title:'社会主义建设时期代表事件',period:'社会主义建设时期',items:[
  {title:'太钢 从三八炉到高铁钢',image:'assets/events/construction-taigang.jpg',body:'太钢的“娘子军”在钢铁行业里留下了很深的印记。1975年，太钢成立了“三八”炉，24名女工中既有二十几岁的姑娘，也有两个孩子的妈妈。她们原先有的是保养工，有的是炊事员，却硬是站上了炼钢一线。王玉玲在太钢科技战线工作32年，带队攻克高速动车车轴钢技术难关。袁盛芝2004年成为热连轧厂1549生产线系统班第一位女班长，在技改项目中负责加热炉区和步进梁区的电气施工。'},
  {title:'大同煤矿 女采煤队长与拣矸女工',image:'assets/events/construction-coal-mine.jpg',imagePosition:'center 22%',body:'武乃英1958年从山西采矿学校毕业，1975年在姜家湾煤矿担任采煤队长。她推行机械化生产，采用“优选法”和“统筹法”，使煤炭生产、安全等指标达到煤炭部甲级队标准。姬君一在汾西矿务局张家庄矿坚守26年，从实习生做到高级工程师，主持全矿4次通风系统改造。新时代，大同煤矿晋华宫矿的梁月兰在拣矸岗位工作19年，带领16名女工组成的班组。'},
  {title:'同工同酬',image:'assets/events/construction-equal-pay.jpg',body:'1951年，平顺县西沟村初级社成立时，男女干同样的活，女社员只记一半工分，且常记在丈夫名下。副社长申纪兰动员妇女下田，并带领妇女与男社员开展劳动竞赛。1952年，西沟村率先实现“男女干一样的活，记一样的工分”。1953年《人民日报》报道此事。1954年，申纪兰将“男女同工同酬”的倡议带到第一届全国人民代表大会，并最终写入新中国第一部《宪法》。'}
 ]},
 reform:{title:'改革开放时期至今代表事件',period:'改革开放时期至今',items:[
  {title:'非遗传承',image:'assets/events/reform-intangible-heritage.jpg',body:'山西女性深耕剪纸、刺绣、面塑等民间艺术，打破传统局限，通过创办合作社、打造文创品牌，将“指尖技艺”转化为“指尖经济”。她们将手艺与文旅、脱贫相连，实现文化保护与经济创收的双向奔赴。'},
  {title:'文化教育',image:'assets/events/reform-culture-education.jpg',body:'山西女性是三晋文脉的传递者。从晋剧舞台上的薪火相传，到文学创作与高校讲台上的默默耕耘，她们以特有的细腻与坚韧滋养精神底色，为山西的文化繁荣与人才培养构筑智力基座。'},
  {title:'乡村振兴',image:'assets/events/reform-rural-vitalization.jpg',body:'无数基层女性干部和带头人扎根泥土，带领群众修路兴业、拓宽销路。她们用实干打破偏见，以女性的亲和力与执行力，带领乡亲蹚出致富路，诠释乡村振兴中的“她”力量。'},
 ]}
};
const mapPoints=[
 {id:'person-hlq',type:'personSite',personId:'HLQ-01',name:'文水县云周西村',coords:[37.44,112.03],placeInfo:'记录革命战争时期当地妇女组织、群众动员与支前工作的乡村空间。',color:'#c94d45'},
 {id:'heritage-hlq',type:'heritageSite',personId:null,name:'刘胡兰纪念场所',coords:[37.46,112.00],placeImage:'assets/places/liu-hulan-memorial.jpg',placeInfo:'以革命史料收藏、事迹陈列和纪念教育为主要功能。展陈内容记录云周西村革命活动、群众支前以及烈士纪念形成的历史过程。',color:'#c94d45'},
 {id:'person-sjl',type:'personSite',personId:'SJL-01',name:'平顺县西沟村',coords:[36.20,113.44],placeInfo:'记录农业合作化、妇女参加集体生产与争取男女同工同酬的基层实践。',color:'#c6a35f'},
 {id:'heritage-sjl',type:'heritageSite',personId:null,name:'西沟实践场所',coords:[36.23,113.48],placeImage:'assets/places/xigou-practice-site.jpg',placeInfo:'以农业合作和乡村建设史为主要展示内容。这里记录妇女参加集体劳动、同工同酬实践、治山治沟与基层治理的发展过程。',color:'#c6a35f'},
 {id:'person-fsp',type:'personSite',personId:'FSP-01',name:'和顺县',coords:[37.33,113.57],placeInfo:'记录牵绣在当地的传统流布、非遗保护与乡村手工业发展。',color:'#4ea477'},
 {id:'heritage-fsp',type:'heritageSite',personId:null,name:'牵绣传承工坊',coords:[37.36,113.62],placeImage:'assets/places/heshun-embroidery.jpg',placeInfo:'集牵绣技法整理、作品制作、陈列展示和技艺培训于一体。这里记录牵绣从家庭手艺进入非遗保护、公共展示与乡村手工业的发展过程。',color:'#4ea477'}
];
const grid=document.querySelector('#figureGrid');
people.forEach((p,i)=>{const card=document.createElement('article');card.className='person-card reveal';card.style.setProperty('--person',p.color);card.dataset.open=p.id;card.tabIndex=0;card.setAttribute('role','button');card.setAttribute('aria-label',`打开${p.name}人物档案`);card.innerHTML=`<div class="person-image has-portrait" data-index="0${i+1}"><img src="${p.image}" alt="${p.name}人物照片" loading="lazy" style="object-position:${p.imagePosition}"></div><div class="person-body"><p class="person-era">${p.era}</p><h3>${p.name}</h3><p class="person-role">${p.role}</p><div class="person-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><span class="card-link">进入人物档案 →</span></div>`;card.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();openPerson(card.dataset.open)}});grid.append(card)});
document.querySelectorAll('.era-tab').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('.era-tab').forEach(t=>{t.classList.remove('active');t.setAttribute('aria-selected','false')});tab.classList.add('active');tab.setAttribute('aria-selected','true');const e=eras[tab.dataset.era];const yearButton=document.querySelector('.era-year-block');yearButton.dataset.event=tab.dataset.era;yearButton.setAttribute('aria-label',`查看${tab.querySelector('span').textContent}代表事件`);document.querySelector('#eraKicker').textContent=e.kicker;document.querySelector('#eraTitle').textContent=e.title;document.querySelector('#eraDescription').textContent=e.description;document.querySelector('#eraMilestone').textContent=e.milestone;const eraVisual=document.querySelector('#eraVisual');eraVisual.src=e.image;eraVisual.alt=`${tab.querySelector('span').textContent}时代背景图`;const person=people.find(p=>p.id===e.person);const link=document.querySelector('#eraStage .text-link');link.dataset.open=e.person;link.textContent=`本时期代表人物：${person.name} →`}));
const dialog=document.querySelector('#personDialog');
function formatCoords(coords){return `北纬 ${coords[0].toFixed(2)}° · 东经 ${coords[1].toFixed(2)}°`}
function openPerson(id){const p=people.find(item=>item.id===id);if(!p)return;const portrait=document.querySelector('#dialogPortrait');portrait.src=p.image;portrait.alt=`${p.name}人物照片`;portrait.style.objectPosition=p.imagePosition;document.querySelector('#dialogEra').textContent=p.era;document.querySelector('#dialogName').textContent=p.name;document.querySelector('#dialogLife').textContent=p.life;document.querySelector('#dialogPlace').textContent=p.place;document.querySelector('#dialogCoords').textContent=formatCoords(p.coords);document.querySelector('#dialogMapLink').dataset.mapPerson=p.id;document.querySelector('#dialogStory').textContent=p.story;document.querySelector('#dialogContributions').innerHTML=p.contributions.map(x=>`<li>${x}</li>`).join('');const source=document.querySelector('#dialogSource');source.href=p.source.url;source.textContent=`${p.source.org}：《${p.source.title}》`;document.querySelector('#dialogAccessed').textContent=`访问日期：${p.source.accessed}`;dialog.showModal()}
document.addEventListener('click',e=>{const target=e.target.closest('[data-open]');if(target){if(eventDialog&&eventDialog.open)eventDialog.close();openPerson(target.dataset.open)}});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
const eventDialog=document.querySelector('#eventDialog');
function openEvent(eraKey){const collection=eventCollections[eraKey];if(!collection)return;document.querySelector('#eventTitle').textContent=collection.title;document.querySelector('#eventPeriod').textContent=collection.period;document.querySelector('#eventList').innerHTML=collection.items.map((item,index)=>{const media=item.image?`<div class="event-photo-slot has-image"><img src="${item.image}" alt="${item.title}相关历史照片" loading="lazy" tabindex="0" role="button" data-lightbox-image data-lightbox-title="${item.title}" style="object-position:${item.imagePosition||'center'}"><span>0${index+1}</span><small>点击放大</small></div>`:`<div class="event-photo-slot" role="img" aria-label="${item.title}照片预留位置"><span>0${index+1}</span><b>事件照片</b><small>图片待插入</small></div>`;return `<article class="event-record">${media}<div class="event-record-copy"><h3>${item.title}</h3><p>${item.body}</p></div></article>`}).join('');eventDialog.showModal()}
document.addEventListener('click',e=>{const target=e.target.closest('[data-event]');if(target)openEvent(target.dataset.event)});
document.querySelector('.event-close').addEventListener('click',()=>eventDialog.close());eventDialog.addEventListener('click',e=>{if(e.target===eventDialog)eventDialog.close()});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.isIntersecting&&entry.target.classList.add('visible')),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

let chinaMap=null;
const mapMarkers=new Map();
function focusOnMap(personId){
  const person=people.find(item=>item.id===personId);if(!person)return;
  if(dialog.open)dialog.close();if(eventDialog.open)eventDialog.close();
  document.querySelector('#map').scrollIntoView({behavior:'smooth',block:'start'});
  setTimeout(()=>{if(!chinaMap)return;chinaMap.invalidateSize();chinaMap.flyTo(person.coords,9,{duration:1.2});const marker=mapMarkers.get(personId);if(marker)marker.openTooltip()},650);
}
document.addEventListener('click',event=>{const target=event.target.closest('[data-map-person]');if(target)focusOnMap(target.dataset.mapPerson)});

function satelliteTileUrl(coords,zoom=13){
  const [lat,lon]=coords;const scale=2**zoom;
  const x=Math.floor((lon+180)/360*scale);
  const latRad=lat*Math.PI/180;
  const y=Math.floor((1-Math.asinh(Math.tan(latRad))/Math.PI)/2*scale);
  return `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${zoom}/${y}/${x}`;
}

function initChinaMap(){
  const container=document.querySelector('#chinaMap');
  if(!container)return;
  if(!window.L){container.innerHTML='<p class="map-load-error">卫星地图加载失败，请检查网络连接后刷新页面。</p>';return}
  const points=mapPoints;
  const map=L.map(container,{minZoom:6,maxZoom:17,zoomControl:true,scrollWheelZoom:true,attributionControl:false,maxBoundsViscosity:.85});chinaMap=map;
  map.setMaxBounds([[34,109.5],[41.2,115.5]]);
  const tileLayer=L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{
    maxZoom:17,
    attribution:'Tiles &copy; Esri — Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'
  }).addTo(map);
  let tileErrorShown=false;
  tileLayer.on('tileerror',()=>{if(tileErrorShown)return;tileErrorShown=true;container.insertAdjacentHTML('beforeend','<p class="map-load-error">地图影像加载失败，请检查网络后刷新。</p>')});
  L.control.scale({imperial:false,position:'bottomleft'}).addTo(map);
  const overviewBounds=L.latLngBounds(points.map(point=>point.coords));
  const resetView=()=>map.fitBounds(overviewBounds,{padding:[70,70],maxZoom:7});
  const resetControl=L.control({position:'topleft'});
  resetControl.onAdd=()=>{const wrap=L.DomUtil.create('div','leaflet-bar map-reset-control');const button=L.DomUtil.create('button','',wrap);button.type='button';button.title='复位到山西三处点位概览';button.setAttribute('aria-label','复位到山西三处点位概览');button.textContent='复位';L.DomEvent.disableClickPropagation(wrap);L.DomEvent.on(button,'click',resetView);return wrap};
  resetControl.addTo(map);
  let personIndex=0;
  points.forEach(point=>{
    const isPerson=point.type==='personSite';
    const markerLabel=isPerson?String(++personIndex).padStart(2,'0'):'◆';
    const icon=L.divIcon({className:`museum-map-marker ${isPerson?'person-site':'heritage-site'}`,html:`<span style="--marker:${point.color}">${markerLabel}</span><b>${point.name}</b>`,iconSize:[86,62],iconAnchor:[43,30],popupAnchor:[0,-26]});
    const marker=L.marker(point.coords,{icon,title:point.name}).addTo(map);
    if(isPerson&&point.personId)mapMarkers.set(point.personId,marker);
    marker.bindTooltip(`${isPerson?'人物活动地':'纪念／实践场所'} · ${point.name}`,{direction:'top',offset:[0,-22]});
    const personButton=isPerson&&point.personId?`<button type="button" data-open="${point.personId}">查看人物档案 →</button>`:'';
    const thumb=satelliteTileUrl(point.coords);
    const placePhoto=point.placeImage?`<figure><img src="${point.placeImage}" alt="${point.name}实景照片" loading="lazy" tabindex="0" role="button" data-lightbox-image data-lightbox-title="${point.name} · 场所实景"><figcaption>场所实景 · 点击放大</figcaption></figure>`:'';
    marker.bindPopup(`<div class="map-place-card"><div class="map-place-gallery"><figure><img src="${thumb}" alt="${point.name}卫星位置缩略图" loading="lazy" tabindex="0" role="button" data-lightbox-image data-lightbox-title="${point.name} · 卫星位置"><figcaption>卫星位置 · 点击放大</figcaption></figure>${placePhoto}</div><div class="map-person-preview"><small>${isPerson?'人物活动地':'纪念／实践场所'}</small><b>${point.name}</b><span>${point.placeInfo}</span>${personButton}</div></div>`,{offset:[0,-18],closeButton:true,minWidth:300,maxWidth:300,className:'place-popup'});
    marker.on('click',()=>museumAudio.play('pin'));
  });
  resetView();
  const mapSection=document.querySelector('#map');
  const sizeObserver=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting))setTimeout(()=>map.invalidateSize(),120)},{threshold:.1});
  sizeObserver.observe(mapSection);
}
initChinaMap();

const imageLightbox=document.createElement('dialog');
imageLightbox.className='image-lightbox';
imageLightbox.setAttribute('aria-label','图片放大预览');
imageLightbox.innerHTML='<button type="button" class="image-lightbox-close" aria-label="关闭图片预览">×</button><figure><img alt=""><figcaption></figcaption></figure>';
document.body.appendChild(imageLightbox);
const lightboxImage=imageLightbox.querySelector('img');
const lightboxCaption=imageLightbox.querySelector('figcaption');
function openImageLightbox(source){
  lightboxImage.src=source.currentSrc||source.src;
  lightboxImage.alt=source.alt;
  lightboxCaption.textContent=source.dataset.lightboxTitle||source.alt;
  imageLightbox.showModal();
}
document.addEventListener('click',event=>{
  const image=event.target.closest('[data-lightbox-image]');
  if(image){event.preventDefault();event.stopPropagation();openImageLightbox(image)}
});
document.addEventListener('keydown',event=>{
  const image=event.target.closest?.('[data-lightbox-image]');
  if(image&&(event.key==='Enter'||event.key===' ')){event.preventDefault();openImageLightbox(image)}
});
imageLightbox.querySelector('.image-lightbox-close').addEventListener('click',()=>imageLightbox.close());
imageLightbox.addEventListener('click',event=>{if(event.target===imageLightbox)imageLightbox.close()});

class MuseumAudio{
  constructor(){
    this.enabled=false;
    this.currentEra='construction';
    this.fadeTimer=null;
    this.tracks={
      hero:new Audio('assets/audio/hero.wav'),
      construction:new Audio('assets/audio/construction.wav')
    };
    Object.values(this.tracks).forEach(track=>{track.loop=true;track.preload='auto';track.volume=0});
    this.effects={
      tab:'assets/audio/ui-tab.wav',
      open:'assets/audio/ui-open.wav',
      close:'assets/audio/ui-close.wav',
      pin:'assets/audio/ui-tab.wav'
    };
  }
  async toggle(){
    this.enabled=!this.enabled;
    if(this.enabled){
      await this.activateTrack(this.trackForEra(this.currentEra));
      this.play('tab');
    }else{
      this.crossfade(null);
    }
    return this.enabled;
  }
  trackForEra(era){return era==='construction'?'construction':'hero'}
  async activateTrack(name){
    const track=this.tracks[name];
    if(track.paused){try{await track.play()}catch(error){this.enabled=false;return}}
    this.crossfade(name);
  }
  crossfade(activeName){
    clearInterval(this.fadeTimer);
    const duration=1200,step=50,target=.18,starts=Object.fromEntries(Object.entries(this.tracks).map(([name,track])=>[name,track.volume]));
    let elapsed=0;
    this.fadeTimer=setInterval(()=>{
      elapsed=Math.min(duration,elapsed+step);
      const progress=elapsed/duration;
      Object.entries(this.tracks).forEach(([name,track])=>{
        const goal=name===activeName?target:0;
        track.volume=Math.max(0,Math.min(1,starts[name]+(goal-starts[name])*progress));
        if(elapsed===duration&&goal===0){track.pause();track.currentTime=0}
      });
      if(elapsed===duration)clearInterval(this.fadeTimer);
    },step);
  }
  setEra(era){
    this.currentEra=era;
    if(this.enabled)this.activateTrack(this.trackForEra(era));
  }
  play(kind){
    if(!this.enabled)return;
    const effect=new Audio(this.effects[kind]||this.effects.tab);
    effect.volume=kind==='pin'?.32:.46;
    effect.play().catch(()=>{});
  }
}
const museumAudio=new MuseumAudio();
const soundButton=document.querySelector('.sound');
soundButton.addEventListener('click',async()=>{const isOn=await museumAudio.toggle();soundButton.textContent=isOn?'声音 ON':'声音 OFF';soundButton.classList.toggle('is-on',isOn);soundButton.setAttribute('aria-pressed',String(isOn));soundButton.setAttribute('aria-label',isOn?'关闭展馆声音':'开启展馆声音')});
document.addEventListener('click',event=>{if(event.target.closest('.sound'))return;const era=event.target.closest('.era-tab');if(era){museumAudio.play('tab');museumAudio.setEra(era.dataset.era);return}if(event.target.closest('[data-open],[data-event]'))museumAudio.play('open');if(event.target.closest('.dialog-close'))museumAudio.play('close')},{capture:true});

// 选取原视频中画面最稳定的 1.5—8.5 秒作为序厅循环段。
const heroFlagVideo=document.getElementById('heroFlagVideo');
if(heroFlagVideo){
  const loopStart=1.5;
  const loopEnd=8.5;
  heroFlagVideo.addEventListener('loadedmetadata',()=>{
    heroFlagVideo.currentTime=loopStart;
    heroFlagVideo.play().catch(()=>{});
  });
  heroFlagVideo.addEventListener('timeupdate',()=>{
    if(heroFlagVideo.currentTime>=loopEnd){
      heroFlagVideo.currentTime=loopStart;
      heroFlagVideo.play().catch(()=>{});
    }
  });
}
