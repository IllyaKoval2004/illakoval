document.write("<h1>Завдання 16</h1>");

function arrayFill(value, length) { 
	var array = [];
	for (var i = 0; i < length; i++) {
		array.push(value);
	}
	return array;
}

document.write("<p>Cтворено масив: " + arrayFill("dance", 16) + "</p>");
document.write("<p>Cтворено масив: " + arrayFill("ahahhaha", 10) + "</p>");