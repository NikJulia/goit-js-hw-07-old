let counterValue = document.querySelector('#value');

const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');

let click = 0;

function decrementBtnClick()  {
    click -= 1;
    counterValue.textContent = click;
}

function incrementBtnClick()  {
    click += 1;
    counterValue.textContent = click;
}

decrementBtn.addEventListener('click', decrementBtnClick);
incrementBtn.addEventListener('click', incrementBtnClick);

  