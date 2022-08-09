console.log('yes1');



const swiper = new Swiper('.swiper', {
    // modules: [Navigation],
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    // autoHeight: true,
    speed: 800,


    //touchRatio: 0,
    //simulateTouch: false,
    //loop: true,
    //preloadImages: false,
    //lazy: true,

    /*
    // Эффекты
    effect: 'fade',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    */

    // Пагинация

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


    // Скроллбар

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },


    // Кнопки "влево/вправо"
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },

    // Брейкпоинты
    /*
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1268: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
    */
    // События
    /* 
        // Optional parameters
    
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        }, */
});

function initSliders() {
    // Перечень слайдеров
    // Проверяем, есть ли слайдер на стронице
    if (document.querySelector('.swiper')) { // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper('.swiper', { // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            // autoHeight: true,
            speed: 800,


            //touchRatio: 0,
            //simulateTouch: false,
            //loop: true,
            //preloadImages: false,
            //lazy: true,

            /*
            // Эффекты
            effect: 'fade',
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            */

            // Пагинация
            /*
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            */

            // Скроллбар
            /* 
                        scrollbar: {
                            el: '.swiper-scrollbar',
                            draggable: true,
                            hide: true,
                        },
             */

            // Кнопки "влево/вправо"
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
            },

            // Брейкпоинты
            /*
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    autoHeight: true,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1268: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
            */
            // События
            on: {

            }
        });
    }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
    let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
    if (sliderScrollItems.length > 0) {
        for (let index = 0; index < sliderScrollItems.length; index++) {
            const sliderScrollItem = sliderScrollItems[index];
            const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
            const sliderScroll = new Swiper(sliderScrollItem, {
                observer: true,
                observeParents: true,
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: {
                    enabled: true,
                },
                scrollbar: {
                    el: sliderScrollBar,
                    draggable: true,
                    snapOnRelease: false
                },
                mousewheel: {
                    releaseOnEdges: true,
                },
            });
            sliderScroll.scrollbar.updateSize();
        }
    }
}

/* window.addEventListener("load", function (e) {
    // Запуск инициализации слайдеров
    initSliders();
    console.log('yes');
    // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
    // initSlidersScroll();
}); */