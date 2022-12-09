const input = document.querySelector('#name-input');
console.log(input);
const title = document.querySelector("h1")
console.log(title);
const span = document.querySelector('#name-output')

input.addEventListener("input", onInput);

function onInput(event) {
    const inputValue = event.currentTarget.value;
     span.textContent = inputValue;
    if (!inputValue) {
        span.textContent = 'Anonymous';
     }
} 
