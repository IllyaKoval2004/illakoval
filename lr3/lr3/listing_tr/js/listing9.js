document.write("<h1>Приклад 9 (з теоретичної частини)</h1>");

let date = new Date();
document.write("<p>Кількість мілісекунд: " + (+date) + "</p>");


let start1 = new Date();
for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}
let end1 = new Date();
document.write("<p>Цикл1 зайняв: " + (end1 - start1) + "мс</p>");


let start2 = Date.now();
for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}
let end2 = Date.now();
document.write("<p>Цикл2 зайняв: " + (end2 - start2) + "мс</p>");