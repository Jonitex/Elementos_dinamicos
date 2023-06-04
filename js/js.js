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
document.getElementById("guardar").addEventListener('click', GetData);//Evento para el boton agregar
var isMoved = false;

//codigo del menu y el checkbox

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

/*Funcion para el boton >>Inicio<< del menu.*/

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

/*
**

*/

var dataArray=[];//Array en el que se iran agregando los registros.
var code_row = -1;//Variable global para capturar la posicion del elemento seleccionado del array al momento de actualizar.
//funcion para  leer los datos introducidos en los campos.

function GetData()
{
  event.preventDefault();
  // Obtén los valores de los campos de entrada
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var email = document.getElementById("email").value;

  var row = { nombre: firstName, Apellido: lastName, email: email };//Inicializamos las propiedades para el elemento del array
  
  if(validar_Campos(firstName, lastName, email) === true)
  {
    ClearTable();//Limpiamos la tabla de nuestra pagina.
    save_array(row);//Se actualiza si ya existe el registro, si no existe se agrega al array.
    dataArray.forEach(elementos =>{console.log(elementos)});
  }

}

//Funcion para construir los registros de la tabla (HTML).
function AddRows()
{

  for (const pos in dataArray) {
    const row = dataArray[pos]

    document.getElementById("myTable").insertRow(-1).innerHTML = '<tr id="n_row '+1+'"><td>'+ row.nombre + '</td><td>' + row.Apellido + '</td><td>' + row.email + '</td>'+
    '<a href="#" style="  top: 10px; position: relative; background: #167f0e; padding: 4px; color: #fff; text-decoration: none; #fff; margin: 5px ;border-radius: 5px;" " onclick="editar('+ pos +')";>Editar</a>' +
    '<a href="#" style=" top: 10px; position: relative; background: #fd0d03; padding: 4px; color: #fff;  text-decoration: none; #fff; margin: 5px ;border-radius: 5px; " onclick="eliminar('+ pos +')";>Eliminar</a></td></tr>';
  }
};

function limpiar(){
    // Limpia los campos de entrada después de guardar los datos
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
}

//Funcion para actualizar o agregar nuevo registro al array.
function save_array(row){

  if(code_row > -1){//Si la condicion se cumple se actualiza el registro seleccionado.

    update_row(dataArray, code_row, row);//Funcion para actualizar registros.
    AddRows();  //Construimos los registros de la tabla.
    limpiar();
    code_row = -1;//Se le asigna -1 por si se quiere agregar un registro nuevo.
  }else{
    dataArray.push(row) //Se agrega un elemento nuevo en el array.
    AddRows(); //Construimos los registros de la tabla.
    limpiar();
  }

}

//Funcion para actualizar registros.
function update_row(dataArray, pos, newValue) {
  dataArray[pos] = newValue;
}

//Funcion para cargar un registro del array a los campos.
function editar(pos){
  const row = dataArray[pos];//Capturamos el registro
  //Cargamos los datos a los campos
  code_row = row.codigo;
  document.getElementById("fname").value = row.nombre;
  document.getElementById("lname").value = row.Apellido;
  document.getElementById("email").value = row.email;
  console.log(dataArray[pos]);
  code_row = pos;
} 

// funcion para limpiar tabla de la pagina.
function ClearTable()
{
  let tablaregistros = document.getElementById("myTable");
  while(tablaregistros.rows.length > 1) {
    tablaregistros.deleteRow(-1);//Se elimina cada registro de la tabla menos el encabezado.
  }
}

//Funcion para eliminar registro.
function eliminar(pos){
  dataArray.splice(pos, 1);
  ClearTable();
  AddRows();
} 


//Funcion para validar campos nulos
function validar_Campos(firstName, lastName, email)
{
  var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if(firstName == "")
  {
    alert("Los campos no pueden quedar vacios");
    firstName.focus();
    return false;
  }else if(lastName == "")
  {
    alert("Los campos no pueden quedar vacios");
    lastName.focus();
    return false;
  }else if(email == "")
  {
    alert("Los campos no pueden quedar vacios");
    email.focus();
    return false;
  }else if( !expr.test(email) )
  { //COMPRUEBA MAIL
    alert("Error: La dirección de correo " + email + " es incorrecta.");
    email.focus();
    return false; 
  }

  return true
}
