document.write("<h1>Завдання 9</h1>");

var arr = [1, 2, 3, 4, 5];

document.write("<p>Масив: " + arr + "</p>");

arr.splice(1,0, "a", "b",);
arr.splice(6,0, "c",);
arr.splice(8,0, "e",);

document.write("<p>Новий масив: " + arr + "</p>");