const title = document.createElement('h1');
title.textContent = 'Приклад 5';
document.body.appendChild(title);

function checkWholePositiveNumber(str) {
    if(!str.length) 
        alert("This is not valid whole positive number!");
    
    var re = new RegExp("[^0-9]", "g");
    str = str.replace(re,"a");
    
    if(str.indexOf("a") != -1)
        alert("This is not valid whole positive number!");
}

const input = document.createElement('input');
const button = document.createElement('button');
button.textContent = 'Ok';

document.body.appendChild(input);
document.body.appendChild(button);

button.addEventListener('click', () => {
    checkWholePositiveNumber(input.value);
});