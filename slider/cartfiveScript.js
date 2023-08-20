const slider = document.querySelector('.slider');
const cardWidth = document.querySelector('.card').offsetWidth;
let slideIndex = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * cardWidth}px)`;
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slider.children.length;
    showSlide(slideIndex);
}

setInterval(nextSlide, 3000);
