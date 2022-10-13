document.write("<h1>Приклад 2 (з практичної частини)</h1>");

let today = new Date(),
    newYearDate = new Date(today.getFullYear() + 1, 0, 1);

document.write("<p>today: " + today.toLocaleString() + "</p>");
document.write("<p>newYearDate: " + newYearDate.toLocaleString() + "</p>");
document.write("<p>newYearDate - today: " + (newYearDate - today) + "</p>");
document.write("<p>newYearDate.getTime() - today.getTime(): " + (newYearDate.getTime() - today.getTime()) + "</p>");

let msDiff = newYearDate - today,
    days = Math.floor(msDiff / (24 * 60 * 60 * 1000)),
    hours = Math.floor((msDiff / (1000 * 60 *60)) % 24),
    mins = Math.floor((msDiff / 1000 / 60) % 60),
    secs = Math.floor((msDiff / 1000) % 60);

document.write("<p>До нового року: " + days + " : " +  hours + " : " +  mins + " : " +  secs + "</p>")
