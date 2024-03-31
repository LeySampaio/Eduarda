if (window.innerWidth < 800) {
  const gridImg = document.querySelector(".grid-img");

  const descricao = document.querySelector(".descricao");

  gridImg.parentNode.insertBefore(descricao, gridImg.nextSibling);
}
