//Variables
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const red = document.querySelector("#red");
const yellow = document.querySelector("#yellow");
const history = [];
//functions
function playSound(color) {
    var audio = new Audio(`sounds/${color}.mp3`);
    audio.play();
}

function callButton() {
    const randomNumber = Math.floor((Math.random() * 4) + 1);

    history.push(randomNumber);

    if (randomNumber === 1) {
        playSound('blue');
        blue.style.transform = 'scale(1.2)';
        setTimeout(function () {
            blue.style.transform = 'scale(1.0)';
        }, 250);

        // blue.addEventListener('click', () => {
        //     //     if (history[history.length - 1] === )
        //     //         callButton();
        //     // })
    } else if (randomNumber === 2) {
        playSound('green');
        green.style.transform = 'scale(1.2)';
        setTimeout(function () {
            green.style.transform = 'scale(1.0)';
        }, 250);

    } else if (randomNumber === 3) {
        playSound('red');
        red.style.transform = 'scale(1.2)';
        setTimeout(function () {
            red.style.transform = 'scale(1.0)';
        }, 250);

    } else if (randomNumber === 4) {
        playSound('yellow');
        yellow.style.transform = 'scale(1.2)';
        setTimeout(function () {
            yellow.style.transform = 'scale(1.0)';
        }, 250);

    }



}

callButton();


