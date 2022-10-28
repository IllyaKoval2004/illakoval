const title = document.createElement('h1');
title.textContent = 'Індивідуальне завдання 1';
document.body.insertBefore(title, body.children[0]);

const button = document.querySelectorAll('button')

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        const parent = button[i].parentNode;
        parent.classList.add('hide');
    });
}
