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
}
let contador = 0;
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    if (e.target.id === history[contador]) {
      console.log("acerto miseravi");
      contador++;
      if (contador === history.length) {
        contador = 0;
        callButton();
      }
    } else {
      console.log("errou 06. bora pra próxima");
      contador = 0;
      history.length = 0;
      setTimeout(callButton, 500);
    }
  });
}

callButton();
