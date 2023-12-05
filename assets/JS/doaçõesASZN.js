const wrapper = document.getElementById('carousel-wrapper');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentIndex = 0;

function showSlide(index) {
  const newTransformValue = -index * 100 + '%';
  wrapper.style.transform = `translateX(${newTransformValue})`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function autoSlide() {
  nextSlide();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

setInterval(autoSlide, 7000); // Troca de slide a cada 7 segundos

const scrollButton = document.getElementById("scrollup");

scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

function toggleNavbar() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0";
}