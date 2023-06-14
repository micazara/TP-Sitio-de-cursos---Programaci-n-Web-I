function cargarValor() {
    if (sessionStorage.getItem('valor') == null) {
        return 0;
    } else {
        return sessionStorage.getItem('valor');
    }
}

function setValorPagina() {
    actualizarModal();
    let numero = cargarValor();
    document.getElementById('numero-chango').innerHTML = numero;

}

function actualizarModal() {
    let cursosGuardados = JSON.parse(sessionStorage.getItem('cursos-comprados'));

    for (let i = 0; i < cursosGuardados.length; i++) {
        let nuevoLi = document.createElement('li');
        nuevoLi.textContent = cursosGuardados[i];
        document.getElementById('listaCursos').appendChild(nuevoLi);
    }
}