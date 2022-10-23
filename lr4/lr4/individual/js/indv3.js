const title = document.createElement('h1');
title.textContent = 'Індивідуальне завдання №3';
document.body.appendChild(title);

const p = document.createElement('p');
p.textContent = 'Введіть львівський поштовий індекс:';
document.body.appendChild(p);

function testPostIndex(str)
{
    let checker = 0;
    if(!str.length){
        checker = 1;
        alert("Невірно вказаний поштовий індекс");
    }
    
    var cellPhoneTemplate = new RegExp("790[0-9]{2}");
    str = str.replace(cellPhoneTemplate, "");
    
    if(checker !== 1){
        if(str != "") {
            alert("Невірно вказаний поштовий індекс");
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
    testPostIndex(input.value);
});