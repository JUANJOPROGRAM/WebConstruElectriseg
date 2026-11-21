// Lógica para el Menú Hamburguesa Responsive
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const mobileMenu = window.matchMedia('(max-width: 768px)');

function setMenuOpen(isOpen) {
    hamburger.classList.toggle('active', isOpen);
    navLinks.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    navLinks.inert = mobileMenu.matches && !isOpen;
}

setMenuOpen(false);

// Alternar estados al hacer click en la hamburguesa
hamburger.addEventListener('click', () => {
    setMenuOpen(hamburger.getAttribute('aria-expanded') !== 'true');
});

// Cerrar el menú automáticamente al hacer click en cualquier enlace 
// (Especialmente útil para el ancla smoothly dirigido a #contacto)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        setMenuOpen(false);
    });
});

mobileMenu.addEventListener('change', () => {
    setMenuOpen(false);
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobileMenu.matches && hamburger.getAttribute('aria-expanded') === 'true') {
        setMenuOpen(false);
        hamburger.focus();
    }
});
