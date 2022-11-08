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

function generate_input () {
    output.value = `border-radius: ${ttl.value}px ${ttr.value}px ${tbr.value}px ${tbl.value}px;`
    block.style.borderRadius = ttl.value + "px " + ttr.value + "px " + tbr.value + "px " + tbl.value + "px";
}

//2
var position_list;
var position_text = document.getElementById('position_text');
var list_tab2 = document.getElementById('list-tab2');

function workList2(val) {
    position_text.value = val;
    list_tab2.style.listStylePosition = val;
    output2.value = "list-style-position: " + val + ";";
}

function generate2 () {
    position_list = document.getElementById('position_list').value;
    switch(position_list) {
        case '0':
            workList2("inside");
            break;
        case '1':
            workList2("outside");
            break;
        default:
            break;
    }
}
function generate_input2 () {
    //style_text = document.getElementById('style_text');
    //workList(style_text.value);
    alert("dadad");
}

var style_list;
var style_text = document.getElementById('style_text');
var list_tab3 = document.getElementById('list-tab3');

function workList(val) {
    style_text.value = val;
    list_tab3.style.listStyleType = val;
    output3.value = "list-style-type: " + val + ";";
}

function generate3 () {
    style_list = document.getElementById('style_list').value;
    switch(style_list) {
        case '0':
            workList("none");
            break;
        case '1': 
            workList("armenian");
            break;
        case '2':
            workList("circle"); 
            break;
        case '3':
            workList("cjk-ideographic");
            break;
        case '4':
            workList("decimal");
            break;
        case '5':
            workList("decimal-leading-zero");
            break;
        case '6':
            workList("disc");
            break;
        case '7':
            workList("hebrew");
            break;
        case '8': 
            workList("hiragana");
            break;
        case '9':
            workList("hiragana-iroha"); 
            break;
        case '10':
            workList("katakana");
            break;
        case '11':
            workList("katakana-iroha");
            break;
        case '12':
            workList("lower-alpha");
            break;
        case '13':
            workList("lower-greek");
            break;
        case '14':
            workList("lower-latin");
            break;
        case '15': 
            workList("lower-roman");
            break;
        case '16':
            workList("square"); 
            break;
        case '17':
            workList("upper-alpha");
            break;
        case '18':
            workList("upper-greek");
            break;
        case '19':
            workList("upper-latin");
            break;
        case '20':
            workList("upper-roman");
            break;
        default:
            break;
    }
}

function generate_input3 () {
    style_text = document.getElementById('style_text');
    workList(style_text.value);
}