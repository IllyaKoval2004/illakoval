const title = document.createElement('h1');
title.textContent = 'Індивідуальне завдання №7';
document.body.appendChild(title);

const p = document.createElement('p');
p.textContent = 'Видалення пробілів спочатку і в кінці слова:';
document.body.appendChild(p);

const input = document.createElement('input');
input.type = 'text';
input.onblur = function help(){this.value=removeRedundantSpaces(this.value)};
document.body.appendChild(input);

function removeRedundantSpaces(text_for_Editing)
{
    let extraSpaces = new RegExp("[ ]{2,}", "g");
    let help = text_for_Editing.replace(extraSpaces," ");
    extraSpaces = new RegExp("[ ]");
    return help.replace(extraSpaces,"");
}