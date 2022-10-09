document.write("<h1>Завдання 25</h1>");

function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum; 
}
  
let salaries = {
    "Іван": 100,
    "Петро": 300,
    "Марія": 250
};

document.write("<p>Дано масив: </p>");
document.write("<p>Іван:" + salaries['Іван']+ "</p>");
document.write("<p>Петро:" + salaries['Петро']+ "</p>");
document.write("<p>Марія:" + salaries['Марія']+ "</p>");
document.write("<p>Результат суми: " + sumSalaries(salaries) + "</p>");