const sections = document.querySelectorAll(".fade-section");

function revealSections() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);
window.addEventListener("load", function () {

    setTimeout(function () {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(function () {
            loader.style.display = "none";
        }, 800);

    }, 2000);

});window.addEventListener("load", function () {

    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(function () {

        if (Date.now() > animationEnd) {
            clearInterval(interval);
            return;
        }

        confetti({
            particleCount: 6,
            angle: 60,
            spread: 80,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 6,
            angle: 120,
            spread: 80,
            origin: { x: 1 }
        });

    }, 200);

});