/* ---------- Це для стрілочок -------------- */
const content = document.querySelectorAll('.content');
const arrow_r = document.querySelector('#arrow-right');
const arrow_l = document.querySelector('#arrow-left');
for (let i = 0; i < content.length; i++) {
    if (i > 3) {
        content[i].style.display = "none";
    }
}

let help = 4;
arrow_r.addEventListener('click', () => {
    if(help < 8) {
        content[help].style.display = "inline";
        content[help-4].style.display = "none";
        help++;
    }
});

arrow_l.addEventListener('click', () => {
    if(help > 4) {
        content[help-1].style.display = "none";
        content[help-5].style.display = "inline";
        help--;
    }
});
/* ---------- Кінець для стрілочок -------------- */

/* ---------- Наповнення корзини -------------------- */
const button = document.querySelectorAll('#buy');
const span = document.querySelector('#basket-count');
const popup2 = document.querySelector('#popup2');
const close_popup2 = document.querySelector('.popup_close-2');
const last_btn = document.querySelector('#last');
const inp_count = document.querySelector('.input-count');
let loc = "?aloha=0";
let g = 0;

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function(){AddBasket(i)});
}

function AddBasket(i) {
    popup2.style.display = "block";
    g = i;
    close_popup2.addEventListener('click', () => {
        popup2.style.display = "none";
    });
}

last_btn.addEventListener('click', () => {
    popup2.style.display = "none";
    let n = parseInt(span.innerHTML);   
    loc += "&num" + g + "=" + g + "&count" + g + "=" + inp_count.value;
    inp_count.value = 1; 
    n++;
    button[g].classList.add("in-basket");
    button[g].innerHTML = "Додано до<br>корзини";
    button[g].addEventListener('click', () => {
        popup2.style.display = "none";
    });
    span.innerHTML = "" + n;
});
/* ---------- Кінець наповнення корзини -------------------- */

/* ---------- Натиснення на корзину -------------------- */
const basket = document.querySelector('#basket');
const popup = document.querySelector('#popup');
const close_popup= document.querySelector('.popup_close');
basket.addEventListener('click', Basket, false); 
span.addEventListener('click', Basket, false);  
function Basket() {
    if(span.innerHTML == "0") {
        popup.style.display = "block";
        close_popup.addEventListener('click', () => {
            popup.style.display = "none";
        });
    }
    else {
        document.location='basket.html' + loc;
    }
}
/* ---------- Кінець Натиснення на корзину -------------------- */
