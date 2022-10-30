let counterValue = 0;
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

const decrement = () => {
  counterValue -= 1;
  document.getElementById("value").textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  document.getElementById("value").textContent = counterValue;
};

btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);

console.log(counterValue);
console.log(btnDecrement);
console.log(btnIncrement);
