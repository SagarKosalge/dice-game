var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

//set the image source to a randomly generated number between 1 and 5
if(randomNumber1>randomNumber2){
    document.querySelector(".container h1").textContent="Player 1 Wins!";
}else if (randomNumber1<randomNumber2) {
    document.querySelector(".container h1").textContent= "Player 2 Wins!";
}