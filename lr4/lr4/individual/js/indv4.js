const title = document.createElement('h1');
title.textContent = 'Індивідуальне завдання №4';
document.body.appendChild(title);

const p = document.createElement('p');
p.textContent = 'Введіть львівський міський номер телефону:';
document.body.appendChild(p);

function testCellPhoneNumber(str)
{
    let checker = 0;
    if(!str.length){
        checker = 1;
        alert("Невірно вказаний номер телефону");
    }
    
    var cellPhoneTemplate = new RegExp("([(]032[)])?[0-9]{3}-?[0-9]{2}-?[0-9]{2}");
    str = str.replace(cellPhoneTemplate, "");
    
    if(checker !== 1){
        if(str != "") {
            alert("Невірно вказаний номер телефону");
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