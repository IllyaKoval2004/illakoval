document.write("<h1>Приклад 12 (з теоретичної частини)</h1>");

let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
let date = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'))

document.write("<p>Дата з рядка в мілісекундах: " + ms + "</p>");
document.write("<p>Дата з рядка: " + date + "</p>");