document.write("<h1>Завдання 22</h1>");

function sortByAge(arr){
    arr.sort((a, b) => a.age - b.age);
}

let ivan = {name: "Іван", age: 25};
let petro = {name: "Петро", age: 30};
let mariya = {name: "Марія", age: 28};
let arr = [ivan, petro, mariya];

document.write("<p>Дано масив: " + "<br>" + arr[0].name + " " + arr[0].age + "<br>" + arr[1].name + " " + arr[1].age + "<br>" + arr[2].name + " " + arr[2].age + "</p>");

sortByAge(arr);

document.write("<p>Результат: " + "<br>" + arr[0].name + " " + arr[0].age + "<br>" + arr[1].name + " " + arr[1].age + "<br>" + arr[2].name + " " + arr[2].age + "</p>");