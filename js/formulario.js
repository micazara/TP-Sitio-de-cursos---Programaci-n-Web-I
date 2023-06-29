/*
Cambios en la página de formulario de contacto
● Al presionar el botón enviar los campos se deben validar.
○ Nombre y apellido no puede estar vacío.

○ Si todas las validaciones son correctas el formulario se debe enviar.
■ Debe mostrar un popup con el texto “Consulta enviada”
■ Debe tener un boton que diga “aceptar” y redirige a la página principal
● Esta y todas las otras páginas deben de ser responsive.
*/

let botonEnviar = document.querySelector("#boton-enviar-form");
let mensaje = document.querySelector("#mensaje");
let error;
let mensajesError = "";

//CONTADOR
let caracteresIngresadosMensaje = document.querySelector(
  "#caracteresIngresados"
);
let caracteresRestantesMensaje = document.querySelector("#caracteresRestantes");
let caracteresActuales = document.getElementById("consulta");

//funcion dentro de submit
botonEnviar.addEventListener("click", function (event) {
  event.preventDefault();

  let form = document.querySelector("#formulario-consulta");
  error = false;
  let nombreApellido = document.querySelector("#nombre_y_apellido").value;
  let email = document.querySelector("#mail").value;
  let tel = document.querySelector("#telefono").value;

  //CAPTURAR TEXTAREA

  let cantidadActual = caracteresActuales.value.length;
  let maxCaracteres = 1000;

  // ○ Mail validado con expresión regular.
  let regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

  // ○ El teléfono se debe validar el formato de 8 dígitos e incluir un guión medio entre el cuarto
  // y quinto número en caso de que el usuario lo ingrese, si no lo ingresa no se deben realizar validaciones.

  let regexNumeros = /^\d{4}-?\d{4}$/;

  // ○ Consulta, se debe limitar a 1000 caracteres y mostrar la cantidad de caracteres ingresados y resantes en tiempo real.

  // V A L I D A C I O N

  // N O M B R E  Y  A P E L L I D O*/

  if (nombreApellido == "") {
    error = true;
    mensajesError += "<p>Ingresá tu nombre y apellido</p>";
  }

  // E M A I L
  if (!regexEmail.test(email)) {
    error = true;
    mensajesError += " <p>Ingresá un email válido</p> ";
  }

  // T E L E F O N O
  // testea que el regex se cumpla en tel
  if (!regexNumeros.test(tel)) {
    error = true;
    mensajesError += " <p>Ingresá un formato de telefono válido</p> ";
  }

  if (cantidadActual> 1000 || cantidadActual == 0) {
    error = true;
    mensajesError +=
      " <p>Los carpinchos queremos un mensaje, RELLENA EL CAMPO</p> ";
  }
  if (error) {
    //muestre los errores
    mensaje.innerHTML = mensajesError;
  } else {
    // form.submit();

    let modalFormularioExitoso = document.getElementById(
      "modal-formulario-exitoso"
    );
    let tituloModalContacto = document.getElementById("titulo-modal-contacto");
    tituloModalContacto.textContent =
      "Los carpis te saludan...estamos viendo tu consulta";
    modalFormularioExitoso.style.display = "block";

    let cerrarModal = document.querySelector(".cerrar-modal-formulario");

    cerrarModal.addEventListener("click", (e) => {
      modalFormularioExitoso.style.display = "none";
    });
  }
});

//FUNCION CUENTA
caracteresActuales.addEventListener("keyup", () => {
  let cantidadActual = parseInt(caracteresActuales.value.length);
  let maxCaracteres = 1000;
  let caracteresRestantes = maxCaracteres - cantidadActual;
  caracteresIngresadosMensaje.innerHTML = `${cantidadActual} caracteres`;
  caracteresRestantesMensaje.innerHTML = `${caracteresRestantes} caracteres`;
});
