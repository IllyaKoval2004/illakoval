document.write("<h1>Індивідуальне завдання 5</h1>");

function formatDate(date) {
    let difference = new Date() - date;

    if (difference < 1000) 
        return 'прямо зараз';

    let sec = Math.floor(difference / 1000); 

    if (sec < 60)
        return sec + ' сек. назад';

    let min = Math.floor(difference / 60000); 

    if (min < 60) 
        return min + ' хв. назад';

    let full_date = date;

    full_date = [
      '0' + full_date.getDate(),
      '0' + (full_date.getMonth() + 1),
      '' + full_date.getFullYear(),
      '0' + full_date.getHours(),
      '0' + full_date.getMinutes()
    ].map(component => component.slice(-2));

    return full_date.slice(0, 3).join('.') + ' ' + full_date.slice(3).join(':');
}

let date = new Date();
document.write("<p>Дата: " + formatDate(date) + "</p>");
date = new Date(new Date - 25 * 1000)
document.write("<p>Дата: " + formatDate(date) + "</p>");
date = new Date(new Date - 25 * 60 * 1000)
document.write("<p>Дата: " + formatDate(date) + "</p>");
date = new Date(2019, 5, 7, 8, 45)
document.write("<p>Дата: " + formatDate(date) + "</p>");