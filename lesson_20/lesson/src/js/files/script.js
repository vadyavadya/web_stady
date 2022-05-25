// Проверка мобильного браузера
// import { isMobile } from "./functions";

/*
// Пусть переменная "num" будет!
let num;
console.log(typeof num);
console.log(num);

// Пусть переменная "num" содержит число 10
num = 10;
console.log(typeof num);
console.log(num);

// Пусть переменная "num" содержит строку Привет!
num = "Привет!";
console.log(typeof num);
console.log(num);
*/

// Пусть константа "mainPage" ВСЕГДА содержит объект с классом .page
// const mainPage = document.querySelector('.page');

/*
const user = {
	name: "Максим",
	age: "26"
}
user.name = "Лоцы";
console.log(user.name);
*/
// * Операторы
// * "- + * /"
// * оператор сложения "+" НЕ преобразовывает тип данных
/*
let num = 100;
let sayHi = "Привет";
let blockHeight = num + sayHi;
console.log(typeof blockHeight);
console.log(blockHeight);
*/
/*
let partOne = "Привет,";
let partTwo = "Вася";
let sayHi = partOne + partTwo;
console.log(sayHi);
*/

// * Операторы сравнения > < >= <= == === != !==
/*
let numOne = 10;
let numTwo = "10";
let result = numOne !== numTwo;
console.log(typeof result);
console.log(result);
 */

// * Условное ветвление
/*
let numOne = 10;
let numTwo = 30;
// полная запись
if (numOne > numTwo) {
	// Выполняем програму,
	// если условие выполненно (true)
	console.log('numOne больше чем numTwo');
} else if (numTwo === 20) {
	console.log('numTwo равно 20');
} else {
	console.log('Условия НЕ выполненны!');
}
// короткая запись условия (если требуется выполнить одно действие)
let redult = numOne > numTwo ? console.log('numOne больше чем numTwo') : console.log('Условия НЕ выполненны!');
 */
// более сложные кнострукции

// let message = "Привет";
// let messageEnd;
// if (5 > 50) {
// 	messageEnd = ", Вася!";
// } else if (5 > 30) {
// 	messageEnd = ", Оля!";
// } else if (5 > 20) {
// 	messageEnd = ", Петя!";
// } else if (5 > 10) {
// 	messageEnd = ", Андрей!";
// } else {
// 	messageEnd = ", Инокентий!";
// }

// messageEnd = 5 > 50 ? ", Вася!" :
// 	5 > 30 ? ", Оля!" :
// 		5 > 20 ? ", Петя!" :
// 			5 > 10 ? ", Андрей!" : ", Инокентий"


/* let numOne;
// * Возвращают false: undefined, 0, "", NaN`
if (numOne) {
	console.log('numOne возвращает true');
} else {
	console.log('numOne возвращает FALSE');
} */




/* const mainPage = document.querySelector('.page');
if (mainPage) {
	console.log(mainPage);
} */



// * Логические операторы || && !

/* let numOne = 50;
let numTwo = 30;
if (numOne < numTwo && numOne === 50 || numTwo !== 40 && numOne > 35) {
	console.log('Выполняем код...');
} */


/* const blockElement = document.querySelector('.block');
if (!blockElement.classList.contains('active')) {
	blockElement.classList.add('active');
} */

/*
// let someVar = "Я строка!";
// let someVar = 'Я строка!';
// * Обратные кавычки
let someVar = `Я строка!`;
 */

/*
let someNum = 21;
// * Вставить переменную в строку ${someNum}
let someString = `Мне ${someNum} лет`;
console.log(someString);
*/

/*
// Область видимости
let someNum = 10;
let someString;
if (10 > 5) {
	someString = "Привет!";
}
console.log(someString);
*/

// * Функции

// Создание функции
/*
function setConsole(someData) {
	// Выполняемый код
	console.log(someData);
}
// Вызов функции
setConsole("Привет!");
*/

/*
function getSumm(numOne = 5, numTwo = 10) {
	return numOne + numTwo;
}

let someNumber = 580;

if (someNumber === 100) {
	console.log(getSumm(80, 50));
} else {
	console.log(getSumm(10, 10));
}
*/
// ... продолжаем...

// * Цыклы
// Цикл while
/* let i = 0;
while (i < 5) {
	console.log(i);
	i++;
} */

// если тело состоит из одной строки
/* let i = 0;
while (i < 5) console.log(i++); */

// Конструкция DO...while
/* let i = 0;
do {
	console.log(i);
	i++
} while (i < 5); */


// Цикл for
// for (Начало; Условие; Шаг) {
// 	тело цикла
// }

/* for (let i = 0; i < 5; i++) {
	console.log(i);
} */

// можно убрать любую часть цикла
/* let num = 0;
for (; num < 5; num++) {
	console.log(num);
} */

// * можно остановить выполнение цикла break
/* for (let i = 0; i < 5; i++) {
	console.log(i);
	if (i == 2) break;
} */

// * перейти на следущую итерацию continue

// * метки  перейти на следующкю итерацию внешнего цикла
/* firstFor: for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		if (size == 2) {
			continue firstFor;
		}
		console.log(size);
	}
} */

// * Итоги и домашка
/*
1.	while – Проверяет условие перед каждой итерацией.
2.	do..while – Проверяет условие после каждой итерации.
3.	for (;;) – Проверяет условие перед каждой итерацией,
	есть возможность задать дополнительные настройки.

Чтобы организовать бесконечный цикл, используют
конструкцию while (true).
При этом он, как и любой другой цикл, может быть
прерван директивой break.

Если на данной итерации цикла делать больше
ничего не надо, но полностью прекращать цикл не
следует – используют директиву continue.

Обе этих директивы поддерживают метки, которые ставятся
перед циклом. Метки – единственный способ для break/continue
выйти за пределы текущего цикла, повлиять на выполнение внешнего.
Помним, что метки не позволяют прыгнуть в произвольное место кода,
в JavaScript нет такой возможности.

Конечно же в JavaScript существуют и другие методы перебора.
Например, перебор объектов или массивов. О них мы поговорим
в отдельных уроках, а пока домашка.
*/

// * Объявление функции (Function Declaration)
/*
function имя(параметры) {
	// тело (код) функции
}*/

//Имя функции и её предназначение
/*
Как правило, в имени используются опеределенные префиксы,
обозначающие действие, после которых следует объект действия.

Например, функции, начинающиеся с
"show..." обычно что-то показывают,
"get..." – возвращают значение,
"calc..." – что-то вычисляют,
"create..." – что-то создают,
"check..." – что-то проверяют и возвращают логическое
значение, и т.д.

Примеры:
showMessage - показать сообщение
getOptions - получить параметры
calcSum - посчитать сумму
и т.д.
*/

// Функция вывода сообщения
/* function showMessage() {
	console.log('Сообщение');
} */
/*
Функция должна делать только то,
что явно подразумевается её названием.
И это должно быть одним действием.
Два независимых действия обычно подразумевают две функции,
даже если предполагается, что они будут вызываться вместе (в этом случае мы
можем создать третью функцию, которая будет их вызывать).
*/

//===========================================================
//Запуск функции
// Функцию можно вызывать и до и после обявления
/*
showMessage();

// Функция вывода сообщения
function showMessage() {
	console.log('Сообщение!');
}
showMessage();
showMessage();
*/

//===========================================================
// Можно вкладывать функции в фуекции
/*
function getSumm() {
	let numOne, numTwo;

	function getNumOne() {
		numOne = 1;
	}
	function getNumTwo() {
		numTwo = 2;
	}
	getNumOne();
	getNumTwo();

	let numSumm = numOne + numTwo;
	console.log(numSumm);
}
getNumOne();
getSumm();
*/

/*
// Вложенность и видимость функций
"use strict"
if (2 > 1) {
	function getSumm() {
		let numOne, numTwo;

		function getNumOne() {
			numOne = 1;
		}
		function getNumTwo() {
			numTwo = 2;
		}
		getNumOne();
		getNumTwo();

		let numSumm = numOne + numTwo;
		console.log(numSumm);
	}
}
getSumm();
*/
//===========================================================
//Локальные и внешние переменные
/*
function showMessage() {
	// Локальная переменная
	let message = "Сообщение";
	console.log(message);
}

console.log(message);
*/


/*
// Внешняя переменная
let message;

function showMessage() {
	// Используется внешняя переменная
	message = "Сообщение";
}
console.log(message);

showMessage();
*/




/* // Внешняя переменная
let message = "Сообщение №1";

function showMessage() {
	// Локальная переменная
	let message = "Сообщение №2";
	console.log(message);
}
console.log(message);
showMessage();
 */


/*
// Глобальные переменные
let globalVar = "Я глобальная переменная";

function getSumm() {
	let numOne, numTwo;

	function getNumOne() {
		numOne = 1;
		console.log(globalVar);
	}
	function getNumTwo() {
		numTwo = 2;
	}
	getNumOne();
	getNumTwo();

	let numSumm = numOne + numTwo;
	console.log(globalVar);
}
console.log(globalVar);

getSumm();
*/

//===========================================================
/*
// * Параметры (аргументы)
function calcSumm(numOne = 1, numTwo = 2) {
	console.log(`Переменная numOne:${numOne}`);
	console.log(`Переменная numTwo:${numTwo}`);

	let numSumm = numOne + numTwo;

	console.log(`Сумма:${numSumm}`);
}

calcSumm(5, 5);
*/




/*
numTwo = numTwo || 2;
*/

/*
// Функции-колбэки
function calcSumm(numOne, numTwo, more, less) {
	let numSumm = numOne + numTwo;

	if (numSumm > 3) {
		more();
	} else {
		less();
	}
}

function showMoreMessage() {
	console.log('Больше чем 3');
}
function showLessMessage() {
	console.log('Меньше чем 3');
}
calcSumm(1, 1, showMoreMessage, showLessMessage);
*/

//===========================================================

/*
// Возврат результата
function calcSumm(numOne, numTwo) {

	let numSumm = numOne + numTwo;

	// Возврат
	return numSumm;

	// Дальше код не выполняется

}
let funcRezult = calcSumm(1, 2);

console.log(`Сумма: ${funcRezult}`);
*/


/*
function calcSumm(numOne, numTwo) {

	let numSumm = numOne + numTwo;

	if (numSumm >= 3) {
		// Возврат
		return numSumm;
	} else {
		return 'Сумма меньше 3';
	}
	// Дальше код не выполняется

}
let funcRezult = calcSumm(1, 2);

console.log(funcRezult);
*/


/*
function calcSumm(numOne, numTwo) {

	let numSumm = numOne + numTwo;

	return
	numSumm;

	// Дальше код не выполняется

}
let funcRezult = calcSumm(1, 2);

console.log(funcRezult);
*/

/*
function calcSumm(numOne, numTwo) {

	let numSumm = numOne + numTwo;

	if (numSumm >= 3) {
		// Возврат
		return;
		// Дальше код не выполняется
	}
}
calcSumm(5, 5)
*/
//===========================================================
// * Рекурсия
/*
function getSumm(numOne, numTwo) {
	let numSumm = calcSumm(numOne, numTwo);

	console.log(numSumm);
}
function calcSumm(numOne, numTwo) {
	return numOne + numTwo;

}
getSumm(5, 5);
*/


/*
function calcSumm(numOne, numTwo) {
	let result = 1;
	// умножаем result на numOne numTwo раз в цикле
	for (let i = 0; i < numTwo; i++) {
		result *= numOne;
	}
	return result;
}
console.log(calcSumm(2, 3));
*/

/*
function calcSumm(numOne, numTwo) {
	if (numTwo === 1) {
		return numOne;
	} else {
		return numOne * calcSumm(numOne, numTwo - 1);
	}
}
console.log(calcSumm(2, 3));
*/

//========================================================================================================================================================
/*
let showMessage = function () {
	console.log('Привет!');
};

showMessage();
*/

/*
function getSumm() {
	let summ = 1 + 2;
	console.log(summ);
};

let someVar = getSumm;

someVar();
getSumm();

*/

/*
//Объявление функции (Function Declaration)
function getSumm() {
	let summ = 1 + 2;
	console.log(summ);
};
getSumm();

// Функциональное выражение (Function Expression)
let showMessage = function () {
	console.log('Привет!');
};
showMessage();
*/

/*
'use strict'
if (2 > 1) {
	function getSumm() {
		let summ = 1 + 2;
		console.log(summ);
	};
}
getSumm();
*/
/*
let getSumm;

if (2 > 1) {
	getSumm = function () {
		let summ = 1 + 2;
		console.log(summ);
	};
}
getSumm();
*/
//===========================================================
//Функции стрелки(arrow functions)
/*
// * Функциональное выражение (Function Expression)
let имя переменной = function (параметр, ...параметр) {
	return выражение;
};

// * Cтрелочная функция (arrow function)
let имя переменной = (параметр, ...параметр) => выражение
*/


// Однострочная стрелочная функция
/*
let getMessage = (text, name) => text + ', ' + name + '!';
console.log(getMessage('Привет', 'Вася'));


// Многострочная стрелочная функция
let getMessage = (text, name) => {
	let message = text + ', ' + name + '!';
	return message;
};
console.log(getMessage('Привет', 'Вася'));
*/
//===========================================================
// * Планирование setTimeout и setInterval
/*
Что бы реализовать планирование существуют два метода:
1.	setTimeout позволяет вызвать функцию один раз
	через определённый интервал времени
2.	setInterval позволяет вызывать функцию регулярно,
	повторяя вызов через определённый интервал времени.
*/
/*
setTimeout(функция или код, задержка, параметр, ...параметр);
setInterval(функция или код, задержка, параметр, ...параметр);
*/
/*
function showMessage(text, name) {
	console.log(`${text}, ${name}!`);
	setTimeout(showMessage, 500, text, name);
}
//setInterval(showMessage, 500, 'Привет', 'Вася');
setTimeout(showMessage, 500, 'Привет', 'Вася');
*/

/*
let result = 0;
function showNumber(num) {
	result += num;
	console.log(result);
	if (result === 5) {
		clearInterval(timeId);
	}
}
let timeId = setInterval(showNumber, 1000, 1);
*/

/*
setTimeout(function () {
	console.log('Привет!');
}, 1000);

setTimeout(() => {
	console.log('Привет!');
}, 1000);
*/


/*
function showMessageOne() {
	console.log("А я первый!");
}
function showMessageTwo() {
	console.log("А я второй(");
}

setTimeout(showMessageTwo, 0);

showMessageOne();

*/
//===========================================================
/*
// Применение функций

// Функция соединения строк
function createMassage(text, name) {
	return `${text}, ${name}!`;
}
// Функция вывода в консоль
function showMassage(message) {
	console.log(message);
}
// Объединяющая функция, вызывает обе функции
function initMessage(text, name) {
	showMassage(createMassage(text, name));
}

initMessage('Привет', 'Фрилансер');
*/

// * Объекты СИНТАКСИС
/*
// Создание объекта

let userInfo = new Object(); // синтаксис "конструктор объекта"
let userInfo = {};  // синтаксис "литерал объекта"
*/


// Свойства объектов. Ключ + значение

//У каждого свойства есть ключ
//(также называемый «имя» или «идентификатор»).
//После имени свойства следует двоеточие ":",
//и затем указывается значение свойства.
//Если в объекте несколько свойств,
//то они перечисляются через запятую.

/* 
let userInfo = {
	name: "Вася", // Свойство объекта
	age: 30, // Последняя (висячая) запятая
};

console.log(userInfo);
console.log(userInfo.name);
 */

// * Имена свойств объекта
/* 
// Имя из двух и больше слов
let userInfo = {
	name: "Вася",
	age: 30,
	"likes javascript": true,
};
console.log(userInfo.name);
console.log(userInfo['name']);
console.log(userInfo["likes javascript"]);
 */

// Вычисляемое либо передаваемое имя
/*
// Вычисляем имя
let firstPart = "likes";
let userInfo = {
	name: "Вася",
	age: 30,
	[firstPart + " javascript"]: true,
};
console.log(userInfo["likes javascript"]);
*/

/*
// Передаем имя
let firstPart = "likes";
let userInfo = {
	name: "Вася",
	age: 30,
	[firstPart]: true,
};
console.log(userInfo[firstPart]);

// Преимущество квадратных скобок
//let key = "name";
//console.log(userInfo[key]);
*/

/*
// Зарезервированные слова в именах
let userInfo = {
	let: "Вася",
	for: 30,
};
console.log(userInfo.let);
console.log(userInfo.for);
*/

/*
// Имена = строки либо символы

let userInfo = {
	0: "Вася", // 0 тоже самое что "0"
};
console.log(userInfo[0]);
console.log(userInfo["0"]);
*/


/*
// Тип данных Symbol

// Создаём символ id с описанием (именем) "id"
let id = Symbol("id");
let userInfo = {
	name: "Вася",
	age: 30,
	[id]: "Некое значение"
};
console.log(userInfo);

// Основное применение символов:
// 1.«Скрытые» свойства объектов
//		Символьное свойство не появится в for..in
// 2. Использование системных символов
// 	Symbol.iterator, Symbol.toPrimitive и т.д.
*/

// Вложенность
/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}
console.log(userInfo);
console.log(userInfo.address);
console.log(userInfo.address.city);
*/


/*
// Свойство из переменной

function makeUserInfo(name, age) {
	return {
		name: name,
		age: age,
		// ...другие свойства
	};
}
let user = makeUserInfo("Вася", 30);
console.log(user);
*/

	/*
	function makeUserInfo(name, age) {
		return {
			name, // Тоже самое что и  name: name,
			age,// Тоже самое что и  age: age,
			"likes javascript": true,
			// ...другие свойства
		};
	}
	let user = makeUserInfo("Вася", 30);
	console.log(user);
	*/

	// Изменение объекта
	/*
	// Добавление свойства
	let userInfo = {
		name: "Вася",
	}
	
	console.log(userInfo);
	
	userInfo.age = 30;
	
	console.log(userInfo);
	
	userInfo['likes javascript'] = true;
	
	console.log(userInfo);
	
	userInfo.address = {
		city: "Uzhhorod",
		street: "Freedom",
	};
	
	console.log(userInfo);
	*/
	
	/*
	// Удаление свойства
	
	let userInfo = {
		name: "Вася",
		age: 30,
		"likes javascript": true
	}
	console.log(userInfo);
	
	delete userInfo.age;
	
	console.log(userInfo);
	
	delete userInfo["likes javascript"];
	
	console.log(userInfo);
	
	*/
	
	// Изменение свойства
	/*
	let userInfo = {
		name: "Вася",
		age: 30,
	}
	console.log(userInfo);
	
	userInfo.age = 18;
	
	console.log(userInfo);
	*/

	
	/*
	// Изменение свойства даже в константе
	
	const userInfo = {
		name: "Вася",
		age: 30,
	}
	console.log(userInfo);
	
	userInfo.age = 18;
	
	console.log(userInfo);
	*/



	/*
	// Копирование объектов
	
	// При копировании объекта в другую переменную
	// сам объект не дублируется, а копируется только ссылка на него
	
	let userInfo = {
		name: "Вася",
		age: 30,
	}
	
	console.log(userInfo);
	
	let user = userInfo;
	
	console.log(user);
	
	user.age = 18;
	
	console.log(userInfo);
	*/

	

// Дублирование объектов (Object.assign)

// Синтаксис
//Object.assign(куда(объект), что(свойство #1), что(свойство #2), ...);
/*
let userInfo = {
	name: "Вася",
	age: 30,
}

let user = Object.assign({}, userInfo);

user.age = 18;

console.log(userInfo);
console.log(user);
*/

/*
// Еще про Object.assign

let userInfo = {
	name: "Вася",
	age: 30,
}
Object.assign(userInfo, { ['likes javascript']: true, city: "Uzhhorod" });
console.log(userInfo);
*/


// Проверка существования свойства
/*
let userInfo = {
	name: "Вася",
	age: 30,
}
//console.log(userInfo.age);

if (userInfo.age) { // true или false
	console.log(userInfo.age);
}
*/

	// Опциональная цепочка
	/*
	let userInfo = {
		name: "Вася",
		age: 30,
		//address: {
		//	city: "Uzhhorod",
		//	street: "Freedom",
		//}
	}
	//console.log(userInfo.address.street);
	console.log(userInfo?.address?.street);
	
	*/
	
	// Оператор "in"
	/*
	let userInfo = {
		//name: "Вася",
		age: 30,
		address: {
			city: "Uzhhorod",
			street: "Freedom",
		}
	}
	if ("name" in userInfo) {
		console.log(userInfo.name);
	}
	*/
	

	//В большинстве случаев сработает сравнение с undefined.
	//либо опциональная цепочка ?.
	//Но есть особый случай, когда свойство существует,
	//но содержит значение undefined.
	//В этом случае необходимо использовать "in".

	/*
	let userInfo = {
		name: undefined,
		// ...следующие свойства
	}
	if (userInfo.name) { // false
		console.log(userInfo.name);
	}
	if ("name" in userInfo) { //true
		console.log(userInfo.name);
	}
	*/



	// Цикл «for…in»
	/*
	// Для перебора всех свойств объекта используется цикл for..in.
	// Этот цикл отличается от изученного ранее цикла for(;;).
	
	for (let key in object) {
		// тело цикла выполняется для каждого свойства объекта
	}
	*/

	

	/*
	let userInfo = {
		name: "Вася",
		age: 30,
		address: {
			city: "Uzhhorod",
			street: "Freedom",
		}
	}
	
	for (let key in userInfo) {
		// ключи
		console.log(key); // name, age, address
		// значения ключей
		console.log(userInfo[key]); // Вася, 30, Object {}
	}
	
	for (let key in userInfo.address) {
		// ключи
		console.log(key); // city, street
		// значения ключей
		console.log(userInfo.address[key]); // Uzhhorod, Freedom
	}*/


	// Методы объекта
	/*
	let userInfo = {
		name: "Вася",
		age: 30,
		address: {
			city: "Uzhhorod",
			street: "Freedom",
		},
		//showInfo: function () {
		//	console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
		//}
		showInfo() {
			console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
		}
	}
	userInfo.showInfo();
	*/

	
		// Использование "this"
		/*
		let userInfo = {
			name: "Вася",
			age: 30,
			address: {
				city: "Uzhhorod",
				street: "Freedom",
			},
			showInfo() {
				//console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
				console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
			}
		}
		userInfo.showInfo();
		*/
		

			/*
			let userInfo = {
				name: "Вася",
				age: 30,
				address: {
					city: "Uzhhorod",
					street: "Freedom",
				},
				showInfo() {
					//function show() {
					//	console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
					//}
			
					// У стрелочной функции нет своего "this" используются
					// значение из внешнего метода userInfo.showInfo()
					let show = () => console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
					show();
				}
			}
			userInfo.showInfo();
			*/
			
// Преимущество "this"
/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	showInfo() {
		console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
		//console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
	}
}
userInfo.showInfo();

let user = userInfo;
userInfo = null;
user.showInfo();
*/


// Функция-конструктор

/*
Обычный синтаксис создания объекта{... } позволяет создать
только один объект. Но зачастую нам нужно создать множество
однотипных объектов, таких как пользователи, элементы меню и т.д.
Это можно сделать при помощи функции - конструктора и оператора "new".
*/
/*
Функции - конструкторы являются обычными функциями.
Но есть два правила:
1. Имя функции - конструктора должно начинаться с большой буквы.
2. Функция - конструктор должна вызываться при помощи
	оператора "new".
*/
/*
function UserInfo(name) {

	// this = {}; Создается пустой объект (неявно)

	this.name = name;
	this.age = 30;

	// return this; Возвращается объект (неявно)
}

console.log(new UserInfo('Вася'));
console.log(new UserInfo('Лена'));
*/

/*
Когда мы пишем наш код, используя объекты для представления сущностей реального мира,
– это называется объектно - ориентированное программирование или сокращённо: «ООП».

ООП является большой предметной областью и интересной наукой само по себе.
Как выбрать правильные сущности ? Как организовать взаимодействие между ними ?
Это – создание архитектуры, и есть хорошие книги по этой теме,
такие как «Приёмы объектно - ориентированного проектирования.
Паттерны проектирования» авторов Эрих Гамма, Ричард Хелм, Ральф Джонсон,
Джон Влиссидес или «Объектно - ориентированный анализ и проектирование с примерами приложений»
Гради Буча, а также ещё множество других книг.
*/

//========================================================================================================================================================
//========================================================================================================================================================

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/
/*
// Задача №1 (верна ли запись)
const userInfo = {
	name: "Вася"
	age: 30
}

// Задача №2 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
	"58": 'Значение свойства'
}
console.log(userInfo[58]);

// Задача №3 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30
}
let user = userInfo;
user.age = 45;

console.log(userInfo.age);

// Задача №4 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
	showInfo() {
		console.log(`${this.name}`);
	}
}
let user = userInfo;
userInfo = null;
user.showInfo();

// Задача №5 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
}
for (const key in userInfo) {
	const value = userInfo[key];
	console.log(value);
}

// Задача №6 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod"
	}
}
for (const key in userInfo.address) {
	console.log(userInfo.address[key]);
}

// Задача №7 (верна ли запись)
const userInfo = {
	name: "Вася",
	age: 30,
	"likes js": true
}
console.log(userInfo."likes js");
*/
// Задача №8
/* 
1.Создайте пустой объект userInfo.
2.Добавьте свойство name со значением Вася.
3.Добавьте свойство age со значением 30.
4.Измените значение свойства name на Лена.
5.Удалите свойство name из объекта.
 */