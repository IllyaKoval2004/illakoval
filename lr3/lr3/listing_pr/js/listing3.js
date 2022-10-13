document.write("<h1>Приклад 3 (з практичної частини)</h1>");

var today = new Date();
var options = {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numetic',
};
document.write('<p>Сьогодні:</p>');
document.write(`<p>${today.toLocaleString('ar-EG')}</p>`);
document.write(`<p>${today.toLocaleString('ar-EG', options)}</p>`);
document.write(`<p>${today.toLocaleString('en-EN')}</p>`);
document.write(`<p>${today.toLocaleString('en-GB')}</p>`);
document.write(`<p>${today.toLocaleString('en-GB', options)}</p>`);
document.write(`<p>${today.toLocaleString('uk-UK', options)}</p>`);