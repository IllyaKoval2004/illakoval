let h2 = document.querySelector('h2'); 
h2.addEventListener('click', () => {
	Storage_remove();
});
h2.addEventListener('dblclick', () => {
	Storage();
});

var num = 6;

function funonload() {
	if(localStorage.getItem("num") != null) {
		num = parseInt(localStorage.getItem("num"));
	}

	for (let i = 0; i < num; i++) {
		let li;
		if(li = document.getElementById('li' + i)) {
			console.log("successful" + i);
		}
		else {
			let l_text = localStorage.getItem("" + i);
			let date = localStorage.getItem("time" + i);
			Available_Element(date, l_text, i);
			console.log("error and created" + i);
		}
	}

	var check_task = document.querySelectorAll('#check_task');
	for (let i = 0; i < num; i++) {
		let display = document.getElementById('li' + i);
		if(localStorage.getItem("display" + i) != "") {
			display.className = ("" + localStorage.getItem("display" + i));
			if(localStorage.getItem("display" + i) == "checked" || localStorage.getItem("display" + i) == "null checked") {
				check_task[i].classList.add("invis");
			}
		}
	}

	let element = document.querySelectorAll('li');
	for (let i = 0; i < element.length; i++) {
		console.log("Label: " + localStorage.getItem("" + i));
		console.log("Time: " + localStorage.getItem("time" + i));
		console.log("Display: " + localStorage.getItem("display" + i));
		console.log("");
	}
	console.log("Num: " + localStorage.getItem("num"));
}

window.onload = funonload;

function Storage() {
	let element = document.querySelectorAll('li');
	for (let i = 0; i < element.length; i++) {
		localStorage.setItem("" + i, "" + document.getElementById('label' + i).innerHTML);
		localStorage.setItem("time" + i, "" + document.getElementById('time' + i).innerHTML);
		localStorage.setItem("display" + i, "" + document.getElementById('li' + i).classList);
		localStorage.setItem("num", "" + (i+1));

		console.log("Label: " + localStorage.getItem("" + i));
		console.log("Time: " + localStorage.getItem("time" + i));
		console.log("Display: " + localStorage.getItem("display" + i));
		console.log("");
	}
	console.log("Num: " + localStorage.getItem("num"));
}

function Storage_remove() {
	var element = document.querySelectorAll('li');
	for (let i = 0; i < element.length; i++) {
		localStorage.removeItem("" + i);
		localStorage.removeItem("time" + i);
		localStorage.removeItem("display" + i);
	}
	localStorage.removeItem("num");
}

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
	close[i].onclick = function() {
		var div = this.parentElement;
		div.classList.add("none");	
		Storage();
	}
}

var Mas_li = [-1];
var n = 0;

function Checkbox_check() {
	var button = document.querySelectorAll('#check_task');
	for (let i = 0; i < button.length; i++) {
		button[i].addEventListener('click', () => {
			button[i].classList.add("invis");
			document.getElementById("li" + i).classList.add("checked");
			Mas_li[n] = i;
			n++;
			Storage();
		});
	}
}

function formatDate(date) {
    let full_date = date;
    full_date = [
      '0' + full_date.getDate(),
      '0' + (full_date.getMonth() + 1),
      '' + full_date.getFullYear(),
      '0' + full_date.getHours(),
      '0' + full_date.getMinutes()
    ].map(component => component.slice(-2));
    return full_date.slice(0, 3).join('.') + ' ' + full_date.slice(3).join(':');
}

let help = 0;
function Checkbox_dblclick() {
	let button = document.querySelectorAll('label');
	for (let i = 0; i < button.length; i++) {
		button[i].addEventListener('dblclick', () => {
			help++;
			if(help === 1){
				let edit = document.createElement("input");
				edit.type = "text";
				edit.id = "li" + i + "-input";
				edit.classList.add("edit");
				let label = document.getElementById("label" + i);
				edit.placeholder = label.innerHTML;
				let li = document.getElementById("li" + i);
				li.appendChild(edit);
				label.classList.add("none");
				edit.addEventListener('keypress', (e) => {
					if (e.which == 13) {
						if(edit.value != "") {
							label.innerHTML = edit.value;
							edit.classList.add("none");
							label.classList.remove("none");
							help = 0;
						}
						else {
							alert("Please write something")
}}});}});}}

Checkbox_dblclick();
Checkbox_check();

function Available_Element(date, l_text, num) {
	let p = document.createElement("p");
	p.id = "time" + num;
	p.className = "time";
	p.innerHTML = date;
	let li = document.createElement("li");
	li.id = "li" + num;
	let checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.id = "check_task";
	let label_new = document.createElement("label");
	label_new.innerHTML = l_text;
	label_new.id = "label" + num;

	document.getElementById("myUL").appendChild(li);
	li.appendChild(checkbox);
	li.appendChild(label_new );

	document.getElementById("myInput").value = "";

	let span = document.createElement("SPAN");
	let txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(p);
	li.appendChild(span);
	for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			let div = this.parentElement;
			div.classList.add("none");
			Storage();
		}
	}
	Checkbox_check();
	Checkbox_dblclick();
}

function newElement() {
	let today = new Date();
	let p = document.createElement("p");
	p.id = "time" + num;
	p.className = "time";
	p.innerHTML = formatDate(today);
	let li = document.createElement("li");
	li.id = "li" + num;
	let checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.id = "check_task";
	let inputValue = document.getElementById("myInput").value;
	let label_new = document.createElement("label");
	label_new.innerHTML = inputValue;
	label_new.id = "label" + num;
	if (inputValue === '') {
		alert("You must write something!");
	} else {
		num++;
		document.getElementById("myUL").appendChild(li);
		li.appendChild(checkbox);
		li.appendChild(label_new );

		document.getElementById("myInput").value = "";

		let span = document.createElement("SPAN");
		let txt = document.createTextNode("\u00D7");
		span.className = "close";
		span.appendChild(txt);
		li.appendChild(p);
		li.appendChild(span);
		for (i = 0; i < close.length; i++) {
			close[i].onclick = function() {
				let div = this.parentElement;
				div.classList.add("none");
				Storage();
			}
		}
	}
	Storage();
	Checkbox_check();
	Checkbox_dblclick();
}

let toggle = 3;
function sortElements() {
	let output_text = document.getElementById("Sort");
	if (toggle % 3 == 0) {
		output_text.value = "Finished tasks first";
		toggle++;
		for (let i = 0; i < Mas_li.length; i++) {
			console.log("Cукааа: " + Mas_li[i]);
			/*let li = document.getElementById("li" + Mas_li[i]);
			let li_new = document.createElement("li");
			li_new.id = li.id;
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.id = "check_task";
			var label_new = document.createElement("label");
			label_new.id = "label" + Mas_li[i];
			var label = document.getElementById("label" + Mas_li[i]);
			label_new.innerHTML = label.innerHTML;
			li_new.appendChild(checkbox);
			li_new.appendChild(label_new);
			checkbox.classList.add("invis");
			var span = document.createElement("SPAN");
			var txt = document.createTextNode("\u00D7");
			span.className = "close";
			span.appendChild(txt);
			li_new.appendChild(span);
			li_new.classList.add("checked");
			for (i = 0; i < close.length; i++) {
				close[i].onclick = function() {
					var div = this.parentElement;
					div.style.display = "none";
				}
			}
			document.getElementById("myUL").appendChild(li_new);
			li.classList.add("none");*/
		}
	}
	else if (toggle % 3 == 1) {
		output_text.value = "Unfinished tasks first"; 
		toggle++;
	}
	else {
		output_text.value = "Without sorting"; 
		toggle++;
	}
}
