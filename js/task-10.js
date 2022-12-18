function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputNum = document.querySelector('#controls > input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('#boxes');


createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes)

function createBoxes(amount) {
  const colectionBoxes = [''];
  const width = 30;
  const height = 30;
  const markup = colectionBoxes.map((box) => `<div style = "backgroundColor = ${getRandomHexColor()},
  height = ${height}px, width = ${width}px"</div>`).join('');

  divBoxes.insertAdjacentHTML("beforeend", markup);
  
  console.log(colectionBoxes);
}



function destroyBoxes() {
  divBoxes.remove(boxes);
}






// const  createBoxes  =  сума  =>  {
// 	const  elementsToAdd  =  [ ]
// 	для  ( нехай  i  =  0 ;  i  <  сума ;  i ++ )  {
// 		const  div  =  документ . createElement ( 'div' )
// 		див . стиль . висота  =  ` ${ 30  +  10  *  i } px`
// 		див . стиль . ширина  =  ` ${ 30  +  10  *  i } px`
// 		див . стиль . фон  =  getRandomHexColor ( )
// 		elementsToAdd . push ( div )
// 	}
// 	повернути  elementsToAdd
// }

// const  destroyBoxes  =  ( )  =>  {
// 	ящики . внутрішній HTML  =  ''
// }

// btnCreate . addEventListener ( 'click' ,  ( )  =>  {
// 	нехай  boxesToAdd  =  createBoxes ( inputNum . значення )
// 	ящики . додати ( ... boxesToAdd )
// } )

// консоль . журнал ( inputNum . значення )

// btnDestroy . addEventListener ( 'click' ,  ( )  =>  {
// 	destroyBoxes . дзвонити ( )