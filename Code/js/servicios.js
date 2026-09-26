document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todas las tarjetas de servicio
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        const track = card.querySelector('.carousel-track');
        const slides = card.querySelectorAll('.carousel-slide');
        
        // Si no hay carrusel en esta tarjeta, la saltamos
        if (!track || slides.length === 0) return;

        let currentIndex = 0;
        let intervalId = null;
        const totalSlides = slides.length;
        
        // El porcentaje de desplazamiento de cada slide (ej: 3 slides = 33.333%)
        const slideWidthPercentage = 100 / totalSlides;

        // Función para mover el carrusel
        const moveCarousel = () => {
            currentIndex++;
            
            // Si llegamos a la última imagen, volvemos a la primera
            if (currentIndex >= totalSlides) {
                currentIndex = 0;
            }
            
            // Aplicamos la transformación en CSS
            track.style.transform = `translateX(-${currentIndex * slideWidthPercentage}%)`;
        };

        // --- EVENTO: Al poner el ratón encima ---
        card.addEventListener('mouseenter', () => {
            // Cambia de imagen cada 1.5 segundos (1500 ms). Puedes ajustar este valor.
            intervalId = setInterval(moveCarousel, 1500);
        });

        // --- EVENTO: Al quitar el ratón ---
        card.addEventListener('mouseleave', () => {
            // Detenemos el temporizador
            clearInterval(intervalId);
            
            // Reiniciamos a la primera imagen
            currentIndex = 0;
            track.style.transform = `translateX(0)`;
        });
    });
});