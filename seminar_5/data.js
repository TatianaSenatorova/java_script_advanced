"use strict";

//1. Создать файл data.js
//2. Создать переменную dataInfo
//3. Добавить несколько данных в dataInfo
const dataArr = `[
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://via.placeholder.com/600/f66b97",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  }]`;

const data = JSON.parse(dataArr);

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
  for (const key in data[i]) {
    if (typeof data[i][key] == "string") {
      console.log(data[i][key]);
    }
  }
}

//1. Создать все необходимые заголовки, параграфы изображения (из
//данных json)
//2. Добавить все содержимое в блок контент
//3. Добавить стили при необходимости

// JavaScript может отправлять сетевые запросы на сервер и подгружать новую информацию по мере необходимости.
// Например, мы можем использовать сетевой запрос, чтобы:
// Отправить заказ,
// Загрузить информацию о пользователе,
// Запросить последние обновления с сервера,
// …и т.п.
//let promise = fetch(url, [options])
//Без options это простой GET-запрос, скачивающий содержимое по адресу url.
//response.json() – декодирует ответ в формате JSON,
//Например, получим JSON-объект с последними коммитами из репозитория на GitHub:
//fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
//.then(response => response.json())
//.then(commits => alert(commits[0].author.login));

//Для получения ответа в виде текста используем await response.text() вместо .json():
//let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
// let text = await response.text(); // прочитать тело ответа как текст
//alert(text.slice(0, 80) + '...');

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((Response) => Response.json())
  .then((json) => {
    console.log(json);
    const dataInfo = json;
  });

const contentEl = document.querySelector(".content");

console.log(data.length);
for (let i = 0; i < data.length; i++) {
  
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  const titleEl = document.createElement("h3");
  titleEl.classList.add("card__title");
  titleEl.textContent = data[i].title;
  cardEl.append(titleEl);
  cardEl.style.backgroundImage = `url(${data[i].url})`;
  contentEl.append(cardEl);
}
