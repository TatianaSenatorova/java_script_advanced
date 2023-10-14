'use strict';

// Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”

const link = document.querySelector('.link');
link.textContent = 'link text js';


// Заменить href, на значение https://developer.mozilla.org/ru/ 

// link.getAttribute('href').textContent = 'https://developer.mozilla.org/ru/';

// link.setAttribute('href',  'https://developer.mozilla.org/ru/');

// МОЖНО делать проще:

link.href = 'https://developer.mozilla.org/ru/';
// Дан тег <img class="photo" src="" alt=""> 
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета
const foto = document.querySelector('.photo');
// foto.setAttribute('src', 'https://avatars.mds.yandex.net/get-mpic/5322414/img_id8472980055422018421.jpeg/9', 'alt', 'foto anomal');
// foto.setAttribute('alt', 'foto animal');
foto.src = 'https://avatars.mds.yandex.net/get-mpic/5322414/img_id8472980055422018421.jpeg/9';
foto.alt = 'foto animal';