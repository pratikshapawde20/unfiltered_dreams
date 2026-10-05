
/* =====================================================
   LIFE UNFILTERED — YOUTUBE PAGE JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       PAGE LOADER
    ================================================= */

    const loader = document.getElementById("pageLoader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (loader) {
                loader.classList.add("hide");
            }

        }, 600);

    });


    /* =================================================
       MOBILE MENU
    ================================================= */

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            mainNav.classList.toggle("open");

            const spans = menuToggle.querySelectorAll("span");

            if (mainNav.classList.contains("open")) {

                spans[0].style.transform =
                    "rotate(45deg) translate(4px, 5px)";

                spans[1].style.opacity = "0";

                spans[2].style.transform =
                    "rotate(-45deg) translate(4px, -5px)";

            } else {

                spans[0].style.transform = "none";
                spans[1].style.opacity = "1";
                spans[2].style.transform = "none";

            }

        });


        /* Close menu when a normal link is clicked */

        const navLinks = mainNav.querySelectorAll(
            "a:not(.about-btn)"
        );

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                mainNav.classList.remove("open");

                const spans =
                    menuToggle.querySelectorAll("span");

                spans[0].style.transform = "none";
                spans[1].style.opacity = "1";
                spans[2].style.transform = "none";

            });

        });

    }


    /* =================================================
       SCROLL REVEAL
    ================================================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

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


    /* =================================================
       SMOOTH SCROLL
    ================================================= */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                targetId &&
                targetId !== "#"
            ) {

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

        });

    });


    /* =================================================
       CARD TILT EFFECT
    ================================================= */

    const cards =
        document.querySelectorAll(".episode-card");

    cards.forEach(card => {

        card.addEventListener("mousemove", (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -2;

            const rotateY =
                ((x - centerX) / centerX) * 2;

            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });


    /* =================================================
       PARALLAX HERO
    ================================================= */

    const hero =
        document.querySelector(".youtube-hero");

    const heroVideo =
        document.querySelector(".hero-video");

    if (hero && heroVideo) {

        window.addEventListener("scroll", () => {

            const scroll =
                window.scrollY;

            if (scroll < hero.offsetHeight) {

                heroVideo.style.transform =
                    `translateY(${scroll * 0.08}px)`;

            }

        });

    }


    /* =================================================
       PLAY BUTTON INTERACTION
    ================================================= */

    const playButtons =
        document.querySelectorAll(
            ".big-play, .thumbnail-play"
        );

    playButtons.forEach(button => {

        button.addEventListener("click", () => {

            /*
                Replace this section with your
                YouTube video URL when your videos
                are ready.

                Example:

                window.open(
                    "https://www.youtube.com/watch?v=YOUR_ID",
                    "_blank"
                );
            */

            console.log(
                "YouTube video selected."
            );

        });

    });


    /* =================================================
       ACTIVE NAVIGATION
    ================================================= */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();

    const navigationLinks =
        document.querySelectorAll(
            ".main-nav > a"
        );

    navigationLinks.forEach(link => {

        const href =
            link.getAttribute("href");

        if (
            href === currentPage ||
            (
                currentPage === "" &&
                href === "index.html"
            )
        ) {

            link.classList.add("active");

        }

    });


    /* =================================================
       SUBTLE MOUSE MOVEMENT
    ================================================= */

    const shapes =
        document.querySelectorAll(".hero-shape");

    window.addEventListener("mousemove", (event) => {

        const x =
            (event.clientX / window.innerWidth - 0.5);

        const y =
            (event.clientY / window.innerHeight - 0.5);

        shapes.forEach((shape, index) => {

            const strength =
                index === 0 ? 15 : -10;

            shape.style.transform =
                `translate(
                    ${x * strength}px,
                    ${y * strength}px
                )`;

        });

    });

});


