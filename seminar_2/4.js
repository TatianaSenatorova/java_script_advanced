"use strict";

// Задание 4 (тайминг 25 минут)

// 1 Дано поле ввода и кнопка отправить, необходим
// реализовать функционал, если пользователь нажимает на
// кнопку отправить, а поле ввода пустое, то под полем ввода
// и кнопкой должен появиться заголовок h2 с текстом вы не
// заполнили поле ввода
// 2 Цвет у рамки сделать красным

const form = document.querySelector("form");
const input = document.querySelector("input");
const textEl = document.createElement("p");
textEl.textContent = "вы не заполнили поле ввода";
form.onsubmit = function getInput(e) {
  e.preventDefault();
  const val = document.querySelector("input").value;
  if (val.trim() === "") {
    form.append(textEl);
    input.style.borderColor = "red";
  } else {
    if (textEl) {
      textEl.remove();
      input.style.borderColor = "black";
    }
  }
};

// const btn = document.querySelector(".btn");
// const h2 = document.createElement("h2");
// h2.textContent = "вы не заполнили поле ввода";
// btn.addEventListener("click", () => {
//   const inputName = document.querySelector("input").value;
//   if (inputName == "") {
//     btn.previousElementSibling
//       .insertAdjacentElement("afterend", h2)
//       .previousElementSibling.classList.add("red");
//   }

// });

// // const inputText = docume

// nt.querySelector(".text");
// // console.log(inputText);

// const infoAboutEmpty = document.createElement("h2");
// infoAboutEmpty.textContent = "вы не заполнили поле ввода";

// const btn = document.querySelector(".btn");
// console.log(btn);

// // const form = document.querySelector("form");

// btn.addEventListener("click", () => {
// let val = document.querySelector('input').value;

//   if (val == null) {
//     val.classList.add('red');

//     //  form.appendChild(infoAboutEmpty);
//   } else {
//     // form.remove(infoAboutEmpty);
//     infoAboutEmpty.classList.remove("red");
//   }
// });
