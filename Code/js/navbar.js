// Lógica para el Menú Hamburguesa Responsive
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Alternar estados al hacer click en la hamburguesa
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Cerrar el menú automáticamente al hacer click en cualquier enlace 
// (Especialmente útil para el ancla smoothly dirigido a #contacto)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});
// ==========================================
// FONDO DESENFOCADO AUTOMÁTICO PARA CARRUSEL
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Buscamos todas las diapositivas
    const slides = document.querySelectorAll('.carousel-slide');
    
    slides.forEach(slide => {
        // Buscamos la imagen principal que está dentro
        const img = slide.querySelector('img');
        
        if (img) {
            // Tomamos la ruta de la imagen y se la asignamos al fondo del contenedor
            slide.style.backgroundImage = `url('${img.src}')`;
        }
    });
});