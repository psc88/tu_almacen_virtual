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
      "contraseña": "Lautaro13!"
    },
    {
      "nombre": "Carlos",
      "apellido": "Carral",
      "correo": "ccarral@hotmail.com",
      "contraseña": "1234"
    },
    {
      "nombre": "Enrico",
      "apellido": "Palermo",
      "correo": "epalermo@hotmail.com",
      "contraseña": "1234"
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
        if(email.value === nuevaLista[i].correo && pass.value === nuevaLista[i].contraseña){
            window.location.replace("../admin.html");
        }
    }
    console.log("Error, mail o password incorrecto")
}



