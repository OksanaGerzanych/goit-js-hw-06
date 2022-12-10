function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyColor = document.querySelector("body")
const colorFon = document.querySelector('.widget');
const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

colorFon.addEventListener('click', onClick)

function onClick(event) {
  bodyColor.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
}

