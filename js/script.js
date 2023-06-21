// Função para alternar automaticamente os slides

const slides = document.querySelectorAll('.slide');
const navigationBar = document.querySelector('.navigation');
const navigationButtons = navigationBar.querySelectorAll
('.bar');

function autoSlide() {
  // Obter todos os elementos de slide


  let currentSlide = 0;

  // Definir intervalo de tempo para alternar os slides (5 segundos neste exemplo)
  setInterval(function () {


    // Incrementar o índice do slide atual
    currentSlide = (currentSlide + 1) % slides.length;

    // Marcar o botão de navegação correspondente ao slide atual como selecionado

    navigationButtons[currentSlide].click();
  }, 10000); // 5000 milissegundos = 5 segundos
}

// Chamar a função para iniciar a animação automática
autoSlide();





