import { generarNumerosAleatorios, manejarClick } from "./script.js";

let hojas = document.getElementById('hojas');
let magic = document.getElementById('magic');
let inicio = document.getElementById('img-inicio');
let div_inicio = document.getElementById('inicio');
let fin = document.getElementById('img-fin');
let isClickAllowed = true;


const numerosAleatorios = generarNumerosAleatorios();

// Insertar imágenes de hojas dinámicamente
numerosAleatorios.forEach((numero, index) => {
    const img = document.createElement('img');
    img.id = `${numero}`;
    img.src = `./res/img/${numero}.png`;
    img.alt = `Imagen ${numero}`;
    img.classList.add('img');
    img.style.zIndex = 100 + index; // Dinámico para cada hoja
    hojas.appendChild(img);

    // Asignar el manejador de clics
    img.addEventListener('click', manejarClick);
});

inicio.addEventListener('click', () => {
    magic.play();
    inicio.classList.add('flip-animation');
    inicio.addEventListener('animationend', () => {
        div_inicio.style.display = 'none';
    })
});


fin.addEventListener('click', () => {
    location.reload();
})