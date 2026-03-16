// ==========================================================
// 1. SELECCIÓN DE ELEMENTOS DEL DOM
// ==========================================================

// Seleccionamos el título principal
const titulo = document.getElementById("titulo");

// Seleccionamos el input donde el estudiante escribe su nombre
const inputNombre = document.getElementById("nombre");

// Seleccionamos la caja visual que cambia de estilo
const caja = document.getElementById("caja");

// Seleccionamos el contenedor donde mostraremos mensajes
const mensaje = document.getElementById("mensaje");

// Seleccionamos el contenedor donde agregaremos nuevos elementos
const listaMensajes = document.getElementById("listaMensajes");

// Seleccionamos los botones
const btnMostrar = document.getElementById("btnMostrar");
const btnCambiarTitulo = document.getElementById("btnCambiarTitulo");
const btnColor = document.getElementById("btnColor");
const btnAgregar = document.getElementById("btnAgregar");
const btnLimpiar = document.getElementById("btnLimpiar");


// ==========================================================
// 2. VARIABLES DE APOYO
// ==========================================================

// Esta variable nos ayudará a contar cuántos mensajes se agregan
let contadorMensajes = 0;


// ==========================================================
// 3. FUNCIÓN PARA MOSTRAR MENSAJES
// ==========================================================

// Esta función reutilizable cambia el texto del contenedor de mensajes
// y además cambia su clase visual según el tipo de mensaje.
function mostrarMensaje(texto, tipo = "success") {
  mensaje.textContent = texto;

  // Quitamos clases anteriores para evitar estilos acumulados
  mensaje.classList.remove("success", "warning", "error");

  // Agregamos la nueva clase según el tipo recibido
  mensaje.classList.add(tipo);
}


// ==========================================================
// 4. EVENTO: MOSTRAR NOMBRE
// ==========================================================

// Cuando el usuario hace clic en el botón "Mostrar nombre",
// capturamos lo que escribió en el input.
btnMostrar.addEventListener("click", function () {
  // Guardamos el valor del input eliminando espacios innecesarios
  const nombre = inputNombre.value.trim();

  // Validamos que el usuario haya escrito algo
  if (nombre === "") {
    mostrarMensaje("Por favor, escribe tu nombre antes de continuar.", "warning");
    return;
  }

  // Mostramos un mensaje personalizado
  console.log("Valor del input:", inputNombre.value);
  mostrarMensaje(`Hola, ${nombre}. Bienvenido a la práctica de JavaScript.`, "success");
});


// ==========================================================
// 5. EVENTO: CAMBIAR TÍTULO
// ==========================================================

// Este evento demuestra cómo modificar el contenido de un elemento del DOM.
btnCambiarTitulo.addEventListener("click", function () {
  // Capturamos el valor actual del input
  const nombre = inputNombre.value.trim();

  // Si no hay nombre, usamos un texto genérico
  if (nombre === "") {
    titulo.textContent = "Estamos aprendiendo JavaScript";
    mostrarMensaje("El título fue cambiado a una versión general.", "success");
    return;
  }

  // Si hay nombre, personalizamos el título
  titulo.textContent = `Hola ${nombre}, hoy aprenderás DOM y eventos`;
  mostrarMensaje("El título fue actualizado correctamente.", "success");
});


// ==========================================================
// 6. EVENTO: CAMBIAR COLOR / TOGGLE DE CLASE
// ==========================================================

// Aquí enseñamos classList.toggle()
// Si la clase existe, la quita; si no existe, la agrega.
btnColor.addEventListener("click", function () {
  caja.classList.toggle("activo");

  // Verificamos si la clase quedó activa para mostrar el mensaje correcto
  if (caja.classList.contains("activo")) {
    mostrarMensaje("La caja ahora tiene la clase 'activo'.", "success");
  } else {
    mostrarMensaje("La caja volvió a su estilo original.", "warning");
  }
});


// ==========================================================
// 7. EVENTO: AGREGAR NUEVO ELEMENTO AL DOM
// ==========================================================

// Aquí enseñamos createElement(), textContent y appendChild()
btnAgregar.addEventListener("click", function () {
  const nombre = inputNombre.value.trim();

  // Validamos el campo
  if (nombre === "") {
    mostrarMensaje("No puedes agregar un mensaje vacío. Escribe un nombre.", "error");
    return;
  }

  // Incrementamos el contador
  contadorMensajes++;

  // Creamos un nuevo elemento HTML en memoria
  const nuevoMensaje = document.createElement("div");

  // Le asignamos una clase para que tenga estilo CSS
  nuevoMensaje.classList.add("item-message");

  // Definimos el contenido del nuevo elemento
  nuevoMensaje.textContent = `Mensaje ${contadorMensajes}: El estudiante ${nombre} interactuó con la página.`;

  // Insertamos el nuevo elemento dentro del contenedor
  listaMensajes.appendChild(nuevoMensaje);

  // Mostramos mensaje de confirmación
  mostrarMensaje("Se agregó un nuevo elemento al DOM.", "success");
});


// ==========================================================
// 8. EVENTO: LIMPIAR CONTENIDO
// ==========================================================

// Este evento limpia input, reinicia el título,
// elimina mensajes creados y restaura el estado visual.
btnLimpiar.addEventListener("click", function () {
  // Limpiamos el campo de texto
  inputNombre.value = "";

  // Restauramos el título original
  titulo.textContent = "Bienvenidos a JavaScript";

  // Restauramos el mensaje principal
  mensaje.textContent = "Aquí aparecerán los mensajes dinámicos.";
  mensaje.classList.remove("success", "warning", "error");

  // Quitamos la clase visual activa de la caja
  caja.classList.remove("activo");

  // Eliminamos todos los mensajes creados dinámicamente
  listaMensajes.innerHTML = "";

  // Reiniciamos el contador
  contadorMensajes = 0;
});


// ==========================================================
// 9. EVENTO DE TECLADO
// ==========================================================

// Este evento detecta cuando el usuario presiona Enter
// dentro del input para disparar la misma acción que el botón Mostrar nombre.
inputNombre.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    btnMostrar.click();
  }
});


// ==========================================================
// 10. EJEMPLOS EXTRA PARA DESCOMENTAR EN CLASE
// ==========================================================

// ----------------------------------------------------------
// EJEMPLO A: CAMBIAR ESTILO DIRECTAMENTE DESDE JAVASCRIPT
// ----------------------------------------------------------

caja.style.border = "2px solid yellow";
caja.style.backgroundColor = "rgba(255, 255, 0, 0.12)";


// ----------------------------------------------------------
// EJEMPLO B: CAMBIAR HTML INTERNO
// ----------------------------------------------------------

mensaje.innerHTML = "<strong>Mensaje generado</strong> con <em>innerHTML</em>";


// ----------------------------------------------------------
// EJEMPLO C: USAR console.log PARA EXPLICAR DEPURACIÓN
// ----------------------------------------------------------

console.log("Título:", titulo);
console.log("Valor del input:", inputNombre.value);
console.log("Caja:", caja);


// ----------------------------------------------------------
// EJEMPLO D: ELIMINAR EL ÚLTIMO MENSAJE AGREGADO
// ----------------------------------------------------------

// const ultimoMensaje = listaMensajes.lastElementChild;
// if (ultimoMensaje) {
//   ultimoMensaje.remove();
// }


// ----------------------------------------------------------
// EJEMPLO E: MOSTRAR LA CANTIDAD DE MENSAJES
// ----------------------------------------------------------

// console.log("Cantidad actual de mensajes:", contadorMensajes);