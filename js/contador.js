
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

function agregarCurso() {
    let numero = cargarValor();
    numero++;
    localStorage.setItem('valor', numero);
    document.getElementById('numero-chango').innerHTML = numero;
}



/*
function colorFondo() {
    let fondo = document.getElementById('caja-foto').style.backgroundColor;

    if (fondo == 'rgb(250, 226, 215)' && fondo != 'violet') {
        document.getElementById('caja-foto').style.backgroundColor = 'violet';
    } else if (fondo != 'pink') {
        document.getElementById('caja-foto').style.backgroundColor = 'pink';
    } else {
        document.getElementById('caja-foto').style.backgroundColor = 'rgb(250, 226, 215)';
    }

}
*/