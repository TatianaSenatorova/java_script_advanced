'use strict';

const heading = document.querySelector('.title');
//можно поменять заголовок
heading.textContent = 'Заголовок уже из js';
console.log(heading);

const text = document.querySelectorAll('.text');
const heading2 = document.getElementById('heading'); //старый способ

const heading3 = document.querySelector('#heading'); //новый способ
heading3.remove();

const listEls = document.getElementsByClassName('list'); //получаем коллекцию
const listElsQS = document.querySelectorAll('.list');
console.log(listElsQS); //nodelist выдает - с queryselector будем работать в основном
console.log(listEls); //html коллекцию выдает


console.log(heading2);
console.log(heading3);
// console.log(heading);
// console.log(text);
//как вывести все элементы массива
// for (let i = 0; i < text.length; i++) {
//    console.log(text[i]);
    
// }
// text.forEach(element => {
//     console.log(element);
// });

// нажимаем купить и меняется текст на кнопке - товар в корзине
//и ниже кнопки добавляем еще текст
const buttonElement = document.querySelector('.btn');
console.log(buttonElement);
const contentEl = document.querySelector('.content');

const textEl = document.createElement('p');
textEl.textContent = 'Тут любой текст и его много';


buttonElement.onclick = function () {
    buttonElement.textContent = 'товар в корзине';
    contentEl.appendChild(textEl);
}

//поменять картинку в теге img
const imgEl = document.querySelector('.img');
imgEl.src = 'newphoto.jpeg';

//проделаем то же самое при клике на картинку
imgEl.onclick = function () {
    imgEl.src = 'newphoto.jpeg';
}



