const body = document.querySelector('body')
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const switcher = {
    intervalId: null,
    getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
      },
    start () {
        btnStart.disabled = true;
        btnStop.disabled = false;
        this.intervalId = setInterval(()=>{
            body.style.backgroundColor = this.getRandomHexColor();
        },1000)
    },
    stop () {
        clearInterval(this.intervalId)
        btnStart.disabled = false;
        btnStop.disabled = true;
    }
}

btnStart.addEventListener('click', ()=>{
    switcher.start();
})
btnStop.addEventListener('click', ()=> {
    switcher.stop();
})
