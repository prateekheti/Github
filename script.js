const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const slideButtons = document.querySelectorAll('.slide-btn');
const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

navToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

slideButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('next')) {
            currentSlide = (currentSlide + 1) % slides.length;
        } else {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        }
        sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
});

let sliderInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
}, 6000);

sliderTrack.addEventListener('mouseenter', () => clearInterval(sliderInterval));
sliderTrack.addEventListener('mouseleave', () => {
    sliderInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    }, 6000);
});

const contactForm = document.querySelector('.contact form');
contactForm?.addEventListener('submit', event => {
    event.preventDefault();
    alert('Thanks for reaching out! We will get back to you soon.');
    contactForm.reset();
});
