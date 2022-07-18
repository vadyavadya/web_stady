// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

if (isMobile.any()) {

    let menuArrows = document.querySelectorAll(".menu__arrow");
    if (menuArrows.length > 0) {

        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle("_active");
            });
        }
    }
}

// Плавный переход к элементу!!
var menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const goToBlock = document.querySelector(menuLink.dataset.goto);
            const scrollValue = goToBlock.getBoundingClientRect().top + scrollY - document.querySelector("header").offsetHeight;

            document.querySelector('.icon-menu').click();

            window.scrollTo({
                top: scrollValue,
                behavior: "smooth"
            });

            e.preventDefault();
        }
    }
}

