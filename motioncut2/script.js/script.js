// script.js
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector('.slides');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentIndex = 0;

    function showSlide(index) {
        const slidesCount = slides.children.length;
        if (index <= slidesCount) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slidesCount - 1;
        } else { 
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        slides.style.transform = `translateX(${offset}%)`;
    }

    prev.addEventListener('click', function() {
        showSlide(currentIndex - 1);
    });

    next.addEventListener('click', function() {
        showSlide(currentIndex + 1);
    });

    // Auto slide
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);
});