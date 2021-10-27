
import {validarCodigoProducto, validarCampo, validarCantidadProductos, validarURL, validarGeneralForm} 
from "./validaciones.js"

let codigoForm = document.querySelector("#codigoId");
let cantidadForm = document.querySelector("#cantidadProducto");
let nombreProducto = document.querySelector("#nombreProducto");
let descripcionProducto = document.querySelector("#descripcionProducto");
let urlForm = document.querySelector("#urlProducto");
let formulario = document.querySelector("#formularioProducto");

codigoForm.addEventListener("blur", () => {validarCodigoProducto(codigoForm)});
cantidadForm.addEventListener("blur", () => {validarCantidadProductos(cantidadForm)});
urlForm.addEventListener("blur", () => {validarURL(urlForm)});
nombreProducto.addEventListener("blur", () => {validarCampo(nombreProducto)});
descripcionProducto.addEventListener("blur", () => {validarCampo(descripcionProducto)});
formulario.addEventListener("submit", guardarProducto);

function guardarProducto(e){
  e.preventDefault();
  if(validarGeneralForm()){
    console.log("aqui creo el producto");   
  }else{
    console.log("aqui no debo hacer nada");
  }
}
