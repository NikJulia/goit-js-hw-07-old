let counterValue = document.querySelector('#value');

const refs = {
    decrementBtn: document.querySelector('#counter button[data-action="decrement"]'),
    incrementBtn: document.querySelector('#counter button[data-action="increment"]'),
}

refs.decrementBtn.addEventListener('click', onDecrementBtnClick);
refs.incrementBtn.addEventListener('click', onIncrementBtnClick);

let click = 0;

function onDecrementBtnClick () {
    click -= 1;
    counterValue.textContent = click;
}

function onIncrementBtnClick () {
    click += 1;
    counterValue.textContent = click;
}

  