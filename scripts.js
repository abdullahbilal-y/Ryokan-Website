// Hero Section Slider
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000);

// Services Section Slider
const serviceSlides = document.querySelectorAll('.service-slide');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
let currentServiceSlide = 0;

function showServiceSlide(index) {
  serviceSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

leftBtn.addEventListener('click', () => {
  currentServiceSlide = (currentServiceSlide - 1 + serviceSlides.length) % serviceSlides.length;
  showServiceSlide(currentServiceSlide);
});

rightBtn.addEventListener('click', () => {
  currentServiceSlide = (currentServiceSlide + 1) % serviceSlides.length;
  showServiceSlide(currentServiceSlide);
});