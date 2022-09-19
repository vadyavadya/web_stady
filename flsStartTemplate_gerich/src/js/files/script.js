// Подключение функционала "Чертогов Фрилансера"
import { isMobile, parallaxBg } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


window.addEventListener('load', () => {
    changeBgMenu();
    function changeBgMenu() {
        let flag = true;
        const menuElements = document.querySelectorAll('[data-bg-img]');
        if (menuElements.length) {
            menuElements.forEach(element => {
                element.addEventListener('mouseover', () => {
                    flag = true
                    const value = element.dataset.bgImg;
                    element.closest('.navigation-menu__bg').querySelector('.bg-paralax__image').style.backgroundImage = `url('${value}')`;
                });
            });
        }
        let listMenu = document.querySelector('.navigation-menu__list');
        if (listMenu) {
            window.addEventListener('scroll', () => {
                if ((listMenu.getBoundingClientRect().top < window.innerHeight) & (listMenu.getBoundingClientRect().top + listMenu.offsetHeight > 0)) {
                    flag = false;
                } else {
                    flag = true
                }
            });
        }

        let id = 0;
        function changeActivMenu() {
            setInterval(() => {
                if (!flag) {
                    let element = menuElements[id];
                    const value = element.dataset.bgImg;
                    element.closest('.navigation-menu__bg').querySelector('.bg-paralax__image').style.backgroundImage = `url('${value}')`;
                    id++;
                    if (menuElements.length <= (id)) {
                        id = 0;
                    }
                }
            }, 3000);
        }
        changeActivMenu();
    }
    const videoRess = document.querySelectorAll(".restorane-video");
    if (videoRess.length) {
        for (let videoRes of videoRess) {
            videoRes.addEventListener('click', function (e) {
                if (!videoRes.classList.contains('_video-play')) {
                    console.log(videoRes.firstElementChild);
                    videoRes.firstElementChild.play();
                } else {
                    videoRes.firstElementChild.pause();
                }
                videoRes.classList.toggle('_video-play')
            });
        }
    }
});