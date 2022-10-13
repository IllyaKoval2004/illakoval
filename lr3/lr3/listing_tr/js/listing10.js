document.write("<h1>Приклад 10 (з теоретичної частини)</h1>");

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

document.write("<p>Час diffSubtract: " + bench(diffSubtract) + "мс</p>");
document.write("<p>Час diffGetTime: " + bench(diffGetTime) + "мс</p>");