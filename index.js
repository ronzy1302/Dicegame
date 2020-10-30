// Image Left
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage = "dice" + randomNumber1 + ".png"; // dice5.png

var imageSrc = "images/" + randomImage; // images/dice1.png - images/dice6.png

document.querySelector(".img1").setAttribute("src", imageSrc);

// Image right

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "dice" + randomNumber2 + ".png";

var imageSrc2 = "images/" + randomImage2;

document.querySelector(".img2").setAttribute("src", imageSrc2);

// wins chances

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
