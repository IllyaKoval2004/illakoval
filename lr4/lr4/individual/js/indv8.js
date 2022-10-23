const title = document.createElement('h1');
title.textContent = 'Індивідуальне завдання №8';
document.body.appendChild(title);

const p = document.createElement('p');
p.textContent = 'Рік в межах від 1900 до 2099:';
document.body.appendChild(p);

function testCellPhoneNumber(str)
{
    let checker = 0;
    if(!str.length){
        checker = 1;
        alert("Невірно вказаний рік");
    }
    
    var cellPhoneTemplate = new RegExp("(19|20)[0-9]{2}");
    str = str.replace(cellPhoneTemplate, "");
    
    if(checker !== 1){
        if(str != "") {
            alert("Невірно вказаний рік");
        }
        else {
            alert("Вірн0");
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