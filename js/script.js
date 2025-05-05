document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.boton');
    const mensajeContenedor = document.getElementById('mensaje-contenedor');
    const mensajeTexto = document.getElementById('mensaje-texto');
    const botonEspecial = document.getElementById('boton-especial');

    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            const accion = this.dataset.accion;

            if (accion === 'redireccionar') {
                const url = this.dataset.url;
                if (url) {
                    window.location.href = url;
                } else {
                    console.warn('No se especificó URL para el botón de redirección.');
                }
            } else if (accion === 'mostrar-mensaje') {
                const mensaje = this.dataset.mensaje;
                if (mensaje) {
                    mensajeTexto.textContent = mensaje;
                    mensajeContenedor.classList.remove('oculto');
                    // Ocultar el mensaje después de unos segundos (opcional)
                    setTimeout(() => {
                        mensajeContenedor.classList.add('oculto');
                    }, 3000);
                } else {
                    console.warn('No se especificó mensaje para el botón.');
                }
            } else {
                console.log('Acción no definida para este botón.');
            }
        });
    });
