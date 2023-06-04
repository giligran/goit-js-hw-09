import Notiflix from 'notiflix';

const form = document.querySelector('.form')

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();

  const delay = Number(e.target.delay.value);
  const step = Number(e.target.elements.step.value);
  const amount = Number(e.target.elements.amount.value);

  let currentDelay = delay;

  for (let i = 1; i <= amount; i++) {
    createPromise(i, currentDelay)
      .then(onSuccess)
      .catch(onError);

    currentDelay += step;
  }

  form.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
   
}
const onSuccess = ({ position, delay }) => {
  Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
};

const onError = ({ position, delay }) => {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
};
