(function(){
"use strict";
const R=window.RBT,esc=R.esc,KEY="rbt.tracker";
const CUES=["Smooth and steady may help more than fast.","Breathe out as you work, if that feels natural.","Keep any discomfort mild. Easing off is always fine.","Nice and controlled. Slower lowering may help.","You're doing well. Rest longer whenever you need to."];
const parse=ex=>{const d=ex.dose||"",two=/each (side|direction)|each way/.test(d),
 sets=(d.match(/^(\d+)(?:\s*[–-]\s*(\d+))?\s+(?:sets?|holds?)\b/)||[]).slice(1).filter(Boolean).map(Number);const ms=sets.length?Math.max(...sets):1;
 let m=d.match(/holds? of (\d+)/);if(m)return {hold:+m[1],sides:two?2:1,maxSets:ms};
 m=d.match(/sets? of (\d+)/);if(m)return {reps:+m[1],sides:two?2:1,maxSets:ms};return null};
R.followPlan=function(exs,target){
 target=target||300;const items=[];
 let maxSets=4;
 exs.forEach(ex=>{const p=parse(ex);if(!p)return;maxSets=Math.min(maxSets,p.maxSets);const l=R.loops[ex.id];const tempo=l?l.s:3.5;
  for(let s=0;s<p.sides;s++){const side=p.sides>1?(s?"Second side":"First side"):"";
   items.push(p.hold?{ex,kind:"hold",secs:p.hold,side,dur:p.hold}:{ex,kind:"reps",reps:p.reps,tempo,side,dur:p.reps*tempo})}});
 if(!items.length)return {steps:[],seconds:0,skipped:exs.filter(e=>!parse(e))};
 const n=items.length,work=items.reduce((a,i)=>a+i.dur+3,0);
 const restFor=r=>Math.max(10,Math.min(20,Math.round((target-r*work)/Math.max(1,r*n-1))));
 let rounds=1,best=1e9;const cap=Math.min(4,maxSets);for(let r=1;r<=cap;r++){const tot=r*work+restFor(r)*(r*n-1),d=Math.abs(tot-target);if(d<best){best=d;rounds=r}}
 const REST=restFor(rounds);
 let steps=[],t=0,round=0;
 for(round=1;round<=rounds;round++)items.forEach(it=>{if(steps.length){steps.push({kind:"rest",secs:REST,next:it});t+=REST}
   steps.push({kind:"count",secs:3,next:it});steps.push(Object.assign({round},it));t+=3+it.dur});
 round=rounds;
 return {steps,seconds:Math.round(t),rounds:round,maxRounds:cap,skipped:exs.filter(e=>!parse(e))};
};
let st=null;
const $=s=>document.querySelector(s);
function ui(){
 const d=document.createElement("section");d.id="fa";d.className="fa";d.setAttribute("role","region");d.setAttribute("aria-labelledby","fa-h");
 d.innerHTML=`<p class="fa-stop" id="fa-stop"><b>Stop if pain is more than mild.</b> <a href="safety.html">When to stop and get help</a></p>
 <h2 id="fa-h" tabindex="-1">Follow-along</h2><p id="fa-name" class="fa-name"></p><p id="fa-side" class="small"></p>
 <div class="fa-big"><span id="fa-count" class="fa-count" aria-hidden="true"></span><span id="fa-time" class="fa-time" role="timer" aria-hidden="true"></span></div>
 <p id="fa-sr" class="sr-only" aria-live="polite"></p><p id="fa-cue" class="fa-cue"></p><p id="fa-next" class="fa-next"></p>
 <div class="fa-ctl"><button type="button" class="btn" id="fa-pause" aria-keyshortcuts="Space">Pause</button><button type="button" class="btn secondary" id="fa-skip" aria-keyshortcuts="N">Skip</button><button type="button" class="btn secondary" id="fa-done">I'm done</button></div>
  <div class="fa-media" id="fa-media"></div>
 <p class="small">Keys: Space pauses or resumes, N skips, Esc finishes.</p>`;
 return d}
function media(it){const box=$("#fa-media");const v=R.reduceMotion()?"":R.loopVideo(it.ex,"fa-vid");
 if(v){box.innerHTML=v+R.clipNote(it.ex);const el=box.querySelector("video");R.loadVideo(el);el.removeAttribute("loop");return el}
 const d=R.demoHTML(it.ex);box.innerHTML=d?`<div class="fa-diag">${d}</div>`:"";return null}
function say(t){$("#fa-sr").textContent=t}
function fmt(s){s=Math.max(0,Math.ceil(s));return Math.floor(s/60)+":"+String(s%60).padStart(2,"0")}
function enter(i){
 st.i=i;st.t=0;st.lastRep=-1;st.vid=null;const s=st.steps[i];
 if(!s)return finish(true);
 $("#fa").dataset.phase=s.kind;$("#fa-side").textContent="";$("#fa-next").textContent="";$("#fa-cue").textContent="";
 if(s.kind==="count"){$("#fa-name").textContent="Get ready: "+s.next.ex.name;$("#fa-count").textContent="3";$("#fa-time").textContent="";media(s.next);say("Get ready for "+s.next.ex.name+". 3")}
 else if(s.kind==="rest"){$("#fa-name").textContent="Rest";$("#fa-count").textContent="";$("#fa-next").textContent="Next up: "+s.next.ex.name+(s.next.side?" ("+s.next.side.toLowerCase()+")":"");media(s.next);$("#fa-cue").textContent=CUES[(st.cue++)%CUES.length];say("Rest. Next up: "+s.next.ex.name)}
 else{st.done++;$("#fa-name").textContent=s.ex.name;$("#fa-side").textContent=s.side||"";st.vid=media(s);$("#fa-cue").textContent=CUES[(st.cue++)%CUES.length];
  if(s.kind==="reps"){$("#fa-count").textContent="1 / "+s.reps;say("Go. "+s.reps+" reps")}else{$("#fa-count").textContent="Hold";say("Hold for "+s.secs+" seconds")}}
 tick(0)}
function tick(dt){
 const s=st.steps[st.i];if(!s)return;st.t+=dt;
 if(s.kind==="count"){const n=3-Math.floor(st.t);if(st.t>=s.secs)return enter(st.i+1);const c=String(n);if($("#fa-count").textContent!==c){$("#fa-count").textContent=c;say(c)}return}
 if(s.kind==="rest"){$("#fa-time").textContent=fmt(s.secs-st.t);if(st.t>=s.secs)enter(st.i+1);return}
 if(s.kind==="hold"){$("#fa-time").textContent=fmt(s.secs-st.t);if(st.t>=s.secs)enter(st.i+1);return}
 const rep=Math.floor(st.t/s.tempo);
 if(rep!==st.lastRep&&rep<s.reps){st.lastRep=rep;if(st.vid){try{st.vid.currentTime=0;st.vid.playbackRate=Math.min(4,(R.loops[s.ex.id].s/s.tempo)*st.speed);const p=st.vid.play();p&&p.catch&&p.catch(()=>{})}catch(e){}}}
 const shown=Math.min(s.reps,Math.floor(st.t/s.tempo+1e-9)+1);const txt=shown+" / "+s.reps;
 if($("#fa-count").textContent!==txt){$("#fa-count").textContent=txt;if(shown%5===0)say("Rep "+shown)}
 $("#fa-time").textContent=fmt(s.reps*s.tempo-st.t);
 if(st.t>=s.reps*s.tempo)enter(st.i+1)}
function loop(now){if(!st||st.ended)return;const dt=st.last?Math.min(1,(now-st.last)/1000):0;st.last=now;if(!st.paused)tick(dt*st.speed);st.raf=requestAnimationFrame(loop)}
function setPause(p){if(!st||st.ended)return;st.paused=p;const b=$("#fa-pause");b.textContent=p?"Resume":"Pause";b.setAttribute("aria-pressed",p?"true":"false");$("#fa").dataset.paused=p?"1":"";
 if(st.vid){p?st.vid.pause():st.vid.play().catch(()=>{})}say(p?"Paused":"Resumed")}
async function wake(){try{if("wakeLock" in navigator){st.lock=await navigator.wakeLock.request("screen")}}catch(e){st.lock=null}}
function key(e){if(!st||st.ended||e.target.closest&&e.target.closest("input,textarea,select"))return;
 if(e.key===" "||e.code==="Space"){if(e.target.tagName==="BUTTON"||e.target.tagName==="A")return;e.preventDefault();setPause(!st.paused)}
 else if(e.key==="n"||e.key==="N"){e.preventDefault();enter(st.i+1)}
 else if(e.key==="Escape"){e.preventDefault();finish(false)}}
function finish(all){
 if(!st||st.ended)return;st.ended=true;cancelAnimationFrame(st.raf);document.removeEventListener("keydown",key);
 if(st.lock){try{st.lock.release()}catch(e){}}
 const mins=Math.max(1,Math.round((Date.now()-st.started)/60000)),names=[...new Set(st.steps.filter(s=>s.ex).map(s=>s.ex.name))];
 const rows=R.store.get(KEY,[]);const entry={type:"workout",date:new Date().toISOString(),minutes:mins,exercises:names,blocks:st.done,planned:st.steps.filter(s=>s.ex).length,completed:!!all};
 rows.push(entry);const ok=R.store.set(KEY,rows);
 $("#fa").dataset.phase="done";$("#fa").innerHTML=`<p class="fa-stop"><b>Stop if pain is more than mild.</b> <a href="safety.html">When to stop and get help</a></p>
 <h2 id="fa-h" tabindex="-1">${all?"Nice work, you finished":"Session ended"}</h2><p>You did ${entry.blocks} of ${entry.planned} exercise blocks in about ${mins} minute${mins>1?"s":""}.</p>
 <p>${ok?"Saved to your tracker on this device.":"Sorry, it couldn't be saved on this device."} <a href="running-smarter.html#tracker-h">See your tracker</a></p>
 <p>Note how you feel later today and tomorrow. If pain is worse the next morning, an easier day may help.</p>
 <p><button type="button" class="btn" id="fa-close">Back to my routine</button></p>`;
 $("#fa-h").focus();$("#fa-close").onclick=()=>{$("#fa").remove();document.body.classList.remove("fa-on");const b=$("#fa-start");b&&b.focus()}}
R.startFollow=function(exs){
 const plan=R.followPlan(exs);if(!plan.steps.length)return false;
 const old=$("#fa");old&&old.remove();
 st={steps:plan.steps,i:0,t:0,paused:false,ended:false,cue:0,done:0,speed:R.faSpeed||1,started:Date.now(),last:0};
 const d=ui();document.body.appendChild(d);document.body.classList.add("fa-on");
 $("#fa-pause").onclick=()=>setPause(!st.paused);$("#fa-skip").onclick=()=>enter(st.i+1);$("#fa-done").onclick=()=>finish(false);
 document.addEventListener("keydown",key);wake();enter(0);$("#fa-h").focus();st.raf=requestAnimationFrame(loop);return true};
R.faState=()=>st&&{i:st.i,kind:(st.steps[st.i]||{}).kind,paused:st.paused,ended:st.ended,n:st.steps.length};
document.addEventListener("click",e=>{const b=e.target.closest&&e.target.closest("#fa-start");if(b&&R.lastPlan)R.startFollow(R.lastPlan.exercises)});
})();
