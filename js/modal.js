var botonVer = document.getElementById('verCursos');
var botonCerrar = document.getElementsByClassName('cerrar')[0];

function mostrarCursos() {
    document.getElementsByClassName('e-cursos-carrito')[0].style.display = 'block';
}

function ocultarCursos() {
    document.getElementsByClassName('e-cursos-carrito')[0].style.display = 'none';
}

botonVer.addEventListener('click', (e) => {
    mostrarCursos();
});

botonCerrar.addEventListener('click', (e) => {
    ocultarCursos();
});