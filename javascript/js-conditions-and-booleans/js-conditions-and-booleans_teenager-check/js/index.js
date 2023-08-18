const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);


  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.

  // Option 1:
  // if (age > 12 && age < 20) {
  //   output.innerHTML = "You're a teenanger!"
  //   console.log ("You're a teenanger!")
  // } else {
  //   output.textContent = "You're NOT a teenanger!"
  //   console.log ("You're NOT a teenanger!")
  // }

  // Option 2 (shortcut):
  output.textContent = (age > 12 && age < 20) ? "You're a teenanger!" : "You're NOT a teenanger!"

});

