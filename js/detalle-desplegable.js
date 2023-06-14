var acordeonItems = document.querySelectorAll('#acordeon li');

acordeonItems.forEach(function (item) {
    var titulo = item.querySelector('.acordeon-titulo');
    var contenido = item.querySelector('.acordeon-contenido');

    titulo.addEventListener('click', (e) => {
        e.preventDefault();
        if (item.classList.contains('acordeon-abierto')) {
            item.classList.remove('acordeon-abierto');
            contenido.style.display = 'none';
        } else {
            item.classList.add('acordeon-abierto');
            contenido.style.display = 'block';
        }
    });
});
