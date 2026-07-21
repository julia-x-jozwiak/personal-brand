/* ==========================================================
   REVEAL ANIMATION
========================================================== */

const revealElements = document.querySelectorAll(".reveal-scroll");

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    observer.observe(element);
});


/* ==========================================================
   NAVBAR HIDE ON SCROLL
========================================================== */

const navbar = document.querySelector(".navbar");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 0) {
        navbar.classList.remove("hide");
        lastScrollY = currentScrollY;
        return;
    }

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
        navbar.classList.add("hide");
    } else {
        navbar.classList.remove("hide");
    }

    lastScrollY = currentScrollY;
});


/* ==========================================================
   WORD CLOUD
========================================================== */

const cloud = document.querySelector(".word-cloud");
const words = document.querySelectorAll(".word-cloud span");

cloud.addEventListener("mousemove", (e) => {

    const cloudRect = cloud.getBoundingClientRect();

    const mouseX = e.clientX - cloudRect.left;
    const mouseY = e.clientY - cloudRect.top;

    words.forEach((word) => {

        const rect = word.getBoundingClientRect();

        const x = rect.left - cloudRect.left + rect.width / 2;
        const y = rect.top - cloudRect.top + rect.height / 2;

        const dx = x - mouseX;
        const dy = y - mouseY;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {

            const force = (120 - distance) / 120;

            const moveX = (dx / distance) * force * 18;
            const moveY = (dy / distance) * force * 18;

            word.style.transform =
                `translate(${moveX}px, ${moveY}px)`;

            word.style.color = "var(--accent)";
            word.style.textShadow =
                "0 0 18px rgba(143,180,255,.7)";

        } else {

            word.style.transform = "translate(0,0)";
            word.style.color = "";
            word.style.textShadow = "";

        }

    });

});

cloud.addEventListener("mouseleave", () => {

    words.forEach((word) => {

        word.style.transform = "";
        word.style.color = "";
        word.style.textShadow = "";

    });

});

