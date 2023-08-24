console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tos = document.getElementById("tos");
const successMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

hideTosError();

function hideSuccessMessage() {
  successMessage.setAttribute("hidden", "");
}

function showSuccessMessage() {
  successMessage.removeAttribute("hidden");
}

hideSuccessMessage();

// tos.removeAttribute('checked') // <--- doesn't work


 
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const tos = event.target.elements.tos.checked;
  console.log("tos:", tos);

  if (!tos) {
    showTosError();
    hideSuccessMessage();
    return;
  }
  hideTosError();
  alert("Form submitted");
  showSuccessMessage();
  form.reset()

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
});