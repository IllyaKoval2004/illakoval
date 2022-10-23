/*'Індивідуальне завдання №6';*/

function CommentDelete(textForEditing)
{
    var tagTemplate = new RegExp("</?(p)?(font)?(br)?(hr)?/?>","g");
    return textForEditing.replace(tagTemplate,"");
}