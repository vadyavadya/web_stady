// Проверка мобильного браузера
// import { isMobile } from "./functions";

/*
let someArray = [];
someArray.push("number 1");
someArray.push("number 2");

console.log(someArray);

console.log(someArray.length);

console.log(someArray[0]);
*/

/*
// * DOM
// * Получаем коллекцию объектов
const listItems = document.querySelectorAll('.list__item');
// * Пробежаться по объектам
listItems.forEach(function (listItem) {
	// Работаем с каждым объектом
});
// * Проверяем колекцию
if (listItems.length) {
	console.log('Есть!');
}

// Получаем первый объект
const list = document.querySelector('.list');
// * Проверяем один объект
if (list) {

}
*/

// * Работа с классами
// const listElement = document.querySelector('.list');

//listElement.classList.add('active');  // НЕ СТАВИТЬ ТОЧКУ!!!!!
//listElement.classList.remove('active');
//listElement.classList.toggle('active');

// * Проверяем есть ли класс у объекта, без ошибки если объекта нет
/*
if (listElement && listElement.classList.contains('list')) { // НЕ СТАВИТЬ ТОЧКУ!!!!!
	console.log('Юху!');
}
*/
/*
const listItems = document.querySelectorAll('.list__item');
if (listItems.length) {
	listItems.forEach(function (listItem) {
		if (listItem.classList.contains('active')) { // НЕ СТАВИТЬ ТОЧКУ!!!!!
			console.log('Юху!');
		}
	});
}
*/

/*
const someButton = document.querySelector('button');
// Добавить прослушивание события
if (someButton) {
	let someNum = 0;
	someButton.addEventListener("click", function (e) {
		++someNum; //someNum = someNum + 1;
		if (someNum === 3) {
			console.log("Красавчик!");
		}
		console.log("Юху!");
	});
}
*/

/*
Логика №1
1) Получаем объект бугрер
2) Получаем объект меню которое кужно открыть
3) Вешаем обработчик события click на бургер (п.1)
4) Добавляем класс к бургеру (п.1)
5) Добавляем класс к меню (п.2)
*/
/*
const menuBurger = document.querySelector('.some-menu__icon');
const menuBody = document.querySelector('.some-menu__body');

if (menuBurger) {
	menuBurger.addEventListener("click", function (e) {
		menuBurger.classList.toggle('_active');
		if (menuBody) {
			menuBody.classList.toggle('_active');
		}
	});
}
*/
/*
Логика №2
1) Получаем объект бугрер
2) Получаем объект меню (родительский)
3) Вешаем обработчик события click на бургер (п.1)
4) Добавляем класс объекту меню (п.2)
*/
/*
const menuBurger = document.querySelector('.some-menu__icon');
// * Получаем родительсний элемент menuBurger с классом .some-menu
const menu = menuBurger.closest('.some-menu');

if (menuBurger) {
	menuBurger.addEventListener("click", function (e) {
		if (menu) {
			menu.classList.toggle('_menu-active');
		}
	});
}*/

/*
// Получаем коллекцию всех объектов с классом .list
const listItems = document.querySelectorAll('.list');
// Проверяем есть ли объекты
if (listItems.length) {
	// Бегаем по каждому из них
	// listItem "роздается" в функции, в неё передается
	// каждый из перебираемых объектов
	listItems.forEach(function (listItem) {
		// Если у объекта есть предок с класом .block ...
		if (listItem.closest('.block')) {
			// ...добавляем класс _active
			listItem.classList.add('_active');
		}
	});
}
*/
/*
const listItems = document.querySelectorAll('.list__link');
if (listItems.length) {
	listItems.forEach(listItem => {
		listItem.addEventListener("click", function (e) {
			listItem.classList.toggle('_active');
			// * Отмена действия по умолчанию
			e.preventDefault();
		});
	});
}
*/


/*
Задача:
1) При клике на ссылку, добавить\убрать класс
2) При клике не на ссылку удалить все классы с объектов .list__link
*/

/*
// * Делегирование событий
// * Слушаем клик на всем документе
const listLinks = document.querySelectorAll('.list__link');
document.addEventListener("click", function (e) {
	// * Получаем объект на который кликнули
	const targetElement = e.target;
	// Проверяем не наш ли это объект?
	// (ищем класс .list__link среди предков или у самого себя )
	if (targetElement.closest('.list__link')) {
		targetElement.closest('.list__link').classList.toggle('_open');
		e.preventDefault();
	} else {
		removeClasses(listLinks, '_open');
	}
	if (targetElement.closest('.someButton')) {
		removeClasses(listLinks, '_open');
	}
});

function removeClasses(elements, className) {
	elements.forEach(function (element) {
		element.classList.remove(className);
	});
}*/


/*
const form = document.querySelector('.form');
if (form) {
	form.addEventListener("submit", function (e) {
		const formNumOne = form.querySelector('#num_1').value;
		const formNumTwo = form.querySelector('#num_2').value;
		const formResult = form.querySelector('.form__result');

		formResult.innerHTML = getSumm(formNumOne, formNumTwo);

		e.preventDefault();
	});
}

const someButton = document.querySelector('.someButton');
if (someButton) {
	someButton.addEventListener("click", function (e) {
		console.log(getSumm(35, 10));

	});
}
function getSumm(numOne, numTwo) {
	return Number(numOne) + Number(numTwo);
}

*/




























