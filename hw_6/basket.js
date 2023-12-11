"use strict";

// Дан макет сайта https://www.figma.com/file/mnLY69cYE5cqWM5w6n5hXx/Seo-%26-Digital-Marketing-Landing-Page?node-id=4203%3A2&t=q4NMnXTnwyyTSGA6-0

// На предыдущем уроке вы сформировали данные из раздела "Товары".

// При клике на кнопку add to cart у товара под блоком с акциями появляется раздел Cart items.

// В разделе Cart items появляются товары, добавленные в корзину,

// При клике на крестик, товар удаляется из из раздела корзины, если удалить все товары, раздел полностью пропадает.

const productEls = document.querySelectorAll(".product");
const totalQuantityEl = document.querySelector(".icon-basket__total-items");
let totalSumm = 0;
let totalCount = 0;
const basket = {};

productEls.forEach((element) => {
  element.addEventListener("click", (e) => {
    // closest плохо срабатывал, поэтому перебрала с помощью || все элементы в кнопке купить 
    if (e.target.classList.contains("mask__button-cart") || e.target.classList.contains("mask__img-basket") || e.target.classList.contains("mask__text-basket")) {
      addCartBlock();
      getProductInfo(element);
    } else {
      return;
    }
  });
});

const advantagesEl = document.querySelector(".advantages");

function addCartBlock() {
  if (document.querySelector(".cart") == null) {
    const cartEl = `
    <section class="cart">
  
    <div class="cart__content center">
        <div class="cart__form" >
            <div class="cart__form_left cart__main-page">
            <h1 class="cart__basket_title">Cart Items</h1>
                <div class="cart__form_items">
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
        `;
    advantagesEl.insertAdjacentHTML(`afterend`, cartEl);
  }
}

function getProductInfo(cardInfo) {
  const productID = +cardInfo.getAttribute("data-id");
  const productName = cardInfo.getAttribute("data-name");
  const productPrice = +cardInfo.getAttribute("data-price");
  const productImg = cardInfo.getAttribute("data-img");
  const productAltImg = cardInfo.getAttribute("data-altImg");
  const productColor = cardInfo.getAttribute("data-color");
  const productSize = cardInfo.getAttribute("data-size");
  addProductsToCart(
    productID,
    productName,
    productPrice,
    productImg,
    productAltImg,
    productColor,
    productSize
  );
}

function addProductsToCart(
  productID,
  productName,
  productPrice,
  productImg,
  productAltImg,
  productColor,
  productSize
) {
  if (!basket[productID]) {
    basket[productID] = {
      productID: productID,
      productName: productName,
      productPrice: productPrice,
      productImg: productImg,
      productAltImg: productAltImg,
      productColor: productColor,
      productSize: productSize,
      productCount: 1,
    };
    showProductsInCart(productID);
  } else {
    basket[productID].productCount += 1;
    const cartBoxForProductsEls = document.querySelector(".cart__form_items");
    const productQuantityEl = cartBoxForProductsEls
      .querySelector(`[data-id='${productID}']`)
      .querySelector(".cart__form_item_quantity");
    productQuantityEl.value = basket[productID].productCount;
  }
  totalQuantityEl.textContent = getTotalCount();
  getTotalSumm();
}

function getTotalCount() {
  return (totalCount = Object.values(basket).reduce(
    (acc, product) => acc + product.productCount,
    0
  ));
}

function getTotalSumm() {
  return (totalSumm = Object.values(basket).reduce(
    (acc, product) => acc + product.productPrice * product.productCount,
    0
  )).toFixed(2);
}

function showProductsInCart(id) {
  const cartBoxForProductsEls = document.querySelector(".cart__form_items");
  cartBoxForProductsEls.insertAdjacentHTML(
    "beforeend",
    `<div class="cart__form_item" data-id="${id}" data-name="${basket[id].productName}" data-price="${basket[id].productPrice}" data-img="${basket[id].productImg}" data-altImg="${basket[id].productAltImg}" >
    <div class="cart__form_img">
        <img class="cart__form_item_img" src="${basket[id].productImg}"
            alt="${basket[id].productAltImg}">
    </div>

    <div class="cart__form_item_content">
        <svg class="close-item" width="18" height="18" viewBox="0 0 18 18" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                fill="#575757" />
        </svg>
        <h2 class="cart__form_item_content_firm">
        </h2>
        <h2 class="cart__form_item_content_title cart__form-basket-title">${basket[id].productName}</h2>
        <p class="cart__form_item_content_info">Price: <span
                class="cart__form_item_content_price">$${basket[id].productPrice}</span></p>
        <p class="cart__form_item_content_info">Color: <span
                class="cart__form_item_content_color">${basket[id].productColor}</span></p>
        <p class="cart__form_item_content_info">Size:<span
                class="cart__form_item_content_size">${basket[id].productSize}</span></p>

        <div class="cart__form_item_box_price">
            <label for="price2" class="cart__form_item_content_info">
                Quantity: </label>
            <input id="price2" class="cart__form_item_quantity" type="number" min="1"
                max="200" value="${basket[id].productCount}">

        </div>
    </div>
</div>`
  );
  const productsInCart =
    cartBoxForProductsEls.querySelectorAll(".cart__form_item");
  removeProductFromCart(productsInCart);
}

function removeProductFromCart(productToRemove) {
  productToRemove.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target.classList.contains("close-item")) {
        const productIDToRemoveFromBasket = el.getAttribute("data-id");
        delete basket[productIDToRemoveFromBasket];
        el.remove();
        
      }
      if (Object.keys(basket).length === 0) {
        const cartBlockEl = document.querySelector(".cart");
        cartBlockEl.remove();
      }
      totalQuantityEl.textContent = getTotalCount();
    });
  });
};




