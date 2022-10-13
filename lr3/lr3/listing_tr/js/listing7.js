document.write("<h1>Приклад 7 (з теоретичної частини)</h1>");

let today = new Date();
today.setHours(0);

document.write("<p>Cьогодні: " + today + "</p>");

today.setHours(0, 0, 0, 0);

document.write("<p>Cьогодні: " + today + "</p>");