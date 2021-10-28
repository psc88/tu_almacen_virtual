
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
let listaProductos = [];

//** carga inicial de la tabla **//
cargaInicialTabla();

//** Agregado de eventos blur (foco) **//
codigoForm.addEventListener("blur", () => {validarCodigoProducto(codigoForm)});
cantidadForm.addEventListener("blur", () => {validarCantidadProductos(cantidadForm)});
urlForm.addEventListener("blur", () => {validarURL(urlForm)});
nombreProducto.addEventListener("blur", () => {validarCampo(nombreProducto)});
descripcionProducto.addEventListener("blur", () => {validarCampo(descripcionProducto)});
categoria.addEventListener("blur", () => validarCategoria(categoria))
formulario.addEventListener("submit", guardarProducto);

//** guardar producto en localstorage y crear tabla **//
function guardarProducto(e){
  e.preventDefault();
  if(validarGeneralForm()){
    agregarProducto(); 
  }else{
    console.log("aqui no debo hacer nada");
  }
}

function agregarProducto(){
  let productoNuevo = new Producto(codigoForm.value, cantidadForm.value, nombreProducto.value, descripcionProducto.value, urlForm.value, categoria.value);
  listaProductos.push(productoNuevo);
  localStorage.setItem("listaProducto", JSON.stringify(listaProductos));
  limpiarFormulario();
  crearFilaProductos(productoNuevo);
}

function limpiarFormulario() {
  formulario.reset();
  codigoForm.className = "form-control";
  cantidadForm.className = "form-control";
  urlForm.className = "form-control";
  nombreProducto.className = "form-control";
  descripcionProducto.className = "form-control";
  categoria.className = "form-control";
}

function crearFilaProductos(itemProducto){
  let tabla = document.querySelector("#tablaMix");
  console.log(itemProducto)
  tabla.innerHTML += `<tr>
    <th scope="row">${itemProducto.codigo}</th>
    <td>${itemProducto.producto}</td>
    <td>${itemProducto.descripcion}</td>
    <td>${itemProducto.cantidad}</td>
    <td>${itemProducto.url}</td>
    <td class="text-center">
      <button class="btn btn-warning" onclick="prepararEdicion()">Editar</button>
      <button class="btn btn-warning mt-2" onclick="prepararEdicion()">Borrar</button>
    </td>
  </tr>`
}

function cargaInicialTabla(){
  listaProductos = JSON.parse(localStorage.getItem("listaProducto")) || [];
  listaProductos.forEach((itemProducto) => {
    crearFilaProductos(itemProducto);
  });
}