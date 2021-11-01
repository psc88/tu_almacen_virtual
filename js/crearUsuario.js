import {
    validarPassCrear,
    validarMailCrear,
    validarNombre,
    validarGeneralCrearUsuario,
} from "./validaciones.js";
import { Usuario } from "./clasesUsuarios.js";

//** Extracion de los imput del los Productos **//
let email = document.querySelector("#correoId");
let pass = document.querySelector("#passId");
let nombre = document.querySelector("#nombreId")
let apellido = document.querySelector("#apellidoId")
let formularioIngresar = document.querySelector("#formularioCrear");
let productoExistente = false;
let usuarios = [];

//** Agregado de eventos blur (foco) **//
email.addEventListener("blur", () => {
    validarMailCrear(email);
});
pass.addEventListener("blur", () => {
    validarPassCrear(pass);
});
nombre.addEventListener("blur", () => {
    validarNombre(nombre);
});
apellido.addEventListener("blur", () => {
    validarNombre(apellido);
});
formularioIngresar.addEventListener("submit", validarUsuario);


function validarUsuario(e) {
    e.preventDefault();
    if (validarGeneralCrearUsuario()) {
        if (productoExistente === false) {
            crearUsuario();
        } else {
            console.log("no se hace nada");
        }
    }
}

function crearUsuario() {
    let usuarioNuevo = new Usuario(nombre.value, apellido.value, email.value, pass.value);
    usuarios.push(usuarioNuevo);
    localStorage.setItem("listaUsuarios", JSON.stringify(usuarioNuevo));
    limpiarFormulario();
    window.location.replace("../index.html");
}

function limpiarFormulario() {
    formularioIngresar.reset();
    nombre.className = "form-control";
    apellido.className = "form-control";
    email.className = "form-control";
    pass.className = "form-control";
}


