document.write("<h1>Завдання 19</h1>");

function camelize(str) {
    var arr = str.split('-');

    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join('');
}

var str1 = "background-color"; 
var str2 = "list-style-image"; 
var str3 = "-webkit-transition";

document.write("<p>1) Рядок: " + str1 + "</p>");
document.write("<p>1) Результат: " + camelize(str1) + "</p>");
document.write("<p>2) Рядок: " + str2 + "</p>");
document.write("<p>2) Результат: " + camelize(str2) + "</p>");
document.write("<p>3) Рядок: " + str3 + "</p>");
document.write("<p>3) Результат: " + camelize(str3) + "</p>");
