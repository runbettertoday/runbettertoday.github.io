window.RBT = window.RBT || {};
/* Warm-up and recovery routines (plan: T8, T1; Practice/Low). Shared by all areas unless an area overrides. */
RBT.routines = [
 {id:"warmup-general",type:"warmup",name:"Warm-up (5–7 minutes)",sources:["T8"],evidence:"Practice",steps:[
  "Brisk walk or very easy jog — 2–3 minutes.",
  "Leg swings forward and back — 10 each side.",
  "Leg swings side to side — 10 each side.",
  "Ankle circles — 10 each direction.",
  "Bodyweight squats to a comfortable depth — 10.",
  "Walking lunges or marching high knees — 10 each side."]},
 {id:"recovery-general",type:"recovery",name:"Post-run recovery (5–8 minutes)",sources:["T1"],evidence:"Low",steps:[
  "Walk easily for 3–5 minutes to let your breathing settle.",
  "Gentle calf stretch against a wall — 30 seconds each side.",
  "Gentle front-thigh and hip-flexor stretch — 30 seconds each side.",
  "Note how your hips, knees and ankles feel (0–10) so you can compare tomorrow morning.",
  "Drink water and have a meal or snack in the next few hours."]}
];
RBT.progression = {
 intro:"Move up a level only when all of these have been true for 2 weeks in a row:",
 criteria:["Pain during and after the exercise stays mild.","Symptoms are no worse the next morning.","You can do all the target sets and reps with good form.","Everyday tasks such as stairs and a 30-minute walk are comfortable."],
 back:"Move back a level if pain becomes more than mild or a flare-up does not settle.",
 note:"These limits are common-practice guides based on guideline principles (K3, A2). They are not tested cut-offs.",
 gate:["Walk briskly for 30 minutes without pain.","Do 20 or more single-leg calf raises on each side.","Do 10 single-leg hops with no more than mild pain."],
 gateNote:"Return-to-run check for hopping and running exercises. Criteria based on A1/A2; exact numbers are common practice."
};
RBT.stopNote = "Stop or modify: if pain becomes more than mild, you feel sharp, catching or giving-way sensations, or symptoms are worse the next morning, stop that exercise, make it easier (smaller range, less load, fewer reps) or rest it. If any red-flag sign appears, stop and get help.";

RBT.levels = [{id:1,name:"Beginner",icon:"img/icons/level-1.svg"},{id:2,name:"Intermediate",icon:"img/icons/level-2.svg"},{id:3,name:"Advanced",icon:"img/icons/level-3.svg"}];
