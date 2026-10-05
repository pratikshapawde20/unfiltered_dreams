/* ==============================================
           HEADER SCROLL
        ============================================== */

        const header = document.getElementById("luHeader");

        window.addEventListener("scroll", () => {

            if (window.scrollY > 40) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });



        /* ==============================================
           MOBILE MENU
        ============================================== */

        const menuToggle =
            document.getElementById("luMenuToggle");

        const menu =
            document.getElementById("luMenu");

        menuToggle.addEventListener("click", () => {

            menu.classList.toggle("active");

            const icon =
                menuToggle.querySelector("i");

            if (menu.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });



        /* ==============================================
           ABOUT DROPDOWN
        ============================================== */

        const about =
            document.getElementById("luAbout");

        const aboutButton =
            document.getElementById("luAboutBtn");

        aboutButton.addEventListener("click", (event) => {

            event.stopPropagation();

            about.classList.toggle("open");

        });


        document.addEventListener("click", (event) => {

            if (!about.contains(event.target)) {

                about.classList.remove("open");

            }

        });



        /* ==============================================
           CLOSE MOBILE MENU AFTER LINK CLICK
        ============================================== */

        document.querySelectorAll(".lu-menu a").forEach(link => {

            link.addEventListener("click", () => {

                menu.classList.remove("active");

                const icon =
                    menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });



        /* ==============================================
           SCROLL REVEAL
        ============================================== */

        const revealElements =
            document.querySelectorAll(".reveal");

        const revealObserver =
            new IntersectionObserver(

                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("show");

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



        /* ==============================================
           NUMBER COUNTER
        ============================================== */

        const counters =
            document.querySelectorAll("[data-number]");

        const counterObserver =
            new IntersectionObserver(

                entries => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) return;

                        const element =
                            entry.target;

                        const target =
                            Number(
                                element.dataset.number
                            );

                        let current = 0;

                        const duration = 1200;

                        const increment =
                            target / (duration / 20);

                        const timer =
                            setInterval(() => {

                                current += increment;

                                if (current >= target) {

                                    current = target;

                                    clearInterval(timer);

                                }

                                element.textContent =
                                    Math.floor(current) +
                                    (target > 1 ? "+" : "");

                            }, 20);

                        counterObserver.unobserve(
                            element
                        );

                    });

                },

                {
                    threshold: 0.5
                }

            );


        counters.forEach(counter => {

            counterObserver.observe(counter);

        });



        /* ==============================================
           CARD CLICK FEEDBACK
        ============================================== */

        document.querySelectorAll(".ig-card").forEach(card => {

            card.addEventListener("click", () => {

                card.style.transform =
                    "scale(0.97)";

                setTimeout(() => {

                    card.style.transform =
                        "";

                }, 180);

            });

        });
