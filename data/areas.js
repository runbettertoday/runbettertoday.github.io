window.RBT = window.RBT || {};
/* Add a new area (e.g. feet, shins, lower back, hamstrings) by adding an object here,
   tagging exercises in exercises.js with its id, and adding sources to sources.js. */
RBT.areas = [
 {id:"hips",icon:"img/icons/hips.svg",art:{src:"img/anatomy/hips-320.webp",srcset:"img/anatomy/hips-160.webp 160w, img/anatomy/hips-320.webp 320w",alt:"Engraving of the right hip joint from the front, with most of the joint capsule removed (Gray's Anatomy, 1918)"},name:"Hips",short:"Side, front or back-of-hip discomfort around running.",
  intro:"Hip discomfort is common in runners. Strength work for the buttock and side-hip muscles may help reduce discomfort and build support for running.",
  contributors:["A quick rise in weekly distance or speed work is commonly associated with hip discomfort.","People often say pressure on the outer hip (lying on that side, crossing legs, long periods standing on one leg) makes it worse.","Lower strength or control in the side-hip muscles is frequently discussed, although the link is not simple.","Long periods of sitting may make the front of the hip feel stiff."],
  note:"Runner-specific hip research is limited; much guidance comes from studies of hip osteoarthritis and outer-hip tendon pain (H1, H2).",
  warmupId:"warmup-general",recoveryId:"recovery-general",sourceIds:["H1","H2","H3","K1","K2","T4","A1"]},
 {id:"knees",icon:"img/icons/knees.svg",art:{src:"img/anatomy/knees-320.webp",srcset:"img/anatomy/knees-160.webp 160w, img/anatomy/knees-320.webp 320w",alt:"Engraving of the right knee joint from the front, showing the ligaments inside the joint (Gray's Anatomy, 1918)"},name:"Knees",short:"Around or behind the kneecap, or the outside of the knee.",
  intro:"Knee discomfort is one of the most common running complaints. Combined hip and knee strengthening has the strongest support (K1, K2) and may help reduce pain over time.",
  contributors:["Sudden increases in how much or how hard you run, especially hills, stairs or downhill running, are commonly associated with knee discomfort.","People often say deep knee bending (squatting, kneeling, long sitting) makes it worse.","Lower thigh and hip strength is frequently discussed in guidelines.","Step rate: taking slightly shorter, quicker steps (about 5–10% more) changes the force on the knee in lab studies, but evidence that it prevents injury is low certainty (C1, C2)."],
  note:"Benefits in studies occurred even without measurable strength change, so \"weak hips\" is an oversimplification.",
  warmupId:"warmup-general",recoveryId:"recovery-general",sourceIds:["K1","K2","K3","K4","K5","T4","C1","C2"]},
 {id:"ankles",icon:"img/icons/ankles.svg",art:{src:"img/anatomy/ankles-320.webp",srcset:"img/anatomy/ankles-160.webp 160w, img/anatomy/ankles-320.webp 320w",alt:"Engraving of the left ankle joint from the outer side, showing the joint capsule (Gray's Anatomy, 1918)"},name:"Ankles",short:"Achilles, ankle sprains, stiffness or balance.",
  intro:"Ankle and Achilles symptoms often respond to slowly building calf strength and balance work (A1, A2, A4). These may help reduce discomfort and the chance of a repeat sprain.",
  contributors:["A previous ankle sprain is commonly associated with another one, especially without balance training.","Sudden increases in hills, speed work or mileage are often linked with Achilles discomfort.","Lower calf strength and endurance is frequently discussed in guidelines.","Footwear: no shoe type has been shown to prevent injury (very low certainty, F1). Choose what feels comfortable."],
  note:"Return to running gradually, using the return-to-run check before hopping or running exercises.",
  warmupId:"warmup-general",recoveryId:"recovery-general",sourceIds:["A1","A2","A3","A4","A5","A6","F1","T6"]}
];
