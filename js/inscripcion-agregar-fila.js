
let botonagregarFila = document.getElementById('boton-agregar-persona');
let contenedor = document.getElementById('filas');

botonagregarFila.addEventListener("click", function(event) {
    event.preventDefault();
    let filaPrevia = document.querySelector('.fila-campo');
    let filaNueva = filaPrevia.cloneNode(true);
    contenedor.appendChild(filaNueva);

    let botonBorrar = filaNueva.getElementsByClassName('boton-borrar');

    for (var i = 0; i < botonBorrar.length; i++) {
        botonBorrar[i].addEventListener('click', function (event) {
            event.preventDefault();
            let fila = this.parentNode;
            if (fila !== contenedor.firstElementChild) {
                contenedor.removeChild(this.parentNode);
            }
        });
    
    }
});










