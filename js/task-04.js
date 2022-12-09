
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const span = document.querySelector('#value');
let counterValue = 0;

buttonIncrement.addEventListener('click', onClickUp);
function onClickUp(event) {
    console.log(event.currentTarget);
    counterValue += 1;
    span.textContent = counterValue;
}
buttonDecrement.addEventListener('click', onClickDown);
function onClickDown(event) {
    console.log(event.currentTarget);
    counterValue -= 1;
    span.textContent = counterValue;
}





