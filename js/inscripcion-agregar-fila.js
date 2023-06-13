
function agregarFila() {

    let filaPrevia = document.querySelector('.fila-campo');
    let filaNueva = filaPrevia.cloneNode(true);
    
    document.getElementById('filas').appendChild(filaNueva);

}

let botonagregarFila = document.getElementById('boton-agregar-persona');

botonagregarFila.addEventListener("click", (e) => {
    e.preventDefault();
    agregarFila();
});
