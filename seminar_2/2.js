'use strict';

// 1 Дан код
// <div class="elem">
// <img src="photo.png" alt="photo">
// <div class="content">
// <h2 class="heading">Lorem, ipsum dolor.</h2>
// <p class="text">Lorem ipsum, dolor sit amet consectetur
// adipisicing elit. Recusandae, ea!</p>
// </div>
// </div>
// // Необходимо с помощью querySelector найти параграф с
// // классом text
// // 2 Вывести в консоль соседний элемент h2
// // 3 Вывести в консоль родительский элемент content
// // 4 Вывести в консоль картинку
// // 5 Вывести в консоль родительский элемент elem

const paragraph = document.querySelector('.text');
console.log(paragraph);
console.log(paragraph.previousElementSibling);
console.log(paragraph.parentElement);
console.log(paragraph.parentElement.previousElementSibling);

console.log(paragraph.parentElement.previousElementSibling.parentElement);

console.log(paragraph.parentElement.parentElement);

