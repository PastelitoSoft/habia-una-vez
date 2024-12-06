
let isClickAllowed = true;

export function generarNumerosAleatorios() {
    let numeros = [];
    for (let i = 0; i < 14; i++) {
        numeros.push(i);
    }

    // Mezclar números con Fisher-Yates
    for (let i = numeros.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
    }

    return numeros;
}

export function manejarClick(event) {
    if (event.target.tagName === 'IMG' && isClickAllowed) {
        magic.play();
        isClickAllowed = false; // Desactivar clic durante la animación
        event.target.style.cursor = 'not-allowed';
        // Reproducir sonido
        event.target.classList.add('flip-animation'); // Agregar la clase para animar
        // Eliminar la imagen después de que termine la animación
        event.target.addEventListener('animationend', () => {
            event.target.remove(); // Eliminar la imagen del DOM
            // Restaurar la posibilidad de hacer clic después de 3 segundos
            setTimeout(() => {
                isClickAllowed = true; // Permitir el siguiente clic
                event.target.style.cursor = 'pointer';
            }, 2500);
        });
    }
}

