var gameOver = false;
var winscore = 5;
var p1Display = document.getElementById("s1");
var p2Display = document.getElementById("s2");
var numInput = document.querySelector("input");
var numDisplay = document.getElementById("num");

numInput.addEventListener("change", function(){
     numDisplay.textContent=numInput.value;
    winscore=Number(numInput.value);
    resets();
});

var p1score=0;
var p1=document.querySelector("#p1");
p1.addEventListener("click", function(){
    if(!gameOver){
        p1score+=1;
        if(p1score===winscore){
            p1Display.classList.add("winner");
            gameOver=true;
        }
        p1Display.textContent=p1score;
    }
}); 
 
var p2score=0;
var p2=document.querySelector("#p2");
p2.addEventListener("click", function(){
    if(!gameOver){
        p2score+=1;
        if(p2score===winscore){
            p2Display.classList.add("winner");
            gameOver=true;
        }
        p2Display.textContent=p2score;
    }
}); 

var reset = document.querySelector("#reset");
reset.addEventListener("click", function(){
   resets();   
});

function resets(){
     p1score=0;
    p2score=0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    p1Display.textContent=p1score;
    p2Display.textContent=p2score;
    gameOver=false; 
}
