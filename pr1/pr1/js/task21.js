document.write("<h1>Завдання 21</h1>");

function copySorted(arr) {
    var fun_arr = [];
    for (var key in arr) {
        fun_arr [key] = arr [key];    
    }
    fun_arr.sort();
    return fun_arr;
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

document.write("<p>Дано масив: " + arr + "</p>");
document.write("<p>Результат: " + sorted + "</p>");