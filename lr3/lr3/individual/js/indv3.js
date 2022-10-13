document.write("<h1>Індивідуальне завдання 3</h1>");

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

document.write("<p>Дата: лютий 2020 року</p>");
document.write("<p>Останній день місяця: " + getLastDayOfMonth(2020, 1)+ "</p>");
document.write("<br>");
document.write("<p>Дата: лютий 2022 року</p>");
document.write("<p>Останній день місяця: " + getLastDayOfMonth(2022, 1)+ "</p>");
document.write("<br>");
document.write("<p>Дата: вересень 2021 року</p>");
document.write("<p>Останній день місяця: " + getLastDayOfMonth(2021, 8)+ "</p>");