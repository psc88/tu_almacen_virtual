
import {validarCodigoProducto, validarCampo, validarCantidadProductos, validarURL, validarGeneralForm, validarCategoria} from "./validaciones.js"
import {Producto} from './clasesProductos.js'

//** Extracion de los imput del los Productos **//
let codigoForm = document.querySelector("#codigoId");
let cantidadForm = document.querySelector("#cantidadProducto");
let nombreProducto = document.querySelector("#nombreProducto");
let descripcionProducto = document.querySelector("#descripcionProducto");
let urlForm = document.querySelector("#urlProducto");
let categoria = document.querySelector("#cagetoriaProducto")
let formulario = document.querySelector("#formularioProducto");

//** Agregado de eventos blur (foco) **//
codigoForm.addEventListener("blur", () => {validarCodigoProducto(codigoForm)});
cantidadForm.addEventListener("blur", () => {validarCantidadProductos(cantidadForm)});
urlForm.addEventListener("blur", () => {validarURL(urlForm)});
nombreProducto.addEventListener("blur", () => {validarCampo(nombreProducto)});
descripcionProducto.addEventListener("blur", () => {validarCampo(descripcionProducto)});
categoria.addEventListener("blur", () => validarCategoria(categoria))
formulario.addEventListener("submit", guardarProducto);

function guardarProducto(e){
  e.preventDefault();
  if(validarGeneralForm()){
    console.log("aqui creo el producto");   
  }else{
    console.log("aqui no debo hacer nada");
  }
}

function agregarProducto(){
  let productoNuevo = new Producto(codigoForm.value, cantidadForm.value, nombreProducto.value, descripcionProducto.value, urlForm.value, categoria.value);
}
