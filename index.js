//Variables
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const red = document.querySelector("#red");
const yellow = document.querySelector("#yellow");
const history = [];
const buttons = document.querySelectorAll(".btn");
//functions
function playSound(color) {
  // var audio = new Audio(`sounds/${color}.mp3`);
  // audio.play();
  console.log(color);
}

function callButton() {
  const randomNumber = Math.floor(Math.random() * 4 + 1);
  if (randomNumber === 1) {
    history.push("blue");
    blue.style.transform = "scale(1.2)";
    setTimeout(() => {
      blue.style.transform = "scale(1)";
    }, 200);
  } else if (randomNumber === 2) {
    history.push("green");
    green.style.transform = "scale(1.2)";
    setTimeout(() => {
      green.style.transform = "scale(1)";
    }, 200);
  } else if (randomNumber === 3) {
    history.push("red");
    red.style.transform = "scale(1.2)";
    setTimeout(() => {
      red.style.transform = "scale(1)";
    }, 200);
  } else {
    history.push("yellow");
    yellow.style.transform = "scale(1.2)";
    setTimeout(() => {
      yellow.style.transform = "scale(1)";
    }, 200);
  }
  console.log(history);
}

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {
      console.log(e);
    });
  }


if (Array.isArray(history) && history.length !== 0) {
    

}
