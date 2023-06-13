function cargarValor() {
    if (localStorage.getItem('valor') == null) {
        return 0;
    } else {
        return localStorage.getItem('valor');
    }
}

function setValorPagina() {
    let numero = cargarValor();
    document.getElementById('numero-chango').innerHTML = numero;
}