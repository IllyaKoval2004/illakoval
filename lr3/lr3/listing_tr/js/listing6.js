document.write("<h1>Приклад 6 (з теоретичної частини)</h1>");

let date = new Date();

document.write("<p>Години: " + date.getHours() + "</p>");
document.write("<p>Різниця між utc та місцевим часовим поясом, у хвилинах: " + date.getTimezoneOffset()  + "</p>");