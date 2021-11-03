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
let usuarioActual = []
let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || [];

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
            cargarUsuarioActual();
            crearUsuario();
        } else {
            console.log("no se hace nada");
        }
    }
}
function cargarUsuarioActual() {
    let usuarioLogin = new Usuario(email.value, pass.value);
    usuarioActual.push(usuarioLogin);
    localStorage.setItem("usuarioActual", JSON.stringify(usuarioActual));
}

function crearUsuario() {
    let usuarioNuevo = new Usuario(nombre.value, apellido.value, email.value, pass.value);
    listaUsuarios.push(usuarioNuevo);
    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
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


