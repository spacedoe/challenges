console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

let handleInput = () => {
  result.textContent = firstInput.value * secondInput.value;
};

firstInput.addEventListener("input", handleInput);
secondInput.addEventListener("input", handleInput);
