var hitrn = 0;
var timer = 60;
var scores = 0;


function makeBuble (){
    var clutter= "";

for (var i= 0; i <= 188; i++){
 var rn =   Math.floor(Math.random()*10)
    clutter += `<div class="buble">${rn}</div>`;
}

document.querySelector("#btom").innerHTML=clutter;
}



function timeStop (){
  var time =  setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#time").textContent= timer;  
    } 
    else{
        clearInterval(time)
        document.querySelector("#btom").innerHTML =`<h1>GAME OVER</h1>`
    }
    },1000)
}


function getNewHit(){
  hitrn =  Math.floor(Math.random() * 10);
    document.querySelector("#hitband").textContent= hitrn;
}



function increaseScore(){
    scores += 10;
    document.querySelector("#topscore").textContent= scores;
}

document.querySelector("#btom")
.addEventListener("click",function (dets){
var clicknum = Number(dets.target.textContent);
if(clicknum === hitrn){
increaseScore()   
makeBuble();
getNewHit();
}
});


makeBuble();
timeStop();
getNewHit();

