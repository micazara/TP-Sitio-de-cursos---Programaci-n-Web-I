function borrarFila() {
    let fila = document.querySelector('.fila-campo');
    let filaBorrar = fila.parentNode();

    filaBorrar.removeChild()
};


let botonBorrar = document.getElementsByClassName('boton-borrar');
let contenedor = document.getElementById('filas');

for (var i = botonBorrar.length - 1; i > 1; i--) {

    botonBorrar[i].addEventListener('click', (e) => {
        e.preventDefault();
        contenedor.removeChild(botonBorrar[i].parentNode);
// buscar la forma de que se pueda con nuevos
    });


}

