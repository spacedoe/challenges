console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');


function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let result;
  
  // --v-- write your code here --v--
  const formElement = event.target.elements;
  const numberA = formElement.numberA.value*1;
  const  numberB = formElement.numberB.value*1;

  const checkedCheckbox = formElement.operator.value

  console.log(checkedCheckbox)


  if (checkedCheckbox === "addition") {
    result = add(numberA , numberB)
    console.log("Addition result: ", result)
    resultOutput.textContent = result;
    return;
  }

  if (checkedCheckbox === "subtraction") {
    result = subtract(numberA , numberB)
    console.log("Substraction result: ", result)
    resultOutput.textContent = result;
    return;
  }

  if (checkedCheckbox === "multiplication") {
    result = multiply(numberA , numberB)
    console.log("Multiplication result: ", result)
    resultOutput.textContent = result;
    return;
  }

  if (checkedCheckbox === "division") {
    result = divide(numberA , numberB)
    console.log("Division result: ", result)
    resultOutput.textContent = result;
    return;
  }
    // --^-- write your code here --^--

});
