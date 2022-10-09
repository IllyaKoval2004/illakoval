document.write("<h1>Завдання 15</h1>");

var arr = [];
var x = 'x';
for (var i = 0; i < 15; i++) {
	arr.push(x);
	x += 'x';
}

document.write("<p>Cтворено масив: " + arr + "</p>");