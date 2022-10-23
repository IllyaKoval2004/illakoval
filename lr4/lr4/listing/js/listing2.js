let title = document.createElement('h1');
title.textContent = 'Приклад 2';
document.body.appendChild(title);

function testPhoneNumber(str)
{
    if(!str.length)
        alert("Номер телефону задано некоректно");
    
        var phoneTemplate = new RegExp("2?[0-9]{6}");
    str = str.replace(phoneTemplate,"");
    
    if(str != "")
        alert("Номер телефону задано некоректно");
}

const input = document.createElement('input');
const button = document.createElement('button');
button.textContent = 'Ok';

document.body.appendChild(input);
document.body.appendChild(button);

button.addEventListener('click', () => {
    testPhoneNumber(input.value);
});