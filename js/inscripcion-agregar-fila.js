 let precioOriginal = 100.0;
 sessionStorage.setItem('precioTotal', precioOriginal);
 let precionuevo = precioOriginal;
let botonagregarFila = document.getElementById('boton-agregar-persona');
let contenedor = document.getElementById('filas');

botonagregarFila.addEventListener("click", function (event) {
    event.preventDefault();
    let filaPrevia = document.querySelector('.fila-campo');
    let filaNueva = filaPrevia.cloneNode(true);
    contenedor.appendChild(filaNueva);
    
    precionuevo += precioOriginal;
    sessionStorage.setItem('precioTotal', precionuevo);
    document.getElementById('precio').textContent = `${precionuevo} $`;

    let botonBorrar = filaNueva.getElementsByClassName('boton-borrar');

    for (var i = 0; i < botonBorrar.length; i++) {
        botonBorrar[i].addEventListener('click', function (event) {
            event.preventDefault();
            let fila = this.parentNode;
            if (fila !== contenedor.firstElementChild) {
                contenedor.removeChild(this.parentNode);
                precionuevo -= precioOriginal;
                sessionStorage.setItem('precioTotal', precionuevo);
                document.getElementById('precio').textContent = `${precionuevo} $`;
            }
        });

    }
});










