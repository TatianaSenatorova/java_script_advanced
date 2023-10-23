'use strict';

// 1 Дан тег <div class="content"></div>
// 2 Создайте с помощью javascript новый элемент button
// 3 Добавьте текст для кнопки “Отправить”
// 4 При клике на данную кнопку необходимо чтобы текст
// поменялся на “Текст отправлен”

const content = document.querySelector('.content');

const button = document.createElement('button');

button.textContent = 'Отправить';

content.appendChild(button);

button.addEventListener('click', ()=>{
    button.textContent = 'Текст отправлен';
})