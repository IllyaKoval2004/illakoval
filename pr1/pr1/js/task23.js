document.write("<h1>Завдання 23</h1>");

function getAverageAge(arr){
    let avg;
    let sum = 0;
    let num = 0;
    for (var i = 0; i < arr.length; i++) {
		if(arr[i].name != ""){
            sum += arr[i].age;
            num += 1;
        }
	}
    return avg = sum / num;
}

let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 29};
let arr = [john, pete, mary];

document.write("<p>Дано масив: " + "<br>" + arr[0].name + " " + arr[0].age + "<br>" + arr[1].name + " " + arr[1].age + "<br>" + arr[2].name + " " + arr[2].age + "</p>");
document.write("<p>Результат: " + getAverageAge(arr) + "</p>");