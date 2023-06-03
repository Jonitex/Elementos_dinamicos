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



//codigo de la tabla
document.getElementById("guardar").addEventListener("click", function (event) {
  event.preventDefault(); // Evita el envío del formulario por defecto

  // Obtén los valores de los campos de entrada
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var email = document.getElementById("email").value;

  var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if ((email == "") || (firstName == "") || (lastName == "")) {  //COMPRUEBA CAMPOS VACIOS
      alert("Los campos no pueden quedar vacios");
      return true;
  }

  if ( !expr.test(email) ){ //COMPRUEBA MAIL
    alert("Error: La dirección de correo " + email + " es incorrecta.");
    return false;
}

  // Crea una nueva fila en la tabla
  var table = document.getElementById("myTable");
  var newRow = table.insertRow();

  // Agrega celdas a la fila con los datos ingresados
  var cell1 = newRow.insertCell();
  cell1.innerHTML = firstName;

  var cell2 = newRow.insertCell();
  cell2.innerHTML = lastName;

  var cell3 = newRow.insertCell();
  cell3.innerHTML = email;

  var cell4 = newRow.insertCell();

  // Agrega un botón "Eliminar" a la celda de acciones
  var deleteButton = document.createElement("button");

  deleteButton.innerHTML = "X";
  deleteButton.style.borderRadius = "50%";
  deleteButton.style.backgroundColor = "red";
  deleteButton.style.color = "white";
  deleteButton.addEventListener("click", function () {
    var row = this.parentNode.parentNode;
    row.parentNode.removeChild(row);
  });
  cell4.appendChild(deleteButton);
  // Limpia los campos de entrada después de guardar los datos
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("email").value = "";
});
