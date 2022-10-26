const title = document.createElement('h1');
title.textContent = 'Індивідуальне завдання (варіант 10)';
document.body.insertBefore(title, body.children[0]);

const tbl = document.getElementById("table");
const tblBody = document.getElementById("tbody");

let tr1 = document.getElementById("tr1");
let tr2 = document.getElementById("tr2");
let tr3 = document.getElementById("tr3");

let td1 = document.getElementById("td1");
let td2 = document.getElementById("td2");
let td3 = document.getElementById("td3");
let td4 = document.getElementById("td4");
let td5 = document.getElementById("td5");
let td6 = document.getElementById("td6");
let td7 = document.getElementById("td7");
let td8 = document.getElementById("td8");
let td9 = document.getElementById("td9");

let button = document.getElementById("button");

let help = 0;

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");

let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let h3 = document.getElementById("h3");

button.addEventListener('click', () => {
    if (help === 0)
    {
        td1.rowSpan=2;
        td2.rowSpan=2;
        td3.rowSpan=2;
        td4.classList = "td-inv";
        td5.classList = "td-inv";
        td6.classList = "td-inv";
        tbl.rows[2].cells[0].textContent = p1.innerHTML;
        tbl.rows[2].cells[1].textContent = p2.innerHTML;
        tbl.rows[2].cells[2].textContent = p3.innerHTML;
        td1.classList = "td-big";
        td2.classList = "td-big";
        td3.classList = "td-big";
        td7.classList = "td-big";
        td8.classList = "td-big";
        td9.classList = "td-big";
        tbl.rows[0].cells[0].textContent = h1.innerHTML;
        tbl.rows[0].cells[1].textContent = h2.innerHTML;
        tbl.rows[0].cells[2].textContent = h3.innerHTML;
        help++;
    }
    else 
    {
        td1.rowSpan=1;
        td2.rowSpan=1;
        td3.rowSpan=1;
        td1.classList = "";
        td2.classList = "";
        td3.classList = "";
        td4.classList = "";
        td5.classList = "";
        td6.classList = "";
        td7.classList = "";
        td8.classList = "";
        td9.classList = "";
        tbl.rows[0].cells[0].textContent = "1";
        tbl.rows[0].cells[1].textContent = "2";
        tbl.rows[0].cells[2].textContent = "3";
        tbl.rows[1].cells[0].textContent = "4";
        tbl.rows[1].cells[1].textContent = "5";
        tbl.rows[1].cells[2].textContent = "6";
        tbl.rows[2].cells[0].textContent = "7";
        tbl.rows[2].cells[1].textContent = "8";
        tbl.rows[2].cells[2].textContent = "9";
        help--;
    }
});





