let close = document.querySelectorAll('.close-click');
let number = document.querySelectorAll('.num');
let plus = document.querySelectorAll('.plus');
let minus = document.querySelectorAll('.minus');
let total = document.querySelectorAll('.total');
let price = document.querySelectorAll('.price');
let counter = document.querySelectorAll('.counter');
let totaliti = document.querySelector('#totaliti');

function Amendments() {
    let help = 0;
    let ii = 0
    for (let i = 0; i < counter.length; i++) {
        let div = counter[i];
        let li = div.parentElement;
        if(li.style.display != "none") {
            counter[i].innerHTML = "" + (ii+1);
            ii++;
        }
        total[i].innerHTML = "" + (parseInt(number[i].innerHTML) * parseInt(price[i].innerHTML)) + " грн.";
        help += (parseInt(number[i].innerHTML) * parseInt(price[i].innerHTML));
    }
    totaliti.value = help + " грн.";
}

function Functional() {
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', (el) => {
            if(confirm("Ви дійсно хочете видалити?")) {
                let span = el.target;
                let div = span.parentElement;
                let li = div.parentElement;
                number[i].innerHTML = "0";
                li.style.display = "none";
                Amendments();	
            }
        });
        plus[i].addEventListener('click', () => {
            let n = parseInt(number[i].innerHTML);
            n++; 
            number[i].innerHTML = "" + n;
            total[i].innerHTML = "" + (parseInt(number[i].innerHTML) * parseInt(price[i].innerHTML)) + " грн.";
            Amendments();
        });
        minus[i].addEventListener('click', () => {
            let n = parseInt(number[i].innerHTML);
            n--; 
            if(n < 0)
                n = 0;
            number[i].innerHTML = "" + n;
            total[i].innerHTML = "" + (parseInt(number[i].innerHTML) * parseInt(price[i].innerHTML)) + " грн.";
            Amendments();
        });
    }
}

const Database = {
    name: {
        0: "Aspire 5",
        1: "TUF Gaming F15",
        2: "IdeaPad 3 15ALC6",
        3: "Vostro 5410",
        4: "245 G8",
        5: "Galaxy Book2 Pro 360",
        6: "Katana GF66"
    },
    photo: {
        0: "two",
        1: "tree",
        2: "four",
        3: "five",
        4: "six",
        5: "seven",
        6: "eight"
    },
    price:{
        0: "26999 грн.",
        1: "36000 грн.",
        2: "27999 грн.",
        3: "41109 грн.",
        4: "27999 грн.",
        5: "84999 грн.",
        6: "54999 грн."
    },
}

let params = (new URL(document.location)).searchParams;

for (let i = 0; i < 8; i++) {
    console.log(i + " Номер - " + params.get("num" + i));
    console.log(i + " Кількість - " + params.get("count" + i));
    console.log("");
}

for (let i = 0; i < 8; i++) {
    if(params.get("num" + i) != null && params.get("count" + i) != null){
        Create(i);
    }
}

function Create(i) {
    let li = document.createElement("li");
    li.className = "content";
    let counter_div = document.createElement("div");
    counter_div.className = "counter";
    counter_div.innerHTML = "0";
    let image_div = document.createElement("div");
    image_div.className = "image photo " + Database.photo[i];
    let name_div = document.createElement("div");
    name_div.className = "name";
    name_div.innerHTML = Database.name[i];
    let price_div = document.createElement("div");
    price_div.className = "price";
    price_div.innerHTML = Database.price[i];
    let number_div = document.createElement("div");
    number_div.className = "number";
    number_div.innerHTML = '<button class="num-btn minus">&ndash;</button><span class="num">' + params.get("count" + i) + '</span><button class="num-btn plus">+</button></div>';
    let total_div = document.createElement("div");
    total_div.className = "total";
    let close_div = document.createElement("div");
    close_div.className = "close";
    close_div.innerHTML = '<span class="close-click">&times;</span>';
    li.appendChild(counter_div);
    li.appendChild(image_div);
    li.appendChild(name_div );
    li.appendChild(price_div);
    li.appendChild(number_div);
    li.appendChild(total_div);
    li.appendChild(close_div);

    document.getElementById("ul").appendChild(li);

    close = document.querySelectorAll('.close-click');
    number = document.querySelectorAll('.num');
    plus = document.querySelectorAll('.plus');
    minus = document.querySelectorAll('.minus');
    total = document.querySelectorAll('.total');
    price = document.querySelectorAll('.price');
    counter = document.querySelectorAll('.counter');
    totaliti = document.querySelector('#totaliti');
}

Amendments();
Functional();