
function agregarFila() {
    let fila = document.getElementsByClassName('fila-campo')[0];
    document.getElementById('campos').appendChild(fila);
}

let botonagregarFila = document.getElementById('boton-agregar-persona');

botonagregarFila.addEventListener("click", (e) => {
    e.preventDefault();
  
});
