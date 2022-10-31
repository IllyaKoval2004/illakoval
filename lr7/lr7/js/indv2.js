const title = document.createElement('h1');
title.textContent = 'Індивідуальне завдання 2';
document.body.insertBefore(title, body.children[0]);

const check = document.getElementById("check");
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
var help = 1;

function TaskWork(){
    a = getRandomInt(1, 10);
    b = getRandomInt(1, 10);
    c = parseInt(a * b);
    task.innerHTML = a + ' * ' + b;
}

const next = document.getElementById("next");
next.addEventListener('click', function(){
    TaskWork();
    total_cheker++;
    result.innerHTML = 'Тут буде результат';
    result.style.color = 'black';
    answer.value = "";
    Total();
    help = 1;
})

check.addEventListener('click', function(){
    if(help === 0){
        result.style.color = 'orange';
        result.innerHTML = 'Ви вже відповіли на це завдання, насніть кнопку \"Наступне завдання\"';
    }
    if(answer.value == c && help === 1){
        result.innerHTML = 'Правильно';
        result.style.color = 'green';
        true_cheker++;
        Total();
        help = 0;
    }
    else if (answer.value !== c && help === 1){
        result.innerHTML = 'Помилка. Правильна відповідь:' + c;
        result.style.color = 'red';
        Total();
        help = 0;
    }
})