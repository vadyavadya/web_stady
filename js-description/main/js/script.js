'use strictr'
//* Содержание:
/*
    1.  operators   v
    2.  if          v
    3.  for-while   v
    4.  functions   v
    5.  object      v
    6.  number      v
    7.  string      v
    8.  array       v
    9.  dom         
    10. events      
    11. scroll      
    12. js-forms    
 */




/* //# Начало
// Создание переменной let
let num;

// Присвоение значения
num = 10;
num = "Привет!";

// Константы значения нельзя поменять
const mainPage = document.querySelector('.page');

// В const типе object значения можно менять!
const user = {
    name: "Максим",
    age: "26"
}
user.name = "Лоцы";
console.log(user.name)
 */



//* Вставить переменную в строку ${someNum}
// let someString = `Мне ${someNum} лет`;



/* //# Операторы
"- + * / % **" оператор сложения "+" НЕ преобразовывает тип данных
Взятие остатка от деления %,
Возведение в степень **.

Операторы сравнения > < >= <= == === != !==

Логические операторы || && !
 */



/*//# Типы данных
В JavaScript есть 8 основных типов данных.

Семь из них называют «примитивными» типами данных:

number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253 - 1).

bigint для целых чисел произвольной длины.

string для строк.Строка может содержать ноль или больше символов, нет отдельного символьного типа.

boolean для true / false.

null для неизвестных значений – отдельный тип, имеющий одно значение null. Этот тип используют разработчики что бы обнулить что то.

undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined. Его пишет js 

symbol для уникальных идентификаторов.

И один не является «примитивным» и стоит особняком:

object для более сложных структур данных.

Оператор typeof позволяет нам увидеть, какой тип данных сохранён в переменной.

Имеет две формы: typeof x или typeof (x).
Возвращает строку с именем типа.Например, "string".
Для null возвращается "object" – это ошибка в языке, на самом деле это не объект.
 */



/* //# Условное ветвление

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
*/

/* //*  короткая запись условия (если требуется выполнить одно действие)
let redult = numOne > numTwo ? console.log('numOne больше чем numTwo') : console.log('Условия НЕ выполненны!');
 */

/* //*  более сложные кнострукции

let message = "Привет";
let messageEnd;
if (5 > 50) {
    messageEnd = ", Вася!";
} else if (5 > 30) {
    messageEnd = ", Оля!";
} else if (5 > 20) {
    messageEnd = ", Петя!";
} else if (5 > 10) {
    messageEnd = ", Андрей!";
} else {
    messageEnd = ", Инокентий!";
}

messageEnd = 5 > 50 ? ", Вася!" :
    5 > 30 ? ", Оля!" :
        5 > 20 ? ", Петя!" :
            5 > 10 ? ", Андрей!" : ", Инокентий"
 */

/* //!  Возвращают false: undefined, 0, "", NaN`
let numOne
if (numOne) {
    console.log('numOne возвращает true');
} else {
    console.log('numOne возвращает FALSE');
}
 */



//# Цыклы

/* //*  Цикл while
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
 */

/* //*  while из одной строки
 let i = 0;
while (i < 5) console.log(i++);  */

/* //*  Конструкция DO...while
 let i = 0;
do {
    console.log(i);
    i++
} while (i < 5);
*/

/* //*  Цикл for
// for (Начало; Условие; Шаг) {
// 	тело цикла
// }

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// можно убрать любую часть цикла
let num = 0;
for (; num < 5; num++) {
    console.log(num);
} */

/* //*   можно остановить выполнение цикла break
for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i == 2) break;
}
*/

/* //*   перейти на следущую итерацию continue
for (let i = 0; i < 10; i++) {
    // если true, пропустить оставшуюся часть тела цикла
    if (i % 2 == 0) continue;
    console.log(i); // 1, затем 3, 5, 7, 9
} */

/* //*   метки перейти на следующкю итерацию внешнего цикла
firstFor: for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 3; size++) {
        if (size == 2) {
            continue firstFor;
        }
        console.log(size);
    }
}
*/

/* //*  Итоги и домашка

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



//# Функции

/* //*  Объявление функции (Function Declaration)
function имя(параметры) {
    ...тело...
}
*/

/* //*  Создание функции

function setConsole(someData) {
    // Выполняемый код
    console.log(someData);
}

// Вызов функции
setConsole("Привет!");

// Пример с параметрами
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

/* //*  Имя функции и её предназначение

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

Функция должна делать только то,
что явно подразумевается её названием.
И это должно быть одним действием.
Два независимых действия обычно подразумевают две функции,
даже если предполагается, что они будут вызываться вместе (в этом случае мы
можем создать третью функцию, которая будет их вызывать).
*/

/* //*   Функция вывода сообщения
function showMessage() {
    console.log('Сообщение');
}
*/

//*  Запуск функции

/* //*   Функцию можно вызывать и до и после обявления

showMessage();

// Функция вывода сообщения
function showMessage() {
    console.log('Сообщение!');
}

showMessage();
 */

/* //*   Вложенность и видимость функций
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

//*  Локальные и внешние переменные

/* //*   Локальная переменная
function showMessage() {
    // Локальная переменная
    let message = "Сообщение";
    console.log(message);
}

console.log(message);
// Выдает ошибку потому что не видит переменную */

/* //*   Внешняя переменная
let message = "Сообщение №1";

function showMessage() {
    // Используется внешняя переменная
    message = "Сообщение №2";
}
console.log("До вызова функции = ", message);
showMessage();
console.log("После вызова функции = ", message);
 */

/* //*   Глобальные переменные видны везде
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

/* //*  Параметры (аргументы)
function calcSumm(numOne = 1, numTwo = 2) {
    console.log(`Переменная numOne:${numOne}`);
    console.log(`Переменная numTwo:${numTwo}`);

    let numSumm = numOne + numTwo;

    console.log(`Сумма:${numSumm}`);
}

calcSumm(5, 5);
*/

/* //*  Функции-колбэки
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

/* //*  Возврат результата
function calcSumm(numOne, numTwo) {

    let numSumm = numOne + numTwo;

    // Возврат
    return numSumm;

    // Дальше код не выполняется

}
let funcRezult = calcSumm(1, 2);

console.log(`Сумма: ${funcRezult}`);
*/

//*  Рекурсия

/* //*   1.Итеративный способ: цикл for
function pow(x, n) {
    let result = 1;

    // умножаем result на x n раз в цикле
    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

console.log(pow(2, 3)); // 8
 */

/* //*   2.Рекурсивный способ
function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}
console.log(pow(2, 3)); // 8
 */

/* //*  Функциональное выражение (Function Expression)
let имя переменной = function (параметр, ...параметр) {
    return выражение;
};
*/

/* //*  Cтрелочная функция (arrow function)
let имя переменной = (параметр, ...параметр) => выражение
 */

/* //*   Однострочная стрелочная функция

let getMessage = (text, name) => text + ', ' + name + '!';
console.log(getMessage('Привет', 'Вася'));
*/

/* //*   Многострочная стрелочная функция
let getMessage = (text, name) => {
    let message = text + ', ' + name + '!';
    return message;
};
console.log(getMessage('Привет', 'Вася'));
 */

/* //# Планирование setTimeout и setInterval

// Что бы реализовать планирование существуют два метода:
// 1.	setTimeout позволяет вызвать функцию один раз
//     через определённый интервал времени
// 2.	setInterval позволяет вызывать функцию регулярно,
//     повторяя вызов через определённый интервал времени.

// setTimeout(функция или код, задержка, параметр, ...параметр);
// setInterval(функция или код, задержка, параметр, ...параметр);


function showMessage(text, name) {
    console.log(`${text}, ${name}!`);
}
setInterval(showMessage, 1000, 'Привет', 'Вася');
setTimeout(showMessage, 2000, 'Привет от таймаута', 'Вася'); */

/* //*  Краткая тело функции внутри
setTimeout(function () {
    console.log('Привет!');
}, 1000);

setTimeout(() => {
    console.log('Привет!');
}, 1000);
*/



//# Объекты СИНТАКСИС

/* //*  Создание объекта

let userInfo = new Object(); // синтаксис "конструктор объекта"
let userInfo = {};  // синтаксис "литерал объекта"
*/

/* //*  Свойства объектов. Ключ + значение

//У каждого свойства есть ключ
//(также называемый «имя» или «идентификатор»).
//После имени свойства следует двоеточие ":",
//и затем указывается значение свойства.
//Если в объекте несколько свойств,
//то они перечисляются через запятую.


let userInfo = {
    name: "Вася", // Свойство объекта
    age: 30, // Последняя (висячая) запятая
};

console.log(userInfo);
console.log(userInfo.name);
 */

//*  Имена свойств объекта

/* //*   Имя из двух и больше слов
let userInfo = {
    name: "Вася",
    age: 30,
    "likes javascript": true,
};
console.log(userInfo.name);
console.log(userInfo['name']);
console.log(userInfo["likes javascript"]);
 */

//*   Вычисляемое либо передаваемое имя

/*//*    Вычисляем имя
let firstPart = "likes";
let userInfo = {
    name: "Вася",
    age: 30,
    [firstPart + " javascript"]: true,
};
console.log(userInfo["likes javascript"]);
*/

/* //*    Передаем имя
let firstPart = "likes";
let userInfo = {
    name: "Вася",
    age: 30,
    [firstPart]: true,
};
console.log(userInfo[firstPart]);
 */

/* //*   ограничений названия свойств нет let for return
let userInfo = {
    let: "Вася",
    for: 30,
};
console.log(userInfo.let);
console.log(userInfo.for);
 */

/* //*   Имена = строки либо символы

let userInfo = {
    0: "Вася", // 0 тоже самое что "0"
};
console.log(userInfo[0]);
console.log(userInfo["0"]);
 */

/* //*   Тип данных Symbol

//*    Создаём символ id с описанием (именем) "id"
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

/* //*   Вложенность имен

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

//*   Свойство из переменной

/* //*    обычнай запись
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

/* //*    Краткая запись
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

//*  Изменение объекта

/* //*   Добавление свойства

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

/* //*   Удаление свойства

let userInfo = {
    name: "Вася",
    age: 30,
    "likes javascript": true
}
console.log(userInfo);

delete userInfo.age;

console.log(userInfo);

delete userInfo["likes javascript"];

console.log(userInfo); */

/* //*   Изменение свойства

let userInfo = {
    name: "Вася",
    age: 30,
}
console.log(userInfo);

userInfo.age = 18;

console.log(userInfo);
*/

/* //*   Изменение свойства даже в константе

const userInfo = {
    name: "Вася",
    age: 30,
}
console.log(userInfo);

userInfo.age = 18;

console.log(userInfo);
 */

/* //*  Копирование объектов
//   При копировании объекта в другую переменную
//   сам объект не дублируется, а копируется только ссылка на него

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

/* //*  Дублирование объектов (Object.assign)

// Синтаксис
//Object.assign(куда(объект), что(свойство #1), что(свойство #2), ...);


 let userInfo = {
    name: "Вася",
    age: 30,
}

let user = Object.assign({}, userInfo);

user.age = 18;

console.log(userInfo);
console.log(user);
 */

/* //*   Пример: слияние объектов
let o1 = { a: 1 };
let o2 = { b: 2 };
let o3 = { c: 3 };

let obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
 */

/* //*   Добавление свойств через Object.assign

let userInfo = {
    name: "Вася",
    age: 30,
}
Object.assign(userInfo, { ['likes javascript']: true, city: "Uzhhorod" });
console.log(userInfo);
 */

/* //*  Проверка существования свойства
let userInfo = {
    name: "Вася",
    age: 30,
}

if (userInfo.age) { // true или false
    console.log(userInfo.age);
}
 */

/* //*  Опциональная цепочка когда не уверен что свойство есть

let userInfo = {
    name: "Вася",
    age: 30,
    //address: {
    //	city: "Uzhhorod",
    //	street: "Freedom",
    //}
}
// console.log(userInfo.address.street); // ! получим ошибку если нет!
console.log(userInfo?.address?.street); //*   использовать
 */

/* //*  Оператор "in"

let userInfo = {
    // name: "Вася",
    age: 30,
    address: {
        city: "Uzhhorod",
        street: "Freedom",
    }
}
if ("name" in userInfo) {
    console.log(userInfo.name);
}

//В большинстве случаев сработает сравнение с undefined.
//либо опциональная цепочка ?.*/
/* //*   Но есть особый случай, когда свойство существует,
//но содержит значение undefined.
//В этом случае необходимо использовать "in".



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

/* //*  Цикл «for…in»

// Для перебора всех свойств объекта используется цикл for..in.
// Этот цикл отличается от изученного ранее цикла for(;;).

// for (let key in object) {
    // тело цикла выполняется для каждого свойства объекта
// }

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
}
 */

/* //*  Методы объекта

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

/* //*  Использование "this"

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
    console.log(this.name);
}

// используем одну и ту же функцию в двух объектах
user.f = sayHi;
admin.f = sayHi;

// эти вызовы имеют  разное значение this
// "this" внутри функции - это объект "перед точкой"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (нет разницы между использованием точки или квадратных скобок для доступа к объекту)
 */

/* //*   У стрелочных функций нет «this»
let user = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};

user.sayHi(); // Ilya
 */

/* //*  Функция-конструктор

// Обычный синтаксис создания объекта{... } позволяет создать
// только один объект. Но зачастую нам нужно создать множество
// однотипных объектов, таких как пользователи, элементы меню и т.д.
// Это можно сделать при помощи функции - конструктора и оператора "new".

// Функции - конструкторы являются обычными функциями.
// Но есть два правила:
// 1. Имя функции - конструктора должно начинаться с большой буквы.
// 2. Функция - конструктор должна вызываться при помощи
//     оператора "new".

function UserInfo(name) {
    // this = {}; Создается пустой объект (неявно)
    // return this; Возвращается объект (неявно)
    this.name = name;
    this.age = 30;

}
console.log(new UserInfo('Вася'));
console.log(new UserInfo('Лена'));

// Когда мы пишем наш код, используя объекты для представления сущностей реального мира,
// – это называется объектно - ориентированное программирование или сокращённо: «ООП».

// ООП является большой предметной областью и интересной наукой само по себе.
// Как выбрать правильные сущности ? Как организовать взаимодействие между ними ?
// Это – создание архитектуры, и есть хорошие книги по этой теме,
// такие как «Приёмы объектно - ориентированного проектирования.
// Паттерны проектирования» авторов Эрих Гамма, Ричард Хелм, Ральф Джонсон,
// Джон Влиссидес или «Объектно - ориентированный анализ и проектирование с примерами приложений»
// Гради Буча, а также ещё множество других книг.
 */



/* //# Number

// Итак, простое число в JS можно записать следующим образом.

// Число
let someNum = 458;
console.log(someNum);

// Десятичные числа
let someNums = 4.58;
console.log(someNums);

let someBigNum = 1000000;
console.log(someBigNum);

let someBigNumE = 1e6; // 1 * 1000000;
console.log(someBigNumE);


let someLittleNum = 0.000001;
console.log(someLittleNum);

let someLittleNumE = 1e-6; // 1 / 1000000;
console.log(someLittleNumE);
 */

/* //*  Шестнадцатеричные, двоичные и восьмеричные числа


// Шестнадцатеричные числа широко используются в JavaScript
// для представления цветов, кодировки символов и многого другого.

console.log(0xFF); // = 0xff = 255

// Реже используются двоичные и восьмеричные числа

console.log(0b11111111); // 255
console.log(0o377); // 255

// Метод toString(base)
// Метод num.toString(base) возвращает строковое
// представление числа в той или иной системе счисления (base).
// base может принимать значения от 2 до 36 (по умолчанию 10).

let num = 255;
console.log(num.toString(16));
console.log(num.toString(8));
console.log(num.toString(2));
*/

/* //*  Округление чисел

В JavaScript встроен объект Math, который содержит
несколько функций для работы с округлением:
 */

/* //*   Math.floor - Округление в меньшую сторону

let numOne = Math.floor(5.8);
let numTwo = Math.floor(2.2);
let numThree = Math.floor(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);
 */

/* //*   Math.ceil - Округление в большую сторону

let numOne = Math.ceil(5.8);
let numTwo = Math.ceil(2.2);
let numThree = Math.ceil(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);
 */

/* //*   Math.round - Округление до ближайшего целого

let numOne = Math.round(5.5);
let numTwo = Math.round(2.4);
let numThree = Math.round(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);
 */

/* //*   Округление до нужзного количество знаков после запятой

let numOne = Math.round(5.845);
console.log(numOne); // 6


// Как нам получить 5.8 или 5.85 ?
*/

/* //*    Способ умножения и деления


let numOne = Math.round(5.845 * 10) / 10; // 5.845 -> 58.45 -> 58 -> 5.8
console.log(numOne);


let numTwo = Math.round(5.845 * 100) / 100; // 584.5 -> 585 -> 5.85
console.log(numTwo);


let numThree = Math.round(5.8449 * 100) / 100; // 584.49 -> 584 -> 5.84
console.log(numThree);
*/

/* //*    Метод toFixed(n) - округляет число до n знаков после запятой
    //* и возвращает строковое представление результата.

let numOne = 5.845;
console.log(numOne.toFixed(1));

// Преобразовать в число
console.log(+numOne.toFixed(1));
console.log(Number(numOne.toFixed(1)));
 */

/* //*  Проблема неточных вычислений

let numOne = Math.round(1.005 * 100) / 100; // Ожидаем 1.01
console.log(numOne);

let numTwo = 12.35;
console.log(numTwo.toFixed(1)); // Ожидаем 12.4



let problem = 0.1 + 0.2 === 0.3;
console.log(problem);
console.log(0.1 + 0.2);


// О том почему так происходит читай по ссылке в описании
// https://learn.javascript.ru/number#netochnye-vychisleniya
 */

/* //*   Решение с помощью toFixed(n)
let sum = 0.1 + 0.2;
console.log(+sum.toFixed(2));
 */

/* //*   Решение с помощью Number.EPSILON

let sourceNum = 1.005 + Number.EPSILON;
let numFour = Math.round(sourceNum * 100) / 100;
console.log(numFour);

console.log(sourceNum * 100);
console.log(Math.round(sourceNum * 100));

// Функцию которая корректирует округление
// десятичных дробей можно найти по ссылке описании
 */

/* //*  Проверка: isFinite и isNaN

Напомню, что существуют специальные числовые значения
такие как Infinity - бесконечность и NaN - ошибка вычисления
Эти значения так же являются типом данных number
но не являются обычными числами.
Для проверки таких значения существуют специальные функции
*/

/* //*   Проверка isNaN(value) преобразует значение в число и проверяет является ли оно NaN

console.log( isNaN(NaN) ); // true
console.log( isNaN("str") ); // true

//* Значение NaN уникально тем, что оно не является равным ничему другому, даже самому себе
console.log(NaN === NaN);
 */

/* //*   Проверка isFinite(value) преобразует аргумент в число и возвращает true, если оно является обычным числом

console.log(isFinite("25")); // "25" -> 25 -> true
console.log(isFinite("Привет!")); // NaN -> false
console.log(isFinite(10 / 0)); // Infinity -> false
 */

/* //*  parseInt и parseFloat преобразование строки в число если есть буквы

// Как мы уже знаем, преобразовать строку в число можно
// с помощью унарного оператора сложения либо специальной функции Number.

let valueOne = +"150";
console.log(valueOne);
console.log(typeof valueOne);

// Но, мы очень часто сталкиваемся со значениями
// у которых есть единица измерения, например

let valueTwo = +"150px";
console.log(valueTwo);
console.log(typeof valueTwo);


// Для получения чисел из такой строки существуют parseInt и parseFloat.
// Если в процессе чтения возникает ошибка, они возвращают полученное до
// ошибки число.

// Функция parseInt возвращает целое число, а parseFloat
// возвращает число с плавающей точкой:
 */

/* //*   parseInt
let valueOneDec = parseInt("150.58px");
console.log(valueOneDec);
console.log(typeof valueOneDec);

// Функция parseInt() имеет необязательный второй параметр.
// Он определяет систему счисления, таким образом parseInt
// может также читать строки с шестнадцатеричными числами,
// двоичными числами и т.д.:

console.log(parseInt('0xff', 16));
console.log(parseInt('ff', 16));
*/

/* //*   parseFloat
let valueTwoDec = parseFloat("150.58px");
console.log(valueTwoDec);
console.log(typeof valueTwoDec);

let valueThreDec = parseFloat("a150.58px");
console.log(valueThreDec);
console.log(typeof valueThreDec);
 */

/* //*  Другие возможности

// Уже знакомый нам объект Math, одержит
// различные математические функции и константы.
// Вот некоторые из них:
 */

/* //*   Math.random()
//Возвращает псевдослучайное число в
//диапазоне от 0(включительно) до 1(но не включая 1)

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
*/

/* //*   Math.max(a, b, c...) / Math.min(a, b, c...)
//Возвращает наибольшее/наименьшее число из перечисленных аргументов.

console.log(Math.max(5, 85, -49));
console.log(Math.min(5, 85, -49));
 */

/* //*   Math.abs()
//возвращает абсолютное значение (модуль) числа.

let num = -58;
console.log(Math.abs(num));
 */

/* //*   Math.pow(n, power)
//Возвращает число n, возведённое в степень power

console.log(Math.pow(5, 8));
 */

//*   Больше функций Math смотри по ссылке в описании
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math



/* //# String

// Запись строк. Кавычки.
// Строку можно создать с помощью одинарных,
// двойных либо обратных кавычек:

let someStringOne = 'Привет! Я строка!'; // Одинарные
let someStringTwo = "Привет! Я строка!"; // Двойные
let someStringThree = `Привет! Я строка!`; // Обратные

console.log(someStringOne);
console.log(someStringTwo);
console.log(someStringThree);

//* Одинарные и двойные кавычки работают, по сути, одинаково,
//* а если использовать обратные кавычки, то в такую строку
//* мы сможем вставлять произвольные выражения, обернув их в ${…}:

let textHi = "Привет!";
let textAll = `${textHi} Я строка!`;

console.log(textAll);

function someSum(a, b) {
    return a + b;
}
console.log(`Сумма: ${someSum(4, 7)}`);
 */

/* //*  Многострочная запись

let text = `Привет!
Вы на канале
Фрилансер по жизни!
`;
console.log(text);
*/

/* // Все что заключено в любые кавычки будет
// иметь тип данных строка


let someString = "158";
let someNum = 158;
console.log(someString);
console.log(typeof someString);
console.log(someNum);
console.log(typeof someNum);

console.log(someString + someNum);
 */

/* //*  Спецсимволы

// Внутри строк можно использовать ряд спецсимволов.
// Все спецсимволы начинаются с обратного слеша,
// \ — так называемого «символа экранирования».
// Вот несколько ихз них:
*/

/* //*   Перевод строки \n

let textOne = `Привет!
Вы на канале
Фрилансер по жизни!
`;
console.log(textOne);

let textTwo = "Привет!\nВы на канале\nФрилансер по жизни!";
console.log(textTwo);
 */

/* //*   Табуляция (отступ) \t

let text = "Привет!\n\tВы на канале\n\t\tФрилансер по жизни!";
console.log(text);
 */

/* //*   Обратный слеш \\

let text = "Привет! Вы на канале Фрилансер по жизни \\ IT и фриланс";
console.log(text);
 */

/* //*   Кавычки \' \"

let text = "Привет! Вы на канале \"Фрилансер по жизни!\"";
console.log(text);
 */

/* //*   Иконки, символы UTF-16 \uКОД, UTF-32 \u{КОД}

let text = "Живи, а работай в свободное время! \u00A9 \u{1F60D}";
console.log(text); */

//*  Работа со строками

/* //*   Длина строки. Свойство length

let textOne = "Привет!";
console.log(textOne.length);
*/

/* //*   Получаем символы строки

let text = "Привет!";
let firstSymbol = text[0];
let lasttSymbol = text[text.length - 1];
console.log(firstSymbol);
console.log(lasttSymbol);


for (const char of text) {
    console.log(char);
}
 */

/* //*   Изменение строки

let text = "Привет!";
text[6] = "."; // ! Тут ничего не поменялось!
console.log(text);
 */

/* //*  Изменение регистра

let text = "Привет!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
 */

//*  Поиск подстроки

/* //*   Метод str.indexOf(substr, pos)

//*  Он ищет подстроку substr в строке str, начиная с позиции pos,
//*  и возвращает позицию, на которой располагается совпадение,
//*  либо -1 при отсутствии совпадений.


let text = "Привет!";
console.log(text.indexOf('рив'));
console.log(text.indexOf('рив', 3));
 */

/* //*   Методы includes, startsWith, endsWith

// Более современный метод str.includes(substr, pos) возвращает true,
// если в строке есть искомая подстрока, либо false, если нет.

let text = "Привет!";
console.log(text.includes('рив'));
console.log(text.includes('рив', 3));

console.log(text.startsWith('рив'));
console.log(text.endsWith('!'));

*/

/* //*    Регистр имеет значение!

let text = "Привет!";
let searchText = "пР";

console.log(text.toLowerCase().includes(searchText.toLowerCase())); //*  Использоваие наскольких свойств
*/

/*В итоге indexOf стоит использовать тогда когда нам нужна
позиция найденой подстроки.
В остальных случаях удобнее использовать includes
*/

/* //*  Получение части строки (подстроки) str.slice()

// В JavaScript существует ряд методов получения подстроки.
// Но достаточно пользоваться одним.

//* Метод str.slice(start [, end]) - Возвращает часть строки
//* от start до end (не включая).


let text = "Привет!";
console.log(text.slice(1, 2));
console.log(text.slice(-2, -1));
console.log(text.slice(1));
*/

/*//*  Сравнение строк

// Алфавитный порядок
console.log("А" > "Б");
console.log("а" > "Б");

// Алфавитный порядок
console.log('Скрипт' > 'Скрипка');

// Кол-во символов
console.log('Слайдер' > 'Слайд');

// Регистр
console.log('Фрилансер' > 'фрилансер');
*/

/* Алгоритм сравнения двух строк довольно прост:
0.  Символы сравниваются по их кодам.
1.	Сначала сравниваются первые символы строк.
2.	Если первый символ первой строки больше(меньше),
    чем первый символ второй, то первая строка
больше(меньше) второй.Сравнение завершено.
3.	Если первые символы равны, то таким же образом
сравниваются уже вторые символы строк.
4.	Сравнение продолжается, пока не закончится одна из строк.
5.	Если обе строки заканчиваются одновременно,
    то они равны.Иначе, большей считается более длинная строка.
*/

/* //* Итого:
    * Есть три типа кавычек. Строки, использующие обратные кавычки, могут занимать более одной строки в коде и включать выражения ${…}.
    * Строки в JavaScript кодируются в UTF-16.
    * Есть специальные символы, такие как разрыв строки \n.
    * Для получения символа используйте [] или метод at.
    * Для получения подстроки используйте slice или substring.
    * Для того, чтобы перевести строку в нижний или верхний регистр, используйте toLowerCase/toUpperCase.
    * Для поиска подстроки используйте indexOf или includes/startsWith/endsWith, когда надо только проверить, есть ли вхождение.
    * Чтобы сравнить строки с учётом правил языка, используйте localeCompare.
    * Строки также имеют ещё кое-какие полезные методы:

    * str.trim() — убирает пробелы в начале и конце строки.
    * str.repeat(n) — повторяет строку n раз.
    * …и другие, которые вы можете найти в справочнике( https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String ).
    * Для строк предусмотрены методы для поиска и замены с использованием регулярных выражений. Но это отдельная большая тема, поэтому ей посвящена отдельная глава учебника Регулярные выражения.

    * Также, на данный момент важно знать, что строки основаны на кодировке Юникод, и поэтому иногда могут возникать проблемы со сравнениями. Подробнее о Юникоде в главе Юникод, внутреннее устройство строк.
 */



//# Масивы

/* //*  Создание массива
let arr = new Array(); // Используется редко
let arrLit = [];
 */

/* //*  Получить элемент можно, указав его номер в квадратных скобках

let arrOne = [
    'Ваня', // 0я позиция
    'Иштван', // 1я позиция
    'Оля', // 2я позиция
];
console.log(arrOne[1]);
// Если елемента нет
console.log(arrOne[5]); // undefined
*/

/* //* В массиве могут храниться элементы любого типа.

let arrTwo = [
    "Коля",
    {
        type: "JS",
        age: 36
    },
    true,
    function () {
        console.log('Привет, я Коля');
    }
];

console.log(arrTwo);
console.log(arrTwo[0]);
console.log(arrTwo[1].type);
console.log(arrTwo[2]);
arrTwo[3]();

// Многомерные массивы
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);
console.log(matrix[0][1]); */

/* //*  Длина массива. Свойство length

let arrOne = ['Ваня', 'Иштван', 'Оля',];
console.log(arrOne);
console.log(arrOne.length);

arrOne.length = 0;
console.log(arrOne);

//* Таким образом, самый простой способ
//* очистить массив – это arrOne.length = 0;

*/

/* //*  Доступ к массиву

// Напомню что массив является объектом и, следовательно,
// ведёт себя как объект. Например, копируется по ссылке:

let arr = ['Ваня', 'Иштван', 'Оля',];
console.log(arr);

let arrNew = arr;

arrNew.length = 2;

console.log(arr);
 */

/* //*  Изменение значений
let arr = ['Ваня', 'Иштван', 'Оля',];

// Меняем существующее
arr[0] = 'Коля';
console.log(arr);

// Добавляем новое
arr[3] = 'Ваня';
console.log(arr);
*/

/* //*  МЕТОДЫ МАССИВОВ

Итак с простеньким разобрались теперь перейдем к методам массивов.
Но перед этим стоит поговорить о вариантах применения для массивов.

Первый из них это очередь или упорядоченная коллекция элементов.
Очередь поддерживает два вида операций:
1. добавление элемента в конец очереди
2. удаление элемента в начале, сдвигая очередь,
    так что второй элемент становится первым.

Другой вариант применения для массивов – структура данных,
называемая стек.
Стек поддерживает два вида операций:
1. добавление элемента в конец
2. удаление последнего элемента

Массивы в JavaScript могут работать и как очередь, и как стек.
Мы можем добавлять/удалять элементы как в начало, так и в конец массива.
И в этом нам помогут следующие методы:
*/

/*  //*   Метод push - добавляет элемент в конец массива

let arr = ['Ваня', 'Иштван', 'Оля',];
arr.push('Вася');
console.log(arr);

arr.push('Дима', 'Катя');
console.log(arr);
 */

/* //*   Метод shift - удаляет элемент в начале,
// так что второй элемент становится первым.

let arr = ['Ваня', 'Иштван', 'Оля',];
arr.shift();
console.log(arr);
 */

/* //*   Метод pop  - удаляет последний элемент

let arr = ['Ваня', 'Иштван', 'Оля',];
arr.pop();
console.log(arr);
*/

/*  //*   Метод unshift  - добавляет элемент в начало массива

let arr = ['Ваня', 'Иштван', 'Оля',];
arr.unshift('Вася');
console.log(arr);

arr.unshift('Дима', 'Катя');
console.log(arr);
 */

/* //* Методы push/pop выполняются быстро, а методы shift/unshift – медленно.

Давайте рассмотрим на примере добавления элемента
в начало массива (unshift);

Просто взять и добавить элемент с номером 0 недостаточно.
Нужно также заново пронумеровать остальные элементы.

Операция unshift должна выполнить 3 действия:
 1. Добавить элемент с индексом 0.
 2. Сдвинуть все элементы вправо, заново пронумеровать их,
    заменив 0 на 1, 1 на 2 и т.д.
 3. Обновить свойство length.

Чем больше элементов содержит массив, тем больше
времени потребуется для того, чтобы их переместить,
больше операций с памятью.

А вот что бы добавить элемент в конец массива (метод push)
не нужно ничего перемещать.
Так же не нужно заново нумеровать элементы. Достаточно
увеличить значение length.
*/

/* //*  Удаление/добавление/изменение конкретных элементов

let arr = ['Ваня', 'Иштван', 'Оля',];

delete arr[1];
console.log(arr);
console.log(arr[1]);
console.log(arr.length);
*/

/* //*  Метод splice. Позволяет добавлять, удалять и заменять элементы.
// Синтаксис arr.splice(index[, deleteCount, elem1, ..., elemN])

 //*   Удаляем элемент
let arrOne = ['Ваня', 'Иштван', 'Оля',];
// Начиная с первой позиции (Иштван), удаляем один элемент
arrOne.splice(1, 1);
console.log(arrOne);

 //*   Удаляем элемент и возвращаем его в переменную
let arrTwo = ['Ваня', 'Иштван', 'Оля',];
let removed = arrTwo.splice(1, 1);
console.log(removed);

 //*   Заменяем элементы
let arrThree = ['Ваня', 'Иштван', 'Оля',];
// Начиная с нулевой позиции (Ваня), заменяем один элемент
arrThree.splice(0, 1, 'Коля');
console.log(arrThree);

 //*   Добавляем элементы
let arrFour = ['Ваня', 'Иштван', 'Оля',];
// Начиная с первой позиции (перед 'Иштван'), добавляем два элемента
arrFour.splice(1, 0, 'Коля', 'Маша');
console.log(arrFour);

 //*   Удаляем элемент
let arrFive = ['Ваня', 'Иштван', 'Оля',];
// Начиная с последней позиции (Оля), удаляем один элемент
arrFive.splice(-1, 1);
console.log(arrFive);
 */

/* //*  Метод slice.
// Cоздаёт новый массив, в который копирует часть либо весь массив
// Синтаксис arr.slice([start], [end]) Не включая [end]

 //*  Копируем часть массива
let arrOne = ['Ваня', 'Иштван', 'Оля',];

//  * Начиная с 1й позиции 'Иштван',
// до 2й позиции 'Оля' (не включая)
let arrTwo = arrOne.slice(1, 2);
console.log(arrTwo);

 //*  Начиная с предпоследней позиции 'Иштван',
// до последней 'Оля' (не включая)
let arrThree = arrOne.slice(-2, -1);
console.log(arrThree);

 //*  Копируем весь массив
let arrFour = arrOne.slice();
console.log(arrFour);
 */

/* //*  Метод concat.
// Cоздаёт новый массив, в который копирует данные из других массивов
// и дополнительные значения (в конец массива)
// Синтаксис arr.concat(arg1, arg2...)

let arrOne = ['Ваня', 'Иштван', 'Оля',];
let arrTwo = arrOne.concat('Петя');
console.log(arrTwo);
 */

//*  Поиск в массиве

/* //*   Методы indexOf/lastIndexOf и includes

// алналоги строковым методам

// 1. arr.indexOf(item, from) ищет item, начиная с индекса from,
//     и возвращает индекс, на котором был найден искомый
//     элемент, в противном случае - 1.
// 2. arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.
// 3. arr.includes(item, from) – ищет item, начиная с индекса from,
//     и возвращает true, если поиск успешен.


let arr = ['Ваня', 'Иштван', 'Оля',];

// indexOf
console.log(arr.indexOf('Иштван'));
console.log(arr.indexOf('Вася'));
console.log(arr.indexOf('Иштван', 2));

// includes
console.log(arr.includes('Иштван'));
console.log(arr.includes('Вася'));
console.log(arr.includes('Иштван', 2));
 */

//*  find и findIndex
/* //*  поиск в массиве объектов с пределённым условием

// Синтаксис
// let result = arr.find(function(item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
// });

let arr = [
    { name: 'Вася', age: 36 },
    { name: 'Коля', age: 18 },
    { name: 'Оля', age: 'Не скажу' },
]

let resultOne = arr.find(function (item, index, array) {
    return item.age === 18;
});

//let resultOne = arr.find(item => item.age === 18);
console.log(resultOne);


//findIndex
let resultTwo = arr.findIndex(item => item.age === 18);
console.log(resultTwo);
 */

//*  filter
/* //*  Метод ищет все элементы, на которых функция-колбэк вернёт true.

// let results = arr.filter(function (item, index, array) {
//     // если true - элемент добавляется к результату, и перебор продолжается
//     // возвращается пустой массив в случае, если ничего не найдено
// });


let arr = [
    { name: 'Вася', age: 36 },
    { name: 'Коля', age: 18 },
    { name: 'Оля', age: 'Не скажу' },
]
let result = arr.filter(function (item, index, array) {
    return item.age >= 18;
});
console.log(result);
 */

/* //*  Сортировка массивов arr.sort()

// Сотритовка слов
let arrOne = ['Иштван', 'Ваня', 'Оля'];
console.log(arrOne);

// Сотритовка чисел
let arrTwo = [8, 22, 1,];
console.log(arrTwo.sort());

// По умолчанию элементы сортируются как строки.
// Для строк применяется лексикографический порядок,
// и действительно выходит, что "8" > "22".
console.log("8" > "22");
 */

/* //*  Метод sort(fn) Для чисел можно применить
// сортирует массив на месте, меняя в нём порядок элементов.

// Сотритовка чисел
let arrTwo = [8, 22, 1,];
console.log(arrTwo.sort());

// Функция сортировки

function compareNumeric(a, b) {
    console.log(`Сравниваем ${a} и ${b}`);
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;

    //return a - b
}
 //*  Сортировка чисел
//console.log(arrTwo.sort((a, b) => a - b));

console.log(arrTwo.sort(compareNumeric));
 */

/* //*  Метод reverse
// меняет порядок элементов в массиве на обратный.

let arrOne = ['Ваня', 'Иштван', 'Оля'];
console.log(arrOne.reverse());
*/

//*  Преобразование массивов

/* //*   Метод map.
// вызывает функцию для каждого элемента массива
// и возвращает массив результатов выполнения этой функции.

// let result = arr.map(function(item, index, array) {
  // возвращается новое значение вместо элемента
// });


let arr = ['Ваня', 'Иштван', 'Оля',];

let result = arr.map(function (item, index, array) {
    return item[0];
});
//let result = arr.map(item => item[0]);
console.log(arr);
console.log(result);
 */

/* //*   Метод split преобразовывает строку в массив по заданному разделителю
//  Синтаксис: str.split(delim)

let str = 'Ваня,Иштван,Оля';

let arr = str.split(',');
console.log(arr);


// Можно ограничить кол-во объектов
// которые попадут в массив

let arrTwo = str.split(',', 2);
console.log(arrTwo);
*/

/* //*   Метод join преобразовывает массив в строку c заданным разделителем
//  Синтаксис: arr.join(glue)

let arr = ['Ваня', 'Иштван', 'Оля',];
let srt = arr.join('.');
console.log(srt);

// Получение строки из массива
let arrTwo = ['Ваня', 'Иштван', 'Оля'];
console.log(String(arrTwo));
 */

/* //*   Проверка Array.isArray()

// Напомню, массивы не образуют отдельный тип данных.
// Они основаны на объектах.

let obj = {};
let arr = [];

console.log(typeof obj);
console.log(typeof arr);

// Как же нам узнать где массив а где нет?

if (Array.isArray(obj)) {
    console.log('Это массив!');
} else {
    console.log('Это не массив!');
}
 */

//*  Перебор элементов

/*  //*   Цикл FOR
let arr = ['Ваня', 'Иштван', 'Оля',];
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
 */

/* //*   Цикл FOR...OF
// Можно использовать для вывода значений
let arr = ['Ваня', 'Иштван', 'Оля',];

for (let arrItem of arr) {
    console.log(arrItem);
} */

/* //*   Метод перебора forEach
// Выполняет функцию для каждого элемента массива

// arr.forEach(function (item, index, array) {
    // ... делать что-то с item
// });

let arr = ['Ваня', 'Иштван', 'Оля',];

arr.forEach(function (item, index, array) {
    console.log(`${item} находится на ${index} позиции в ${array}`);
}); 
*/

/* //*    forEach Стрелочная функция

let arr = ['Ваня', 'Иштван', 'Оля',];
arr.forEach((item, index, array) => {
    console.log(`${item} находится на ${index} позиции в ${array}`);
});
 */

/* //*    forEach Отдельной функцией
let arr = ['Ваня', 'Иштван', 'Оля',];

arr.forEach(show);

function show(item) {
    console.log(item);
}
 */

/* //*  Методы reduce/reduceRight

// Итак, мы выяснили что если нам нужно перебрать
// массив – мы можем использовать forEach, for или for..of.
// Если нам нужно перебрать массив и вернуть
// данные для каждого элемента – мы используем map.

// Методы arr.reduce и arr.reduceRight похожи на эти методы,
// но они немного сложнее и используются для вычисления
// какого-нибудь единого значения на основе всего массива.

// Синтаксис
// let value = arr.reduce(function(previousValue, item, index, array) {
    // ...
// }, [initial]);


// К привычным нам аргументам item, index, array
// добавляется previousValue:

// previousValue – результат предыдущего вызова этой функции,
// равен initial при первом вызове (если передан initial),
// item – очередной элемент массива,
// index – его индекс,
// array – сам массив.

// Функция применяется по очереди ко всем элементам
// массива и «переносит» свой результат на следующий вызов.


let arrOne = [1, 2, 3, 4];
let reduceValueOne = arrOne.reduce(function (previousValue, item, index, array) {
    return item + previousValue;
}, 0);
console.log(reduceValueOne);
 */

/* Алгоритм работы
Шаг №1
previousValue = 0
item = 1
их сумма = 1

Шаг №2
previousValue = 1
item = 2
их сумма = 3

Шаг №3
previousValue = 3
item = 3
их сумма = 6

Шаг №4
previousValue = 6
item = 4
их сумма = 10
*/

/* 
let arrArrow = [1, 2, 3, 4];
let reduceValueArrow = arrArrow.reduce((pValue, item) => item + pValue, 0);
console.log(reduceValueArrow);
 */

/* let arrTwo = ['Ваня', 'Иштван', 'Оля',];

// Если не указать начальное значение, то оно будет равно
// первому элементу массива (previousValue=Ваня)
// А работа метода начнется со второго элемента (item=Иштван)


let reduceValueTwo = arrTwo.reduce(function (previousValue, item, index, array) {
    console.log(previousValue);
    console.log(item);
    return `${item}, ${previousValue}`;
});
console.log(`Пользователи: ${reduceValueTwo}`);


 */

// Метод arr.reduceRight работает аналогично, но проходит по массиву справа налево.

/* //* Итого Массив используем как массив

Следует помнить, что массив является объектом и,
следовательно, ведёт себя как объект.

let arr = ['Ваня', 'Иштван', 'Оля',];
console.log(typeof arr);

// Добавление нечислового свойства
arr.name = "Коля";
console.log(arr);

Но то, что действительно делает массивы особенными – это их внутреннее
представление. Движок JavaScript старается хранить элементы
массива в непрерывной области памяти, один за другим.
Существуют и другие способы оптимизации, благодаря которым
массивы работают очень быстро.

Но все они утратят эффективность, если мы перестанем работать
с массивом как с «упорядоченной коллекцией данных» и начнём
использовать его как обычный объект.

Варианты неправильного применения массива:
1. Добавление нечислового свойства, например: arr.test = 5.
2. Создание «дыр», например: добавление arr[0],
    затем arr[1000](между ними ничего нет).
3. Заполнение массива в обратном порядке, например: arr[1000], arr[999] и т.д.
*/



//# Document

/* //* WINDOW
const windowWidth = window.innerWidth;
console.log(`Ширина окна браузера: ${windowWidth}px`);
*/

//# BOM

/* //*  Navigator

// С помощью объекта navigator,
// мы можем получить информацию о самом
// браузере и операционной системе.


//Браузер
console.log(navigator.userAgent);

if (navigator.userAgent.includes("Chrome")) {
    console.log('Браузер Хром');
} else if (navigator.userAgent.includes("Firefox")) {
    console.log('Браузер Firefox');
}
//Платформа
console.log(navigator.platform);

 */

/* //*  Location

// С помощью объекта location мы можем
// получить текущий URL или
// перенаправить браузер по новому адресу.


//Получаем URL
console.log(location.href);
//Меняем URL
// location.href = "https://fls.guru";
// location.href = "http://127.0.0.1:5500/js-description/main/index.html";
 */

/* //*  History
// Объект history позволяет
// управлять историей браузера,
// передвигаться по посещенным ранее страницам.
// 

history.back();
history.forward(); 

// http://127.0.0.1:5500/js-description/main/index.html
*/

/* //*  Alert
alert("Привет!");
 */

/* //*  Сonfirm
const confirmResult = confirm("Хочешь научиться верстать?");
console.log(confirmResult);
 */

/* //*  Prompt
const promptResult = prompt("Кто ты по жизни?");
console.log(promptResult);
 */


//# DOM

//* Навигация по документу

//*  Самые верхние элементы дерева доступны как свойства объекта document

const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;
/* console.log(htmlElement);
console.log(headElement);
console.log(bodyElement); */


/* //*  Первый и последний дочерние элементы

// Получаем объект body
const bodyElement = document.body;

const firstChildNode = bodyElement.firstChild;
const lastChildNode = bodyElement.lastChild;

console.log(firstChildNode);
console.log(lastChildNode);
 */

/*
 * В документе, возможено, есть ещё «какой-то HTML-код»,
 * но на момент выполнения скрипта браузер ещё
 * до него не дошёл.
 * Поэтому следует размещать скрипт в самом конце
 * документа
 */


/* //*  Коллекция childNodes содержит список всех детей,
//включая текстовые узлы.
const childNodes = document.body.childNodes;
console.log(childNodes);
 */

/* //*  hasChildNodes() для проверки наличия дочерних узлов

console.log(document.body.hasChildNodes());
 */

/* //*  childNodes псевдомассив
Как мы уже видели,
childNodes похож на массив. На самом деле это не массив,
а коллекция – особый перебираемый объект - псевдомассив.

Отличия от массивов:
1.Для перебора коллекции мы можем использовать for..of:
2.Методы массивов не будут работать, потому что
коллекция – это не массив
*/

/* //*  Перебор коллекции

childNodes = document.body.childNodes;

for (let node of childNodes) {
    console.log(node); // покажет все узлы из коллекции
}
 */

/* //*  "Живые" коллекции

// Почти все DOM-коллекции, за небольшим исключением, "живые".
// Другими словами, они отражают текущее состояние DOM.
// Если мы сохраним ссылку на body.childNodes и добавим/удалим
// узлы в DOM, то они появятся в сохранённой коллекции автоматически.
// Еще вернемся к этому позже. */

/* //*  Только для чтения

// DOM-коллекции, и даже более – все навигационные свойства,
// перечисленные далее, доступны только для чтения.
// Мы не можем заменить один дочерний узел на другой,
// просто написав childNodes[i] = ....
// Для изменения DOM требуются другие методы.
 */

/* //*  Соседние и родительский узлы

const previousSiblingNode = bodyElement.previousSibling;
const nextSiblingNode = bodyElement.nextSibling;
const parentNode = bodyElement.parentNode;

console.log(previousSiblingNode);
console.log(nextSiblingNode);
console.log(parentNode);
 */

/* //* ТУТ все собранно по навигации
Навигационные свойства, описанные выше, относятся
ко всем узлам в документе.
В частности, в childNodes находятся и текстовые узлы и
узлы-элементы и узлы-комментарии, если они есть.
*/

/* //*  Получаем коллекцию всех дочерних узлов childNodes

const childNodes = bodyElement.childNodes;
console.log(childNodes);
 */

/*
Но для большинства задач текстовые узлы и
узлы-комментарии нам не нужны. Мы хотим манипулировать
узлами-элементами, которые представляют собой теги и
формируют структуру страницы.
*/

/* //*  Получаем коллекцию всех дочерних элементов children
const bodyСhildren = bodyElement.children;
console.log(bodyСhildren); */

/* //*  Первый и последний дочерние элементы

const firstChild = bodyElement.firstElementChild;
const lastChild = bodyElement.lastElementChild;

console.log(firstChild);
console.log(lastChild);
 */

/* //*  Соседние и родительский элементы

const previousSibling = bodyElement.previousElementSibling;
const nextSibling = bodyElement.nextElementSibling;
const parentElement = bodyElement.parentElement;

console.log(previousSibling);
console.log(nextSibling);
console.log(parentElement);
 */

/* //*  Поиск произвольного элемента

//*  Поиск по селектору класса
const elemsOne = document.querySelectorAll('.lesson__list');
console.log(elemsOne);

//*  Поиск по селектору тега
const elemsTwo = document.querySelectorAll('li');
console.log(elemsTwo);

//*  Поиск по смешанному селектору тега и класса
const elemsThree =
    document.querySelectorAll('li.lesson__item-list');
console.log(elemsThree);

//*  Поиск по тегу первого уровня вложенности
const elemsFour =
    document.querySelectorAll('.lesson__list>li');
console.log(elemsFour);

//*  Поиск по нескольким классам
const elemsFive =
    document.querySelectorAll('.lesson__list, .lesson__text');
console.log(elemsFive);

//*  Поиск по вложенным классам
const elemsSix =
    document.querySelectorAll('.lesson__list .lesson__text');
console.log(elemsSix);

//*  Поиск по ID
const elemsSeven =
    document.querySelectorAll('#listItem');
console.log(elemsSeven);

//*  Поиск по атрибуту
const elemsEight =
    document.querySelectorAll('[data-item]');
console.log(elemsEight);

//*  Поиск по атрибуту со значением
const elemsNine =
    document.querySelectorAll('[data-item="85"]');
console.log(elemsNine);
 */

/* //*  querySelectorAll - статичная коллекция

// Получение конкретного элемента коллекции
const elems = document.querySelectorAll('li');
console.log(elems[2]);

for (const item of elems) {
    console.log(item);
}

elems.forEach(item => {
    console.log(item);
});
 */

/* //*  Искать можно не только в document

const page = document.querySelectorAll('.page');
const title = page[0].querySelectorAll('li');
console.log(title);
 */

/* //*  Неожиданный результат поиска


const subList = document.querySelectorAll('.lesson__sub-list');
const listItems = subList[0].querySelectorAll('.lesson__list .lesson__item-sub-list');
console.log(listItems);


// В данном примере,
// когда мы выбрали ".lesson__list .lesson__item-sub-list"
// в контексте <ul> с классом "lesson__sub-list", элемент с классом
// ".lesson__item-sub-list" были всё равно найден, хотя
// .lesson__list не является потомком элемента в котором происходил
// поиск (".lesson__sub-list").

// По умолчанию, querySelectorAll() проверяет только последний
// элемент без учёта контекста.
 */

/* //*  elem.querySelector(CSS);

// Возвращает первый элемент внутри elem, соответствующий
// данному CSS-селектору.


//const lessonList = document.querySelectorAll('.lesson__list')[0];
const lessonList = document.querySelector('.lesson__list');
console.log(lessonList);
 */

/* //*  document.getElementById(ID)

// Если у элемента есть атрибут id,
// то мы можем получить его вызовом document.getElementById(id),
// где бы он ни находился.


const elem = document.getElementById('listItem');
console.log(elem);


// 1. id - уникален
// 2. Поиск только внутри document.
*/

/* //*  elem.getElementsByTagName(tag)
// ищет элементы с данным тегом и возвращает их
// коллекцию.Передав "*" вместо тега, можно получить всех потомков.


const elems = document.getElementsByTagName('li');
console.log(elems);
 */

/* //*  elem.getElementsByClassName(className)
// возвращает элементы, которые имеют данный CSS - класс.

const elems = document.getElementsByClassName('list__item');
console.log(elems);
 */

/* //*  document.getElementById(ID) и elem.getElementsBy*

// На данный момент, они используются редко,
// так как querySelectorAll может их заменить.
// Но отличия все же есть!

//getElementsBy*
// ВНИМАНИЕ - getElementsBy.. а не getElementBy..


// document.getElementsByName(name) возвращает элементы с
// заданным атрибутом name.Очень редко используется.
// Поиск полько внутри document.


const elems = document.getElementsByName('age');
console.log(elems);
 */

/* //*  Живая статическа коллекции

//*   Получаем статическую коллекцию
const listStatic = document.querySelectorAll('.list__item');

//*   Получаем "живую" коллекцию
const listLive = document.getElementsByClassName('list__item');

console.log(listStatic);
console.log(listLive);

//*   Создаем новый HTML-объект.
const lessonList = document.querySelector('.lesson__list');
lessonList.insertAdjacentHTML(
    "beforeend",
    '<li class="list__item">Новый пункт</li>'
);

console.log(listStatic);
console.log(listLive);
 */

/* //*  closest

// Метод elem.closest(css) ищет ближайшего предка,
// который соответствует CSS - селектору.Сам элемент
// также включается в поиск.

// Предки элемента это родитель, родитель родителя,
// его родитель и так далее.Вместе они образуют цепочку
// иерархии от элемента до вершины.

// Другими словами, метод closest поднимается вверх от
// элемента и проверяет каждого из родителей.Если он
// соответствует селектору, поиск прекращается. Метод возвращает
// либо предка, либо null, если такой элемент не найден.

// Напомню свойство parentElement возвращает только
// непосредственного родителя элемента

// Очень полезный метод, часто используется для проверки
// на существование того или иного родителя, либо для изменения
родителя конкретного элемента

const elem = document.querySelector('.list__item-sub-list');
const parentList = elem.closest('.lesson__list');
console.log(parentList);
 */

/* //*  Проверка matches

// ничего не ищет, а проверяет, удовлетворяет ли
// элемент CSS-селектору, и возвращает true или false.

const elems = document.querySelectorAll('.list__item');
for (let elem of elems) {
    if (elem.matches('[class$="list__item_red"]')) {
        console.log('Крассный');
    } else if (elem.matches('[class$="list__item_blue"]')) {
        console.log('Синий');
    }
}
 */

/* //*  Стоит добавить, что получив объект тем или иным способом
// мы можем применять свойства навигации о которых говорили ранее

const text = document.querySelector('.lesson__text');
const list = text.nextElementSibling;
console.log(list);
 */

//* Изменение документа

/* //*  Cодержимое элемента innerHTML

// Получаем объект
const textElement = document.querySelector('.lesson__text');

// Получаем содержимое объекта "как есть" вместе с HTML
const textElementContent = textElement.innerHTML;
console.log(textElementContent);

//*  Перезаписываем содержимое объекта

textElement.innerHTML = `Живи, а работай в свободное время!`;

// Дописываем содержимое объекта

textElement.innerHTML =
    `<p>${textElementContent}</p> <p>Живи, а работай в
    <span class="yellow">свободное</span> время!</p>`;

console.log(textElement.innerHTML);
 */

/* //*  Cодержимое элемента целиком outerHTML

// Получаем объект
const textElement = document.querySelector('.lesson__text');

// Получаем содержимое объекта "как есть"
// вместе с HTML, а также сам элемент
const textElementContent = textElement.outerHTML;
console.log(textElementContent);


textElement.outerHTML = `<p>Живи, а работай в
    <span class="yellow">свободное</span> время!</p>`;

console.log(textElement.outerHTML);
 */

/* //*  Просто текст элемента textContent

//  Получаем объект
const textElement = document.querySelector('.lesson__text');
const textElementContent = textElement.textContent;
console.log(textElementContent);

// Полезная возможность textContent - записывать
// текст «безопасным способом».

textElement.textContent = `<p>Живи, а работай в
    <span class="yellow">свободное</span> время!</p>`;

console.log(textElement.textContent);

let nameU ="<b>Винни-пух!</b>";

elem1.innerHTML = nameU;
elem2.textContent = nameU;

// Мы не хотим, чтобы на сайте появлялся произвольный HTML-код.
// Присваивание через textContent – один из способов от
// этого защититься.
 */

/* //*  data.

// Cодержимое текстового узла/комментария

// Получаем объект
const textElement = document.querySelector('.lesson__text');
const getComment = textElement.nextSibling;

console.log(getComment);
console.log(getComment.data);


// Изменение текстового узла/комментария
getComment.data = 'Привет';
console.log(getComment.data);
 */

/* //*  Создание элементов и узлов.

// Создание нового элемента (тега)
const newElement = document.createElement('div');

// Наполняем новый элемент
newElement.innerHTML = `Живи, а работай в
    <span class="yellow">свободное</span> время!`;
console.log(newElement);

// Создание нового текстового узла
const newText = document.createTextNode('Привет!');
console.log(newText);


// Созданные объекты находятся в константах,
// но не являются частью документа
 */

//* Методы вставки

/* //* Создаем и наполняем
// Получаем объект
const textElement = document.querySelector('.lesson__text');

// Создание нового элемента (тега)
const newElement = document.createElement('div');
// Наполняем новый элемент
newElement.innerHTML = `Живи, а работай в
    <span class="yellow">свободное</span> время!`;

 */

//*  Вставляем новый элемент...

//*...перед объектом
// textElement.before(newElement);
//*...после объекта
// textElement.after(newElement);
//*...внутрь и в начало объекта
// textElement.prepend(newElement);
//*...внутрь и в конец объекта
// textElement.append(newElement);

//* Вставка нескольких фрагментов сразу
//textElement.append(newElement, "Привет!");

/* //* Можно вставлять строку
textElement.append(`Живи, а работай в
    <span class="yellow">свободное</span> время!`);
 */
/* Другими словами, строки вставляются безопасным способом,
как делает это textContent. Поэтому эти методы могут
использоваться только для вставки DOM-узлов или
текстовых фрагментов. А что, если мы хотим вставить
HTML именно "как HTML", со всеми тегами и прочим,
как это делает innerHTML?
*/

/* //*  insertAdjacentHTML/Text/Element

// Получаем объект
const textElement = document.querySelector('.lesson__text');

// Вставляем текст, HTML, элемент
textElement.insertAdjacentHTML(
    'afterend',
    `<p>Живи, а работай в
    <span class="yellow">свободное</span> время!</p>`
);
 */
/* //* "beforebegin", "afterbegin", "beforeend", "afterend".
"beforebegin" – вставить html непосредственно перед textElement,
"afterbegin" – вставить html в начало textElement,
"beforeend" – вставить html в конец textElement,
"afterend" – вставить html непосредственно после textElement.
*/

//* Дополнительно существуют
/* //* insertAdjacentText и insertAdjacentElement

// Получаем объект
const textElement = document.querySelector('.lesson__text');
// Вставляем текст
textElement.insertAdjacentText(
    'beforeend',
    `Живи, а работай в
    <span class="yellow">свободное</span> время!`
)
// Создание нового элемента (тега)
const newElement = document.createElement('div');
// Наполняем новый элемент
newElement.innerHTML = `Живи, а работай в
    <span class="yellow">свободное</span> время!`;

// Вставляем элемент
textElement.insertAdjacentElement(
    'beforeend',
    newElement
); */
/*
На практике часто используется только insertAdjacentHTML.
Потому что для элементов и текста у нас есть методы
append/prepend/before/after – их быстрее написать,
и они могут вставлять как узлы, так и текст.
*/

/* //*  Перенос элемента
//  Мы можем вставлять не только новые узлы,
// но и переносить существующие.
// Все методы вставки автоматически
// удаляют узлы со старых мест.

// Получаем объект
const lessonBlock = document.querySelector('.lesson');
// Получаем объект
const title = document.querySelector('h3');

// Переносим title в конец блока lessonBlock
lessonBlock.append(title);
 */

/* //*  Клонирование узлов cloneNode

// Если нужен не перенос а именно копия элемента


// Получаем объект
const textElement = document.querySelector('.lesson__list');
// Клонирование без дочерних элементов
// const cloneTextElement = textElement.cloneNode();

// Глубокое клонирование вместе с содержимым
const cloneTextElement = textElement.cloneNode(true);

const lessonBlock = document.querySelector('.lesson');
lessonBlock.append(cloneTextElement);
 */

/* //*  Удаление узлов

// Получаем объект
const textElement = document.querySelector('.lesson__text');
// Удаляем объект
textElement.remove();
 */

//*  Стили и классы

//* Управление классами

/* //*  Свойства className и classList

// Изменение класса является одним
// из наиболее часто используемых действий в JavaScript.
 */

/* //*   Свойство className

// Получаем элемент
const element = document.querySelector('.list__item_red');

// Получаем имена классов
const elementClassNames = element.className;
console.log(elementClassNames);

// Перезаписываем имя класса
element.className = "red";
 */

/* //*   Свойство classList

// Специальный объект с методами для добавления/удаления
// одного класса.

// Получаем элемент
const element = document.querySelector('.list__item_red');


//*  Добавить класс
// element.classList.add('active');
//*  Удалить класс
// element.classList.remove('active');
//*  Добавить класс, если его нет, а если есть удалить.
// element.classList.toggle('active');
//*  Проверка наличия класса, возвращает true/false.
// console.log(element.classList.contains('active'));

// Добавляем класс
element.classList.add('active');
// Проверяем наличие класса
if (element.classList.contains('active')) {
    console.log(`У element есть класс active!`);
}

//classList является перебираемым, поэтому можно
//перечислить все классы при помощи for..of

for (let className of element.classList) {
    console.log(className);
}
 */

//*  Управление стилями

/* //*   element.style

// Получаем елемент
let element = document.querySelector(".lesson__text");

// Задаем стиль с помощью CSS свойства
element.style.color = "red";

// Для свойства из нескольких слов используется camelCase:
// margin-bottom
element.style.marginBottom = "230px";
// z-index
element.style.zIndex = "10";
// и т.д.

// Каждое свойство пишется отдельно

//*  Получение значения свойства
// Только если оно записано в атрибуте style
console.log(element.style.marginBottom);

//*  Сброс стиля
// element.style.marginBottom = "";
 */

//*  Полная перезапись стилей
/* //*  style.cssText

// Получаем элемент
const element = document.querySelector('.list__item_red');

element.style.cssText = `
    margin-bottom: 30px;
    color:orange;
`;
 */

/* //*  Вычисленные стили. getComputedStyle(element, [pseudo])

// Получаем елемент
let element = document.querySelector(".list");

// Получение значения свойства
// Только если оно записано в атрибуте style
console.log(element.style.fontSize); // Ничего не выдает потому что не в style


// Стиль элемента
const elementStyle = getComputedStyle(element);
console.log(elementStyle.fontSize);

// Стиль псевдоэлемента
const elementBeforeStyle = getComputedStyle(element, "::before");
console.log(elementBeforeStyle.backgroundColor);


// Чтобы получить конкретное значение
// Следует писать точное (полное) свойство

// Получаем точное значение
console.log(elementStyle.paddingLeft);
// Получаем не предсказуемую запись
console.log(elementStyle.padding); // В FF <empty string>

//! Только для чтения
// elementStyle.paddingLeft = "50px";
 */




//* Лайвхаки

//*  Получаем элемент
// const element = document.querySelector('.list__item_red');

//*  Стиль элемента
// const elementStyle = getComputedStyle(element);
// console.log(elementStyle.paddingLeft);

//*  Получаем число
// const paddingLeft = parseInt(elementStyle.paddingLeft);
// console.log(paddingLeft);

//*  Помним про единицы измерения
// element.style.marginLeft = "20px";


/* Как мы уже поняли, из JS мы можем управлять как классами
так и стилями объекта.

Управлять классами – более приоритетный вариант по
сравнению со стилями.

Манипулировать свойством style следует только в том случае,
если классы нам помочь не могут. Например, при изменении
координатов объекта на лету.

Одним словом, если мы можем возложить решение
той или иной задачи на плечи CSS путем манипуляции с классами,
то так и следует сделать!
*/

//* Атрибуты и свойства

/* //* У разных DOM-элементов могут быть разные свойства.
// Например, у тега <a>, есть свойства, связанные со ссылками,
// а у тега <input> – свойства, связанные с полем ввода и т.д.

// В HTML у тегов могут быть атрибуты.
// Когда браузер парсит HTML, чтобы создать
// DOM-объекты для тегов, он распознаёт стандартные
// атрибуты и создаёт DOM-свойства для них.

// Каждый DOM-узел принадлежит соответствующему встроенному классу.

const link = document.querySelector('.lesson__link');
const input = document.querySelector('.lesson__input');

console.log(link.href);
console.log(input.href);

console.log(link.value);
console.log(input.value);
 */

/* //*  Получить список доступных свойств!!!!
const link = document.querySelector('.lesson__link');
console.dir(link);
 */

//*  Произвольные атрибуты

/* // Получаем элемент
const lessonText = document.querySelector('.lesson__text');

//*  Устанавливаем значение атрибута. setAttribute
lessonText.setAttribute('name', 'value');

//*  Проверяем наличие атрибута. hasAttribute
console.log(lessonText.hasAttribute('name'));

//*  Получаем значение атрибута. getAttribute
console.log(lessonText.getAttribute('name'));

//* Удаляем атрибут. removeAttribute
lessonText.removeAttribute('name')
 */

/* //*  Синхронизация между атрибутами и свойствами задать аттрибут свойство

// Мы можем обратиться к тому или иному свойству через
// методы доступа к атрибутам.
// Когда стандартный атрибут изменяется, соответствующее
// свойство автоматически обновляется.
// Это работает и в обратную сторону (за некоторыми исключениями).

//Получаем элемент
const input = document.querySelector('.lesson__input');

input.setAttribute('id', '123');
console.log(input.id);

input.id = "321";
console.log(input.getAttribute('id'));

//*  Чаще синхронизация – односторонняя: свойство зависит от атрибута, но не наоборот.

// Например, при изменении свойства input.value атрибут input.getAttribute('value') не меняется

input.setAttribute('value', 'Привет!');
console.log(input.value);

input.value = "Как дела?";
console.log(input.getAttribute('value'));
 */

/* //* Нестандартные атрибуты, dataset

// Мы уже использовали произвольные атрибуты,
// но это рискованно.

// Все атрибуты, начинающиеся с префикса «data-»,
// зарезервированы для использования программистами.
// Они доступны в свойстве dataset.

//Получаем элемент
const lessonText = document.querySelector('.lesson__text');

//Получаем data-атрибут
console.log(lessonText.dataset.size);

//Перезаписываем data-атрибут
lessonText.dataset.size = "5810";
console.log(lessonText.dataset.size);

// data-size-value
console.log(lessonText.dataset.sizeValue);
 */

/* //*  Полезные свойства

const link = document.querySelector('.lesson__link');

//Получаем тег элемента
console.log(link.tagName);

//Скрыть/показать элемент
link.hidden = true;
console.log(link.hidden);
 */



//*  Лайфхаки
/* //*  получение потомков всех уровней

const blocksChildren = block.querySelectorAll('*');
console.log(blocksChildren);

const blocksChildren2 = document.querySelectorAll('.block>*');
console.log(blocksChildren2);
 */

/* //*  Получение дочерних елементов только первого уровня

const blocksChildrenFirst = block.children;
console.log(blocksChildrenFirst);
 */

/*//*  Первый и последний элемент внутри блока

const blockFirstChild = block.firstElementChild;
console.log(blockFirstChild);
const blockLastChild = block.lastElementChild;
console.log(blockLastChild);
 */

/* //*  Получаем коллекцию объектов
const listItems = document.querySelectorAll('.list__item');

//*  Пробежаться по объектам
listItems.forEach(function (listItem) {
    // Работаем с каждым объектом
});

//*  Проверяем колекцию
if (listItems.length) {
    console.log('Есть!');
}
*/

/* //* Проверяем есть ли один объект
// Получаем первый объект
const list = document.querySelector('.list');
//*  Проверяем один объект
if (list) {

} */

//*  Работа с классами
// const listElement = document.querySelector('.list');

//listElement.classList.add('active');  // НЕ СТАВИТЬ ТОЧКУ!!!!!
//listElement.classList.remove('active');
//listElement.classList.toggle('active');

//*  Проверяем есть ли класс у объекта, без ошибки если объекта нет

/* //* Проверить наличие класса
if (listElement && listElement.classList.contains('list')) { // НЕ СТАВИТЬ ТОЧКУ!!!!!
    console.log('Юху!');
}
*/


//*  Делегирование событий
//*  Слушаем клик на всем документе
/* const listLinks = document.querySelectorAll('.list__link');
document.addEventListener("click", function (e) {
    //*  Получаем объект на который кликнули
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



/* //*  Введение в JS события


Отлавливать возникновение события мы будем с помощью
специальных обработчиков.

Любому событию можно назначить обработчик, то есть функцию,
которая сработает, как только произойдет нужное нам событие.
Именно благодаря этим обработчикам JavaScript может
реагировать на действия пользователя.

Есть несколько способов назначить событию обработчик.
Сейчас о них и поговорим
*/

// Использование атрибута HTML

//*  Использование DOM-объекта
// const button = document.querySelector('.button');

/* //* С созданием функции
button.onclick = function () {
    console.log('Клик!');
}
 */

/* //* С существующей функцией
function showConsole() {
    console.log('Клик!');
}
button.onclick = showConsole;

// Важно! Без круглых скобок!
 */

/* //* Недостаток
Фундаментальный недостаток описанных выше способов
назначения обработчика – невозможность повесить несколько
обработчиков на одно событие.
Каждое новое назначение обработчика перезапишет предыдущее:
*/
/*const button = document.querySelector('.button');

button.onclick = function () {
    console.log('Клик!');
}
button.onclick = function () {
    console.log('Клак!');
}
*/

/* //*  Обработчик событий addEventListener/removeEventListener

// Существует основной способ назначения
// обработчиков при помощи специальных
// методов addEventListener и removeEventListener,
// которые лишены этого недостатка

// element.addEventListener(event, handler[, options]);


const button = document.querySelector('.button');

button.addEventListener("click", function (e) {
    console.log('Клик!');
});
button.addEventListener("click", function (e) {
    console.log('Клак!');
});
 */

/*
const button = document.querySelector('.button');

function showConsole() {
    console.log('Клик!');
    button.removeEventListener("click", showConsole);
}

button.addEventListener("click", showConsole);
//button.removeEventListener("click", showConsole);
 */

/* //*  Опции

const options = {
    "capture": false, // фаза, на которой должен сработать обработчик
    "once": true, // если true, тогда обработчик будет
    //автоматически удалён после выполнения.
    "passive": false // если true, то указывает, что обработчик
    //никогда не вызовет preventDefault()
}

const button = document.querySelector('.button');

function showConsole() {
    console.log('Клик!');
}

button.addEventListener("click", showConsole, options);
 */

/* //*  Метод addEventListener может показаться сложнее чем, скажем, onclick.
Но, из-за того что он обладает преимуществом
"прослушивания" нескольких событий,
а также учитывая тот факт что существуют события которые можно отловить
только при помощи этого метода.
В результате разработчики чаще используют именно его.
*/

//*  Объект события
/* //*  Чтобы хорошо обработать событие, могут понадобиться детали того,
что произошло.Не просто «клик» или «нажатие клавиши»,
а также – какие координаты указателя мыши, какая клавиша
нажата и так далее.
Когда происходит событие, браузер создаёт объект события,
записывает в него детали и передаёт его в качестве
аргумента функции - обработчику.
*/

/* const button = document.querySelector('.button');

function showConsole(event) {
    //*  Тип события
    // console.log(event.type);
    //*  Объект на котором сработал обработчик
    // console.log(event.target);
    //*  Объект к которому назначен обработчик
    // console.log(event.currentTarget);
    //*  Положение курсора по оси X
    // console.log(event.clientX);
    //*  Положение курсора по оси Y
    // console.log(event.clientY);

    //*  Все детали события
    // console.log(event);
}

button.addEventListener("click", showConsole);
// button.addEventListener("mouseenter", showConsole);
 */


/* //*  Всплытие и погружение

const block = document.querySelector('.block');
const blockInner = document.querySelector('.block__inner');
const blockInnerInner = document.querySelector('.block__inner-inner');

// Всплытие
// Когда на элементе происходит событие, обработчики
// сначала срабатывают на нём, потом на его родителе,
// затем выше и так далее, вверх по цепочке предков.

// Погружение
// Для того чтобы что-то всплыло, оно должно сначало погрузиться :)

block.addEventListener("click", function (event) {
    console.log('Клик на Блок!');
    //console.log(event.target);
});
blockInner.addEventListener("click", function (event) {
    console.log('Клик на Блок второго уровня!');
}, { "capture": false });
blockInnerInner.addEventListener("click", function (event) {
    console.log('Клик на Блок третьего уровня!');
    //*  Остановка всплытия
    //event.stopPropagation();
});

// В современной разработке стадия погружения используется очень редко,
// обычно события обрабатываются во время всплытия.
 */


/* //*  Делегирование событий

// Всплытие и перехват событий позволяет реализовать
// один из самых важных приёмов разработки – делегирование.

const lesson = document.querySelector('.lesson');

function showConsole() {
    console.log('Ура!');
}
lesson.addEventListener("click", function (event) {
    if (event.target.closest('.button')) {
        showConsole();
    } else {
        console.log("не кнопка")
    }
});
 */

/* //* отмена Действия браузера по умолчанию


// Многие события автоматически влекут за собой действие браузера.
// Например:
// - Клик по ссылке инициирует переход на новый URL.
// - Нажатие на кнопку «отправить» в форме – отсылку её на сервер.
// - Зажатие кнопки мыши над текстом и её движение
//     в таком состоянии – инициирует его выделение и т.д.

// Если мы обрабатываем событие в JavaScript,
// то зачастую такое действие браузера нам не нужно.
// К счастью, его можно отменить.


const link = document.querySelector('.link');


link.addEventListener("click", function (event) {
    console.log('Наши действия');
    //*  отменить действие браузера (переход по ссылке)
    event.preventDefault();
});
 */
/* //* Второй вариант
link.onclick = function () {
    console.log('Наши действия');
    // отменить действие браузера (переход по ссылке)
    return false;
}
*/

/* //* Необязательная опция passive
Необязательная опция passive: true для addEventListener
сигнализирует браузеру, что обработчик не собирается выполнять
preventDefault(). Почему это может быть полезно ?
Есть некоторые события, как touchmove на мобильных
устройствах(когда пользователь перемещает палец по экрану),
которое по умолчанию начинает прокрутку, но мы можем отменить
это действие, используя preventDefault() в обработчике.
Поэтому, когда браузер обнаружит такое событие,
он должен для начала запустить все обработчики и после,
если preventDefault не вызывается нигде, он может начать прокрутку.
Это может вызвать ненужные задержки в пользовательском интерфейсе.
Опция passive: true сообщает браузеру, что обработчик
не собирается отменять прокрутку.Тогда браузер начинает её немедленно,
обеспечивая максимально плавный интерфейс, параллельно обрабатывая событие.
Для некоторых браузеров(Firefox, Chrome) опция passive по умолчанию
включена в true для таких событий, как touchstart и touchmove.
*/
/*
const link = document.querySelector('.link');

link.addEventListener("click", function (event) {
    console.log('Наши действия');
    // отменить действие браузера (переход по ссылке)
    event.preventDefault();
}, { "passive": true });
*/


//* Основы событий мыши

//*  Типы событий мыши

// Мы можем разделить события мыши на две категории:
// «простые» и «комплексные».


//*  Простые события
//*  Самые часто используемые простые события:
/*
mousedown / mouseup - Кнопка мыши нажата / отпущена над элементом.
mouseover / mouseout - Курсор мыши появляется над элементом и уходит с него.
mousemove - Каждое движение мыши над элементом генерирует это событие.
contextmenu - Вызывается при попытке открытия контекстного меню,
                    как правило, нажатием правой кнопки мыши.
                    Но, заметим, это не совсем событие мыши,
                    оно может вызываться и специальной клавишей клавиатуры.
*/
//*  Комплексные события
/*
click - Вызывается при mousedown, а затем mouseup над одним
и тем же элементом, если использовалась основная кнопка мыши.
dblclick - Вызывается двойным кликом на элементе.
Комплексные события состоят из простых, поэтому
в теории мы могли бы без них обойтись.
Но хорошо, что они существуют, потому что работать с ними очень удобно.
*/

/* const button = document.querySelector('.button');

button.addEventListener("mousedown", function (event) {
    console.log(`Нажата кнопка ${event.which}`);
});

button.addEventListener("click", function (event) {
    console.log('Нажата основная кнопка мыши');
});

button.addEventListener("contextmenu", function (event) {
    console.log('Вызвано контекстное меню (не основная кнопка мыши)');
}); */

/* //* event.which Какая кнопка мыши нажата
event.which = 1 - Нажата основная кнопка мыши (обычно левая)
event.which = 2 - Нажата средняя кнопка мыши (колесо)
event.which = 3 - Нажата не основная кнопка мыши (обычно правая)
*/

/* //*  Координаты: clientX/Y, pageX/Y

const blockForMouse = document.querySelector('.block');

blockForMouse.addEventListener("mousemove", function (event) {
    blockForMouse.innerHTML =
        `clientX - ${event.clientX} <br> clientY - ${event.clientY}`;
});
 */

//*  Наведение мыши: mouseover/out, mouseenter/leave

/* //*  События mouseover/mouseout, relatedTarget


// Событие mouseover происходит в момент, когда курсор оказывается
// над элементом, а событие mouseout – в момент,
// когда курсор уходит с элемента.


const blockForMouse = document.querySelector('.block');

blockForMouse.addEventListener("mouseover", function (event) {
    blockForMouse.innerHTML = `Курсор над элементом`;
});
blockForMouse.addEventListener("mouseout", function (event) {
    blockForMouse.innerHTML = `Курсор уходит с элемента`;
});
 */

/* //*target, relatedTarget.
Эти события являются особенными, потому что у них имеется свойство
relatedTarget. Оно «дополняет» target. Когда мышь переходит
с одного элемента на другой, то один из них будет target,
а другой relatedTarget.

Для события mouseover:
event.target – это элемент, на который курсор перешёл.
event.relatedTarget – это элемент,
с которого курсор ушёл(relatedTarget → target).

Для события mouseout наоборот:
event.target – это элемент, с которого курсор ушёл.
event.relatedTarget – это элемент,
на который курсор перешёл(target → relatedTarget).
*/

/* const blockForMouse = document.querySelector('.block');

blockForMouse.addEventListener("mouseover", function (event) {
    console.log(event.target);
    console.log(event.relatedTarget);
});
blockForMouse.addEventListener("mouseout", function (event) {
    console.log(event.target);
    console.log(event.relatedTarget);
});
 */

/* const blockForMouse = document.querySelector('.block');

blockForMouse.addEventListener("mouseover", function (event) {
    console.log(`Курсор над элементом ${event.target.className}`);
});
blockForMouse.addEventListener("mouseout", function (event) {
    console.log(`Курсор уходит с элемента ${event.target.className}`);
});
 */

/* //*  События mouseenter и mouseleave

//* Пара важных отличий:
// 1) Переходы внутри элемента, на его потомки и с них, не считаются.
// 2) События mouseenter / mouseleave не всплывают.


const blockForMouse = document.querySelector('.block');

blockForMouse.addEventListener("mouseenter", function (event) {
    console.log(`Курсор над элементом`);
});
blockForMouse.addEventListener("mouseleave", function (event) {
    console.log(`Курсор уходит с элемента`);
});
 */

/* //*  Делегирование событий наведения мыши

const blockForMouse = document.querySelector('.block-for-mouse');
blockForMouse.addEventListener("mouseover", function(event) {
    let target = event.target.closest('span');
    // переход не на <span> - игнорировать
    if (!target) return;
    target.style.cssText = `background-color: #77608d;`;
});
blockForMouse.addEventListener("mouseout", function(event) {
    let target = event.target.closest('span');
    // переход не на <span> - игнорировать
    if (!target) return;
    target.style.cssText = ``;
});
 */

/* //*  Перетаскивание Drag`n`Drop

const gragField = document.querySelector('.drag-field');
const gragItem = document.querySelector('.drag-field__item');

gragItem.addEventListener("mousedown", function(event) {

    let coordsItemX = event.clientX - gragItem.getBoundingClientRect().left;
    let coordsItemY = event.clientY - gragItem.getBoundingClientRect().top;

    let gragItemSizes = {
        width: gragItem.offsetWidth,
        height: gragItem.offsetHeight
    }
    let gragFieldSizes = {
        left: gragField.getBoundingClientRect().left + scrollX,
        top: gragField.getBoundingClientRect().top + scrollY,
        right: gragField.getBoundingClientRect().left + scrollX + gragField.offsetWidth,
        bottom: gragField.getBoundingClientRect().top + scrollY + gragField.offsetHeight
    }

    gragItem.style.position = 'absolute';
    gragItem.style.zIndex = 1000;
    document.body.append(gragItem);

    moveItem(event.pageX, event.pageY);

    function moveItem(pageX, pageY) {
        let currentX = pageX - coordsItemX;
        let currentY = pageY - coordsItemY;

        if (
            currentX + gragItemSizes.width <= gragFieldSizes.right &&
            currentX >= gragFieldSizes.left
        ) {
            gragItem.style.left = `${currentX}px`;
        } else {
            if (currentX + gragItemSizes.width > gragFieldSizes.right) {
                gragItem.style.left = `${gragFieldSizes.right - gragItemSizes.width}px`;
            }
            if (currentX < gragFieldSizes.left) {
                gragItem.style.left = `${gragFieldSizes.left}px`;
            }
        }
        if (
            currentY + gragItemSizes.height <= gragFieldSizes.bottom &&
            currentY >= gragFieldSizes.top
        ) {
            gragItem.style.top = `${currentY}px`;
        } else {
            if (currentY + gragItemSizes.height > gragFieldSizes.bottom) {
                gragItem.style.top = `${gragFieldSizes.bottom - gragItemSizes.height}px`;
            }
            if (currentY < gragFieldSizes.top) {
                gragItem.style.top = `${gragFieldSizes.top}px`;
            }
        }
    }

    let currentDroppable = null;

    function onDragItem(event) {
        moveItem(event.pageX, event.pageY);

        gragItem.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        gragItem.hidden = false;

        if (!elemBelow) return;
        let droppableBelow = elemBelow.closest('.drag-field__point');

        if (currentDroppable !== droppableBelow) {
            if (currentDroppable) {
                currentDroppable.classList.remove('_active');
                gragItem.classList.remove('_active');
            }
            currentDroppable = droppableBelow;
            if (currentDroppable) {
                currentDroppable.classList.add('_active');
                gragItem.classList.add('_active');
            }
        }
    }
    document.addEventListener('mousemove', onDragItem);

    document.addEventListener("mouseup", function(event) {
        document.removeEventListener('mousemove', onDragItem);
    }, { "once": true });
});
gragItem.addEventListener("dragstart", function(event) {
    event.preventDefault();
});
 */

//===================================================

//*  Клавиатура

/*
* Основные события при работе с клавиатурой это:
    keydown – происходит при нажатии клавиши
    keyup – при отпускании клавиши
*/

//*  event.code и event.key

/*
document.addEventListener("keydown", function (event) {
    console.log(`Нажата клавиша ${event.code} (${event.key})`);
});
document.addEventListener("keyup", function (event) {
    console.log(`Отжата клавиша ${event.code} (${event.key})`);
});
*/

/*
Если пользователь работает с разными языками, то при переключении
на другой язык символ изменится с "G" на совершенно другой.
Получившееся станет новым значением event.key,
тогда как event.code останется тем же: "KeyG".
*/

/*
document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
        console.log('Отмена действия!');
    }
});
*/


/*
* Автоповтор
При долгом нажатии клавиши возникает автоповтор: keydown срабатывает
снова и снова, и когда клавишу отпускают, то отрабатывает keyup.
Так что ситуация, когда много keydown и один keyup, абсолютно нормальна.
Для событий, вызванных автоповтором, у объекта события
свойство event.repeat равно true.
*/
/*
document.addEventListener("keydown", function (event) {
    console.log(`Нажата клавиша ${event.code} (${event.key})`);
    console.log(event.repeat);
});
*/

/*
// Пример
const txtItem = document.querySelector('.textarea__item');
const txtItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.textarea__counter span');
txtCounter.innerHTML = txtItemLimit;

txtItem.addEventListener("keyup", txtSetCounter);
txtItem.addEventListener("keydown", function (event) {
    if (event.repeat) txtSetCounter();
});

function txtSetCounter() {
    const txtCounterResult = txtItemLimit - txtItem.value.length;
    txtCounter.innerHTML = txtCounterResult;
}
*/

/*
document.addEventListener('keyup', function (event) {
    if (event.code === 'Escape') {
        menuBody.classList.remove('_active');
    }
});
*/

//===================================================

//*  Прокрутка (скролл)
/*
window.addEventListener('scroll', function (event) {
    //*  кол-во прокрученных пикселей по вертикали
    //*  scrollY или pageYOffset (устарел)
    //*  кол-во прокрученных пикселей по горизонтали
    //*  scrollX или pageXOffset (устарел)

    console.log(`${scrollY}px`);
});
*/
// Предотвращение прокрутки
/*
Нельзя предотвратить прокрутку, используя event.preventDefault()
в обработчике scroll,  потому что он срабатывает после того,
как прокрутка уже произошла.

Но можно предотвратить прокрутку, используя event.preventDefault()
на событии, которое вызывает прокрутку, например,
на событии keydown для клавиш pageUp и pageDown.

Способов инициировать прокрутку много, более надёжный
способ – использовать CSS, свойство overflow: hidden;.
*/


/*
Использование

Событие прокрутки scroll позволяет реагировать на прокрутку страницы
или элемента. Есть много хороших вещей, которые при этом можно сделать.

- Показать / скрыть дополнительные элементы управления или информацию,
основываясь на том, в какой части документа находится пользователь.
Например анимация при скроле или ленивая подгрузка
- Подгрузить данные, когда пользователь прокручивает страницу вниз
до конца. Бесконечный скрол.

По ссылкам в описании есть видео с примерами реализации этого
функционала с помощью события scroll. Но, более интересным решением
данных задач будет использование IntersectionObserver, который позволяет
веб-приложениям асинхронно следить за изменением пересечения
элемента с его родителем или областью видимости документа.

Подробно об IntersectionObserver я расскажу в отдельном видео

*/

//===================================================

//*  События загрузки страницы
/*
* 1) DOMContentLoaded – браузер полностью загрузил HTML,
    было построено DOM - дерево, но внешние ресурсы,
    такие как картинки <img> и стили, могут быть ещё не загружены.
* 2) load – браузер загрузил HTML и внешние ресурсы (картинки, стили и т.д.)
* 3) beforeunload / unload – пользователь покидает страницу.
*/

/*
* document.readyState - состояние загрузки

Есть три возможных значения:
* "loading" – документ загружается.
* "interactive" – документ был полностью прочитан.
* "complete" – документ был полностью прочитан
* и все ресурсы(такие как изображения) были тоже загружены.
*/


/*
//*  Событие DOMContentLoaded срабатывает на объекте document
document.addEventListener("DOMContentLoaded", readyDom);

// Событие load срабатывает на объекте window
window.addEventListener("load", readyLoad);

function readyDom() {
    const image = document.querySelector('.image');
    console.log(document.readyState);
    console.log('DOM загружен!');
    console.log(image.offsetWidth);
}
function readyLoad() {
    console.log(document.readyState);
    const image = document.querySelector('.image');
    console.log('Страница загружена!');
    console.log(image.offsetWidth);
}
*/


/*
//*  Событие beforeunload срабатывает на объекте window
window.addEventListener("beforeunload", beforeUnLoad);

function beforeUnLoad(event) {
    // Отмените событие, как указано в стандарте.
    event.preventDefault();
    // Chrome требует установки возвратного значения.
    event.returnValue = '';
}


// Событие unload срабатывает на объекте window
window.addEventListener("unload", function (e) {
    // Отправка статистики в фоновом режиме и т.д.
    // navigator.sendBeacon(url, data)
    // https://w3c.github.io/beacon/.
});
*/
































/*
Запрет f12
window.onkeydown = function (evt) {
    if (evt.code == "F12") return false;
};

Проверка мобильного браузера
import { isMobile } from "./functions";
*/