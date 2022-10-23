const title = document.createElement('h1');
title.textContent = 'Приклад 3';
document.body.appendChild(title);

const input = document.createElement('input');
input.type = 'text';
input.onblur = function help(){this.value=removeRedundantSpaces(this.value)};
document.body.appendChild(input);

function removeRedundantSpaces(text_for_Editing)
{
    var extraSpaces = new RegExp("[ ]{2,}","g");
    return text_for_Editing.replace(extraSpaces," ");
}