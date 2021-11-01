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
      agregarUsuario();
    } else {
      console.log("no se hace nada");
    }
  }
}

function agregarUsuario(){

}
