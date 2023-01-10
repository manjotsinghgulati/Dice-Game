let randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
let randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
let randomDiceImage1 = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
let randomDiceImage2 = "dice" + randomNumber2 + ".png"; // dice1.png - dice6.png
let randomImageSource1 = "images/" + randomDiceImage1; // images/dice1.png - images/dice6.png
let randomImageSource2 = "images/" + randomDiceImage2; // images/dice1.png - images/dice6.png


function playGame() {

  document.querySelector(".img1").setAttribute("src", randomImageSource1);
  document.querySelector(".img2").setAttribute("src", randomImageSource2);

  if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }

}