document.write("<h1>Приклад 11 (з теоретичної частини)</h1>");

function diffSubtract(date1, date2) {
    return date2 - date1;
}

function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}

function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 1000000; i++) 
        f(date1, date2);
    return Date.now()-start;
}

let time1 = 0;
let time2 = 0;

bench(diffSubtract);
bench(diffGetTime);

for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
}

document.write("<p>Загальний час diffSubtract: " + time1 + "мс</p>");
document.write("<p>Загальний час diffGetTime: " + time2 + "мс</p>");