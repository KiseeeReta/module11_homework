
//==================Задание №2 (простое или составное число, но не более 1000)===================

function isPrimeNum(num) {
	if (num < 2) {
		return 'Число должно быть больше 1';
	} else if (num >= 1001) {
		return 'Данные неверны, число должно быть не больше 1000';
	}

	let i = 2;
	const limit = Math.sqrt(num);
	while (i <= limit) {
		if (num % i === 0) {
			return 'Составное число';
		}
		i +=1;
	}
		return 'Простое число';
}

console.log(isPrimeNum(3));
