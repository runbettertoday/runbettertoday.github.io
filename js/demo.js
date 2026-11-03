/* Renders step-by-step stick-figure diagrams from RBT.poses + exercise.demo. */
(function(){
 const R=window.RBT;
 const parse=str=>{const j={};str.split(" ").forEach(t=>{const k=t[0],[x,y]=t.slice(1).split(",").map(Number);j[k]=[x,y]});
  "kateKATEW".split("").forEach(()=>{});["k","a","t","e","w"].forEach(c=>{if(!j[c.toUpperCase()])j[c.toUpperCase()]=j[c]});return j};
 const line=(a,b,c,w)=>`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${c}" stroke-width="${w||3.2}" stroke-linecap="round"/>`;
 const props={
  floor:()=>`<line x1="4" y1="82.5" x2="116" y2="82.5" stroke="#7c8796" stroke-width="1.5"/>`,
  mat:()=>`<rect x="6" y="80" width="100" height="3" rx="1.5" fill="#a9c1a6"/>`,
  wall:x=>`<rect x="${(x||38)-4}" y="4" width="4" height="78" fill="#7c8796"/>`,
  wallR:()=>`<rect x="96" y="4" width="4" height="78" fill="#7c8796"/>`,
  chair:()=>`<path d="M40 60h28M44 60v22M66 60v22M40 60V30" stroke="#1f3557" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".55"/>`,
  support:x=>{x=typeof x==="number"?x:30;return `<path d="M${x} 40v42M${x-6} 40h12" stroke="#1f3557" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".55"/>`},
  rail:()=>`<path d="M40 26v56M36 26h8" stroke="#1f3557" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".55"/>`,
  step:()=>`<rect x="52" y="67" width="40" height="15" rx="1.5" fill="#dfe8dc" stroke="#3e5f45" stroke-width="1.5"/>`,
  box:()=>`<rect x="30" y="58" width="22" height="24" rx="2" fill="#dfe8dc" stroke="#3e5f45" stroke-width="1.5"/>`,
  cushion:()=>`<rect x="50" y="78" width="26" height="5" rx="2.5" fill="#f2b48f"/>`,
  band:j=>line(j.k,j.K,"#b4501f",2),
  bandAnkle:j=>line(j.a,j.A,"#b4501f",2),
  bandFoot:j=>`<path d="M${j.t[0]} ${j.t[1]} L104 74" stroke="#b4501f" stroke-width="2" fill="none"/><rect x="104" y="66" width="4" height="16" fill="#7c8796"/>`,
  weight:j=>`<rect x="${j.w[0]-4}" y="${j.w[1]-3}" width="8" height="6" rx="1.5" fill="#14233c"/>`,
  weightHip:j=>`<rect x="${j.p[0]-6}" y="${j.p[1]-7}" width="12" height="5" rx="1.5" fill="#14233c"/>`,
  weightKnee:j=>`<rect x="${j.k[0]-5}" y="${j.k[1]-6}" width="10" height="5" rx="1.5" fill="#14233c"/>`,
  bench:()=>`<rect x="6" y="60" width="18" height="22" rx="2" fill="#dfe8dc" stroke="#3e5f45" stroke-width="1.5"/>`,
  up:j=>`<path d="M100 40v-14m-4 4 4-4 4 4" stroke="#b4501f" stroke-width="2" fill="none"/>`,
  down:j=>`<path d="M100 26v14m-4-4 4 4 4-4" stroke="#b4501f" stroke-width="2" fill="none"/>`,
  side:j=>`<path d="M84 20h18m-4-4 4 4-4 4" stroke="#b4501f" stroke-width="2" fill="none"/>`,
  circle:j=>`<circle cx="${j.t[0]+6}" cy="${j.t[1]-4}" r="7" stroke="#b4501f" stroke-width="1.8" fill="none" stroke-dasharray="3 2"/>`,
  hold:j=>`<text x="96" y="20" font-size="9" font-family="sans-serif" fill="#8f3e16">hold</text>`,
  timer:j=>`<text x="88" y="20" font-size="9" font-family="sans-serif" fill="#8f3e16">1 min</text>`
 };
 R.poseSVG=function(step,label){
  if(!R.poses[step.pose])return "";const j=parse(R.poses[step.pose]);
  const ps=(step.props||"").split(" ").filter(Boolean);
  const back=ps.filter(p=>!["band","bandAnkle","weight","weightHip","weightKnee","up","down","side","circle","hold","timer","bandFoot"].includes(p));
  const front=ps.filter(p=>!back.includes(p));
  const run=list=>list.map(p=>{const [n,a]=p.split("@");return props[n]?(props[n](a?Number(a):j)):""}).join("");
  const far="#7a9a7f",near="#14233c";
  const body=line(j.p,j.K,far)+line(j.K,j.A,far)+line(j.A,j.T,far)+line(j.s,j.E,far,2.6)+line(j.E,j.W,far,2.6)+
   line(j.s,j.p,near,3.6)+line(j.p,j.k,near)+line(j.k,j.a,near)+line(j.a,j.t,near)+line(j.s,j.e,near,2.6)+line(j.e,j.w,near,2.6)+
   `<circle cx="${j.h[0]}" cy="${j.h[1]+3}" r="6" fill="#faf8f3" stroke="${near}" stroke-width="3"/>`;
  return `<svg viewBox="0 -12 120 98" width="240" height="196" role="img" aria-label="${R.esc(label)}" focusable="false">${(ps.includes("floor")||ps.includes("mat"))?"":props.floor()}${run(back)}${body}${run(front)}</svg>`;
 };
 R.demoHTML=function(ex){
  if(!ex.demo)return ex.how&&ex.how.length?`<div class="demo-steps demo-text"><p><b>How to do it</b></p><ol class="steps">${ex.how.map(h=>"<li>"+R.esc(h)+"</li>").join("")}</ol><p class="small">No diagram or animation for this exercise yet.</p></div>`:"";
  return `<div class="demo-steps"><p><b>How to do it</b></p><ol class="demo-grid">${ex.demo.map((st,i)=>`<li><figure>${R.poseSVG(st,"Step "+(i+1)+" diagram: "+ex.how[i])}<figcaption><span class="stepnum" aria-hidden="true">${i+1}</span> ${R.esc(ex.how[i])}</figcaption></figure></li>`).join("")}</ol></div>`;
 };
})();
