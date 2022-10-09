document.write("<h1>Завдання 17</h1>");

var arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
var total = 0;
for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arr[i].length; j++) {
  		for (var k = 0; k < arr[i][j].length; k++) {
			total += arr[i][j][k];
   		}
	}
}

document.write("<p>Дано масив: " + arr + "</p>");
document.write("<p>Сума елементів: " + total + "</p>");