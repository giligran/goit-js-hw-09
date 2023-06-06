import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputDate = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const daysField = document.querySelector('span[data-days]');
const hoursField = document.querySelector('span[data-hours]');
const minutesField = document.querySelector('span[data-minutes]');
const secondsField = document.querySelector('span[data-seconds]');

btnStart.disabled = true;
const timer = {
  intervalId: null,
  options: {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      timer.timerInterval(selectedDates)
    }
  },
  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  },
  timerInterval (selectedDates) {
    const today = new Date();
  this.interval = selectedDates[0] - today;

  if (this.interval <= 0) {
    Notiflix.Notify.failure('Please choose a date in the future');
    return;
  }

  btnStart.disabled = false;
//   this.startTimer();
  },
  viewTimer(remainingTime) {
    const { days, hours, minutes, seconds } = this.convertMs(remainingTime);
    daysField.textContent = `${days}`.padStart(2,'0');
    hoursField.textContent = `${hours}`.padStart(2,'0');
    minutesField.textContent = `${minutes}`.padStart(2,'0');
    secondsField.textContent = `${seconds}`.padStart(2,'0');
  },
  startTimer() {
    const startTime = performance.now();

    const animate = () => {
      const currentTime = performance.now();
      const elapsedTime = currentTime - startTime;
      const remainingTime = this.interval - elapsedTime;
  
      if (remainingTime <= 0) {
        clearInterval(this.intervalId);
        Notiflix.Notify.success('Timer is over');
        inputDate.disabled = false;
        return;
      }
  
      this.viewTimer(remainingTime);
      requestAnimationFrame(animate);
    };
  
    this.intervalId = requestAnimationFrame(animate);
  }
}

 flatpickr(inputDate, timer.options);

 btnStart.addEventListener('click', ()=> {
  btnStart.disabled = true;
  inputDate.disabled=true;
  timer.startTimer()
 })
