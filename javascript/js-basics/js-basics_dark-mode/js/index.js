console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkButton = document.querySelector('[data-js="dark-mode-button"]');
const lightButton = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

darkButton.addEventListener('click', function() {
    bodyElement.classList.add('dark');
    console.log('Dark button clicked!');
})

lightButton.addEventListener('click', function() {
    bodyElement.classList.remove('dark');
    console.log('Light button clicked!');
})

toggleButton.addEventListener('click', function(){
    bodyElement.classList.toggle('dark');
    console.log('Toggle button clicked!');
})

//alternative:


// const darkMode = () => {
//     bodyElement.classList.add('dark');
//     console.log('Dark button clicked!')
// }

// darkButton.addEventListener('click', darkMode);


// const lightMode = () => {
//     bodyElement.classList.remove('dark');
//     console.log('Light button clicked!');
// }

// lightButton.addEventListener('click', lightMode);


// const ToggleMode = () => {
//     bodyElement.classList.toggle('dark');
//     console.log('Toggle button clicked!');
// }

// toggleButton.addEventListener('click', ToggleMode);