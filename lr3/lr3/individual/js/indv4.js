document.write("<h1>Індивідуальне завдання 4</h1>");

function getSecondsToTomorrow(now) {
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    let difference = tomorrow - now;
    return Math.round(difference / 1000);
}

let now = new Date();
document.write("<p>Дата: " + now + "</p>");
document.write("<p>Секунд до завтра: " + getSecondsToTomorrow(now) + "</p>");
