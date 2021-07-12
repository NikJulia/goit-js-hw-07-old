const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach (element => {
  const itemEl = document.createElement('li');
  itemEl.textContent = element;
  const ingredientsItem = ingredientsList.appendChild(itemEl);
});