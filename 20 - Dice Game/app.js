var random1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "images/dice" + random1 + ".png";
document.querySelector(".img1").setAttribute("src", randomDiceImage1);

var random2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + random2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

if (random1 > random2)
  document.querySelector("h1").innerHTML = "🏆Player 1 Wins🏆";
else if (random1 === random2)
  document.querySelector("h1").innerHTML = "🚩 Tie! 🚩";
else document.querySelector("h1").innerHTML = "🏆Player 2 Wins🏆";

