const slides = document.querySelectorAll('.service-slide');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

// Set the initial index to the middle slide
let currentIndex = Math.floor(slides.length / 2);

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active', 'left', 'right');
    if (index === currentIndex) {
      slide.classList.add('active');
    } else if (index === currentIndex - 1 || (currentIndex === 0 && index === slides.length - 1)) {
      slide.classList.add('left');
    } else if (index === currentIndex + 1 || (currentIndex === slides.length - 1 && index === 0)) {
      slide.classList.add('right');
    }
  });
}

leftBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlides();
});

rightBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlides();
});

// Initialize the slider
updateSlides();