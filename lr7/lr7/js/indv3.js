const title = document.createElement('h1');
title.textContent = 'Індивідуальне завдання 3';
document.body.insertBefore(title, body.children[0]);

const check1 = document.getElementById("radio1");
const check2 = document.getElementById("radio2");
const check3 = document.getElementById("radio3");
const check4 = document.getElementById("radio4");
const result = document.getElementById("result");

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var total_cheker = 0;
var true_cheker = 0;
function Total(){
    let procent = true_cheker*100/10;
    total.innerHTML = "Загальний рахунок " + procent + "% " + "(" + true_cheker + " правильних відповідей з 10)";
    if (total_cheker == 10){
        alert("Кінець тестування " + true_cheker + "/" + total_cheker);
        location.reload();
    }
}

TaskWork();

var a;
var b;
var c;
var true_p;
var true_c = 0;
var sproba = 0;

function TaskWork(){
    a = getRandomInt(1, 10);
    b = getRandomInt(1, 10);
    c = parseInt(a * b);
    let choise = getRandomInt(1, 4);
    l_radio1.innerHTML = getRandomInt(1, 100);
    l_radio2.innerHTML = getRandomInt(1, 100);
    l_radio3.innerHTML = getRandomInt(1, 100);
    l_radio4.innerHTML = getRandomInt(1, 100);
    if(choise == 1) {
        l_radio1.innerHTML = c;
        console.log(l_radio1.innerHTML);
        true_p = 1;
    }
    else if(choise == 2) {
        l_radio2.innerHTML = c;
        console.log(l_radio2.innerHTML);
        true_p = 2;
    }
    else if(choise == 3) {
        l_radio3.innerHTML = c;
        console.log(l_radio3.innerHTML);
        true_p = 3;
    }
    else {
        l_radio4.innerHTML = c;
        console.log(l_radio4.innerHTML);
        true_p = 4;
    }
    task.innerHTML = a + ' * ' + b;
}

const next = document.getElementById("next");
next.addEventListener('click', function(){
    if(true_c > 0)
    {
        true_cheker++;
    }
    if(sproba > 1 && true_c > 0)
    {
        true_cheker--;
        alert("Не зараховано, бо занадто багато спроб")
    }
    true_c = 0;
    sproba = 0;
    for(let i = 0; i < radio.length; i++){
        radio[i].checked = false;
    }
    TaskWork();
    total_cheker++;
    result.innerHTML = 'Тут буде результат';
    result.style.color = 'black';
    Total();
})

const radio = document.getElementsByName('check');

for(let i = 0; i < radio.length; i++){
    radio[i].onchange = checkRadio;
}
function checkRadio(){
    console.log(this.value);
    true_c = 0;
    if(this.value == true_p){
        result.innerHTML = 'Правильно';
        result.style.color = 'green';
        true_c++;
        sproba++;
        Total();
    }
    else {
        result.innerHTML = 'Помилка. Правильна відповідь:' + c;
        result.style.color = 'red';
        sproba++;
        Total();
    }
}


