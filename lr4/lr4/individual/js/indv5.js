/*'Індивідуальне завдання №5';*/

function CommentDelete(textForEditing)
{
    var tagTemplate = new RegExp("<!--[^\n]*-->","g");
    return textForEditing.replace(tagTemplate,"");
}