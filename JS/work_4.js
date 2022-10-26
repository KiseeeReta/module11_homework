
//=Задание №4 ( функция принимает два числа и каждую секунду выводит числа в интервале от первого до второго)=

let result = 4;
function showNumber(num) {
	result += num;
	console.log(result);
	if (result === 15) {
		clearInterval(timeId);
	}
}

let timeId = setInterval(showNumber, 1000, 1);