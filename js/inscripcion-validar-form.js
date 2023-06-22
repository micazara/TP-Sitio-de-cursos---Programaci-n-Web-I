let formulario = document.getElementById('campos');
let botonInscribirse = document.getElementById('boton-inscribirse');
let modal = document.getElementById('modal-inscriptos');
let botonCerrarModal = document.getElementById('cerrar-m');
let listaInscriptos = document.getElementById('listaCursos');
let error = '';
let seMostroError = false;


function llenarModalInscriptos(nombres, dni) {
    for (let i = 0; i < nombres.length; i++) {
        let nuevoLi = document.createElement('li');
        nuevoLi.textContent = nombres[i].value + ' - ' + dni[i].value;
        document.getElementById('listaInscriptos').appendChild(nuevoLi);

    }
    let precio = sessionStorage.getItem('precioTotal');
    let liPrecio = document.createElement('li');
    liPrecio.textContent = `total: ${precio} $`;
    liPrecio.style.fontSize = 'large';
    liPrecio.style.textAlign = 'right';
    document.getElementById('listaInscriptos').appendChild(liPrecio);
    sessionStorage.removeItem('precioTotal');
}

function camposLlenos(nombres, email, cel, dni) {
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i].value == '' || email[i].value == '' || cel[i].value == '' || dni[i].value == '') {
            error = '\n se deben rellenar todos los campos.';
            return false;
        }
    } return true;
}

function nombreValido(nombres) {
    const regexNombre = /^[A-Za-z\s]+$/; // solo letras

    for (let i = 0; i < nombres.length; i++) {
        if (!regexNombre.test(nombres[i].value)) {
            error = '\n El nombre no puede contener numeros ni caracteres especiales.';
            return false;
        }
    } return true;
}

function emailValido(email) {
    const regex = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/; // nombre@dominio.com

    for (let i = 0; i < email.length; i++) {
        if (!regex.test(email[i].value)) {
            error = '\n email incorrecto, asegurate de usar @ y un dominio valido.';
            return false;
        }
    } return true;
}

function dniValido(dni){
    const regexDni = /^\d{7,8}$/; // solo 8 digitos

    for (let i = 0; i < dni.length; i++) {
        if (!regexDni.test(dni[i].value)) {
            error = '\n dni incorrecto, asegurate de que contenga 8 digitos.';
            return false;
        }
    } return true;
}

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('se envio');
    let nombres = document.getElementsByName('nombre');
    let email = document.getElementsByName('email');
    let cel = document.getElementsByName('numero');
    let dni = document.getElementsByName('dni');

    if (camposLlenos(nombres, email, cel, dni) && nombreValido(nombres) && emailValido(email) && dniValido(dni)) {
        llenarModalInscriptos(nombres, dni);
        modal.style.display = 'block';

        botonCerrarModal.addEventListener('click', (e) => {
            modal.style.display = 'none';
        })
    } else if (!seMostroError) {
        let mensajeError = document.createElement('p');
        mensajeError.textContent = error;
        mensajeError.id = "mensajeError";
        mensajeError.style.color = 'red';
        formulario.appendChild(mensajeError);
        seMostroError = true;
    } else {
        document.getElementById("mensajeError").innerHTML = error;

    }
});





