const title = document.createElement('h1');
title.textContent = 'Індивідуальне завдання 5';
document.body.insertBefore(title, body.children[0]);

const px = document.querySelectorAll("#px");
const one = [0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1];
const two = [1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1];
const tree = [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1];
const four = [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1];
const five = [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1];
const six = [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1];
const seven = [1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1];
const eight = [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1];
const nine = [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1];

function AddNumber(point, choise) {
    let help_point = 0;
    if(point == 1)
        help_point = 15;
    if(point == 2)
        help_point = 30;
    if(point == 3)
        help_point = 45;
    
    let g = 0;
    for(let i = help_point; i < help_point+15; i++){
        if(choise[g] == 1)
            px[i].classList.add("fill");
        g++;
    }
}

function Choise(num) {
    if(num == 1)
        return one;
    else if(num == 2)
        return two;
    else if(num == 3)
        return tree;
    else if(num == 4)
        return four;
    else if(num == 5)
        return five;
    else if(num == 6)
        return six;
    else if(num == 7)
        return seven;
    else if(num == 8)
        return eight;
    else
        return nine;
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var total;
var number;

total = 1;
number = 3;

total = getRandomInt(1, 4);
if(total == 1){
    number = getRandomInt(1, 9);
    AddNumber(0, Choise(number));
    console.log(number);
}
else {
    for(let i = 0; i < total; i++){
        let help = getRandomInt(1, 9);
        console.log(help);
        AddNumber(i, Choise(help));
        if(i == 0) {
            number = help;
        }
        else {
            number = number*10 + help;
        }
    }
}

const input = document.createElement('input');
let interval = 0;
document.body.append(input);

const result = document.createElement('p');
document.body.append(result);

input.addEventListener('keypress', () => {
    clearTimeout(interval);
    interval = setTimeout(() => {
        if (input.value == number)
        {
            result.textContent = 'Правильно';
            result.style.color = 'green';
        }
        else
        {
            result.textContent = "Неправильно";
            result.style.color = 'red';
        }
    }, 500);
});