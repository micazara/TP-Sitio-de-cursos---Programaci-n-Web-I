let form = document.querySelector("form");
let mensaje = document.querySelector("#mensaje")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    validar()
})

function validar() {
    let error = false;
    let mensajesError = ""

    let nombreApellido = document.querySelector("#nombre_y_apellido").value;
    let email = document.querySelector("#mail").value

    // validar mail con regex
    // validar tel

    if (nombreApellido == "") {
        error = true;
        mensajesError += "<p>Por favor, ingresa tu nombre y apellido</p>"
    }

    if (email == "") {
        error = true;
        mensajesError += " <p>Por favor, ingresa un email valido</p> "
    }

    if(error){
        //muestre los errores
        mensaje.innerHTML=mensajesError;
    }else{  
        form.submit();
    } 
}
