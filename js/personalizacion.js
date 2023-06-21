//VARIABLES

//personalización nombre destinatario
let nombreDestinatario = document.querySelector("#nombreDestinatario");
let texto = document.querySelector("#vista-previa-texto");
//personalización color texto ln 123 html
let colores = document.getElementsByName("color_elegido");
//personalización fondo ln 260 de html
let fondos = document.getElementsByName("fondo");
//personalización tamaño fuente ln 168 de html
let tamañoFuente = document.getElementsByName("tamaño_fuente");
//personalizacion monto ln 189 hmtl
let montoIngresado = document.querySelector("#monto");
let monto = document.querySelector(".cajauno--tarjeta--precio");
//personalizacion posicion ln 219 html
let posiciones = document.getElementsByName("posicion");
//vista previa ln 82
let vistaPrevia = document.querySelector(".vista-previa");

//FUNCIONES

// ESCRIBIR EN GIFTCARD

//insertAdjacentHTML().
nombreDestinatario.addEventListener("keyup", () => {
  texto.innerHTML = `Giftcard para ${nombreDestinatario.value}`;
});

//CAMBIAR MONTO
montoIngresado.addEventListener("keyup", () => {
  monto.innerHTML = `$ ${montoIngresado.value}`;
});

// CAMBIAR COLOR FONDO
fondos.forEach((item) => {
  item.addEventListener("click", () => {
    vistaPrevia.classList.remove(
      "fondo1",
      "fondo2",
      "fondo3",
      "fondo4",
      "fondo5"
    );
    vistaPrevia.classList.add(`fondo${item.value}`);
  });
});

//CAMBIAR TAMAÑO FUENTE
tamañoFuente.forEach((op) => {
  op.addEventListener("click", () => {
    vistaPrevia.classList.remove(
      "tamaño_fuente1",
      "tamaño_fuente2",
      "tamaño_fuente3",
      "tamaño_fuente4",
      "tamaño_fuente5"
    );
    vistaPrevia.classList.add(`tamaño_fuente${op.value}`);
  });
});

//CAMBIAR COLOR FUENTE

colores.forEach((op) => {
  op.addEventListener("click", () => {
    vistaPrevia.classList.remove(
      "color_elegido1",
      "color_elegido2",
      "color_elegido3",
      "color_elegido4",
      "color_elegido5"
    );
    vistaPrevia.classList.add(`color_elegido${op.value}`);
  });
});

//CAMBIAR POSICION

posiciones.forEach((pos)=>{
  pos.addEventListener("click",()=>{
    monto.classList.remove(
      "posicion1",
      "posicion2",
      "posicion3"
    );
    monto.classList.add(`posicion${pos.value}`);
  })
});
