"use strict";

//Задание 1
//1. Поиск в интернете (бесплатные api примеры).
//2. Найти любые данные, на произвольную тему.
//3. Создать файл data.js.
//4. Создать переменную которая будет хранить данные из публичных api.

//Задание 2
//1. Создать файл index.html.
//2. Подключить data.js.
//3. Сформировать контент из данных (картинка загловок и параграф).
//4. Добавить данный контент в вёрстку.
//5. * Добавить стили при необходимости (по желанию).

const dataInfo = `[
    {
    "id": 59,
    "title": "Spring and summershoes",
    "price": 20,
    "quantity": 1,
    "total": 20,
    "discountPercentage": 14.00,
    "discountedPrice": 17,
    "thumbnail": "https://i.dummyjson.com/data/products/59/thumbnail.jpg"
    },
    {
    "id": 88,
    "title": "TC Reusable Silicone Magic Washing Gloves",
    "price": 29,
    "quantity": 1,
    "total": 29,
    "discountPercentage": 3.19,
    "discountedPrice": 28,
    "thumbnail": "https://i.dummyjson.com/data/products/88/thumbnail.jpg"
    },
    {
    "id": 18,
    "title": "Oil Free Moisturizer 100ml",
    "price": 40,
    "quantity": 1,
    "total": 40,
    "discountPercentage": 0,
    "discountedPrice": 40,
    "thumbnail": "https://i.dummyjson.com/data/products/18/thumbnail.jpg"
    },
    {
    "id": 95,
    "title": "Wholesale cargo lashing Belt",
    "price": 930,
    "quantity": 1,
    "total": 930,
    "discountPercentage": 17.67,
    "discountedPrice": 766,
    "thumbnail": "https://i.dummyjson.com/data/products/95/thumbnail.jpg"
    },
    {
    "id": 39,
    "title": "Women Sweaters Wool",
    "price": 600,
    "quantity": 1,
    "total": 600,
    "discountPercentage": 17.2,
    "discountedPrice": 497,
    "thumbnail": "https://i.dummyjson.com/data/products/39/thumbnail.jpg"
    }
    ,
    {
      "id": 96,
      "title": "iPhone 9",
      "price": 549,
      "quantity": 1,
      "total": 549,
      "discountPercentage": 12.96,
      "discountedPrice": 478,
      "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
      }
  ]`;

const productsBoxEl = document.querySelector(".products");
const productTemplateEl = productsBoxEl.querySelector(".product-template");

const data = JSON.parse(dataInfo);

function addCards(dataArray, parentEl, template) {
  for (let i = 0; i < dataArray.length; i++) {
    const clone = template.content.cloneNode(true);
    parentEl.append(clone);
  }
  const productEls = parentEl.querySelectorAll(".product");
  for (let i = 0; i < productEls.length; i++) {
    productEls[i].querySelector(
      ".product__img"
    ).style.backgroundImage = `url(${dataArray[i].thumbnail})`;
    productEls[i].querySelector(".product__title").textContent =
      dataArray[i].title;
    productEls[i]
      .querySelector(".product__img")
      .setAttribute("src", `${dataArray[i].thumbnail}`);
    productEls[i].querySelector(".product__discount-price").textContent =
      dataArray[i].discountedPrice;
    productEls[i].querySelector(".product__price").textContent =
      dataArray[i].price;
  }
  addBestPrice(productEls, dataArray);
}

addCards(data, productsBoxEl, productTemplateEl);

function addBestPrice(products, productsArray) {
  for (let i = 0; i < productsArray.length; i++) {
    if (productsArray[i].discountPercentage > 10) {
      products[i].classList.add("good-price");
    }
  }
}
