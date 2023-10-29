'use strict';

// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute) 
 const block = document.querySelector('.block');
const div =  document.createElement('div');
div.setAttribute('class', 'item');
div.textContent = 'Элемент внутри';
block.appendChild(div);
div.setAttribute('class', `${div.className} item_1`); //если не указать уже имеющиеся классы, то затрет их
console.log(div);

div.classList.add('item-2'); //доплюсовывает классы
