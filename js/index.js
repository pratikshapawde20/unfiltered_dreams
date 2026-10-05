
/* =========================================================
   UNFILTERED DREAMS
   INDEX.JS
   Interactive animations + navigation
========================================================= */


/* =========================================================
   01. DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------------------
       ELEMENTS
    ----------------------------------------------------- */

    const pageLoader =
        document.getElementById("pageLoader");

    const header =
        document.getElementById("siteHeader");

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");

    const scrollProgress =
        document.getElementById("scrollProgress");

    const dropdown =
        document.querySelector(".dropdown");

    const dropdownLink =
        document.querySelector(".dropdown-link");



    /* =====================================================
       02. PAGE LOADER
    ===================================================== */

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (pageLoader) {
                pageLoader.classList.add("hide");
            }

            document.body.classList.remove("no-scroll");

            startHeroAnimations();

        }, 900);

    });


    document.body.classList.add("no-scroll");



    /* =====================================================
       03. MOBILE MENU
    ===================================================== */

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            menuToggle.classList.toggle("active");

            navMenu.classList.toggle("active");

            document.body.classList.toggle("no-scroll");

        });

    }



    /* =====================================================
       04. MOBILE ABOUT DROPDOWN
    ===================================================== */

    if (dropdown && dropdownLink) {

        dropdownLink.addEventListener("click", (event) => {

            if (window.innerWidth <= 900) {

                event.preventDefault();

                dropdown.classList.toggle("open");

            }

        });

    }



    /* =====================================================
       05. CLOSE MOBILE MENU WHEN LINK IS CLICKED
    ===================================================== */

    const navigationLinks =
        document.querySelectorAll(
            ".nav-menu a:not(.dropdown-link)"
        );


    navigationLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth <= 900) {

                menuToggle?.classList.remove("active");

                navMenu?.classList.remove("active");

                document.body.classList.remove("no-scroll");

            }

        });

    });



    /* =====================================================
       06. HEADER SCROLL EFFECT
    ===================================================== */

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    updateHeader();



    /* =====================================================
       07. SCROLL PROGRESS BAR
    ===================================================== */

    function updateScrollProgress() {

        if (!scrollProgress) return;

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        if (documentHeight <= 0) return;

        const progress =
            (scrollTop / documentHeight) * 100;

        scrollProgress.style.width =
            `${progress}%`;

    }


    window.addEventListener(
        "scroll",
        updateScrollProgress,
        { passive: true }
    );


    updateScrollProgress();



    /* =====================================================
       08. SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -50px 0px"
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });



    /* =====================================================
       09. HERO ANIMATION
    ===================================================== */

    function startHeroAnimations() {

        const heroElements =
            document.querySelectorAll(
                ".hero-section .reveal"
            );


        heroElements.forEach(
            (element, index) => {

                setTimeout(() => {

                    element.classList.add("active");

                }, index * 180);

            }
        );

    }



    /* =====================================================
       10. COUNTER ANIMATION
    ===================================================== */

    const counters =
        document.querySelectorAll(
            "[data-count]"
        );


    let countersStarted = false;


    function animateCounters() {

        if (countersStarted) return;

        const heroStats =
            document.querySelector(".hero-stats");

        if (!heroStats) return;


        const rect =
            heroStats.getBoundingClientRect();


        const visible =
            rect.top <
            window.innerHeight &&
            rect.bottom > 0;


        if (!visible) return;


        countersStarted = true;


        counters.forEach(counter => {

            const target =
                parseInt(
                    counter.getAttribute(
                        "data-count"
                    ),
                    10
                );


            let current = 0;


            const duration = 1400;

            const startTime =
                performance.now();


            function updateCounter(time) {

                const elapsed =
                    time - startTime;

                const progress =
                    Math.min(
                        elapsed / duration,
                        1
                    );


                const eased =
                    1 -
                    Math.pow(
                        1 - progress,
                        4
                    );


                current =
                    Math.floor(
                        eased * target
                    );


                counter.textContent =
                    current + "+";


                if (progress < 1) {

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    counter.textContent =
                        target + "+";

                }

            }


            requestAnimationFrame(
                updateCounter
            );

        });

    }


    window.addEventListener(
        "scroll",
        animateCounters,
        { passive: true }
    );


    animateCounters();



    /* =====================================================
       11. CUSTOM CURSOR
    ===================================================== */

    const cursorDot =
        document.querySelector(
            ".cursor-dot"
        );

    const cursorOutline =
        document.querySelector(
            ".cursor-outline"
        );


    if (
        cursorDot &&
        cursorOutline &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        let mouseX = 0;
        let mouseY = 0;

        let outlineX = 0;
        let outlineY = 0;


        document.addEventListener(
            "mousemove",
            event => {

                mouseX =
                    event.clientX;

                mouseY =
                    event.clientY;


                cursorDot.style.left =
                    `${mouseX}px`;

                cursorDot.style.top =
                    `${mouseY}px`;

            }
        );


        function animateCursor() {

            outlineX +=
                (mouseX - outlineX) * 0.15;

            outlineY +=
                (mouseY - outlineY) * 0.15;


            cursorOutline.style.left =
                `${outlineX}px`;

            cursorOutline.style.top =
                `${outlineY}px`;


            requestAnimationFrame(
                animateCursor
            );

        }


        animateCursor();



        /* ---------------------------------------------
           CURSOR HOVER
        --------------------------------------------- */

        const interactiveElements =
            document.querySelectorAll(
                "a, button, .story-card, .category-item, .step"
            );


        interactiveElements.forEach(element => {

            element.addEventListener(
                "mouseenter",
                () => {

                    cursorOutline.style.width =
                        "60px";

                    cursorOutline.style.height =
                        "60px";

                    cursorOutline.style.background =
                        "rgba(255,104,71,.08)";

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    cursorOutline.style.width =
                        "38px";

                    cursorOutline.style.height =
                        "38px";

                    cursorOutline.style.background =
                        "transparent";

                }
            );

        });

    }



    /* =====================================================
       12. SMOOTH INTERNAL LINKS
    ===================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) return;


                event.preventDefault();


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect()
                        .top +
                    window.scrollY -
                    headerHeight;


                window.scrollTo({

                    top:
                        targetPosition,

                    behavior:
                        "smooth"

                });

            }
        );

    });



    /* =====================================================
       13. BACK TO TOP
    ===================================================== */

    const backTop =
        document.querySelector(
            ".back-top"
        );


    if (backTop) {

        backTop.addEventListener(
            "click",
            event => {

                event.preventDefault();


                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }



    /* =====================================================
       14. HERO IMAGE PARALLAX
    ===================================================== */

    const heroImage =
        document.querySelector(
            ".hero-image"
        );


    const rotatingCircle =
        document.querySelector(
            ".rotating-circle"
        );


    function heroParallax() {

        if (
            !heroImage ||
            window.innerWidth < 901
        ) {
            return;
        }


        const scroll =
            window.scrollY;


        const amount =
            Math.min(
                scroll * 0.08,
                45
            );


        heroImage.style.transform =
            `translateY(${amount}px) scale(1.01)`;


        if (rotatingCircle) {

            rotatingCircle.style.transform =
                `rotate(${scroll * 0.08}deg)`;

        }

    }


    window.addEventListener(
        "scroll",
        heroParallax,
        { passive: true }
    );



    /* =====================================================
       15. IMAGE PARALLAX SECTIONS
    ===================================================== */

    const visualImage =
        document.querySelector(
            ".visual-break-image img"
        );


    function visualParallax() {

        if (
            !visualImage ||
            window.innerWidth < 700
        ) {
            return;
        }


        const section =
            document.querySelector(
                ".visual-break"
            );


        if (!section) return;


        const rect =
            section.getBoundingClientRect();


        const windowHeight =
            window.innerHeight;


        if (
            rect.top < windowHeight &&
            rect.bottom > 0
        ) {

            const progress =
                (
                    windowHeight -
                    rect.top
                ) /
                (
                    windowHeight +
                    rect.height
                );


            const movement =
                (progress - 0.5) * 35;


            visualImage.style.transform =
                `scale(1.06) translateY(${movement}px)`;

        }

    }


    window.addEventListener(
        "scroll",
        visualParallax,
        { passive: true }
    );



    /* =====================================================
       16. MOUSE PARALLAX ON HERO
    ===================================================== */

    const heroVisual =
        document.querySelector(
            ".hero-visual"
        );


    if (
        heroVisual &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        heroVisual.addEventListener(
            "mousemove",
            event => {

                if (window.innerWidth < 901) {
                    return;
                }


                const rect =
                    heroVisual.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const moveX =
                    (x - centerX) /
                    35;


                const moveY =
                    (y - centerY) /
                    35;


                const frame =
                    document.querySelector(
                        ".image-frame"
                    );


                const cards =
                    document.querySelectorAll(
                        ".floating-card"
                    );


                if (frame) {

                    frame.style.transform =
                        `translate(${moveX}px, ${moveY}px)`;

                }


                cards.forEach(
                    (card, index) => {

                        const strength =
                            index === 0
                                ? 1.5
                                : -1.2;


                        card.style.transform =
                            `translate(
                                ${moveX * strength}px,
                                ${moveY * strength}px
                            )`;

                    }
                );

            }
        );


        heroVisual.addEventListener(
            "mouseleave",
            () => {

                const frame =
                    document.querySelector(
                        ".image-frame"
                    );


                const cards =
                    document.querySelectorAll(
                        ".floating-card"
                    );


                if (frame) {

                    frame.style.transform =
                        "";

                }


                cards.forEach(card => {

                    card.style.transform =
                        "";

                });

            }
        );

    }



    /* =====================================================
       17. STORY CARD IMAGE TILT
    ===================================================== */

    const storyCards =
        document.querySelectorAll(
            ".story-card"
        );


    storyCards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                if (
                    window.innerWidth < 901
                ) {
                    return;
                }


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    (y - centerY) /
                    30;


                const rotateY =
                    (centerX - x) /
                    30;


                card.style.transform =
                    `translateY(-10px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)`;

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



    /* =====================================================
       18. CATEGORY HOVER
    ===================================================== */

    const categoryItems =
        document.querySelectorAll(
            ".category-item"
        );


    categoryItems.forEach(item => {

        item.addEventListener(
            "mouseenter",
            () => {

                categoryItems.forEach(
                    other => {

                        if (other !== item) {

                            other.style.opacity =
                                ".45";

                        }

                    }
                );

            }
        );


        item.addEventListener(
            "mouseleave",
            () => {

                categoryItems.forEach(
                    other => {

                        other.style.opacity =
                            "1";

                    }
                );

            }
        );

    });



    /* =====================================================
       19. MARQUEE PAUSE ON HOVER
    ===================================================== */

    const marquee =
        document.querySelector(
            ".marquee-track"
        );


    if (marquee) {

        marquee.addEventListener(
            "mouseenter",
            () => {

                marquee.style.animationPlayState =
                    "paused";

            }
        );


        marquee.addEventListener(
            "mouseleave",
            () => {

                marquee.style.animationPlayState =
                    "running";

            }
        );

    }



    /* =====================================================
       20. IMAGE LAZY LOADING
    ===================================================== */

    const images =
        document.querySelectorAll(
            "img"
        );


    images.forEach(image => {

        if (!image.hasAttribute("loading")) {

            image.setAttribute(
                "loading",
                "lazy"
            );

        }

    });


    /* Keep the main hero image immediately available */

    const mainHeroImage =
        document.querySelector(
            ".hero-image"
        );


    if (mainHeroImage) {

        mainHeroImage.setAttribute(
            "loading",
            "eager"
        );

    }



    /* =====================================================
       21. IMAGE ERROR HANDLING
    ===================================================== */

    images.forEach(image => {

        image.addEventListener(
            "error",
            () => {

                image.classList.add(
                    "image-error"
                );

            }
        );

    });



    /* =====================================================
       22. WINDOW RESIZE
    ===================================================== */

    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(resizeTimer);


            resizeTimer =
                setTimeout(() => {

                    if (
                        window.innerWidth > 900
                    ) {

                        navMenu?.classList.remove(
                            "active"
                        );

                        menuToggle?.classList.remove(
                            "active"
                        );

                        document.body.classList.remove(
                            "no-scroll"
                        );

                        dropdown?.classList.remove(
                            "open"
                        );

                    }

                }, 200);

        }
    );



    /* =====================================================
       23. KEYBOARD ESCAPE
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Escape") {
                return;
            }


            navMenu?.classList.remove(
                "active"
            );


            menuToggle?.classList.remove(
                "active"
            );


            dropdown?.classList.remove(
                "open"
            );


            document.body.classList.remove(
                "no-scroll"
            );

        }
    );



    /* =====================================================
       24. ACTIVE NAVIGATION
    ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    const navLinks =
        document.querySelectorAll(
            ".nav-menu > li > a"
        );


    navLinks.forEach(link => {

        const href =
            link.getAttribute("href");


        if (!href) return;


        const linkPage =
            href
                .split("/")
                .pop()
                .toLowerCase();


        if (
            linkPage === currentPage ||
            (
                currentPage === "" &&
                linkPage === "index.html"
            )
        ) {

            link.classList.add(
                "active"
            );

        }

    });



    /* =====================================================
       25. PREVENT EMPTY IMAGE LINKS
    ===================================================== */

    const imageLinks =
        document.querySelectorAll(
            "img"
        );


    imageLinks.forEach(image => {

        image.addEventListener(
            "error",
            function () {

                this.style.background =
                    "linear-gradient(135deg, #eee9df, #f8f5ef)";

                this.style.minHeight =
                    "200px";

                this.style.objectFit =
                    "contain";

                this.style.padding =
                    "30px";

            }
        );

    });



    /* =====================================================
       26. INITIAL ANIMATIONS
    ===================================================== */

    setTimeout(() => {

        const heroLabel =
            document.querySelector(
                ".hero-label"
            );


        if (heroLabel) {

            heroLabel.style.transform =
                "translateY(0)";

        }

    }, 100);



    /* =====================================================
       27. CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "%c Unfiltered Dreams ",
        "background:#111;color:#ff6847;font-size:16px;font-weight:bold;padding:8px;"
    );

    console.log(
        "Real stories. Real people. Real journeys."
    );

});

