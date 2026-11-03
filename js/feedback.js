/* Feedback storage. submitFeedback() is the single adapter: swap its body to POST to a backend later. */
(function(){
 const R=window.RBT, KEY="rbt.feedback";
 const list=()=>R.store.get(KEY,[]);
 async function submitFeedback(entry){
  const record={id:Date.now().toString(36),date:new Date().toISOString(),area:entry.area,complaint:entry.complaint,tried:entry.tried||""};
  // Future backend: return fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(record)}).then(r=>({ok:r.ok}));
  const rows=list();rows.push(record);return {ok:R.store.set(KEY,rows),record};
 }
 const q=v=>'"'+String(v).replace(/"/g,'""')+'"';
 const toCSV=()=>["id,date,area,complaint,tried",...list().map(r=>[r.id,r.date,r.area,r.complaint,r.tried].map(q).join(","))].join("\r\n");
 R.feedback={submitFeedback,list,toCSV,clear:()=>localStorage.removeItem(KEY)};
})();
