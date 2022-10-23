/*Приклад 4*/

function clearTextFromHTMLTags(textForEditing)
{
    var tagTemplate = new RegExp("</?[a-zA-Z]{1,}/?>","g");
    return textForEditing.replace(tagTemplate,"");
}