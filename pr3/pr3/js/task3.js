const title = document.createElement('h1');
title.textContent = 'Індивідуальне завдання 3';
document.body.insertBefore(title, body.children[0]);

field.onclick = moveBall;

function moveBall(event) {
    let x = event.clientX,
        y = event.clientY;

    let coordField = field.getBoundingClientRect();
    
    x = x - coordField.x - field.clientLeft;
    y = y - coordField.y - field.clientTop;

    let coordFieldX_left  = ball.offsetWidth / 2,
        coordFieldY_left  = ball.offsetHeight / 2,
        coordFieldX_right = field.clientWidth - ball.offsetWidth / 2,
        coordFieldY_right = field.clientHeight - ball.offsetHeight / 2;

    if (x < coordFieldX_left)  x = coordFieldX_left;
    if (y < coordFieldY_left)  y = coordFieldY_left;
    if (x > coordFieldX_right) x = coordFieldX_right;
    if (y > coordFieldY_right) y = coordFieldY_right;

    x -= ball.offsetWidth / 2;
    y -= ball.offsetHeight / 2;

    ball.style.left = x + "px";
    ball.style.top = y + "px";
}