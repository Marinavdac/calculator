const display = document.getElementById('display');
const resetAll = document.querySelector('.ce');
const result = document.querySelector('.result');
const plus = document.querySelector('.plus');
const options = document.getElementById('options');
const selected = document.querySelector('.selected');

//saves operations
display.addEventListener('input', () => {
 const savedItems = localStorage.setItem('numbers', display.value);
 return savedItems;
});

window.onload = function () {
 const show = localStorage.getItem('numbers');
 return (display.value = show);
};

//uses btn CE to reset to clear display
resetAll.addEventListener('click', () => {
 display.value = '';
});

//uses the key ' = '
function operate(number1, operation, number2) {
 return operation(number1, number2);
}

result.addEventListener('click', operate);

function selection(event) {
    let selectedKey = document.querySelector('.selected');
    selectedKey.classList.remove('selected');
    event.target.classList.add('selected');
}
 
options.addEventListener('click', selection);
