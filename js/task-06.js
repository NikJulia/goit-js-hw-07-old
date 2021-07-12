const inputEl = document.querySelector('#validation-input');
const correctLength = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if (inputEl.value.length === correctLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
  }