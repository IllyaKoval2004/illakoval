document.write("<h1>Завдання 20</h1>");

function filterRange(arr, a, b) {
    var fun_arr = [];
    for (var key in arr) {
        fun_arr [key] = arr [key];    
    }
    for (var i = 0; i < fun_arr.length; i++) {
        var val = fun_arr[i];
        if (val < a || val > b) {
            fun_arr.splice(i--, 1);
        }
    }
    return fun_arr;
}

var arr = [1, 8, 4, 10, 5, 3, 9, 0];

document.write("<p>Дано масив: " + arr + "</p>");
document.write("<p>Результат: " + filterRange(arr, 2, 8) + "</p>");
document.write("<p>Перевірка змін: " + arr + "</p>");