'use strict';

/* <div id="block">
	<p>1</p>
	<p>2</p>
</div>
Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль*/

const block = document.getElementById('block');
const paragraph = block.querySelectorAll('p');
const firstParagraph = paragraph[0];
const firstParag = document.querySelector('#block p:first-child');

console.log(firstParagraph);
console.log(firstParag);

/*Получите ссылку на первый абзац с классом www. и вывести его в консоль
<p class="www">text 1</p>
<p class="www">text 2</p> */

const firstPar = document.querySelectorAll('.www')[0];

console.log(firstPar);
