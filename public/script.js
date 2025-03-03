document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    
    function showNextSlide() {
        slides[currentIndex].classList.remove("active"); // Hide current
        currentIndex = (currentIndex + 1) % slides.length; // Move to next
        slides[currentIndex].classList.add("active"); // Show next
    }
    
    setInterval(showNextSlide, 5000); // Change slide every 5 seconds
});
