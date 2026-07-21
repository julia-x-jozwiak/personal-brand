// Reveal elements on scroll

const revealElements = document.querySelectorAll(".reveal-scroll");

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("active");

            // Zatrzymaj obserwację po pierwszym wyświetleniu
            observer.unobserve(entry.target);
        });
    },
    {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    }
);

revealElements.forEach((element) => {
    observer.observe(element);
});