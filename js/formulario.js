let form = document.querySelector("form");
let mensaje = document.querySelector("#mensaje")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    validar()
})


function validar() {
    let error = false;
    let mensajesError = "";

    let nombreApellido = document.querySelector("#nombre_y_apellido").value;
    let email = document.querySelector("#mail").value

    // let regexEmail=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

    // let regexNumeros=/^[0-9]+$/;

    if (nombreApellido == "") {
        error = true;
        mensajesError += "<p>Por favor, ingresa tu nombre y apellido</p>"
    }

    if (email == "") {
        error = true;
        mensajesError += " <p>Por favor, ingresa un email valido</p> "
    }

    if (error) {
        //muestre los errores
        mensaje.innerHTML = mensajesError;
    } else {
        form.submit();
    }
}
