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
/* ========================= */
/* 🔥 CUSTOM LOGO            */
/* ========================= */
.logo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: 0 0 25px red;
    animation: pulse 2s infinite alternate;
}

@keyframes pulse {
    from { transform: scale(1); }
    to { transform: scale(1.1); }
}

/* ========================= */
/* 🔥 LOADING SCREEN         */
/* ========================= */
#loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 1s;
}

.loading-logo {
    font-size: 80px;
    font-weight: bold;
    color: #ff0000;
    text-shadow: 0 0 25px red, 0 0 50px purple;
    animation: glowPulse 2s infinite alternate;
}

@keyframes glowPulse {
    from { text-shadow: 0 0 20px red; }
    to { text-shadow: 0 0 50px purple; }
}

.loading-text {
    font-size: 20px;
    color: white;
    margin-top: 10px;
    font-family: Arial Black;
    animation: blink 1.2s infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}

.spinner {
    margin-top: 30px;
    width: 60px;
    height: 60px;
    border: 6px solid #333;
    border-top-color: red;
    border-radius: 50%;
    animation: spin 1s infinite linear;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
