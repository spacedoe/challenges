console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(event.target);
  const formElements = event.target.elements;

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  //BONUS
  const firstNameValue = formElements.firstName.value;
  const ageValue = formElements.age.value;
  const baddnessValue = formElements.badness.value;

  const ageBadnessSum = +ageValue + +baddnessValue;

  console.log(`The age-badness-sum of ${firstNameValue} is ${ageBadnessSum}`)
});
