// ====================
// Mobile Navigation
// ====================

const hamburgerBtn = document.querySelector(".hamburger-btn");
const navLinks = document.querySelector(".nav-links");

if (hamburgerBtn && navLinks) {

    hamburgerBtn.addEventListener("click", () => {

        navLinks.classList.toggle("nav-open");

        const isExpanded =
            hamburgerBtn.getAttribute("aria-expanded") === "true";

        hamburgerBtn.setAttribute(
            "aria-expanded",
            !isExpanded
        );

    });

}

// ====================
// Homepage Slideshow
// ====================

const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");
const nextBtn = document.querySelector(".next-slide");
const prevBtn = document.querySelector(".prev-slide");

let currentSlide = 0;
let slideshowInterval;

// Only run slideshow if it exists
if (slides.length > 0) {

    function showSlide(index) {

        slides.forEach(slide => {
            slide.classList.remove("active-slide");
        });

        indicators.forEach(indicator => {
            indicator.classList.remove("active-indicator");
        });

        slides[index].classList.add("active-slide");
        indicators[index].classList.add("active-indicator");

        currentSlide = index;

    }

    function nextSlide() {

        let nextIndex = currentSlide + 1;

        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }

        showSlide(nextIndex);

    }

    function previousSlide() {

        let previousIndex = currentSlide - 1;

        if (previousIndex < 0) {
            previousIndex = slides.length - 1;
        }

        showSlide(previousIndex);

    }

    function restartSlideshow() {

        clearInterval(slideshowInterval);

        slideshowInterval = setInterval(() => {
            nextSlide();
        }, 5000);

    }

    // Next button
    if (nextBtn) {

        nextBtn.addEventListener("click", () => {

            nextSlide();
            restartSlideshow();

        });

    }

    // Previous button
    if (prevBtn) {

        prevBtn.addEventListener("click", () => {

            previousSlide();
            restartSlideshow();

        });

    }

    // Dot indicators
    indicators.forEach((indicator, index) => {

        indicator.addEventListener("click", () => {

            showSlide(index);
            restartSlideshow();

        });

    });

    // Start slideshow
    showSlide(0);

    slideshowInterval = setInterval(() => {

        nextSlide();

    }, 5000);

}

// ====================
// Attribution Dropdown
// ====================

const attributionToggle =
    document.querySelector(".attribution-toggle");

const attributionContent =
    document.querySelector(".attribution-content");

if (attributionToggle && attributionContent) {

    attributionToggle.addEventListener("click", () => {

        attributionContent.classList.toggle("open");

    });

}
