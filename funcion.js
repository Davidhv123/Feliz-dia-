// Abrir y cerrar la carta
function toggleLetter() {
    const envelope = document.querySelector('.envelope-wrapper');
    envelope.classList.toggle('open');
}

// Lógica del Carrusel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function nextSlide() {
    // Quitar clase activa del actual
    slides[currentSlide].classList.remove('active');
    
    // Calcular siguiente índice
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Añadir clase activa al nuevo
    slides[currentSlide].classList.add('active');
}