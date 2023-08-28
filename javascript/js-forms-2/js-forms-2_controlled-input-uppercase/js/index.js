console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener('input', (event) => {
    //Shortest solution:
    // input.value = input.value.toUpperCase()

    //OR: 
    // event.target.value = event.target.value.toUpperCase()


    const inputValue = event.target.value
    input.value = inputValue.toUpperCase()

    console.log(inputValue)
})

//Alternative: 
// let inputEl = input

// input.addEventListener('input', (event) => {
//     inputEl.value = input.value.toUpperCase()
// })
