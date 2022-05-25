'use strictr';
// Проверка мобильного браузера
// import { isMobile } from "./functions";


// Пусть переменная "num" будет!
/* let num;
console.log(typeof num);
console.log(num);

// Пусть переменная "num" содержит число 10
num = 10;
console.log(typeof num);
console.log(num);

// Пусть переменная "num" содержит строку Привет!
num = "Привет!";
console.log(typeof num);
console.log(num); */


// Пусть константа "mainPage" ВСЕГДА содержит объект с классом .page

/* const mainPage = document.querySelector('.page');
if (mainPage) {
	console.log(mainPage);
} */

/*
const user = {
	name: "Максим",
	age: "26"
}
user.name = "Лоцы";
console.log(user.name);
*/

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

// * Обратиться к элементу 

// querySelector('.block');
const block = document.querySelector('.block');

// * обратиться к предыдущему элементу
const blockPrev = block.previousElementSibling;
console.log(blockPrev);

// * обращениие к следующему элементу
const blockNext = block.nextElementSibling;
console.log(blockNext);

// * получеие родителчя данного блока непонятно какого уровня
const blockParentN = block.closest('.page');
console.log('Родитель N', blockParentN);

// * получение непосредственного родителя
const blockParent = block.parentElement;
console.log('Родитель');
console.log(blockParentN);

// * получение потомков всех уровней
const blocksChildren = block.querySelectorAll('*');
console.log(blocksChildren);

const blocksChildren2 = document.querySelectorAll('.block>*');
console.log(blocksChildren2);

// * Получение дочерних елементов только первого уровня
const blocksChildrenFirst = block.children;
console.log(blocksChildrenFirst);

// * Первый и последний элемент внутри блока
const blockFirstChild = block.firstElementChild;
console.log(blockFirstChild);
const blockLastChild = block.lastElementChild;
console.log(blockLastChild);


/* // * Получаем коллекцию объектов
const listItems = document.querySelectorAll('.list__item');
// * Пробежаться по объектам
listItems.forEach(function (listItem) {
	// Работаем с каждым объектом
});
// * Проверяем колекцию
if (listItems.length) {
	console.log('Есть!');
} */

// Получаем первый объект
// const list = document.querySelector('.list');
// * Проверяем один объект
/* if (list) {

} */


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

// * Делегирование событий
// * Слушаем клик на всем документе
/* const listLinks = document.querySelectorAll('.list__link');
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
}); */

// * Получить ширину объекта [element].offsetWidth;
// * Получить высоту объекта [element].offsetHeight;
// * Получить положение сверху объекта от документа [element].offsetTop;
// * Полчуть положение объекта относительно окна сверху [element].getBoundingClientRect().top;
/*
element.getBoundingClientRect().top;
element.getBoundingClientRect().left;
 */

// * window.addEventListener('scroll', function (e) {})
// * Вешается на окно

// * Количество прокрученных пикселей window.scrollY window.scrollX

// * Пишем стили в js
// * element.style.['Туту пишем стили']
// element.style.top = '500px';
// element.style.backgroundColor = '#f1f';
// или
// element.style.cssText = 'top:500; bacground-color:red;';

// Проскролить
/*
window.scrollTo({
	top: 500,
	// left:,
	behavior: 'smooth', // что бы было плавно
})
*/
// * Высота экрана window.innerHight

// * Data атрибут
/*
В HTML
<div data-sanches-one class="btn"></div>
В JS
const btn = querySelector('.btn');
btn.setdata.sanchesOne;
*/

// * Проверка наличия атрибута element.hasAttribute('data-sanches')
// * Получить значение атрибута element.getAttribute('data-sanches')
// * Задать значение атрибута element.setAttribute('data-sanches')