"use strict";

//1. Дан макет
//https://www.figma.com/file/mZwLT9fKktsWuVyfQRoST1/sh
//op-(Copy)-(Copy)?node-id=73%3A140 в котором
//представлены товары на странице корзины
//2. Необходимо создать файл data.js в котором создать
//переменную dataProducts в которую присвоить JSON
//данные по товарам.
//3. Вам нужно самостоятельно создать JSON данные (не
//забыть про кавычки для ключей и значений
//4. Добавить все данные из макета, чтобы в дальнейшим по
//ним мы смогли создать вёрстку

//quantity здесь это не количество, введенное пользователем, а сколько есть в наличии всего
const dataProducts = `[
  {
    "productImg": "./img/sport_jacket_men.png",
    "productName": "MANGO PEOPLE",
    "productType": "T-SHIRT",
    "productPrice": 300,
    "productColor": "Red",
    "productSize": "Xl",
    "quantity": 2 
  },
  { 
    "productImg": "./img/img_catalog/catalog_foto2.png",
    "productName": "ELLERY X M'O",
    "productType": "CAPSULE",
    "productPrice": 52,
    "productColor": "Black",
    "productSize": "Xl",
    "quantity": 1
}
]`;

//Задание 3 (тайминг 40 минут)
//1. Создаём блоки с помощью javascript для этого используем данные
//из dataProducts
//2. Формируем товары на основе нашей вёрстки
//3. Проверяем, как будет выглядеть сайт, если в json данных, добавить
//еще один объект с товаром (в вёрстке должен появиться еще один
//блок, на основе этих данных)

const productsBoxEl = document.querySelector(".cart__form_items");


// function createProductItem(dataArr) {
//   console.log(dataArr.length);
//   for (let i = 0; i < dataArr.length; i++) {
//     const productCard = document.createElement("div");
//     productCard.classList.add("cart__form_item");

//     productsBoxEl.append(productCard);
//     const productImgBox = document.createElement("div");
//     productImgBox.classList.add("cart__form_img-box");
//     productCard.append(productImgBox);
//     const productImg = document.createElement("img");
//     productImg.classList.add("cart__form_item-img");
//     productImg.setAttribute("src", dataArr[i].productImg);
//     productImgBox.append(productImg);
//     const productContent = document.createElement("div");
//     productContent.classList.add("cart__form_item_content");
//     productCard.append(productContent);

//     const productTitle = document.createElement("h2");
//     productTitle.classList.add("cart__form_item_content_firm");
//     productTitle.textContent = dataArr[i].productName;
//     console.log(dataArr[i].productTitle);
//     productContent.append(productTitle);

//     const productType = document.createElement("h2");
//     productType.classList.add("cart__form_item_content_title");
//     productType.textContent = dataArr[i].productType;
//     productContent.append(productType);

//     const productPriceBox = document.createElement("p");
//     productPriceBox.classList.add("cart__form_item_content_info");
//     productPriceBox.textContent = "Price: ";
//     productContent.append(productPriceBox);

//     const productPrice = document.createElement("span");
//     productPrice.classList.add("cart__form_item_content_price");
//     productPrice.textContent = `$${dataArr[i].productPrice}`;
//     productPriceBox.append(productPrice);

//     const productColorBox = document.createElement("p");
//     productColorBox.classList.add("cart__form_item_content_info");
//     productColorBox.textContent = "Color: ";
//     productContent.append(productColorBox);

//     const productColor = document.createElement("span");
//     productColor.classList.add("cart__form_item_content_color");
//     productColor.textContent = `$${dataArr[i].productColor}`;
//     productColorBox.append(productColor);

//     const productSizeBox = document.createElement("p");
//     productSizeBox.classList.add("cart__form_item_content_info");
//     productSizeBox.textContent = "Size: ";
//     productContent.append(productSizeBox);

//     const productSize = document.createElement("span");
//     productColor.classList.add("cart__form_item_content_size");
//     productSize.textContent = `$${dataArr[i].productSize}`;
//     productSizeBox.append(productSize);

//     const productQuantityBox = document.createElement("p");
//     productQuantityBox.classList.add("cart__form_item_content_info");
//     productQuantityBox.textContent = "Quantity: ";
//     productContent.append(productQuantityBox);

//     const productQuantity = document.createElement("span");
//     productQuantity.classList.add("cart__form_item_content_quantity");
//     productQuantity.textContent = `${dataArr[i].quantity}`;
//     productQuantityBox.append(productQuantity);
//   }
// }

// createProductItem(data);

function creatItem(data) {
  data.forEach((item) => {
    productsBoxEl.insertAdjacentHTML(
      "beforeend",
      getCart(
        item.productName,
        item.productType,
        item.productPrice,
        item.productColor,
        item.productSize,
        item.quantity,
        item.productImg
      )
    );
  });
}

function getCart(title, type, price, color, size, quantity, img) {
  return `
  <div class="cart__form_item">
  <div class="cart__form_img-box">
  <img class="cart__form_item-img"
          src="${img}">
      </div>
      
  <div class="cart__form_item_content">
      <svg class="close-item" width="18" height="18"
  viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
      d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
      fill="#575757" />
</svg>
      <h2 class="cart__form_item_content_firm">${type}
         
      </h2>
      <h2 class="cart__form_item_content_title">${title}</h2>
      <p class="cart__form_item_content_info">Price: <span
              class="cart__form_item_content_price">$${price}</span></p>
      <p class="cart__form_item_content_info">Color: <span
              class="cart__form_item_content_color">${color}</span></p>
      <p class="cart__form_item_content_info">Size:<span
              class="cart__form_item_content_size">${size}</span></p>

      <div class="cart__form_item_box_price">
          <label for="price2" class="cart__form_item_content_info">
          Quantity: </label>
          <input id="price2" class="cart__form_item_quantity" type="number" min="1" max="200"
              value="${quantity}" >
          
      </div>
  </div>
</div>`;
}

creatItem(JSON.parse(dataProducts));
