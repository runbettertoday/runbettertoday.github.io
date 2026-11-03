(function(){
 const R=window.RBT, nav=document.getElementById("site-nav");
 if(!nav||!R.nav)return;
 const items=R.nav.flatMap(n=>n.areas?R.areas.map(a=>({href:a.id+".html",label:a.name})):[n]);
 const q=new URLSearchParams(location.search).get("id"),f=location.pathname.split("/").pop()||"index.html",here=f==="area.html"&&q?q+".html":f;
 nav.innerHTML=`<button type="button" class="menu-btn" aria-expanded="false" aria-controls="site-menu">Menu</button><ul id="site-menu">`+items.map(n=>`<li><a href="${R.esc(n.href)}"${n.href===here?' aria-current="page"':""}>${R.esc(n.label)}</a></li>`).join("")+"</ul>";
 /* Mobile menu: button toggles the list; Escape closes and returns focus; focus moves to the first link on open. */
 const btn=nav.querySelector(".menu-btn"),ul=nav.querySelector("#site-menu");
 const set=o=>{btn.setAttribute("aria-expanded",String(o));nav.classList.toggle("is-open",o)};
 btn.addEventListener("click",()=>{const o=btn.getAttribute("aria-expanded")!=="true";set(o);if(o){const f=ul.querySelector("a");f&&f.focus()}});
 nav.addEventListener("keydown",e=>{if(e.key==="Escape"&&btn.getAttribute("aria-expanded")==="true"){set(false);btn.focus()}});
 nav.addEventListener("focusout",e=>{if(btn.getAttribute("aria-expanded")==="true"&&!nav.contains(e.relatedTarget)&&e.relatedTarget)set(false)});
})();
/* Keep anchor jumps clear of the sticky header (wide screens). */
(function(){const set=()=>{const h=document.querySelector("header.site");if(h)document.documentElement.style.setProperty("--hdr",(h.offsetHeight+12)+"px")};window.addEventListener("load",set);window.addEventListener("resize",set);set()})();
