// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Проверяем загрузку страницы
window.addEventListener('load', function () {
    // Получаем пременные у которых есть атрибут
    const elementsParallaxBg = document.querySelectorAll('[data-bg-paralax]');
    // Проверяем есть ли такие
    if (elementsParallaxBg.length) {
        // Переходим к каждому элементу 
        elementsParallaxBg.forEach(elementParallaxBg => {
            // Берем значения атрибута
            const dataElement = elementParallaxBg.dataset.bgParalax;
            // Путь к картинке если не по умолчанию
            let imgPath;
            let parallaxCount = 60;
            let heightViewPixel = window.innerHeight + elementParallaxBg.offsetHeight;

            // Написанно ли что то внутри атрибута
            if (dataElement.length) {
                const bgArray = elementParallaxBg.dataset.bgParalax.split(',');
                // Проверяем что написанно путь и число или путь или число 
                bgArray.forEach(bgArrayElement => {
                    if (bgArrayElement.endsWith('%')) {
                        bgArrayElement = bgArrayElement.slice(0, bgArrayElement.indexOf('%'));
                    }
                    if ((Number(bgArrayElement)) || (Number(bgArrayElement) == 0)) {
                        parallaxCount = Number(bgArrayElement);
                    } else {
                        imgPath = `url(${bgArrayElement.trim()})`;
                    }
                })
            }
            // Если не задан gwnm к картинке то берем у родителя
            if (imgPath == undefined) {
                let backgroundParrent = window.getComputedStyle(elementParallaxBg).backgroundImage;
                if (backgroundParrent) {
                    let re = /"/g;
                    imgPath = backgroundParrent.replace(re, "'");
                    console.log(window.getComputedStyle(elementParallaxBg).backgroundImage);
                    elementParallaxBg.style.backgroundImage = 'inherit';
                }

            }
            let pixelScroll = (heightViewPixel * (parallaxCount / 100));
            let bgHeight = elementParallaxBg.offsetHeight + pixelScroll;
            if (elementParallaxBg.offsetHeight > 0) {
                if (imgPath) {
                    elementParallaxBg.insertAdjacentHTML(
                        'afterbegin',
                        `<div class="bg-paralax" style="background-image:${imgPath}; height:${bgHeight}px;"></div>`,
                    );
                } else {
                    elementParallaxBg.insertAdjacentHTML(
                        'afterbegin',
                        `<div class="bg-paralax" style="height:${bgHeight}px;"></div>`,
                    );
                };
            };
            window.addEventListener('scroll', function () {
                if ((window.innerHeight - elementParallaxBg.getBoundingClientRect().top) > 0 && (elementParallaxBg.offsetHeight + elementParallaxBg.getBoundingClientRect().top) > 0) {
                    let elementBg = elementParallaxBg.firstElementChild;
                    let precentHeight = 1 - (elementParallaxBg.getBoundingClientRect().top + elementParallaxBg.offsetHeight) / heightViewPixel;
                    elementBg.style.bottom = '-' + (precentHeight * pixelScroll) + 'px';
                }
            })
        });
    };
})