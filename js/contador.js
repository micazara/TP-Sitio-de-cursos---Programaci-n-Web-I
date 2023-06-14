
function cargarValor() {
    if (sessionStorage.getItem('valor') == null) {
        return 0;
    } else {
        return sessionStorage.getItem('valor');
    }
}

function agregarCurso() {
    let numero = cargarValor();
    numero++;
    sessionStorage.setItem('valor', numero);
    document.getElementById('numero-chango').innerHTML = numero;

}

function agregarAlModal(curso) {
    let nuevoLi = document.createElement('li');
    nuevoLi.textContent = curso;
    document.getElementById('listaCursos').appendChild(nuevoLi);

}

let botones = document.querySelectorAll(".comprar");
let cursos = [];

function actualizarArray() {
    var cursosObtenidos = JSON.parse(sessionStorage.getItem('cursos-comprados'));
    if (cursosObtenidos != null) {
        cursos = cursosObtenidos;
    } 
}

for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function () {
        actualizarArray();
        agregarCurso();
        let curso = this.getAttribute("data-value"); // Obtengo el valor del atributo "data-value"
        agregarAlModal(curso);
        cursos.push(curso); // Agregar el valor al array
        sessionStorage.setItem('cursos-comprados', JSON.stringify(cursos));

    });
}


