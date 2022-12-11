function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyColor = document.querySelector("body")
const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

button.addEventListener('click', onClick)

function onClick(event) {
  let color = getRandomHexColor();
  bodyColor.style.backgroundColor = color;
  span.textContent = color;
  button.style.backgroundColor = color;
}






