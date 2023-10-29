"use strict";

// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали

// const buttons = document.querySelectorAll("button");
// console.log(buttons);
const body = document.querySelector("body");

// buttons.forEach((el) => {
//   el.addEventListener("click", function (event) {
//     console.log(event.target);
//   });
// });

// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль

const buttonFour = document.createElement("button");

buttonFour.classList.add("button");

buttonFour.textContent = "item-4";

body.appendChild(buttonFour);

let count = 0;

const newButtonsList = document.querySelectorAll(".button");
console.log(newButtonsList);

buttonFour.addEventListener("click", function (event) {
  count++;
  console.log(count);
});

// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

const buttonFive = document.createElement("button");

buttonFive.classList.add("button");

buttonFive.textContent = "item-5";

body.appendChild(buttonFive);

let checkFlag = true;

buttonFive.addEventListener("click", (e) => {
  buttonFive.textContent = checkFlag ? "Вы нажали на эту кнопку" : "item-5";
  checkFlag = ! checkFlag;

});
