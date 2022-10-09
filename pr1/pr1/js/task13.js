document.write("<h1>Завдання 13</h1>");

var date = '2025-12-31';

document.write("<p>Дано рядок: " + date + "</p>");

date = date.split('-');
date.reverse();
date = date.join([separator = '/']);

document.write("<p>Новий рядок: " + date + "</p>");