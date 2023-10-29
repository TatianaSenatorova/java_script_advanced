"use strict";

// Создать кнопку, которая добавляет заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки

const newBox = document.querySelector(".new-box");
const button = document.createElement("button");

button.textContent = "new button";

button.classList.add("new_button");

newBox.appendChild(button);

const h1 = document.createElement("h1");
h1.textContent = "add title";

button.addEventListener("click", addDelete);

function addDelete() {
  newBox.appendChild(h1);
  const buttonDelete = document.createElement("button");
  buttonDelete.textContent = "delete title";
  newBox.appendChild(buttonDelete);
  buttonDelete.addEventListener("click", () => {
    h1.remove();
    buttonDelete.remove();
  });
}

// Создать вторую кнопку, которая будет удалять созданный заголовок h1

// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

const buttonWithComment = document.createElement("button");

buttonWithComment.textContent = "button with comment";

newBox.appendChild(buttonWithComment);

buttonWithComment.addEventListener("mouseover", () => {
  console.log("Вы навели на данную кнопку");
});
buttonWithComment.addEventListener("mouseleave", () => {
  console.log("Наведения на кнопку больше нет");
});
