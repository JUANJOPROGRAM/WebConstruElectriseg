document.addEventListener("DOMContentLoaded", function() {
    // Configuración: el elemento aparece cuando el 15% entra en pantalla
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si el elemento entra en pantalla, le agregamos la clase 'visible'
                entry.target.classList.add('visible');
                // Dejamos de observarlo para que la animación solo ocurra la primera vez
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Seleccionamos todos los elementos que tengan la clase 'fade-in-up'
    const elementsToAnimate = document.querySelectorAll('.fade-in-up');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});