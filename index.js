//Variables
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const red = document.querySelector("#red");
const yellow = document.querySelector("#yellow");
const history = [];
//functions
function playSound(color) {
    // var audio = new Audio(`sounds/${color}.mp3`);
    // audio.play();
    console.log(color);
}

function callButton() {
    const randomNumber = Math.floor((Math.random() * 4) + 1);

    history.push(randomNumber);

    for(i=0; i< history.length; i++){
        if (randomNumber === 1) {
            playSound('blue');
            blue.style.transform = 'scale(1.2)';
            setTimeout(function () {
                blue.style.transform = 'scale(1.0)';
            }, 250);

            blue.addEventListener('click', () => {
                callButton();
            });
            green.addEventListener('click', () => {
                playSound('wrong');
                return;

            });
            red.addEventListener('click', () => {
                playSound('wrong');
                return;
            });
            yellow.addEventListener('click', () => {
                playSound('wrong');
                return;
            });

        } else if (randomNumber === 2) {
            playSound('green');
            green.style.transform = 'scale(1.2)';
            setTimeout(function () {
                green.style.transform = 'scale(1.0)';
            }, 250);
            green.addEventListener('click', () => {
                callButton();
            })

        } else if (randomNumber === 3) {
            playSound('red');
            red.style.transform = 'scale(1.2)';
            setTimeout(function () {
                red.style.transform = 'scale(1.0)';
            }, 250);
            red.addEventListener('click', () => {
                callButton();
            })

        } else if (randomNumber === 4) {
            playSound('yellow');
            yellow.style.transform = 'scale(1.2)';
            setTimeout(function () {
                yellow.style.transform = 'scale(1.0)';
            }, 250);
            yellow.addEventListener('click', () => {
                callButton();
            })
        }
    }
}

callButton();


