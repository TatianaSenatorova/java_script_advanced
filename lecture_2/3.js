"use strict";

const divElement = document.querySelector(".content");
console.log(divElement.childNodes.length); // 7
console.log(divElement.children.length); // 3

Array.from(divElement.childNodes).forEach((childNode) => {
  console.log(
    'childNode "%s" типа "%d"',
    childNode.nodeName,
    childNode.nodeType
  );
});

console.log(divElement.children);
[...divElement.children].forEach((child) => {
  console.log('child "%s" типа "%d"', child.nodeName, child.nodeType);
});

// шаблоны подстановки строк, %s для строки %d или %i для номера
