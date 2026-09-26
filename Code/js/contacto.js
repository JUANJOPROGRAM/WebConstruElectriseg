// Inicializa EmailJS con tu Public Key
emailjs.init("vqtdsJc_65DhJw4xD"); 

const form = document.getElementById('contactForm');
const btnEnviar = document.getElementById('btn-enviar');

// Función para crear y mostrar la notificación animada
function mostrarNotificacion(mensaje, tipo) {
    // 1. Creamos el elemento en el HTML
    const toast = document.createElement('div');
    toast.className = `toast-notification ${tipo}`;
    
    // Agregamos un icono dependiendo del tipo y el mensaje
    const icono = tipo === 'success' ? '✅' : '❌';
    toast.innerHTML = `<span>${icono}</span> <span>${mensaje}</span>`;

    // 2. Lo agregamos al cuerpo de la página
    document.body.appendChild(toast);

    // 3. Pequeño retraso para que CSS ejecute la animación de entrada
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    // 4. Ocultar y eliminar después de 4.5 segundos
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove(); // Limpiamos el HTML para que no se acumulen
        }, 500); // Esperamos a que termine la animación de salida
    }, 4500);
}

form.addEventListener('submit', function(event) {
    // Previene la recarga de la página
    event.preventDefault();

    // Cambia el estado del botón a "Enviando..."
    const textoOriginal = btnEnviar.textContent;
    btnEnviar.textContent = 'Enviando mensaje...';
    btnEnviar.disabled = true;

    // Ejecuta el envío a EmailJS
    emailjs.sendForm('service_yl8e0b5', 'template_x7i4vpt', this)
        .then(function() {
            // ÉXITO: Llamamos a nuestra nueva notificación
            mostrarNotificacion('¡Mensaje enviado correctamente! Te contactaremos pronto.', 'success');
            form.reset(); // Limpia los campos
        }, function(error) {
            // ERROR: Llamamos a nuestra nueva notificación
            mostrarNotificacion('Lo sentimos, hubo un problema al enviar. Intenta de nuevo.', 'error');
            console.error('Error de EmailJS:', error);
        })
        .finally(function() {
            // Restaura el botón sin importar el resultado
            btnEnviar.textContent = textoOriginal;
            btnEnviar.disabled = false;
        });
});