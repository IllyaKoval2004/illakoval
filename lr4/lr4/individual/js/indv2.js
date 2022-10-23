const title = document.createElement('h1');
title.textContent = 'Індивідуальне завдання №2';
document.body.appendChild(title);

const p = document.createElement('p');
p.textContent = 'Приклад номеру: +380xxxxxxxxx';
document.body.appendChild(p);

function testCellPhoneNumber(str)
{
    let checker = 0;
    if(!str.length){
        checker = 1;
        alert("Номер мобільного телефону задано некоректно");
    }
    
    var cellPhoneTemplate = new RegExp("[+]380[0-9]{9}");
    str = str.replace(cellPhoneTemplate, "");
    
    if(checker !== 1){
        if(str != "") {
            alert("Номер мобільного телефону задано некоректно");
        }
        else {
            alert("Коректно");
        }
    }
}

const input = document.createElement('input');
const button = document.createElement('button');
button.textContent = 'Ok';

document.body.appendChild(input);
document.body.appendChild(button);

button.addEventListener('click', () => {
    testCellPhoneNumber(input.value);
});