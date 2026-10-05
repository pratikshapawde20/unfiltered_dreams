/* =========================================================
   UNFILTERED — STORIES PAGE JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");


if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("show");


        if (navLinks.classList.contains("show")) {

            menuButton.textContent = "✕";

        } else {

            menuButton.textContent = "☰";

        }

    });


    const navItems =
        navLinks.querySelectorAll("a");


    navItems.forEach(item => {

        item.addEventListener("click", () => {

            navLinks.classList.remove("show");

            menuButton.textContent = "☰";

        });

    });

}


/* =========================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", (event) => {

    if (!menuButton || !navLinks) {
        return;
    }


    const clickedMenu =
        navLinks.contains(event.target);

    const clickedButton =
        menuButton.contains(event.target);


    if (
        !clickedMenu &&
        !clickedButton &&
        navLinks.classList.contains("show")
    ) {

        navLinks.classList.remove("show");

        menuButton.textContent = "☰";

    }

});


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   STAGGER ANIMATION
========================================================= */

const animatedGroups = [

    ".journey-step",
    ".quote-card",
    ".category-card",
    ".small-story-card"

];


animatedGroups.forEach(selector => {

    const elements =
        document.querySelectorAll(selector);


    elements.forEach((element, index) => {

        element.style.transitionDelay =
            `${index * 0.1}s`;

    });

});


/* =========================================================
   FEATURED STORY CARD 3D EFFECT
========================================================= */

const featuredCard =
    document.querySelector(".featured-card");


if (
    featuredCard &&
    window.innerWidth > 900
) {

    featuredCard.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                featuredCard.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -1.2;


            const rotateY =
                ((x - centerX) / centerX) * 1.2;


            featuredCard.style.transform =
                `perspective(1200px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );


    featuredCard.addEventListener(
        "mouseleave",
        () => {

            featuredCard.style.transform =
                "perspective(1200px) rotateX(0deg) rotateY(0deg)";

        }
    );

}


/* =========================================================
   PLAY BUTTON
========================================================= */

const playButton =
    document.getElementById("playButton");


if (playButton) {

    playButton.addEventListener(
        "click",
        () => {

            /*
                Later replace this with your
                actual YouTube video.

                Example:

                window.open(
                    "https://youtube.com/",
                    "_blank"
                );
            */

            alert(
                "Featured Unfiltered video will be connected here."
            );

        }
    );

}


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener(
        "click",
        function(event) {

            const targetId =
                this.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

});


/* =========================================================
   PARALLAX HERO SHAPES
========================================================= */

const hero =
    document.querySelector(".stories-hero");


const shapeOne =
    document.querySelector(".hero-shape-one");


const shapeTwo =
    document.querySelector(".hero-shape-two");


if (hero && shapeOne && shapeTwo) {

    hero.addEventListener(
        "mousemove",
        (event) => {

            if (window.innerWidth < 900) {
                return;
            }


            const x =
                (event.clientX / window.innerWidth) - 0.5;


            const y =
                (event.clientY / window.innerHeight) - 0.5;


            shapeOne.style.transform =
                `translate(${x * 25}px, ${y * 25}px)`;


            shapeTwo.style.transform =
                `translate(${x * -18}px, ${y * -18}px)`;

        }
    );

}


/* =========================================================
   MOUSE TILT FOR QUOTE CARDS
========================================================= */

const quoteCards =
    document.querySelectorAll(".quote-card");


quoteCards.forEach(card => {

    if (window.innerWidth <= 900) {
        return;
    }


    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const rotateY =
                ((x - rect.width / 2) /
                    rect.width) * 4;


            const rotateX =
                ((y - rect.height / 2) /
                    rect.height) * -4;


            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});


/* =========================================================
   IMAGE LOADING
========================================================= */

const images =
    document.querySelectorAll("img");


images.forEach(image => {

    image.addEventListener(
        "load",
        () => {

            image.classList.add("loaded");

        }
    );

});


// /* =========================================================
//    CONSOLE MESSAGE
// ========================================================= */

console.log(
    "%cUNFILTERED",
    "font-size:24px;font-weight:900;color:#ff684f;"
);

console.log(
    "Real people. Real stories. Real inspiration."
);





















/* =====================================================
   UNFILTERED RESPONSIVE NAVBAR
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuButton =
        document.getElementById("menuButton");

    const navLinks =
        document.getElementById("navLinks");

    const aboutDropdown =
        document.querySelector(".nav-dropdown");

    const aboutToggle =
        document.querySelector(".nav-dropdown-toggle");


    /* =================================================
       CHECK ELEMENTS
    ================================================= */

    if (!menuButton || !navLinks) {
        return;
    }


    /* =================================================
       MOBILE MENU OPEN / CLOSE
    ================================================= */

    menuButton.addEventListener("click", function (event) {

        event.stopPropagation();

        navLinks.classList.toggle("active");

        const menuIsOpen =
            navLinks.classList.contains("active");


        if (menuIsOpen) {

            menuButton.innerHTML = "✕";

            menuButton.setAttribute(
                "aria-label",
                "Close menu"
            );

        } else {

            menuButton.innerHTML = "☰";

            menuButton.setAttribute(
                "aria-label",
                "Open menu"
            );

            if (aboutDropdown) {
                aboutDropdown.classList.remove(
                    "dropdown-open"
                );
            }

        }

    });


    /* =================================================
       ABOUT DROPDOWN — MOBILE
    ================================================= */

    if (aboutToggle && aboutDropdown) {

        aboutToggle.addEventListener(
            "click",
            function (event) {

                /* Only use click dropdown on mobile */

                if (window.innerWidth <= 768) {

                    event.preventDefault();

                    event.stopPropagation();

                    aboutDropdown.classList.toggle(
                        "dropdown-open"
                    );

                }

            }
        );

    }


    /* =================================================
       CLOSE MENU AFTER CLICKING NORMAL LINK
    ================================================= */

    const menuItems =
        navLinks.querySelectorAll(
            "a:not(.nav-dropdown-toggle)"
        );


    menuItems.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.classList.remove(
                    "active"
                );

                if (aboutDropdown) {

                    aboutDropdown.classList.remove(
                        "dropdown-open"
                    );

                }

                menuButton.innerHTML = "☰";

                menuButton.setAttribute(
                    "aria-label",
                    "Open menu"
                );

            }
        );

    });


    /* =================================================
       CLOSE WHEN CLICKING OUTSIDE
    ================================================= */

    document.addEventListener(
        "click",
        function (event) {

            const clickedInsideNavbar =
                event.target.closest(".navbar");


            if (!clickedInsideNavbar) {

                navLinks.classList.remove(
                    "active"
                );

                if (aboutDropdown) {

                    aboutDropdown.classList.remove(
                        "dropdown-open"
                    );

                }

                menuButton.innerHTML = "☰";

                menuButton.setAttribute(
                    "aria-label",
                    "Open menu"
                );

            }

        }
    );


    /* =================================================
       RESET WHEN RETURNING TO DESKTOP
    ================================================= */

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 768) {

                navLinks.classList.remove(
                    "active"
                );

                if (aboutDropdown) {

                    aboutDropdown.classList.remove(
                        "dropdown-open"
                    );

                }

                menuButton.innerHTML = "☰";

                menuButton.setAttribute(
                    "aria-label",
                    "Open menu"
                );

            }

        }
    );

});



















document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("luMenuToggle");
    const menu = document.getElementById("luMenu");

    const aboutButton = document.getElementById("aboutButton");
    const aboutDropdown = document.getElementById("aboutDropdown");


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    if (menuToggle && menu) {

        menuToggle.addEventListener("click", function (event) {

            event.stopPropagation();

            const isOpen =
                menu.classList.toggle("mobile-open");

            menuToggle.classList.toggle("active", isOpen);

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });

    }


    /* =====================================================
       ABOUT US DROPDOWN
       ===================================================== */

    if (aboutButton && aboutDropdown) {

        aboutButton.addEventListener("click", function (event) {

            event.preventDefault();

            event.stopPropagation();

            const isOpen =
                aboutDropdown.classList.toggle("open");

            aboutButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });

    }


    /* =====================================================
       CLOSE WHEN CLICKING OUTSIDE
       ===================================================== */

    document.addEventListener("click", function (event) {

        if (
            aboutDropdown &&
            !aboutDropdown.contains(event.target)
        ) {

            aboutDropdown.classList.remove("open");

            if (aboutButton) {

                aboutButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }


        if (
            menu &&
            menuToggle &&
            !menu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            menu.classList.remove("mobile-open");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });


    /* =====================================================
       CLOSE MOBILE MENU AFTER CLICKING A NORMAL LINK
       ===================================================== */

    if (menu) {

        const normalLinks =
            menu.querySelectorAll(
                "li > a:not(.lu-about-button)"
            );

        normalLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                menu.classList.remove("mobile-open");

                if (menuToggle) {

                    menuToggle.classList.remove("active");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            });

        });

    }


    /* =====================================================
       ESC KEY
       ===================================================== */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            if (menu) {

                menu.classList.remove("mobile-open");

            }

            if (menuToggle) {

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

            if (aboutDropdown) {

                aboutDropdown.classList.remove("open");

            }

            if (aboutButton) {

                aboutButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    });

});


