const input = document.querySelector('#validation-input');
const inputLength = Number(input.getAttribute('data-length'));

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if (input.value.length === inputLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
  }