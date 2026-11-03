(function(){
 window.RBT = window.RBT || {};
 const esc = s => String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 RBT.esc = esc;
 RBT.src = id => (RBT.sources||[]).find(s=>s.id===id);
 RBT.cite = ids => (ids&&ids.length) ? '<sup class="cite-sup">'+ids.map(id=>'<a href="sources.html#'+esc(id)+'" aria-label="Source '+esc(id)+'">'+esc(id)+'</a>').join(",")+'</sup>' : '';
 RBT.levelName = l => (RBT.levels.find(x=>x.id===l)||{}).name||"";
 RBT.equipName = {N:"None",B:"Resistance band",W:"Weights",S:"Step or stairs",L:"Leg-press machine (gym)"};
 RBT.evidenceOf = ex => ex.evidence || (ex.sources.length ? (RBT.src(ex.sources[0])||{}).label : "Practice");
 RBT.badge = l => '<span class="badge '+esc(l)+'">'+(l==="Practice"?"Common practice":"Evidence: "+esc(l))+'</span>';
 RBT.citeHTML = ex => {
  const list=ex.sources.map(RBT.src).filter(s=>s&&RBT.exerciseSourceTypes.includes(s.type));
  const lab=ex.flag?"Related research (does not test this exact exercise)":"Source"+(list.length>1?"s":"");
  return `<div class="cite"><p>${RBT.badge(RBT.evidenceOf(ex))}${ex.flag?` <span class="flag">${esc(ex.flag)}</span>`:""}</p>
  <p class="small"><b>${lab}:</b></p><ul class="small">${list.map(s=>`<li><a href="${esc(s.urls[0])}" rel="noopener">${esc(s.id)}: ${esc(s.by)} (${esc(s.year)})</a> — ${esc(s.type)}. <a href="sources.html#${esc(s.id)}">Details</a></li>`).join("")}</ul></div>`};
 RBT.doseShort = d => String(d).replace(/(\d+(?:[–-]\d+)?) sets? of (\d+(?:[–-]\d+)?)/g,'$1\u00a0×\u00a0$2').replace(/ (each side|per side|seconds?|s)\b/g,'\u00a0$1');
 RBT.levelIcon = l => `<img src="${esc((RBT.levels.find(x=>x.id===l)||{}).icon||"")}" width="28" height="28" alt="" loading="lazy" class="lvl-icon">`;
 RBT.exerciseHTML = (ex, open) => `<details class="ex" ${open?"open":""} id="ex-${esc(ex.id)}"><summary>${RBT.levelIcon(ex.level)}${esc(ex.name)} <span class="small">— ${RBT.levelName(ex.level)}${ex.gymOnly?" · Needs a gym leg-press machine":""}</span></summary>
  <p><b>What it does:</b> ${esc(ex.purpose)}</p>
  ${RBT.loopHTML(ex)}${RBT.demoHTML(ex)}
  <div class="meta"><span class="dose"><b>Sets &amp; reps:</b> <span class="dose-full">${esc(ex.dose)}</span><span class="dose-short" aria-hidden="true">${esc(RBT.doseShort(ex.dose))}</span></span><span><b>How often:</b> ${esc(ex.freq)}</span><span><b>Equipment:</b> ${ex.equip.map(e=>RBT.equipName[e]).join(" or ")}</span></div>
  <p><b>Common mistakes:</b></p><ul>${ex.mistakes.map(h=>"<li>"+esc(h)+"</li>").join("")}</ul>
  <p><b>When to stop:</b> ${esc(ex.stop)}</p>
  ${RBT.citeHTML(ex)}</details>`;

 RBT.loops={"glute-bridge":{s:6},"single-leg-bridge":{s:5},"straight-leg-raise":{s:4.5},"side-lying-abduction":{s:4.5},"clamshell":{s:3.833},"bodyweight-squat":{s:4},"goblet-squat":{s:4},"sit-to-stand":{s:5.7},"wall-sit":{s:5.5},"double-calf-raise":{f:"calf-raise",s:6},"double-calf-raise-knee":{f:"calf-raise",s:6},"sl-calf-raise":{s:5.5},"weighted-sl-calf":{s:7},"bent-knee-calf-raise":{s:5.5},"sl-balance":{s:5},"step-up-knee-drive":{s:5},"low-step-up":{s:5},"split-squat-short":{s:3.667},"step-down":{s:5},"sl-squat-box":{s:4.667},"heel-drop":{s:6.4},"knee-to-wall":{s:4.167},"ankle-alphabet":{s:5},"pogo-hops":{s:.667,x:{f:"pogo-hops-single",s:3}}};
 for(const k in RBT.loops)RBT.loops[k].f=RBT.loops[k].f||k;
 RBT.reduceMotion=()=>!!(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches);
 RBT.loopVideo=(ex,cls,o)=>{const l=o||RBT.loops[ex.id];if(!l)return "";const b="media/3d/"+l.f;
  return `<video class="${cls||"loop-v"}" muted loop playsinline preload="none" width="320" height="240" poster="${b}-poster.webp" data-webm="${b}.webm" data-mp4="${b}.mp4" aria-hidden="true" tabindex="-1" disablepictureinpicture></video>`};
 RBT.clipNotes={"wall-sit":"Shown at a shallow depth. Only go as low as feels comfortable."};
 RBT.clipNote=ex=>RBT.clipNotes[ex.id]?`<p class="small clip-note">${esc(RBT.clipNotes[ex.id])}</p>`:"";
 RBT.loopHTML=ex=>{const v=RBT.loopVideo(ex);return v?`<figure class="loop" data-loop="${esc(ex.id)}">${v}<figcaption class="small">Animated example (no sound). The step diagrams below show the same movement.</figcaption>${RBT.clipNote(ex)}</figure>${(RBT.loops[ex.id].x?`<figure class="loop" data-loop="${esc(ex.id)}-2">${RBT.loopVideo(ex,0,RBT.loops[ex.id].x)}<figcaption class="small">Step 2, once double-leg hops feel easy: one round of single-leg hops (in place, forward, back, to the side, back).</figcaption></figure>`:"")}`:""};
 RBT.loadVideo=v=>{if(v.dataset.loaded)return;v.dataset.loaded="1";v.innerHTML=`<source src="${v.dataset.webm}" type="video/webm"><source src="${v.dataset.mp4}" type="video/mp4">`;v.load()};
 RBT.lazyLoops=root=>{if(RBT.reduceMotion())return;const vs=(root||document).querySelectorAll("video.loop-v:not([data-watch])");if(!vs.length)return;
  if(!("IntersectionObserver" in window))return;
  RBT._io=RBT._io||new IntersectionObserver(es=>es.forEach(e=>{const v=e.target;if(e.isIntersecting){RBT.loadVideo(v);const p=v.play();p&&p.catch&&p.catch(()=>{})}else if(v.dataset.loaded)v.pause()}),{rootMargin:"100px"});
  vs.forEach(v=>{v.dataset.watch="1";RBT._io.observe(v)})};
 document.addEventListener("DOMContentLoaded",()=>{RBT.lazyLoops();const m=document.getElementById("main")||document.body;new MutationObserver(()=>RBT.lazyLoops()).observe(m,{childList:true,subtree:true})});
 RBT.routineHTML = r => `<div class="panel"><h3>${esc(r.name)}</h3><ol class="steps">${r.steps.map(s=>"<li>"+esc(s)+"</li>").join("")}</ol><p>${RBT.badge(r.evidence)}${RBT.cite(r.sources)}</p></div>`;
 RBT.store = {
  get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){return false}}
 };
 RBT.download = (name, text, type) => {const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([text],{type}));a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},0)};
})();
