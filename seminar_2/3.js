"use strict";

// С помощью querySelector найти элемент h2 и вывести в
// консоль всех его родителей

let h2 = document.querySelector(".subtitle");
console.log(h2);
function parents(a) {
  while (a.parentElement) {
    console.log(a.parentElement);
    a = a.parentElement;
  }
}
parents(h2);

//вариант с вызовом функции внутри функции
const h2El = document.querySelector(".subtitle");
function getParent(el) {
  if (el.parentElement) {
    console.log(el.parentElement);
    getParent(el.parentElement);
  }
}
getParent(h2El);
