if (window.innerWidth < 800) {
  const gridImg = document.querySelector('.grid-img');

  const descricao = document.querySelector('.descricao');

  gridImg.parentNode.insertBefore(descricao, gridImg.nextSibling);
}


$(document).ready(function(){
  const carousel = $('#carousel');
  let translateValue = 0;

  $('#nextBtn').click(function(){
    const itemWidth = carousel.find('li').outerWidth(true);
    const numItems = carousel.find('li').length;
    const maxTranslate = -(itemWidth * (numItems - 1));
  
    if (translateValue > maxTranslate) {
      translateValue -= itemWidth;
      carousel.css('transform', `translateX(${translateValue}px)`);
    }
  });

  $('#prevBtn').click(function(){
    const itemWidth = carousel.find('li').outerWidth(true);
    
    if (translateValue < 0) {
      translateValue += itemWidth;
      carousel.css('transform', `translateX(${translateValue}px)`);
    }
  });
});

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

  setInterval(nextSlide, 3000);