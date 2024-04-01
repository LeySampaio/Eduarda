function nextSlide() {
  const carousel = document.getElementById('carousel');
  const itemWidth = carousel.querySelector('li').offsetWidth;
  const translateValue = -itemWidth;

  carousel.style.transition = 'transform 0.5s ease';
  carousel.style.transform = `translateX(${translateValue}px)`; 

  setTimeout(() => {
    carousel.appendChild(carousel.firstElementChild);
    carousel.style.transition = 'none';
    carousel.style.transform = 'translateX(0)';
  }, 500);
}

if (window.matchMedia("(max-width: 800px)").matches) {
  setInterval(nextSlide, 3000);
}
