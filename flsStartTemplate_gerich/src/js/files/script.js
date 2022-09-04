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
            let parallaxCount = 60;
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
            let bgHeight;
            if (window.innerHeight > bgElement.offsetHeight) {
                bgHeight = window.innerHeight + window.innerHeight * (parallaxCount * 2) / 100;
            } else {
                bgHeight = bgElement.offsetHeight + bgElement.offsetHeight * (parallaxCount * 2) / 100;
            }
            if (bgElement.offsetHeight > 0) {
                if (parallaxImgPath) {

                    bgElement.insertAdjacentHTML(
                        'afterbegin',
                        `<div class="bg-paralax" style="background-image:url(${parallaxImgPath}); height:${bgHeight}px;"></div>`,
                    )

                } else {
                    bgElement.insertAdjacentHTML(
                        'afterbegin',
                        `<div class="bg-paralax" style="height:${bgHeight}px;"></div>`,
                    )
                }
            }
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
                        let pixelScroll;
                        /* if (window.innerHeight > bgElement.offsetHeight) {
                            pixelScroll = window.innerHeight * (parallaxCount * 2) / 100;
                        } else {
                            pixelScroll = bgElement.offsetHeight * (parallaxCount * 2) / 100;
                        }
 */
                        // let pixelScroll = bgElement.offsetHeight * (parallaxCount * 2) / 100;
                        pixelScroll = window.innerHeight;

                        let elementBg = bgElement.firstElementChild;
                        let precentHeight = (window.innerHeight - bgElement.getBoundingClientRect().top) / pixelHeight;
                        console.log(precentHeight);
                        elementBg.style.bottom = '-' + precentHeight * pixelScroll + 'px';
                    }

                }
            })
        }
    })
})
