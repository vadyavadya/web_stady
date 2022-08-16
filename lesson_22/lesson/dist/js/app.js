(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const block = document.querySelector(".block");
    if (block) block.addEventListener("click", liteSpoller);
    function liteSpoller(event) {
        if (event.target.closest(".block__title")) {
            const paragraph = event.target.nextElementSibling;
            paragraph.classList.toggle("_active");
        }
    }
    document.addEventListener("click", distributor);
    function distributor(e) {
        const target = e.target;
        if (target.classList.contains("card__button")) controllButton(target); else {
            const buttons = document.querySelectorAll(".card__button");
            for (let button of buttons) collapseButton(button);
        }
    }
    function controllButton(e) {
        if ("Показать еще" == e.innerHTML) extendButton(e); else collapseButton(e);
    }
    function extendButton(e) {
        const text = e.previousElementSibling;
        text.style.maxHeight = "1000px";
        e.innerHTML = "Скрыть";
    }
    function collapseButton(e) {
        const text = e.previousElementSibling;
        text.style.maxHeight = "50px";
        e.innerHTML = "Показать еще";
    }
    window["FLS"] = true;
    isWebp();
})();