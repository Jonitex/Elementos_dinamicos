//declaracion de variables
var menu = document.getElementById("menu");
var content = document.getElementById("content");
var menuToggle = document.getElementById("menu-toggle");
var inicioLink = document.getElementById("inicio");
var formularioLink = document.getElementById("formulario");
var inicioContent = document.getElementById("inicio-content");
var formularioContent = document.getElementById("formulario-content");
var saludarBtn = document.getElementById("saludar");
var menuToggleimg = document.getElementById(menuToggleimg);
var menuToggleimg = document.getElementById("menu-toggleimg");
var container = document.getElementById("container");
var checkbox = document.getElementById("menu-toggle");
var isMoved = false;

/*
//codigo del menu y el checkbox
*/

menuToggle.addEventListener("change", function () {
  if (menuToggle.checked) {
    menu.classList.add("active");
    content.classList.add("active");
    menuToggle.classList.add("active");
  } else {
    menu.classList.remove("active");
    content.classList.remove("active");
    menuToggle.classList.remove("active");
  }
});

menuToggle.addEventListener("change", function () {
  if (menuToggleimg.checked) {
    menu.classList.add("click");
    content.classList.add("click");
    menuToggleimg.classList.add("click");
  } else {
    menu.classList.remove("clik");
    content.classList.remove("click");
    menuToggleimg.classList.remove("click");
  }
});

/*
/*Funcion para el boton >>Inicio<< del menu.
*/ 

inicioLink.addEventListener("click", function () {
  inicioContent.style.display = "block";
  formularioContent.style.display = "none";
  saludarBtn.style.display = "block";
  saludarBtn.style.margin = "0 auto";
  saludarBtn.style.marginTop = "10%";
  menuToggle.checked = false;

  if (mensaje.style.display === "block") {
    mensaje.style.display = "none";
  } 
});

formularioLink.addEventListener("click", function () {
  inicioContent.style.display = "none";
  formularioContent.style.display = "block";
  saludarBtn.style.display = "none";
  menuToggle.checked = false;
});

//codigo del boton img
container.addEventListener("click", function () {
  if (isMoved) {
    container.style.left = "0";
    isMoved = false;
  } else {
    container.style.left = "260px";
    isMoved = true;
  }

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      container.style.left = "260px";
    } else {
      container.style.left = "0";
    }
  });
});

/*Funcion del boton Saludar */
function toggleMensaje() {
  var mensaje = document.getElementById("mensaje");

  if (mensaje.style.display === "none") {
    mensaje.style.display = "block";
  } 

}
 
/*Funcion para cerrar mensaje de bienvenida*/

function cerrarMensaje() {
  var mensaje = document.getElementById("mensaje");
  mensaje.style.display = "none";
}
