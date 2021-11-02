import {
  validarPass,
  validarMail,
  validarGeneralLogin,
} from "./validaciones.js";

//** Extracion de los imput del los Productos **//
let email = document.querySelector("#inputEmail");
let pass = document.querySelector("#inputPassword");
let formularioIngresar = document.querySelector("#formularioLogin");
let productoExistente = false;
let listaEmpleados = [
    {
      "nombre": "Pablo",
      "apellido": "castillo",
      "correo": "pcastillo@hotmail.com",
      "contraseña": "Pablo123!"
    },
    {
      "nombre": "Carlos",
      "apellido": "Carral",
      "correo": "ccarral@hotmail.com",
      "contraseña": "Carral123!"
    },
    {
      "nombre": "Enrico",
      "apellido": "Palermo",
      "correo": "epalermo@hotmail.com",
      "contraseña": "Epalermo132!"
    }
];

//** Agregado de eventos blur (foco) **//
email.addEventListener("blur", () => {
  validarMail(email);
});
pass.addEventListener("blur", () => {
  validarPass(pass);
});
formularioIngresar.addEventListener("submit", validarUsuario);

function validarUsuario(e) {
  e.preventDefault();
  if (validarGeneralLogin()) {
    if (productoExistente === false) {
        comprobarDatos();
    }
  }
}

function comprobarDatos() {
    let nuevaLista = listaEmpleados.concat(JSON.parse(localStorage.getItem("listaUsuarios")) || [])
 
    for (let i = 0; i < nuevaLista.length; i++) {
        if(email.value === "pcastillo@hotmail.com" && pass.value === "Pablo13!" ||
        email.value === "ccarral@hotmail.com" && pass.value === "Carral123!" ||
        email.value === "epalermo@hotmail.com" && pass.value === "Epalermo132!"){
            window.location.replace("../admin.html");
        } else if(email.value === nuevaLista[i].correo && pass.value === nuevaLista[i].contraseña) {
            window.location.replace("../index.html");
        }
    }
    let alerta = document.querySelector("#mensajeAlertaErrorLogin");
    alerta.className = "alert alert-danger mt-4";
}



