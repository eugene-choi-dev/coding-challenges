import "./style.css";

const counterElement = document.querySelector('.counter');
const incrementElement = document.querySelector('.increment');
const decrementElement = document.querySelector('.decrement');

const stepSizeElement = document.querySelector('.step-size');
const incrementStepSizeElement = document.querySelector('.increment-step-size')
const decrementStepSizeElement = document.querySelector('.decrement-step-size')

let count = 0;
let incrementValue = 1;

updateCounter()
updateIncrement()

function updateCounter() {
  counterElement.innerHTML = count;
};

function updateIncrement() {
  stepSizeElement.innerHTML = incrementValue;
}

incrementElement.addEventListener("click",() => {
  count = count + incrementValue;
  updateCounter();
});

decrementElement.addEventListener("click",() => {
  count = count - incrementValue;
  updateCounter();
});

incrementStepSizeElement.addEventListener("click",() => {
  incrementValue++;
  updateIncrement();
})

decrementStepSizeElement.addEventListener("click",() => {
  if (incrementValue > 1) {
    incrementValue--;
    updateIncrement();
  }
})







