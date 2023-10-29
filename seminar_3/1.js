'use strict';

// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”

window.addEventListener('load', (event) =>{
    console.log('страница загрузилась');
});

// Добавить событие onclick которое выводит в консоль текст “событие onclick”

const button = document.querySelector('.button');
button.onclick = () => {
    ( console.log('событие onclick'));
};

// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

document.addEventListener('click', () =>{
    console.log('событие addEventListener');
})