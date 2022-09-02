// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Проверяем загрузку страницы
window.addEventListener('load', function () {
    // Получаем пременные у которых есть атрибут
    const bgElements = document.querySelectorAll('[data-bg-paralax]');
    // Проверяем есть ли такие
    if (bgElements.length) {
        // Переходим к каждому элементу 
        bgElements.forEach(bgElement => {
            const dataElement = bgElement.dataset.bgParalax;
            let parallaxImgPath;
            let parallaxCount = 30;
            // Написанно ли что то внутри атрибута
            if (dataElement.length) {
                const bgArray = bgElement.dataset.bgParalax.split(',');
                // Проверяем что написанно путь и число или путь или число 
                bgArray.forEach(bgArrayElement => {
                    if (bgArrayElement.endsWith('%')) {
                        bgArrayElement = bgArrayElement.slice(0, bgArrayElement.indexOf('%'));
                    }
                    if (Number(bgArrayElement)) {
                        parallaxCount = Number(bgArrayElement);
                    } else {
                        parallaxImgPath = bgArrayElement.trim();
                    }
                })
                // console.log('Элемент: ', 'parallaxCount= ', parallaxCount, 'parallaxImgPath= ', parallaxImgPath);
            }
            bgElement.insertAdjacentHTML(
                'afterbegin',
                `<div class="bg-paralax" style="background:url(${parallaxImgPath}) 0 0 / cover no-repeat; height:${100 + (parallaxCount * 2)}%; bottom:0;"></div>`,
            )
        })
    }
    window.addEventListener('scroll', function () {
        if (bgElements.length) {
            // Переходим к каждому элементу 

            bgElements.forEach(bgElement => {
                let pixelHeight = window.innerHeight + bgElement.offsetHeight;
                if ((window.innerHeight - bgElement.getBoundingClientRect().top) > 0 && (bgElement.offsetHeight + bgElement.getBoundingClientRect().top) > 0) {
                    // console.log(window.innerHeight - bgElement.getBoundingClientRect().top);
                    let parallaxImgPath;
                    let parallaxCount = 30;
                    const dataElement = bgElement.dataset.bgParalax;
                    // Написанно ли что то внутри атрибута
                    if (dataElement.length) {
                        const bgArray = bgElement.dataset.bgParalax.split(',');
                        // Проверяем что написанно путь и число или путь или число 
                        bgArray.forEach(bgArrayElement => {
                            if (bgArrayElement.endsWith('%')) {
                                bgArrayElement = bgArrayElement.slice(0, bgArrayElement.indexOf('%'));
                            }
                            if (Number(bgArrayElement)) {
                                parallaxCount = Number(bgArrayElement);
                            } else {
                                parallaxImgPath = bgArrayElement.trim();
                            }
                        })

                        let pixelScroll = bgElement.offsetHeight * (parallaxCount * 2) / 100;
                        let elementBg = bgElement.firstElementChild;
                        let precentHeight = (window.innerHeight - bgElement.getBoundingClientRect().top) / pixelHeight;
                        console.log(elementBg.style.top);
                        elementBg.style.bottom = '-' + precentHeight * pixelScroll + 'px';
                    }

                }
            })
        }
    })
})
