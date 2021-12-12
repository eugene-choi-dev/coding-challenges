import "./style.css";

const counterDisplayElement = document.querySelector('.counter');
const counterIncrementElement = document.querySelector('.increment');
const counterDecrementElement = document.querySelector('.decrement');

let count = 0;

function updateDisplay(){
  counterDisplayElement.innerHTML = count;
};

counterIncrementElement.addEventListener("click",()=>{
  count++;
  updateDisplay();
});

counterDecrementElement.addEventListener("click",()=>{
  count--;
  updateDisplay();
});


