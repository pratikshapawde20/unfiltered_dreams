/* MOBILE MENU */

        const menuToggle = document.getElementById("menuToggle");
        const navMenu = document.getElementById("navMenu");
        const aboutDropdown = document.getElementById("aboutDropdown");
        const aboutButton = document.getElementById("aboutButton");

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("open");

        });


        /* MOBILE ABOUT DROPDOWN */

        aboutButton.addEventListener("click", (event) => {

            if (window.innerWidth <= 850) {

                event.preventDefault();

                aboutDropdown.classList.toggle("open");

            }

        });


        /* CLOSE MENU AFTER CLICK */

        document.querySelectorAll(".nav-menu a").forEach(link => {

            link.addEventListener("click", () => {

                if (!link.closest(".dropdown")) {

                    navMenu.classList.remove("open");

                }

            });

        });


        /* SCROLL REVEAL */

        const revealElements = document.querySelectorAll(".reveal");

        const revealObserver = new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        revealObserver.unobserve(entry.target);

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


        /* HEADER SHADOW */

        window.addEventListener("scroll", () => {

            const header = document.querySelector(".site-header");

            if (window.scrollY > 20) {

                header.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,.06)";

            } else {

                header.style.boxShadow = "none";

            }

        });
