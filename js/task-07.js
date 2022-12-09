const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
input.addEventListener('input', onfontSize);

function onfontSize(event) {
    text.style.fontSize = event.currentTarget.value + "px";
    console.log(event.currentTarget.value);
}









