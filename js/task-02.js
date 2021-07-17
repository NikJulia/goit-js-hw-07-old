const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const makeIngredientsList = elements => {
  return elements.map(element => {
    const ingredientsEl = document.createElement('li');
    ingredientsEl.textContent = element;
     return ingredientsEl;
  }); 
};

ingredientsList.append(...makeIngredientsList(ingredients));