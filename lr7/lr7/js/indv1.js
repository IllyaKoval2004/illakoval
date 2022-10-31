const title = document.createElement('h1');
title.textContent = 'Індивідуальне завдання 1';
document.body.insertBefore(title, body.children[0]);

const farenheit_Input = document.querySelector('.farenheit-input');
const celcium_Input = document.querySelector('.celcium-input');

function rounded (number){
    return +number.toFixed(2);
}

function ToCelcium(farenheit) {
    return 5 / 9 * (farenheit - 32);
}

function ToFarenheit(celcium) {
    return 9 / 5 + (celcium + 32);
}

farenheit_Input.addEventListener('change', (val) => {
    const value = +val.target.value;
    celcium_Input.value = rounded(ToCelcium(value));
})

celcium_Input.addEventListener('change', (val) => {
    const value = +val.target.value;
    farenheit_Input.value = rounded(ToFarenheit(value));
});