let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach(slide => slide.style.display = "none");
    slides[currentIndex].style.display = "block";
}

function changeSlide(direction) {
    showSlide(currentIndex + direction);
}

// Auto-play slider every 10 seconds
setInterval(() => {
    changeSlide(1);
}, 10000);

document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentIndex);
});
