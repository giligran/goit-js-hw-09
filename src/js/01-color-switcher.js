const body = document.querySelector('body')

 function getRandomHexColor() {
  return body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
 }

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

const switcher = {
    start() {
       timerSwitchColor = setInterval(getRandomHexColor, 1000);

    }
}

btnStart.addEventListener('click', () => {
}
)

btnStop.addEventListener('click', () => {
    clearInterval(timerSwitchColor);
})