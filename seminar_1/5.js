"use strict";

// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
// Создать вторую кнопку, при клике на которую должен появляться параграф с произвольным текстом.
// При нажатии на вторую кнопку еще раз, текст должен пропадать.

const div = document.querySelector(".content");
const button = document.createElement("button");
button.textContent = "Отправить";
div.append(button);
button.addEventListener("click", () => {
  button.textContent = "Текст отправлен";
  button.removeEventListener;
});

const secondButton = document.createElement("button");
div.append(secondButton);
const paragraph = document.createElement("p");
paragraph.textContent = "random text";

secondButton.addEventListener("click", () => {
  if (div.contains(paragraph)) {
    div.removeChild(paragraph);
  } else {
    div.append(paragraph);
  }
});

