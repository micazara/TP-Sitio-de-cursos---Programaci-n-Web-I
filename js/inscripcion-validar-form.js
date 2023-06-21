let formulario = document.getElementById('campos');
let botonInscribirse = document.getElementById('boton-inscribirse');
let modal = document.getElementById('modal-inscriptos');
let botonCerrarModal = document.getElementById('cerrar-m');
let listaInscriptos = document.getElementById('listaCursos');
let error='';


function llenarModalInscriptos(nombres, dni) {
    for (let i = 0; i < nombres.length; i++) {
        let nuevoLi = document.createElement('li');
        nuevoLi.textContent = nombres[i].value + ' - ' + dni[i].value;
        document.getElementById('listaInscriptos').appendChild(nuevoLi);

    }
    let precio = sessionStorage.getItem('precioTotal');
    let liPrecio = document.createElement('li');
        liPrecio.textContent = `total: ${precio} $`;
        liPrecio.style.fontSize='large';
        liPrecio.style.textAlign = 'right';
        document.getElementById('listaInscriptos').appendChild(liPrecio);
        sessionStorage.removeItem('precioTotal');
}


formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('se envio');
    let nombres = document.getElementsByName('nombre');
    let email = document.getElementsByName('email');
    let cel = document.getElementsByName('numero');
    let dni = document.getElementsByName('dni');


    llenarModalInscriptos(nombres, dni);
    modal.style.display = 'block';

    botonCerrarModal.addEventListener('click', (e) => {
        modal.style.display = 'none';
    })
});





