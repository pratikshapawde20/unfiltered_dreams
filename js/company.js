
/* =========================================================
   UNFILTERED COMPANY PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       PAGE LOADER
    ====================================================== */

    const loader =
        document.querySelector(".page-loader");


    window.addEventListener("load", function () {

        setTimeout(function () {

            if (loader) {
                loader.classList.add("loaded");
            }

        }, 500);

    });



    /* =====================================================
       HEADER SCROLL EFFECT
    ====================================================== */

    const header =
        document.querySelector(".company-header");


    function handleHeaderScroll() {

        if (!header) return;


        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        handleHeaderScroll
    );


    handleHeaderScroll();



    /* =====================================================
       MOBILE MENU
    ====================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const mobileMenu =
        document.getElementById("mobileMenu");


    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener(
            "click",
            function () {

                mobileMenu.classList.toggle("open");

                const isOpen =
                    mobileMenu.classList.contains("open");


                menuToggle.setAttribute(
                    "aria-expanded",
                    isOpen
                );


                const spans =
                    menuToggle.querySelectorAll("span");


                if (isOpen) {

                    spans[0].style.transform =
                        "translateY(7px) rotate(45deg)";

                    spans[1].style.opacity =
                        "0";

                    spans[2].style.transform =
                        "translateY(-7px) rotate(-45deg)";

                } else {

                    spans[0].style.transform =
                        "";

                    spans[1].style.opacity =
                        "";

                    spans[2].style.transform =
                        "";

                }

            }
        );


        const mobileLinks =
            mobileMenu.querySelectorAll("a");


        mobileLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    mobileMenu.classList.remove("open");

                    const spans =
                        menuToggle.querySelectorAll("span");


                    spans[0].style.transform = "";

                    spans[1].style.opacity = "";

                    spans[2].style.transform = "";

                }
            );

        });

    }



    /* =====================================================
       REVEAL ANIMATIONS
    ====================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });



    /* =====================================================
       SECTION ELEMENTS ANIMATION
    ====================================================== */

    const animatedElements =
        document.querySelectorAll(
            ".mission-card, .service-row, .culture-item"
        );


    const elementObserver =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    animatedElements.forEach(
        function (element, index) {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(35px)";

            element.style.transition =
                `opacity .8s ease ${index * 0.08}s,
                 transform .8s cubic-bezier(.2,.7,.2,1) ${index * 0.08}s`;

            elementObserver.observe(element);

        }
    );



    /* =====================================================
       PARALLAX EFFECT
    ====================================================== */

    const orbOne =
        document.querySelector(".hero-orb-one");

    const orbTwo =
        document.querySelector(".hero-orb-two");


    window.addEventListener(
        "scroll",
        function () {

            const scroll =
                window.scrollY;


            if (orbOne) {

                orbOne.style.transform =
                    `translateY(${scroll * 0.12}px)`;

            }


            if (orbTwo) {

                orbTwo.style.transform =
                    `translateY(${scroll * -0.08}px)`;

            }

        }
    );



    /* =====================================================
       VISION FRAME MOUSE EFFECT
    ====================================================== */

    const visionFrame =
        document.querySelector(".vision-frame");


    if (visionFrame) {

        visionFrame.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    visionFrame.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;


                const y =
                    event.clientY - rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) / centerY) * -3;


                const rotateY =
                    ((x - centerX) / centerX) * 3;


                visionFrame.style.transform =
                    `rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     rotateZ(-2deg)`;

            }
        );


        visionFrame.addEventListener(
            "mouseleave",
            function () {

                visionFrame.style.transform =
                    "rotateZ(-3deg)";

            }
        );

    }



    /* =====================================================
       SMOOTH ANCHOR SCROLL
    ====================================================== */

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchorLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                if (
                    targetId === "#" ||
                    targetId.length < 2
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 0;


                    const targetPosition =
                        target.getBoundingClientRect()
                            .top
                        +
                        window.scrollY
                        -
                        headerHeight
                        -
                        20;


                    window.scrollTo({

                        top: targetPosition,

                        behavior: "smooth"

                    });

                }

            }
        );

    });



    /* =====================================================
       CURRENT YEAR
    ====================================================== */

    const yearElement =
        document.querySelector(
            ".footer-bottom p"
        );


    if (yearElement) {

        const currentYear =
            new Date().getFullYear();


        yearElement.innerHTML =
            `© ${currentYear} Unfiltered. All rights reserved.`;

    }



    /* =====================================================
       CURSOR EFFECT FOR DESKTOP
    ====================================================== */

    const isTouchDevice =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0;


    if (!isTouchDevice) {

        const cursor =
            document.createElement("div");


        cursor.className =
            "custom-cursor";


        document.body.appendChild(cursor);


        const cursorStyle =
            document.createElement("style");


        cursorStyle.innerHTML = `

            .custom-cursor {

                position: fixed;

                width: 12px;

                height: 12px;

                border-radius: 50%;

                background: #d94b7d;

                pointer-events: none;

                z-index: 10000;

                transform:
                    translate(-50%, -50%);

                transition:
                    width .2s ease,
                    height .2s ease,
                    opacity .2s ease;

                opacity: 0;

            }

            body.cursor-active
            .custom-cursor {

                opacity: 1;

            }

            body.cursor-hover
            .custom-cursor {

                width: 30px;

                height: 30px;

                background:
                    rgba(217,75,125,.2);

                border:
                    1px solid #d94b7d;

            }

        `;


        document.head.appendChild(
            cursorStyle
        );


        document.addEventListener(
            "mousemove",
            function (event) {

                cursor.style.left =
                    event.clientX + "px";

                cursor.style.top =
                    event.clientY + "px";

                document.body.classList.add(
                    "cursor-active"
                );

            }
        );


        const hoverElements =
            document.querySelectorAll(
                "a, button, .mission-card, .service-row"
            );


        hoverElements.forEach(
            function (element) {

                element.addEventListener(
                    "mouseenter",
                    function () {

                        document.body.classList.add(
                            "cursor-hover"
                        );

                    }
                );


                element.addEventListener(
                    "mouseleave",
                    function () {

                        document.body.classList.remove(
                            "cursor-hover"
                        );

                    }
                );

            }
        );

    }



    /* =====================================================
       CONSOLE BRAND MESSAGE
    ====================================================== */

    console.log(
        "%c UNFILTERED ",
        "background:#252936;color:#ffffff;padding:8px 15px;border-radius:5px;font-weight:bold;"
    );

    console.log(
        "Stories without filters."
    );

});

