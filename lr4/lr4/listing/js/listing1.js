let title = document.createElement('h1');
title.textContent = 'Приклад 1';
document.body.appendChild(title);

function testCellPhoneNumber(str)
{
    if(!str.length)
        alert("Номер мобільного телефону задано некоректно");
    
    var cellPhoneTemplate = new RegExp("8?((063)|(093))[0-9]{7}");
    str = str.replace(cellPhoneTemplate,"");
    
    if(str != "")
        alert("Номер мобільного телефону задано некоректно");
}

const input = document.createElement('input');
const button = document.createElement('button');
button.textContent = 'Ok';

document.body.appendChild(input);
document.body.appendChild(button);

button.addEventListener('click', () => {
    testCellPhoneNumber(input.value);
});