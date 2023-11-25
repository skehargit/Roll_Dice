
function rollDice(){
  // generate-random-number-for-2dice-----
var numRand =(Math.ceil(Math.random()*6));
var numRand2 = (Math.ceil(Math.random()*6));
// change the random img---------
document.getElementById("imgRand").src = "./images/dice"+numRand+".png";
document.getElementById("imgRand2").src = "./images/dice"+numRand2+".png";
//change-the-inner-text-------
  if(numRand>numRand2){
    document.getElementById("textchange").innerText = "Player 1 win 🏆";
  }else if(numRand<numRand2){
    document.getElementById("textchange").innerText = "Player 2 win 🏆";
  }else{
    document.getElementById("textchange").innerText = "Draw 😬";
  }
 
}
document.getElementById("btn").addEventListener("click",()=>{
  rollDice();
})