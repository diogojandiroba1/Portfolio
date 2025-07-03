// --- Initialize AOS (Animate on Scroll) ---
AOS.init({
    duration: 1000, // values from 0 to 3000, with step 50ms
    once: true,     // whether animation should happen only once - while scrolling down
});

// --- Initialize Typed.js ---
var typed = new Typed(".auto-type", {
    strings: ["a Developer.", "a Tech Enthusiast.", "a Problem Solver.", "always learning."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
