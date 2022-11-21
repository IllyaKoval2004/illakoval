const header = document.querySelector('header');
const section = document.querySelector('section');

const requestURL = 'https://semegenkep.github.io/json/example.json';

const request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
	const superHeroes = request.response;
	console.log(superHeroes);
	populateHeader(superHeroes);
	showHeroes(superHeroes);
}

function populateHeader(supHero) {
	let h1 = document.createElement("h1");
	h1.innerHTML = supHero.squadName;
	header.appendChild(h1);

	let p = document.createElement("p");
	p.innerHTML = "Hometown: " + supHero.homeTown + " // Formed: " + supHero.formed;
	header.appendChild(p);
}


function showHeroes(supHero) {
	for(let i = 0; i < 3; i++) {
		let article = document.createElement("article");
		let h2 = document.createElement("h2");
		let p1 = document.createElement("p");
		let p2 = document.createElement("p");
		let p3 = document.createElement("p");
		let ul = document.createElement("ul");
	
		section.appendChild(article);
	
		h2.innerHTML = supHero.members[i].name;
		p1.innerHTML = "Secret identity: " + supHero.members[i].secretIdentity;
		p2.innerHTML = "Age: " + supHero.members[i].age;
		p3.innerHTML = "Superpowers: ";

		article.appendChild(h2);
		article.appendChild(p1);
		article.appendChild(p2);
		article.appendChild(p3);
		article.appendChild(ul);

		for(let j = 0; j < supHero.members[i].powers.length; j++) {
			let li = document.createElement("li");
			li.innerHTML = supHero.members[i].powers[j];
			ul.appendChild(li);
		}
	}
}