console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');
const headlineInput = document.getElementById("headline");
const taskInput = document.getElementById("task");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("headlineInput: ", headlineInput.value);
  console.log("taskInput: ", taskInput.value);

  addData(headlineInput.value, taskInput.value)
  formSubmit();
});

formSubmit = () => {
  form.reset();
  headlineInput.focus();
};

function addData(headlineData, taskData) {
  const entry = document.createElement("li");
  todoList.append(entry);

  const headline = document.createElement("h3");
  headline.textContent = headlineData;
  entry.append(headline);

  const task = document.createElement("p");
  task.textContent = taskData;
  entry.append(task);
}
