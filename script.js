function toggleMenu() {
    const menu = document.querySelector("nav ul");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Reveal sections as user scrolls
const animated = document.querySelectorAll(".animate");

function reveal() {
    animated.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();
