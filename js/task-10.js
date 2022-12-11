function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const divControls = document.querySelector('#controls');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('#boxes');
const input = document.querySelector("input");

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes)

function createBoxes(amount) {
  
  console.log(amount)
  const boxes = document.createElement('div');
  
  boxes.style.backgroundColor = getRandomHexColor(); 
  boxes.style.height = '30px';
  boxes.style.width = '30px';
  divBoxes.append(boxes);
  
}



function destroyBoxes() {
  divBoxes.remove(boxes);
}