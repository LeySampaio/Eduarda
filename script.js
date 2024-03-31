
// Verifica se a largura da janela é menor que 800 pixels (um valor arbitrário para dispositivos móveis)
if (window.innerWidth < 800) {
  // Seleciona o contêiner das imagens
  const gridImg = document.querySelector('.grid-img');
  // Seleciona o contêiner da descrição
  const descricao = document.querySelector('.descricao');
  // Insere a descrição após o contêiner das imagens
  gridImg.parentNode.insertBefore(descricao, gridImg.nextSibling);
}
