
//==========Задание №5 (функция принимает два натуральных числа x и n и возвращает x в степени n)===========

let numSumm = (x, n) => {
	if (n === 1) {
		return x;
	} else {
		return x * numSumm(x, n - 1);
	}
}

console.log(numSumm(4, 4));