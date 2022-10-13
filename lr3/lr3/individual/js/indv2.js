document.write("<h1>Індивідуальне завдання 2</h1>");

let date = new Date(2022, 9, 10);

function getWeekDay(date) {
    let days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}

document.write("<p>Дата: " + date + "</p>");
document.write("<p>Тиждень: " + getWeekDay(date) + "</p>");
document.write("<br>");
date = new Date(2022, 9, 13);
document.write("<p>Дата: " + date + "</p>");
document.write("<p>Тиждень: " + getWeekDay(date) + "</p>");
document.write("<br>");
date = new Date(2022, 9, 16);
document.write("<p>Дата: " + date + "</p>");
document.write("<p>Тиждень: " + getWeekDay(date) + "</p>");