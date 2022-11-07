const title = document.createElement('h1');
title.textContent = 'Завдання 2';
document.body.insertBefore(title, body.children[0]);

var tab;
var tabContent;

window.onload = function() {
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick = function (event) {
    var target = event.target;
    if (target.className == 'tab') {
        for (var i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
}}}}

function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

var rtl;
var rtr;
var rbr;
var rbl;

var ttl = document.getElementById('ttl');
var ttr = document.getElementById('ttr');
var tbr = document.getElementById('tbr');
var tbl = document.getElementById('tbl');
var output = document.getElementById('output');

var block = document.getElementById('block');

function generate () {
    rtl = document.getElementById('rtl').value;
    rtr = document.getElementById('rtr').value;
    rbr = document.getElementById('rbr').value;
    rbl = document.getElementById('rbl').value;
    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;
    output.value = `border-radius: ${rtl}px ${rtr}px ${rbr}px ${rbl}px;`
    block.style.borderRadius = rtl + "px " + rtr + "px " + rbr + "px " + rbl + "px";
}