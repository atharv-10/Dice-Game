var randomNo1 = Math.floor(Math.random()*6+1);
var randomDiceImage1="Dice"+ randomNo1 +".png";
var randomImageSrc1 ="/DOM/DICE CHALLENGE/images/"+randomDiceImage1; 

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSrc1);


var randomNo = Math.floor(Math.random()*6+1);
var randomDiceImage="Dice"+ randomNo +".png";
var randomImageSrc ="/DOM/DICE CHALLENGE/images/"+randomDiceImage; 

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSrc);

if(randomNo1<randomNo){
    var winner1 = document.querySelector("h1").innerHTML ="Player 2 Wins";
}
else if (randomNo1===randomNo){
    var winner2 = document.querySelector("h1").innerHTML ="It's a tie..!!";
}
else{
    var winner2 = document.querySelector("h1").innerHTML ="Player 1 Wins";
}
