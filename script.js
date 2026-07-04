/* ==========================
   SMART WATER SEGREGATION
   SCRIPT.JS
========================== */

const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1800);
});

/* ==========================
   DARK MODE
========================== */

const modeBtn = document.getElementById("modeBtn");

modeBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

modeBtn.innerHTML="☀️";

}else{

modeBtn.innerHTML="🌙";

}

});


/* ==========================
   START BUTTON
========================== */

const startBtn=document.querySelector(".startBtn");

startBtn.addEventListener("click",()=>{

document.getElementById("simulation").scrollIntoView({

behavior:"smooth"

});

});


/* ==========================
   WATER SIMULATION
========================== */

const simulate=document.getElementById("simulate");

const purity=document.getElementById("purity");

const tds=document.getElementById("tds");

const status=document.getElementById("status");

const water=document.querySelector(".water");

simulate.addEventListener("click",()=>{

simulate.disabled=true;

simulate.innerHTML="Processing...";

let level=70;

let interval=setInterval(()=>{

level--;

water.style.height=level+"%";

if(level<=35){

clearInterval(interval);

showResult();

}

},50);

});


function showResult(){

let purityValue=Math.floor(Math.random()*8)+92
  /* ==========================
   FLOATING BUBBLES EFFECT
========================== */

function createBubble() {

    const bubble = document.createElement("div");

    bubble.classList.add("bubble");

    bubble.style.left = Math.random() * window.innerWidth + "px";

    bubble.style.width = bubble.style.height =
        Math.random() * 25 + 10 + "px";

    document.body.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 8000);

}

setInterval(createBubble, 500);


/* ==========================
   LIVE DIGITAL CLOCK
========================== */

const clock = document.createElement("div");

clock.style.position = "fixed";
clock.style.bottom = "20px";
clock.style.right = "20px";
clock.style.background = "rgba(0,0,0,.5)";
clock.style.padding = "10px 18px";
clock.style.borderRadius = "12px";
clock.style.color = "white";
clock.style.backdropFilter = "blur(10px)";
clock.style.zIndex = "999";

document.body.appendChild(clock);

function updateClock() {

const now = new Date();

clock.innerHTML = now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();


/* ==========================
   COUNTER ANIMATION
========================== */

function animateValue(id,start,end,duration){

let obj=document.getElementById(id);

let range=end-start;

let current=start;

let increment=end>start?1:-1;

let stepTime=Math.abs
  /* ==========================
   PARTICLE BACKGROUND
========================== */

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.zIndex = "-2";

const ctx = canvas.getContext("2d");

function resizeCanvas(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];

for(let i=0;i<80;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*3+1,

dx:(Math.random()-.5),

dy:(Math.random()-.5)

});

}

function animateParticles(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

ctx.beginPath();

ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

ctx.fillStyle="#00c8ff";

ctx.fill();

p.x+=p.dx;

p.y+=p.dy;

if(p.x<0||p.x>canvas.width)p.dx*=-1;

if(p.y<0||p.y>canvas.height)p.dy*=-1;

});

requestAnimationFrame(animateParticles);

}

animateParticles();


/* ==========================
   WATER LEVEL BAR
