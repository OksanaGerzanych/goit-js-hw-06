
const categories = document.querySelectorAll('.item');
console.log(categories);
console.log('Number of categories:', categories.length);

const categoriesName = document.querySelectorAll('.item h2');

 const categoriesUl = document.querySelectorAll('.item ul');

categoriesName.forEach(element => {

    console.log(`Category: ${element.textContent}
    `);
    
})
categoriesUl.forEach(element => {
    console.log(`Elements: ${element.children.length}`);
})





