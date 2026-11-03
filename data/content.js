window.RBT = window.RBT || {};
/* Page copy. Edit here; no HTML changes needed. */
RBT.content = {
 site:"Run Better Today",
 disclaimer:"Educational information only. Not medical advice or a substitute for evaluation by a qualified healthcare professional.",
 media:{
  hero:{src:"img/hero-1200.webp",srcset:"img/hero-640.webp 640w, img/hero-1200.webp 1200w, img/hero-1920.webp 1920w",sizes:"100vw",width:1200,height:600,alt:"Illustration of a running path winding through green hills under a warm sun"},
  heroLoop:{av1:"media/hero/hero-loop.av1.webm",vp9:"media/hero/hero-loop.vp9.webm",mp4:"media/hero/hero-loop.mp4",width:1280,height:640,poster:"media/hero/hero-loop-poster.webp",placeholder:false},
  video:{title:"Introduction video",mp4:"media/intro.mp4",webm:"media/intro.webm",poster:"media/intro-poster.webp",captions:"media/intro.en.vtt",width:960,height:540,
   transcript:["Run Better Today Keep running. Move smarter.", "Simple exercises that may help reduce hip, knee and ankle discomfort.", "Start at an easy level. Ease off if pain is more than mild.", "The routine builder checks for warning signs first.", "Every exercise links to its research source.", "Educational information only. Not medical advice. If something feels wrong, stop."]}},
 home:{headline:"Keep running. Move smarter.",lead:"Simple, research-informed exercises that may help reduce hip, knee and ankle discomfort, and a daily routine builder that checks for warning signs first.",
  cta:"Build today's routine",
  push:{title:"Don't just push through it",paras:["Mild, short-lived soreness that eases quickly may be okay when you train. Pain that changes how you move, keeps getting worse, or lingers into the next morning is a signal to ease off and adjust.","A calm guide that may help: keep any discomfort mild during and after activity, and check how you feel the next morning. If it's more than mild, make the session easier or rest that area.","Some signs need a professional check, not more exercise."],link:"See when to get help"}},
 redFlags:[
  {t:"You can't walk normally or put weight on the leg",level:"urgent"},
  {t:"Severe pain (7 out of 10 or higher)",level:"urgent"},
  {t:"Sudden pain with a pop, rapid swelling, or the joint giving way",level:"urgent"},
  {t:"The joint or limb looks misshapen (deformity)",level:"urgent"},
  {t:"Numbness, tingling or new weakness in the leg or foot",level:"urgent"},
  {t:"Fever, or the area is red, hot or swollen",level:"urgent"},
  {t:"Calf swelling, pain or warmth — get same-day medical help",level:"urgent"},
  {t:"Chest pain or shortness of breath — call 911 (US) or your local emergency number",level:"emergency"},
  {t:"Pain at night or at rest that doesn't ease",level:"urgent"},
  {t:"Pain that is steadily getting worse",level:"urgent"}],
 urgentMessage:"Based on what you shared, today isn't a day for a workout. One or more of your answers is a sign that is best checked by a healthcare professional. Please contact a doctor, urgent care, or a physiotherapist today. If you have chest pain or trouble breathing, call 911 (US) or your local emergency number now.",
 safety:{intro:"Most running aches settle with rest and gradual return. Some signs mean it's time to get checked by a professional instead of exercising.",
  routine:["Symptoms that last more than 6 weeks, or aren't improving after 2–3 weeks of easing off.","Pain between 4 and 6 out of 10 that keeps coming back.","You aren't sure what's causing your symptoms or how to return to running.","You are under 18, pregnant, have a health condition, or are recovering from surgery — get clearance before starting."],
  cannot:"This site can't assess or diagnose you, rule out a fracture or blood clot, or adjust for your history. It is not a substitute for a clinician or physiotherapist.",sources:["R1","R2","H3","K5","A5"]},
 smarter:[
  {h:"Build up slowly",p:["Add weekly running time or distance slowly. Big jumps from one week to the next are linked with a higher chance of injury (T1, T2).","The popular \"10% rule\" is not proven (T2, Low). Let how you feel the next morning be your guide.","Comparing how hard you trained lately with a longer period before it is debated. The evidence is low certainty (T3)."],src:["T1","T2","T3"]},
  {h:"Build strength",p:["In a review of trials, strength training was linked with fewer sports injuries. More strength training was linked with more benefit (T4). Two to three sessions a week is a common place to start.","General guidelines recommend muscle-strengthening activities on 2 or more days a week (T7)."],src:["T4","T7"]},
  {h:"Recover",p:["Plan easy days and at least one rest day a week. Use the post-run recovery routine.","Evidence that stretching, or any other single fix, prevents running injuries is low certainty (T5)."],src:["T1","T5"]},
  {h:"Sleep",p:["Adults are recommended at least 7 hours of sleep a night for general health (S1).","Short sleep has been linked with more injuries in teen athletes. But that research only observed people, so it can't show cause (S2, Low)."],src:["S1","S2"]},
  {h:"Eat enough",p:["Eat enough overall energy, with carbohydrate and protein to support training and recovery (N1).","Eating too little for how much you train, over time, can affect your health and bones (REDs). If you are losing weight unintentionally, have missed periods, or keep getting injured, speak to a clinician (N2)."],src:["N1","N2"]},
  {h:"Surfaces and step rate",p:["Change surfaces (road, trail, track) slowly, like any other part of training. Our sources don't show one surface is best.","Slightly quicker, shorter steps change the force on your joints in lab tests (C1). In one study, a lower step rate was linked with bone stress injury (C3). Evidence on whether this changes injuries is low certainty (C2)."],src:["C1","C2","C3"]},
  {h:"Shoes",p:["No shoe type has been shown to prevent running injuries (very low certainty, F1). Choose shoes that feel comfortable, and change models gradually."],src:["F1"]}],
 feedback:{title:"Tell us what's bothering you",intro:"Share what's bothering you so we can choose future topics. Don't include your name, email or other personal details.",privacy:"Your answers are saved only on this device, in your browser's local storage. Nothing is sent anywhere. You can export or delete them at any time."}
};
/* Notices. Terms/Privacy text lives in terms.html / privacy.html (see README). */
Object.assign(RBT.content,{

 /* FAQ: answers cite only ids in data/sources.js. Rendered on Home and area pages; FAQPage JSON-LD is generated by tools/build_seo.py. */
 faq:{
  home:[
   {q:"Should I run through pain?",a:"Mild discomfort that eases quickly may be okay. Sharp pain, pain that keeps getting worse, or pain that makes you limp or change how you run is a sign to stop and get checked. Warning signs like swelling, numbness or being unable to bear weight need a same-day check.",src:["R1","R2"]},
   {q:"How often should I do strength work?",a:"General activity guidelines recommend muscle-strengthening activity on 2 or more days a week, and a review of trials found strength training was linked with fewer sports injuries. Most routines here suggest 2 to 3 sessions a week. Results vary from person to person.",src:["T7","T4"]},
   {q:"How quickly can I increase my running?",a:"Gradually. Large week-to-week jumps in running distance have been associated with a higher chance of injury in some studies, and a sports medicine consensus advises taking care with how much and how hard you train. There is no single proven safe percentage.",src:["T2","T1"]},
   {q:"When should I see a professional?",a:"Get checked the same day for warning signs such as severe pain, swelling, numbness, fever or being unable to bear weight. Book an appointment if symptoms last more than 6 weeks, aren't improving after 2 to 3 weeks of easing off, or you aren't sure what's causing them.",src:["R1","R2"]}
  ],
  hips:[
   {q:"Can strength exercises help hip pain from running?",a:"They may help. A clinical guideline recommends exercise for hip osteoarthritis, and a randomised trial in adults aged 35 to 70 with outer-hip tendon pain found an education-plus-exercise programme helped more than a wait-and-see approach at 8 weeks. Those studies were not specifically in runners.",src:["H1","H2"]},
   {q:"How long until hip exercises make a difference?",a:"It varies. The trial programme above ran for 8 weeks. If hip pain lasts more than 6 weeks or isn't improving after 2 to 3 weeks of easing off, it is worth getting checked.",src:["H2","R1"]}
  ],
  knees:[
   {q:"Should I run through knee pain?",a:"Guidelines for kneecap pain recommend exercise therapy, especially combined hip and knee strengthening, rather than complete rest. Keep pain mild during and after activity, and ease off if it is worse the next morning. Swelling, locking or giving way needs a check.",src:["K1","K2","R2"]},
   {q:"Should I do hip or knee exercises for knee pain?",a:"Both. A consensus statement and a clinical guideline for kneecap pain recommend combining hip-focused and knee-focused exercises, which may help reduce pain more than knee exercises alone.",src:["K2","K1"]},
   {q:"Does changing my step rate help knee pain?",a:"Possibly. Small increases in step rate reduced the force on the knee in a lab study, but evidence that it prevents or treats injuries is limited. Make any change gradually.",src:["C1","C2"]}
  ],
  ankles:[
   {q:"Can balance training help after an ankle sprain?",a:"Yes, it may help. Guidelines and reviews of trials support exercise and balance training after an ankle sprain, which may help reduce the chance of spraining it again.",src:["A1","A4"]},
   {q:"How long does Achilles pain take to settle with exercise?",a:"Often weeks to months. Calf-strengthening programmes in guidelines and studies commonly run for around 12 weeks, with activity guided by pain. Get checked if pain is severe, sudden, or not improving.",src:["A2","A6"]}
  ]
 },
 diagramNote:"Diagrams are simplified illustrations, not medical instruction.",
 notice:"The creator of this site is not a doctor, physical therapist, or licensed healthcare professional. This is general education, not medical advice. Talk to a qualified professional before starting any exercise program, especially if you have pain or an injury. If something feels wrong, stop.",
 ackLabel:"I understand this is not medical advice and I exercise at my own risk",
 ackError:"Please tick the box to confirm you understand this is not medical advice before we build a routine.",
 sourcesNote:"Sources are cited for educational purposes only. Citing them does not imply endorsement of this site by their authors or publishers.",
});
