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

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  const carouselInner = document.querySelector(".carousel-inner");
  const items = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  function changeSlide(direction) {
    currentIndex =
      (currentIndex + direction + items.length) % items.length;
    const translateValue = -currentIndex * 50 + "%";
    carouselInner.style.transform = "translateX(" + translateValue + ")";
  }

  document
    .querySelector(".carousel-control-prev")
    .addEventListener("click", function () {
      changeSlide(-1);
    });

  document
    .querySelector(".carousel-control-next")
    .addEventListener("click", function () {
      changeSlide(1);
    });
});

const scrollButton = document.getElementById("scrollup");

scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

function toggleNavbar() {
  var navbar = document.getElementById("myNavbar");
  if (navbar.className === "navbar") {
    navbar.className += " responsive";
  } else {
    navbar.className = "navbar";
  }
}