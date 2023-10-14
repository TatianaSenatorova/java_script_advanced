"use strict";

// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

const content = document.querySelector(".content");
const button = document.createElement("button");
content.append(button);
let count = 0;
// button.addEventListener("click", () => {
//   count++;
//   button.textContent = `Вы нажали ${count} раз`;
//   console.log(count);
// });
button.addEventListener("click", () => {
 button.textContent = `Вы нажали ${++count} раз`;
  console.log(count);
});