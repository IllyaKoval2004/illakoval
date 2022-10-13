document.write("<h1>Приклад 4 (з практичної частини)</h1>");

let today = new Date();
let options = {
    era: '2-digit',
    year: 'short',
    month: '2-digit',
    day: 'short',
    weekday: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
};

document.write('<p>Сьогодні:</p>');
document.write(`<p>${today.toLocaleString('ar-EG', options)}</p>`);
document.write(`<p>${today.toLocaleString('en-GB', options)}</p>`);
document.write(`<p>${today.toLocaleString('ru-RU', options)}</p>`);
document.write(`<p>${today.toLocaleString('uk-UK', options)}</p>`);