// Interview Preparation Carousel JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.arrow.prev');
    const nextBtn = document.querySelector('.arrow.next');
    let currentSlide = 0;

    function showSlide(index) {
        // Hide all slides
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            slide.setAttribute('aria-hidden', 'true');
        });

        // Show current slide
        slides[index].classList.add('active');
        slides[index].setAttribute('aria-hidden', 'false');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event listeners for buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });

    // Initialize first slide
    showSlide(currentSlide);
});