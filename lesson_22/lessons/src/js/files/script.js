// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

const block = document.querySelector('.block');
if (block) {
    block.addEventListener('click', liteSpoller);
}

function liteSpoller(event) {
    // if ((event.target.className == "block__title"){

    if (event.target.closest('.block__title')) {
        const paragraph = event.target.nextElementSibling;

        // Вариант 1
        /* 
        if (paragraph.hasAttribute('hidden')) {
            paragraph.removeAttribute('hidden');
        } else {
            paragraph.setAttribute('hidden', true);
        } 
        */

        // Вариант 2
        /* 
        if (paragraph.hidden) {
            paragraph.hidden = false;
        } else {
            paragraph.hidden = true;
        } 
        */

        // Вариант 3 по классу

        paragraph.classList.toggle('_active');
    }
}
/*
const sector = document.querySelector('.sector');
const sectorWith = sector.offsetWidth;
console.log(sectorWith);
const sectorHeigh = sector.offsetHeight;
console.log(sectorHeigh); */


// * Типа стики для шапки
/* const text = document.querySelector('.text');
const sector = document.querySelector('.sector');
const sectorHeight = sector.offsetHeight;
console.log(sectorHeight);

const moment = sectorHeight + 4;
window.addEventListener('scroll', function (e) {
    const textPosition = text.getBoundingClientRect().top;


    if (textPosition <= moment) {
        sector.classList.add('_absolute');
        sector.style.top = `${(text.offsetTop - moment)}px`;
        sector.style.backgroundColor = `green`;
    } else {
        sector.classList.remove('_absolute');
        sector.style.cssText = `
            top: 0px;
            background-color: red;
            `;
    }
})

const buttonScroll = document.querySelector('.sector__button');
buttonScroll.addEventListener('click', function (e) {

    window.scrollTo({
        top: text.offsetTop - moment,
        // left:,
        behavior: 'smooth',
    })
}) */

/* 
2) слушаем кнопку
1) Читаем текст
3) при нажатии на кнопку меняем высоту текста
 */

/* const buttons = document.querySelectorAll('.card__button');
for (let button of buttons) {
    button.addEventListener("click", collapse);
}
function collapse(e) {

    const text = e.target.previousElementSibling;

    if (e.target.innerHTML == "Скрыть") {
        // text.style.transition = 'all 0.3s ease';
        text.style.maxHeight = '50px';
        e.target.innerHTML = 'Показать еще';
    } else {

        text.style.maxHeight = '1000px';
        e.target.innerHTML = 'Скрыть';
    }
} */




document.addEventListener("click", distributor)

function distributor(e) {
    const target = e.target;
    if (target.classList.contains('card__button')) {
        controllButton(target);
    } else {
        const buttons = document.querySelectorAll('.card__button');
        for (let button of buttons) {
            collapseButton(button);
        }

    }

}

function controllButton(e) {

    if (e.innerHTML == "Показать еще") {
        extendButton(e);
    } else {
        collapseButton(e);
    }
}
function extendButton(e) {
    const text = e.previousElementSibling;
    text.style.maxHeight = '1000px';
    e.innerHTML = 'Скрыть';
}
function collapseButton(e) {
    const text = e.previousElementSibling;
    text.style.maxHeight = '50px';
    e.innerHTML = 'Показать еще';
}