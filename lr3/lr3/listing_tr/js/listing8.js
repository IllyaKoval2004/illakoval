document.write("<h1>Приклад 8 (з теоретичної частини)</h1>");

let date = new Date(2013, 0, 32);
document.write("<p>Автокорекція дати: " + date + "</p>");

let date1= new Date(2016, 1, 28);
date1.setDate(date1.getDate() + 2);
document.write("<p>Збільшено на 2 дні: " + date1 + "</p>");

let date2 = new Date();
date2.setSeconds(date2.getSeconds() + 70);
document.write("<p>70 секунд після зараз: " + date2 + "</p>");

let date3 = new Date(2016, 0, 2);
date3.setDate(1);
document.write("<p>Встановлено 1 день місяця: " + date3 + "</p>");
date3.setDate(0);
document.write("<p>Встановлено 0 день місяця: " + date3 + "</p>");