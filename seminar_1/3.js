'use strict';

// Дан тег <div class="content"></div> 
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел 

const paragraph = document.createElement('p');
paragraph.textContent = 'Новый текстовый элемент';

const div = document.querySelector('.content');
div.appendChild(paragraph);

div.removeChild(paragraph);

for (let i = 0; i < 5; i++) {
    const paragraph = document.createElement('p');
paragraph.textContent = 'Новый текстовый элемент';
    div.append(paragraph);
    
}
console.log(div);
