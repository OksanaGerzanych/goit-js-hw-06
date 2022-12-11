
const categories = document.querySelectorAll('.item');
console.log(categories);
console.log('Number of categories:', categories.length);

const categoriesName = document.querySelectorAll('.item h2');
const categoriesUl = document.querySelectorAll('.item ul');

categories.forEach(element => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
 })

