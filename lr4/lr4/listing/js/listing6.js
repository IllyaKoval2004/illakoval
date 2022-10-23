const title = document.createElement('h1');
title.textContent = 'Приклад 6';
document.body.appendChild(title);

function checkEmail(str) {
    if(!str.length)
        alert("Incorrect e-mail!");
    
    var re = new RegExp("[a-zA-Z_.]+@{1}[a-zA-Z_.]+[\.]{1}[a-zA-Z_]+");
    str = str.replace(re, "");
    
    if(!str.length)
        alert('OK');
    else
        alert("Incorrect e-mail!");
}

const input = document.createElement('input');
const button = document.createElement('button');
button.textContent = 'Ok';

document.body.appendChild(input);
document.body.appendChild(button);

button.addEventListener('click', () => {
    checkEmail(input.value);
});