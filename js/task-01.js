// Task 1
const categories = document.querySelector('#categories');
const categoriesItem = categories.querySelectorAll('.item');
console.log(`В списке ${categoriesItem.length} категории.`);

// Task 2
categoriesItem.forEach(element => {
  console.log(`Категория: ${element.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${element.querySelectorAll('li').length}`);
});

