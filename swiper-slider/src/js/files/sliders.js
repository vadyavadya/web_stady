/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {
	Navigation, Pagination, Scrollbar, HashNavigation, Keyboard, Mousewheel, Grid, FreeMode, Autoplay,
	EffectFade, EffectCube, EffectCards, EffectCoverflow, EffectCreative, EffectFlip, Lazy, Zoom, Thumbs,
	Controller, Parallax, Virtual,
} from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper_1')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper_1', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
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
				// Динамические буллеты
				dynamicBullets: true,
				// Кастом булеты
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				}
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
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
	if (document.querySelector('.swiper_2')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper_2', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
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
				type: 'fraction',
				renderFraction: function (currentClass, totalClass) {
					return 'Фото <span class="' + currentClass + '"></span>'
						+ ' из '
						+ '<span class="' + totalClass + ' "></span>'

				},
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
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
	if (document.querySelector('.swiper_3')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper_3', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
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
				type: 'progressbar',
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
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
	if (document.querySelector('.swiper_4')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper_4', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Scrollbar],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			// simulateTouch: false,
			// loop: true,
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
				// Динамические буллеты
				dynamicBullets: true,
				// Кастом булеты
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				}
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
			on: {

			}
		});
	}
	if (document.querySelector('.swiper_5')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper_5', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Scrollbar, HashNavigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			// simulateTouch: false,
			// loop: true,
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
				// Динамические буллеты
				dynamicBullets: true,
				// Кастом булеты
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				}
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

			// * Хэш навигация
			hashNavigation: {
				// Отслеживать состояние
				watchState: true,
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.swiper_6')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper_6', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Scrollbar, Keyboard],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			// simulateTouch: false,
			// loop: true,
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
				// Динамические буллеты
				dynamicBullets: true,
				// Кастом булеты
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				}
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

			// Управление клавиатурой
			keyboard: {
				// Включить/выключить
				enabled: true,
				// Включить/выключить
				// только когда слайдер
				// в пределах вьюпорта
				onlyInViewport: true,
				// Включить/выключить
				// управление клавишами
				// pageUp, pageDown
				pageUpDown: true,
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.swiper_7')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper_7', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Scrollbar, Mousewheel],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				// Динамические буллеты
				dynamicBullets: true,
				// Кастом булеты
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				}
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

			// * Управление колесом мыши
			mousewheel: {
				// Чувствительнсоть колеса мыши
				sensitivity: 1,
				// Класс объекта на еотор будет срабатывать прокрутка мышью
				// eventsTarget:".image-slide"
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.swiper_8')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper_8', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Scrollbar, Mousewheel],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				// Динамические буллеты
				dynamicBullets: true,
				// Кастом булеты
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				}
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

			// * Управление колесом мыши
			mousewheel: {
				// Чувствительнсоть колеса мыши
				sensitivity: 1,
				// Класс объекта на еотор будет срабатывать прокрутка мышью
				// eventsTarget:".image-slide"
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.swiper_9')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper_9', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Scrollbar, Mousewheel],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,
			initialSlide: 2,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				// Динамические буллеты
				dynamicBullets: true,
				// Кастом булеты
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				}
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

			// * Управление колесом мыши
			mousewheel: {
				// Чувствительнсоть колеса мыши
				sensitivity: 1,
				// Класс объекта на еотор будет срабатывать прокрутка мышью
				// eventsTarget:".image-slide"
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.swiper_10')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper_10', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Scrollbar, Mousewheel, Grid],
			observer: true,
			observeParents: true,
			spaceBetween: 10,
			autoHeight: false,
			slidesPerView: 2,
			slidesPerGroup: 2,

			speed: 800,

			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				// Динамические буллеты
				dynamicBullets: true,
				// Кастом булеты
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				}
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

			// * Управление колесом мыши
			mousewheel: {
				// Чувствительнсоть колеса мыши
				sensitivity: 1,
				// Класс объекта на еотор будет срабатывать прокрутка мышью
				// eventsTarget:".image-slide"
			},

			// * Подключение грид-
			grid: {
				fill: 'column',
				rows: 2,
			},
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.swiper_11')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper_11', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Scrollbar, Mousewheel],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			// simulateTouch: false,
			loop: true,
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
				// Динамические буллеты
				dynamicBullets: true,
				// Кастом булеты
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				}
			},

			mousewheel: {
				// Чувствительнсоть колеса мыши
				sensitivity: 1,
				// Класс объекта на еотор будет срабатывать прокрутка мышью
				// eventsTarget:".image-slide"
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
			on: {

			}
		});
	}
	if (document.querySelector('.swiper_12')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper_12', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Scrollbar, FreeMode, Mousewheel],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,
			freeMode: true,

			//touchRatio: 0,
			// simulateTouch: false,
			loop: true,
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
				// Динамические буллеты
				dynamicBullets: true,
				// Кастом булеты
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				}
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

			mousewheel: {
				sensitivity: 1,
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.swiper_13')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper_13', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Scrollbar, FreeMode, Mousewheel, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,
			freeMode: true,

			//touchRatio: 0,
			// simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,


			// Эффекты
			// effect: 'fade',
			autoplay: {
				// Пауза между прокруткой
				delay: 1000,
				// Закончить на последнем слайде
				// stopOnLastSlide:true,
				// Отключить после ручного переключения
				disableOnInteraction: false,
			},


			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				// Динамические буллеты
				dynamicBullets: true,
				// Кастом булеты
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				}
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

			mousewheel: {
				sensitivity: 1,
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.swiper_14')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper_14', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Scrollbar, FreeMode, Mousewheel],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			// slidesPerGroup: 2,
			spaceBetween: 10,
			// autoHeight: true,
			speed: 800,
			freeMode: true,
			direction: 'vertical',

			//touchRatio: 0,
			// simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,


			// Эффекты
			// effect: 'fade',



			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				// Динамические буллеты
				dynamicBullets: true,
				// Кастом булеты
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				}
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

			mousewheel: {
				sensitivity: 1,
			},

			// События
			on: {

			}
		});
	}
	initSliderEffect();
	function initSliderEffect() {
		const buttonsEffect = document.querySelectorAll('.description__button');
		if (buttonsEffect.length > 0) {
			buttonsEffect.forEach(buttonEfect => {
				buttonEfect.addEventListener("click", function (e) {
					if (document.querySelector('.swiper_15')) { // Указываем скласс нужного слайдера
						// Создаем слайдер
						new Swiper('.swiper_15', { // Указываем скласс нужного слайдера
							// Подключаем модули слайдера
							// для конкретного случая
							modules: [Navigation, Pagination, Scrollbar, FreeMode, Mousewheel,
								EffectFade, EffectCube, EffectCards, EffectCoverflow, EffectCreative, EffectFlip,],
							observer: true,
							observeParents: true,
							slidesPerView: 1,
							// slidesPerGroup: 2,
							spaceBetween: 10,
							// autoHeight: true,
							speed: 800,
							freeMode: true,


							//touchRatio: 0,
							// simulateTouch: false,
							// loop: true,
							//preloadImages: false,
							//lazy: true,


							// Эффекты
							effect: e.target.value,



							// Пагинация
							pagination: {
								el: '.swiper-pagination',
								clickable: true,
								// Динамические буллеты
								dynamicBullets: true,
								// Кастом булеты
								renderBullet: function (index, className) {
									return '<span class="' + className + '">' + (index + 1) + '</span>';
								}
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

							mousewheel: {
								sensitivity: 1,
							},

							// События
							on: {

							}
						});
					}
				});
			});
		};
	};
	if (document.querySelector('.swiper_16')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper_16', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Scrollbar, FreeMode, Mousewheel],
			observer: true,
			observeParents: true,
			// slidesPerView: 1,
			// slidesPerGroup: 2,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,
			freeMode: true,

			//touchRatio: 0,
			// simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,


			// Эффекты
			// effect: 'fade',



			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				// Динамические буллеты
				dynamicBullets: true,
				// Кастом булеты
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				}
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
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					// autoHeight: true,
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


			mousewheel: {
				sensitivity: 1,
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.swiper_17')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper_17', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Scrollbar, FreeMode, Mousewheel, Lazy],
			observer: true,
			observeParents: true,
			// slidesPerView: 1,
			// slidesPerGroup: 2,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,
			freeMode: true,

			//touchRatio: 0,
			// simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,


			// * Отключение предзагрузки
			preloadImages: false,
			// * Lazy loading (подзагрузка картинок)
			lazy: {
				// Подгружать на старте 
				// переключение слайдф
				loadOnTransitionStart: false,
				// Подгружать пердыдущую
				// и следущую картинку
				loadPrevNext: false,
			},
			// Слежка за видимыми слайдами
			watchSlidesProgress: true,


			// Эффекты
			// effect: 'fade',



			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				// Динамические буллеты
				dynamicBullets: true,
				// Кастом булеты
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				}
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

			/* 
			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					// autoHeight: true,
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

			mousewheel: {
				sensitivity: 1,
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.swiper_18')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper_18', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Scrollbar, FreeMode, Mousewheel, Zoom],
			observer: true,
			observeParents: true,
			// slidesPerView: 1,
			// slidesPerGroup: 2,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,
			freeMode: true,

			//touchRatio: 0,
			// simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,


			// * ЗУММ
			zoom: {
				// максимальное увеличение
				maxRatio: 5,
				// минимальное увеличение
				minRatio: 1,
			},


			// Эффекты
			// effect: 'fade',



			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				// Динамические буллеты
				dynamicBullets: true,
				// Кастом булеты
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				}
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

			/* 
			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					// autoHeight: true,
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

			mousewheel: {
				sensitivity: 1,
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.swiper_19')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper_19', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Scrollbar, Mousewheel, Thumbs,],
			observer: true,
			observeParents: true,
			// slidesPerView: 1,
			// slidesPerGroup: 2,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,


			//touchRatio: 0,
			// simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,


			// * Thumbs
			thumbs: {
				swiper: {
					el: '.swiper-mini_19',
					slidesPerView: 5,
				}
			},

			// Эффекты
			// effect: 'fade',



			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				// Динамические буллеты
				dynamicBullets: true,
				// Кастом булеты
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				}
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

			/* 
			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					// autoHeight: true,
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

			mousewheel: {
				sensitivity: 1,
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.swiper_20')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper_20', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Scrollbar, FreeMode, Mousewheel],
			observer: true,
			observeParents: true,
			// slidesPerView: 1,
			// slidesPerGroup: 2,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,


			//touchRatio: 0,
			// simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,



			// Эффекты
			// effect: 'fade',



			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				// Динамические буллеты
				dynamicBullets: true,
				// Кастом булеты
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				}
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

			/* 
			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					// autoHeight: true,
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



			mousewheel: {
				sensitivity: 1,
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.swiper_21')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper_21', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Mousewheel],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			// slidesPerGroup: 2,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,


			//touchRatio: 0,
			// simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,



			// Эффекты
			// effect: 'fade',



			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				// Динамические буллеты
				dynamicBullets: true,
				// Кастом булеты
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				}
			},

			/* // Скроллбар
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			}, */
			/* 
						// Кнопки "влево/вправо"
						navigation: {
							prevEl: '.swiper-button-prev',
							nextEl: '.swiper-button-next',
						},
			 */
			/* 
			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					// autoHeight: true,
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

			// * Для корректной рабты внутреннего swiper
			nested: true,

			mousewheel: {
				sensitivity: 1,
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.swiper_22_1') && document.querySelector('.swiper_22_2')) {
		// Указываем скласс нужного слайдера
		// Создаем слайдер
		let swiperImg = new Swiper('.swiper_22_1', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Scrollbar, Keyboard, Mousewheel, Controller],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				// Динамические буллеты
				dynamicBullets: true,
				// Кастом булеты
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				}
			},

			keyboard: {
				// Включить/выключить
				enabled: true,
				// Включить/выключить
				// только когда слайдер
				// в пределах вьюпорта
				// onlyInViewport: true,
				// Включить/выключить
				// управление клавишами
				// pageUp, pageDown
				// pageUpDown: true,
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

			// * Управление колесом мыши
			mousewheel: {
				// Чувствительнсоть колеса мыши
				sensitivity: 1,
				// Класс объекта на еотор будет срабатывать прокрутка мышью
				// eventsTarget:".image-slide"
			},

			// События
			on: {

			}
		});
		let swiperText = new Swiper('.swiper_22_2', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Scrollbar, Keyboard, Mousewheel, Controller],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				// Динамические буллеты
				dynamicBullets: true,
				// Кастом булеты
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				}
			},

			keyboard: {
				// Включить/выключить
				enabled: true,
				// Включить/выключить
				// только когда слайдер
				// в пределах вьюпорта
				// onlyInViewport: true,
				// Включить/выключить
				// управление клавишами
				// pageUp, pageDown
				// pageUpDown: true,
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

			// * Управление колесом мыши
			mousewheel: {
				// Чувствительнсоть колеса мыши
				sensitivity: 1,
				// Класс объекта на еотор будет срабатывать прокрутка мышью
				// eventsTarget:".image-slide"
			},

			// События
			on: {

			}
		});
		console.log(swiperImg);
		console.log(swiperText);
		// swiperImg.params.control = swiperText;
		// swiperText.params.control = swiperImg;
		swiperImg.controller.control = swiperText;
		swiperText.controller.control = swiperImg;
	}

	if (document.querySelector('.swiper_23')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper_23', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Scrollbar, Keyboard, Mousewheel, Parallax],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			// autoHeight: true,
			speed: 800,

			parallax: true,

			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				// Динамические буллеты
				dynamicBullets: true,
				// Кастом булеты
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				}
			},

			keyboard: {
				// Включить/выключить
				enabled: true,
				// Включить/выключить
				// только когда слайдер
				// в пределах вьюпорта
				onlyInViewport: true,
				// Включить/выключить
				// управление клавишами
				// pageUp, pageDown
				pageUpDown: true,
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

			// * Управление колесом мыши
			mousewheel: {
				// Чувствительнсоть колеса мыши
				sensitivity: 1,
				// Класс объекта на еотор будет срабатывать прокрутка мышью
				// eventsTarget:".image-slide"
			},

			// События
			on: {

			}
		});
	}

	if (document.querySelector('.swiper_24')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper_24', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Scrollbar, Keyboard, Mousewheel, Virtual],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			// autoHeight: true,
			speed: 800,

			virtual: {
				slides: (function () {
					const slides = [];
					for (var i = 0; i < 600; i += 1) {
						slides.push('Slide ' + (i + 1));
					}
					return slides;
				})(),
			},

			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				// Динамические буллеты
				dynamicBullets: true,
				// Кастом булеты
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				}
			},

			keyboard: {
				// Включить/выключить
				enabled: true,
				// Включить/выключить
				// только когда слайдер
				// в пределах вьюпорта
				onlyInViewport: true,
				// Включить/выключить
				// управление клавишами
				// pageUp, pageDown
				pageUpDown: true,
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

			// * Управление колесом мыши
			mousewheel: {
				// Чувствительнсоть колеса мыши
				sensitivity: 1,
				// Класс объекта на еотор будет срабатывать прокрутка мышью
				// eventsTarget:".image-slide"
			},

			// События
			on: {

			}
		});
	}

	if (document.querySelector('.swiper_n')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper_n', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Scrollbar, Keyboard, Mousewheel],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				// Динамические буллеты
				dynamicBullets: true,
				// Кастом булеты
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				}
			},

			keyboard: {
				// Включить/выключить
				enabled: true,
				// Включить/выключить
				// только когда слайдер
				// в пределах вьюпорта
				onlyInViewport: true,
				// Включить/выключить
				// управление клавишами
				// pageUp, pageDown
				pageUpDown: true,
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

			// * Управление колесом мыши
			mousewheel: {
				// Чувствительнсоть колеса мыши
				sensitivity: 1,
				// Класс объекта на еотор будет срабатывать прокрутка мышью
				// eventsTarget:".image-slide"
			},

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

function setEffect(effect = 'fade') {
	const buttonsEffect = document.querySelectorAll('.description__button');
	let chooseEffect;
	if (buttonsEffect.length > 0) {
		buttonsEffect.forEach(buttonEfect => {
			chooseEffect = buttonEfect.addEventListener("click", function (e) {
				return e.target.value;
			});
		});
	};
	return chooseEffect;
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();

});