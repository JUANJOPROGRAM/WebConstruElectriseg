let lastScrollTop = 0;
const wspBtn = document.getElementById('wsp-btn');

window.addEventListener('scroll', () => {
    // Captura la posición actual del scroll
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // ---- CASO 1: HACIENDO SCROLL HACIA ABAJO ----
        // Ponemos un umbral de 250px para que no aparezca de inmediato sobre el Hero
        if (currentScroll > 250) {
            wspBtn.classList.add('show');
        }
    } else {
        // ---- CASO 2: HACIENDO SCROLL HACIA ARRIBA ----
        wspBtn.classList.remove('show');
    }
    
    // Actualiza la posición anterior (evitando conflictos en Safari/Móviles con rebotes de scroll)
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});