
function limpiarCampo() {
    document.getElementById('f1campo1').value = '';
    document.getElementById('f1campo2').value = '';
    document.getElementById('f1campo3').value = '';
    document.getElementById('f1campo4').value = '';
}

let botonPrimeraFila = document.getElementById('borrarFila1');

botonPrimeraFila.addEventListener("click", (e) => {
    e.preventDefault();
    limpiarCampo();
});

