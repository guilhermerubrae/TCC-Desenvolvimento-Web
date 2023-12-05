// Função para rolar para o início da página
function voltarParaInicio() {
  // Rola suavemente para o topo da página
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false, // Remover as setas de navegação
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
        loop: true,
        autoplay: true, // Ativar a reprodução automática
        autoplayTimeout: 3000, // Definir o tempo de espera entre os slides (em milissegundos)
      },
    },
  });
});

function toggleNavbar() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0";
}
