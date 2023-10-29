"use strict";



const studentsGroup1PracticeTime = [
  {
    firstName: "Ivanov",
    practiceTime: 56,
  },
  {
    firstName: "Petrov",
    practiceTime: 120,
  },
  {
    firstName: "Sidorov",
    practiceTime: 148,
  },
  {
    firstName: "Belkin",
    practiceTime: 20,
  },
  {
    firstName: "Avdeev",
    practiceTime: 160,
  },
];
const studentsGroup2PracticeTime = [
  {
    firstName: "Mankov",
    practiceTime: 87,
  },
  { firstName: "Kistin", practiceTime: 133 },
  {
    firstName: "Kotlyarov",
    practiceTime: 140,
  },
  {
    firstName: "Peskov",
    practiceTime: 10,
  },
];
// function findMax() {
//   const values = arguments;// arguments — переменная, которая доступна внутри каждой
//   функции и содержит в себе все аргументы, переданные в функцию. Является
//   псевдомассивом.
  
//   let maxValue = -Infinity;
  // Поскольку arguments является псевдомассивом, мы не можем применять к нему новые
// методы массивов, такие как forEach или reduce, а будем итерировать по старинке.

//   for (let index = 0; index < values.length; index++) {
//     if (values[index] > maxValue) maxValue = values[index];
//   }
//   return maxValue;
// }
// Мы должны передавать в функции только числа, а в наших массивах содержатся
// объекты, поэтому сначала создадим массивы только со значениями времени, отработанного
// студентами.
const group1PracticeTime = studentsGroup1PracticeTime.map((student) =>
student.practiceTime);
const group2PracticeTime = studentsGroup2PracticeTime.map((student) =>
student.practiceTime);
// Теперь можем вызывать функцию поиска максимального значения. Она принимает
// множество числовых аргументов, а у нас есть только массив — тут нам и поможет оператор
// spread.
// ...group1PracticeTime
// вытянет из массива все элементы и передаст их в функцию как отдельные переменные.

const maxTimeFromGroup1 = findMax(...group1PracticeTime);
// console.log(maxTimeFromGroup1); // 160

const maxTimeFromGroup2 = findMax(...group2PracticeTime);
// console.log(maxTimeFromGroup2); // 140

const bothGroupsTime = [...group1PracticeTime, ...group2PracticeTime];

const maxTimeBothGroups = findMax(...bothGroupsTime);
// console.log(maxTimeBothGroups); // 160

// оператор rest
// Напишем не очень удобную, но показательную функцию, которая умеет принимать
// неограниченное число аргументов и находить максимум среди них. Функция должна
// вызываться примерно следующим образом: const maximum = findMax(4, 7, 10);
function findMax(...values) { // тут мы принимаем все переданные аргументы и с
// помощью rest-оператора упаковываем их в массив values.
// На этот раз values — уже настоящий массив, и мы можем использовать reduce для
// итерации по нему и для нахождения максимального числа.
return values.reduce((acc, value) => {
if (value > acc) return value;
return acc;
}, -Infinity);
};

const saveFullNameInDB = (firstName, lastName, ...additionals) => {
    saveFirstName(firstName);
    saveLastName(lastName);
    saveAdditionals(additionals);
// Благодаря rest оператору мы смогли собрать все
// дополнительные данные, которые были переданы для сохранения в базе данных, и можем
// передать их одним массивом в функцию сохранения дополнительных данных.
}


const liEl = document.querySelectorAll(".menu__list");
// console.log(liEl); //результат - нодлист NodeList
const liElOne = document.querySelector(".menu__list");
// console.log(liElOne); //результат - html element
// console.log(liElOne.parentNode.children); //результат - html collection

const link = document.querySelector(".menu__link");
// console.log(link.children); //пусто
// console.log(link.childNodes); //NodeList [text] - поймал текст. То есть Nod'ы ловят все, что внутри, включая просто текст

const menuEl = document.querySelector(".menu");
// console.log(menuEl.children); //в этом случае выподится html collection - все элементы li длина = 4 шт
// console.log(menuEl.childNodes); //в этом случае NodeList из 9-ти элементов: text, li, text, li...он табуляцию и переносы воспринимает как текст и ловит их тоже в лист.

// menuEl.children.forEach((element) => {
  // console.log(element);
// }); //выдает ошибку
menuEl.childNodes.forEach((element) => {
  // console.log(element);
}); //выдает лист нод

console.log(liElOne); 
console.log(liElOne.lastElementChild);
console.log(liElOne.lastChild);

console.log(liElOne.parentElement.lastElementChild);
console.log(liElOne.parentElement.lastChild);
console.log(liElOne.nextElementSibling);
// console.log(liElOne.lastElementChild);
