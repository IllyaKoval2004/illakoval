document.write("<h1>Приклад 1 (з практичної частини)</h1>");

let today = new Date(),
    newYearDate = new Date(today.getFullYear() + 1, 0, 1);

document.write("<p>today: " + today.toLocaleString() + "</p>");
document.write("<p>newYearDate: " + newYearDate.toLocaleString() + "</p>");
document.write("<p>newYearDate - today: " + (newYearDate - today) + "</p>");
document.write("<p>newYearDate.getTime() - today.getTime(): " + (newYearDate.getTime() - today.getTime()) + "</p>");