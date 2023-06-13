function cargarValor() {
    if (sessionStorage.getItem('valor') == null) {
        return 0;
    } else {
        return sessionStorage.getItem('valor');
    }
}

function setValorPagina() {
    let numero = cargarValor();
    document.getElementById('numero-chango').innerHTML = numero;
}