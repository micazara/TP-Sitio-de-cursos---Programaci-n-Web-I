let botonBorrar = document.getElementsByClassName('boton-borrar');
let padre = document.getElementById('filas');

for (var i = 0; i < botonBorrar.length; i++) {
    botonBorrar[i].addEventListener('click', function (event) {
        event.preventDefault();
        let fila = this.parentNode;
        if (fila !== padre.firstElementChild) {
            padre.removeChild(this.parentNode);
        }
    });


}


