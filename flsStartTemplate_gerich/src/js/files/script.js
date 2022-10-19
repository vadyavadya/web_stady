// Подключение функционала "Чертогов Фрилансера"
import { isMobile, parallaxBg } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


window.addEventListener('load', () => {

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

    const soon = document.querySelectorAll(".coming-soon__number");
    if (soon.length > 0) {
        console.log(soon);
        let soonMonth = soon[0].innerHTML;
        let soonDays = soon[1].innerHTML;
        let soonHour = soon[2].innerHTML;
        let soonMinut = soon[3].innerHTML;
        let soonSecond = soon[4].innerHTML;
        let soonAllSecond = soonSecond
            + soonMinut * 60
            + soonHour * 60 * 60
            + soonDays * 24 * 60 * 60
            + soonMonth * 30 * 24 * 60 * 60;
        console.log(soonAllSecond);
        dateSoon(soonAllSecond);
        function dateSoon() {
            if (soonAllSecond > 0) {
                if (soon[4].innerHTML != '0') {
                    soon[4].innerHTML -= 1;
                } else if (soon[3].innerHTML != '0') {
                    soon[3].innerHTML -= 1;
                    soon[4].innerHTML = 59;
                } else if (soon[2].innerHTML != '0') {
                    soon[2].innerHTML -= 1;
                    soon[3].innerHTML = 59;
                    soon[4].innerHTML = 59;
                } else if (soon[1].innerHTML != '0') {
                    soon[1].innerHTML -= 1;
                    soon[2].innerHTML = 23;
                    soon[3].innerHTML = 59;
                    soon[4].innerHTML = 59;
                } else if (soon[0].innerHTML != '0') {
                    soon[0].innerHTML -= 1;
                    soon[1].innerHTML = 30;
                    soon[2].innerHTML = 23;
                    soon[3].innerHTML = 59;
                    soon[4].innerHTML = 59;
                } else {
                    soon[0].innerHTML = 0;
                    soon[1].innerHTML = 0;
                    soon[2].innerHTML = 0;
                    soon[3].innerHTML = 0;
                    soon[4].innerHTML = 0;
                    soonAllSecond = 1;
                }
                soonAllSecond -= 1;
                setTimeout(dateSoon, 1000)
            }
        }
    }

    const comments = document.querySelectorAll(".comment");
    if (comments.length > 0) {
        comments.forEach(comment => {
            let buttonReply = comment.querySelector(".comment__reply");
            buttonReply.addEventListener("click", function () {
                comment.classList.toggle("comment_replay");
            });

            console.log(comment);
        });
    }

});