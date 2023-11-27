$(document).ready(function(){
    $('.partner-logos').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    });
  });
  
  function validateForm() {
    var nome = document.getElementById('nome').value;
    var empresa = document.getElementById('empresa').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    if (nome === '' || empresa === '' || telefone === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        alert('Formulário enviado com sucesso!');
    }
}