
const categories = document.querySelectorAll('.item');
console.log(categories);
console.log('Number of categories:', categories.length);

const categoriesName = document.querySelectorAll('.item h2');
const categoriesUl = document.querySelectorAll('.item ul');


const categoriesArray = [...categories].map(
    categories => `Category: ${categories.children[0].textContent}    
Elements: ${categories.children[1].children.length}`
  ).join("\n");

console.log(categoriesArray);
