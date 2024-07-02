document.addEventListener('DOMContentLoaded', function () {
    var hideVideoButton = document.getElementById('hide-video-button');
    var videoContainer = document.querySelector('.video-container');
    var arrow = document.getElementById('arrow-svg');


    if (hideVideoButton && videoContainer && arrow) {
        hideVideoButton.addEventListener('click', function () {
            if (videoContainer.classList.contains('slide-out')) {

                videoContainer.classList.remove('slide-out');
                videoContainer.classList.add('slide-in');
                arrow.classList.remove('rotate-out');
                arrow.classList.add('rotate-in');

            } else {
                // Ocultar o vídeo com animação
                videoContainer.classList.add('slide-out');
                videoContainer.classList.remove('slide-in');
                arrow.classList.remove('rotate-in');
                arrow.classList.add('rotate-out');

            }
        });
    }
});
// Função para verificar a posição do scroll
function checkScroll() {
    // Obter o elemento com a classe .ads-video
    const adsVideo = document.querySelector('.ads-video');
    
    // Verificar se o elemento existe na página
    if (!adsVideo) return;
    
    // Obter a posição do topo do elemento .ads-video em relação ao topo da janela
    const adsVideoTop = adsVideo.getBoundingClientRect().top;
    
    // Verificar a posição atual do scroll da página
    const scrollPosition = window.scrollY || window.pageYOffset;
    
    // Definir a distância de scroll que desejamos para aplicar a classe
    const offset = 20;
    
    // Se o topo do elemento .ads-video estiver dentro do viewport mais a margem de 40px
    if (adsVideoTop - scrollPosition < offset) {
      adsVideo.classList.add('scrolled');
    } else {
      adsVideo.classList.remove('scrolled');
    }
  }
  
  // Adicionar um evento de scroll à janela
  window.addEventListener('scroll', checkScroll);
  
  // Executar checkScroll inicialmente para aplicar a classe se necessário
  checkScroll();
  