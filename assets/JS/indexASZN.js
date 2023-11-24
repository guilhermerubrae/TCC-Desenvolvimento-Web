let currentSlide = 0;
const track = document.querySelector('.carousel-wrapper');
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    const newPosition = -currentSlide * 100 + '%';
    track.style.transform = 'translateX(' + newPosition + ')';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Mostrar a primeira imagem ao carregar a página
showSlide(currentSlide);

// Avançar automaticamente a cada 3 segundos
setInterval(nextSlide, 3000);
