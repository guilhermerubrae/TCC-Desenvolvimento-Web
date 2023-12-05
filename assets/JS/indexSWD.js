$(document).ready(function () {
  $(".partner-logos").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false, // Remover setas de navegação
  });
});

function validateForm() {
  var nome = document.getElementById("nome").value;
  var empresa = document.getElementById("empresa").value;
  var telefone = document.getElementById("telefone").value;
  var email = document.getElementById("email").value;
  var mensagem = document.getElementById("mensagem").value;

  if (
    nome === "" ||
    empresa === "" ||
    telefone === "" ||
    email === "" ||
    mensagem === ""
  ) {
    alert("Por favor, preencha todos os campos.");
  } else {
    alert("Formulário enviado com sucesso!");
  }
}

function validateForm() {
  // Aqui ficaria a lógica para validar o formulário
  // Se o formulário for válido e enviado com sucesso, exiba o pop-up
  showSuccessPopup();
}

function validateForm() {
  // Aqui ficaria a lógica para validar o formulário
  // Por exemplo, verificar se os campos estão preenchidos corretamente

  // Se o formulário for válido, exiba o pop-up de sucesso
  showSuccessPopup();
}

function showSuccessPopup() {
  var popup = document.getElementById("successPopup");
  popup.classList.add("show-popup");

  // Esconder o pop-up após alguns segundos (opcional)
  setTimeout(function () {
    popup.classList.remove("show-popup");
  }, 3000); // 3000 milissegundos = 3 segundos
}

$(document).ready(function () {
  if ($(window).width() <= 767) {
    $(".plan-carousel .custom-div").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
    });
  }
});
