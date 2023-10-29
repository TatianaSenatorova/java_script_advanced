"use strict";

// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”

const menu = document.querySelector(".menu");
const list = document.createElement("ul");


for (let i = 0; i < 3; i++) {
  const listItem = document.createElement("li");  
  list.appendChild(listItem);
}

menu.appendChild(list);

const buttonAdd = document.createElement('button');
buttonAdd.textContent = 'кнопка добавления';
menu.insertAdjacentElement("afterend", buttonAdd);

buttonAdd.addEventListener('click', addItemList);
function addItemList(){
    const listItem = document.createElement("li"); 
    listItem.textContent = 'новый элемент списка';
    list.appendChild(listItem);
}

const buttonDelete = document.createElement('button');
buttonDelete.textContent = 'кнопка удаления';
menu.insertAdjacentElement("afterend", buttonDelete);
buttonDelete.addEventListener('click', deleteItemList);
function deleteItemList(){
    console.log(menu.firstChild);
    list.firstChild.remove();
}

const buttonWithClassClick = document.createElement('button');
buttonWithClassClick.textContent = 'кнопка c классом click';
menu.insertAdjacentElement("afterend", buttonWithClassClick);
buttonWithClassClick.addEventListener('click', addClass);

function addClass() {
    buttonWithClassClick.classList.add('click');
}