
//==========Задание №1 (количество чётных и нечётных элементов в массиве, решение в виде функции)===========

function getSumEvenOdd_inArr() {
	let arr = ['1', 2, 3, null, 'text', 5, false, 16, 3, null, ''];
	let even = 0;
	let odd = 0;
	let empty = 0;
	let notIdentified = 0;

	let result = arr.filter(function(elem) {
		if (typeof elem == 'number' && elem % 2 === 0) {
			even++;
		} else if (typeof elem == 'number' && elem % 2 > 0) {
			odd++;
		} else if (elem === null) {
			empty++;
		} else {
			notIdentified++;
		}
	});
	console.log('Всего четных : ' + even);
	console.log('Всего нечетных : ' + odd);
	console.log('Всего null : ' + empty);
	console.log('Всего не опознано : ' + notIdentified);
}
getSumEvenOdd_inArr();