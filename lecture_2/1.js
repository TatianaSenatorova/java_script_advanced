'use strict';

const content = document.querySelector('.content');

const h1El = document.createElement('h1');
h1El.textContent = "h1 element";
// h1El.style.backgroundColor = '#ccc';
// h1El.style.textAlign = 'center';
h1El.setAttribute('class', 'heading');

const imgEl = document.createElement('img');
content.appendChild(imgEl);

// разными способами добавили атрибуты
imgEl.src = 'photo.png';
imgEl.setAttribute('alt', 'photo'); //предпочтительнее



content.appendChild(h1El);



