if (window.innerWidth < 800) {
  const gridImg = document.querySelector('.grid-img');

  const descricao = document.querySelector('.descricao');

  //gridImg.parentNode.insertBefore(descricao, gridImg.nextSibling);
}

function nextSlide() {
  const carousel = document.getElementById('carousel');
  const itemWidth = carousel.querySelector('li').offsetWidth;
  const numItems = carousel.children.length;
  let translateValue = - itemWidth;

  carousel.style.transition = 'transform 0.5s ease';
  carousel.style.transform = `translateX(${translateValue}px)`; 

  setTimeout(() => {
    carousel.appendChild(carousel.firstElementChild);
    carousel.style.transition = 'none';
    carousel.style.transform = 'translateX(0)';
   }, 500);
  }
  setInterval(nextSlide, 2000);

  document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carousel');
    let translateValue = 0;
  
    function nextSlide() {
      const itemWidth = carousel.querySelector('li').offsetWidth;
      const numItems = carousel.children.length;
      let translateValue = -itemWidth;
  
      carousel.style.transition = 'transform 0.5s ease';
      carousel.style.transform = `translateX(${translateValue}px)`; 
  
      setTimeout(() => {
        carousel.appendChild(carousel.firstElementChild);
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateX(0)';
      }, 500);
    }
  
    if (window.matchMedia("(max-width: 800px)").matches) {
      setInterval(nextSlide, 5000);
    }
  });
