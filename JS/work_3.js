
/*========Задание №3 (функция принимает число как аргумент и возвращает функцию, которая тоже принимает число
как аргумент и возвращает сумму этих двух чисел)==========*/

function getSumm(numOne) {
	return function(numTwo) {
		return numOne + numTwo;
	};
}
console.log( getSumm(55)(9) );