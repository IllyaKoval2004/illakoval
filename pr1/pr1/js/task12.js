document.write("<h1>Завдання 12</h1>");

var string = 'aaa@bbb@ccc';

document.write("<p>Дано рядок: " + string + "</p>");
document.write("<p>Новий рядок: " + string.replace(/@/g, '!') + "</p>");