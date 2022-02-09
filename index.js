const playBtn = document.getElementById("play");

const findWinner = () => {
  let randomNum1 = Math.floor(Math.random() * 6 + 1);

  let randomNum2 = Math.floor(Math.random() * 6 + 1);

  let randomImage1 = "images/dice" + randomNum1 + ".png";

  let randomImage2 = "images/dice" + randomNum2 + ".png";

  document.getElementsByClassName("img1")[0].setAttribute("src", randomImage1);

  document.getElementsByClassName("img2")[0].setAttribute("src", randomImage2);

  if (randomNum1 > randomNum2) {
    document.querySelectorAll("h1")[0].innerHTML =
      "<h1> 🚩Player 1 Wins! </h1>";
  } else if (randomNum1 < randomNum2) {
    document.querySelectorAll("h1")[0].innerHTML =
      "<h1> Player 2 Wins!🚩 </h1>";
  } else {
    document.querySelectorAll("h1")[0].innerHTML = "<h1> Draw </h1>";
  }
};
playBtn.addEventListener("click", findWinner);
