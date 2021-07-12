const inputEl = document.querySelector('input');
const divBoxesEl = document.querySelector('#boxes');
const addBtn = document.querySelector('#controls [data-action="render"]');
const cleanBtn = document.querySelector('#controls [data-action="destroy"]');


let amount
inputEl.addEventListener('input', (event) => {
    amount = event.currentTarget.value;
    return amount;
})

function getColor(){
     return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
}


addBtn.addEventListener('click', () => {
    
    const amountOfDivs = Array.from({ length: amount }, (e, i) => {
        
        const divEl = document.createElement('div');
        divEl.classList.add('new-div');
        divEl.style.backgroundColor = getColor();
        divEl.style.display = 'inline-block';
            if (divBoxesEl.lastChild !== null) {
                const lastChildWidth = parseInt(divBoxesEl.lastChild.style.width);
                divEl.style.width = `${(i + 1) * 10 + lastChildWidth}px`;
                divEl.style.height = `${(i + 1) * 10 + lastChildWidth}px`; 
                } else {
                    divEl.style.width = `${(i + 3) * 10}px`;
                    divEl.style.height = `${(i + 3) * 10}px`; 
                }
            return divEl;
    });
    return divBoxesEl.append(...amountOfDivs);
    } 
)

cleanBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
    const newDiv = document.querySelectorAll('.new-div');
    Array.from(newDiv).map(el => {
       el.remove();
   });
} 