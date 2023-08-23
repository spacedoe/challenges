console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tos = document.getElementById('tos');
const successMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");

}

function showTosError() {
  tosError.removeAttribute("hidden");
}

hideTosError()

function hideSuccessMessage() {
  successMessage.setAttribute("hidden", "");
}


function showSuccessMessage() {
  successMessage.removeAttribute("hidden");
}

hideSuccessMessage()

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const tos = event.target.elements.tos.checked
  console.log('tos:', tos)

  if (tos) {
    hideTosError()
    alert("Form submitted");
    showSuccessMessage()
    return;
  } 
  
  hideSuccessMessage()
  showTosError();

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
});


