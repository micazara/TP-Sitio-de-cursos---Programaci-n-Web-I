
function cargarValor() {
    if (localStorage.getItem('valor') == null) {
        return 0;
    } else {
        return localStorage.getItem('valor');
    }
}

function agregarCurso() {
    let numero = cargarValor();
    numero++;
    localStorage.setItem('valor', numero);
    document.getElementById('numero-chango').innerHTML = numero;

}

let botones = document.querySelectorAll(".comprar");
var cursos = [];

for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function () {
        agregarCurso()
        var curso = button.getAttribute("data-value"); // Obtengo el valor del atributo "data-value"
        cursos.push(curso); // Agregar el valor al array
        localStorage.setItem('cursos-comprados', cursos);
    });
}


