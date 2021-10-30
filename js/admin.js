import {
  validarCodigoProducto,
  validarCampo,
  validarCantidadProductos,
  validarURL,
  validarGeneralForm,
  validarCategoria,
} from "./validaciones.js";
import { Producto } from "./clasesProductos.js";

//** Extracion de los imput del los Productos **//
let codigoForm = document.querySelector("#codigoId");
let nombreProducto = document.querySelector("#nombreProducto");
let descripcionProducto = document.querySelector("#descripcionProducto");
let cantidadForm = document.querySelector("#cantidadProducto");
let urlForm = document.querySelector("#urlProducto");
let categoria = document.querySelector("#cagetoriaProducto");
let formulario = document.querySelector("#formularioProducto");
let listaProductosMix = [];
let listaProductosFrutas = [];
let listaProductosInflados = [];
let listaProductosEspecias = [];

//** llamado de la funcion para carga inicial de la tabla **//
cargaInicialTabla();

//** Agregado de eventos blur (foco) **//
codigoForm.addEventListener("blur", () => {validarCodigoProducto(codigoForm)});
nombreProducto.addEventListener("blur", () => {validarCampo(nombreProducto)});
descripcionProducto.addEventListener("blur", () => {validarCampo(descripcionProducto)});
cantidadForm.addEventListener("blur", () => {validarCantidadProductos(cantidadForm)});
urlForm.addEventListener("blur", () => {validarURL(urlForm)});
categoria.addEventListener("blur", () => validarCategoria(categoria))
formulario.addEventListener("submit", guardarProducto);

//** guardar producto en localstorage y crear tabla **//
function guardarProducto(e) {
  e.preventDefault();
  if (validarGeneralForm()) {
    agregarProducto();
  } else {
    console.log("aqui no debo hacer nada");
  }
}

//** Agregado de producto segun la categoria **//
function agregarProducto(){
  let productoNuevo = new Producto(codigoForm.value, nombreProducto.value, descripcionProducto.value, cantidadForm.value, urlForm.value, categoria.value);
  switch (productoNuevo.categoria){
    case 'mix':
        listaProductosMix.push(productoNuevo);
        localStorage.setItem("listaProductoMix", JSON.stringify(listaProductosMix));
        limpiarFormulario();
        crearFilaProductosMix(productoNuevo);

      break;
    case "frutas":
      listaProductosFrutas.push(productoNuevo);
      localStorage.setItem(
        "listaProductoFrutas",
        JSON.stringify(listaProductosFrutas)
      );
      limpiarFormulario();
      crearFilaProductosFrutas(productoNuevo);
      break;
    case "inflados":
      listaProductosInflados.push(productoNuevo);
      localStorage.setItem(
        "listaProductoInflados",
        JSON.stringify(listaProductosInflados)
      );
      limpiarFormulario();
      crearFilaProductosInflado(productoNuevo);
      break;
    case "especias":
      listaProductosEspecias.push(productoNuevo);
      localStorage.setItem(
        "listaProductoEspecias",
        JSON.stringify(listaProductosEspecias)
      );
      limpiarFormulario();
      crearFilaProductosEspecias(productoNuevo);
      break;
  }
}

//** Funcion para limpiar el formulario **//
function limpiarFormulario() {
  formulario.reset();
  codigoForm.className = "form-control";
  cantidadForm.className = "form-control";
  urlForm.className = "form-control";
  nombreProducto.className = "form-control";
  descripcionProducto.className = "form-control";
  categoria.className = "form-control";
}

//** Funcion para crear la fila en la tabla **//
function crearFilaProductosMix(itemProducto) {
  let tabla = document.querySelector("#tablaMix");


  tabla.innerHTML += `<tr>
    <th scope="row">${itemProducto.codigo}</th>
    <td>${itemProducto.producto}</td>
    <td>${itemProducto.descripcion}</td>
    <td>${itemProducto.cantidad}</td>
    <td>${itemProducto.url}</td>
    <td class="text-center">
      <button class="btn btn-warning mt-2" onclick="prepararEdicion()">Editar</button>
      <button class="btn btn-warning mt-2" onclick="eliminarProductoMix('${itemProducto.codigo}')">Borrar</button>
    </td>
  </tr>`;
}
function crearFilaProductosFrutas(itemProducto) {
  let tabla = document.querySelector("#tablaFrutas");

  tabla.innerHTML += `<tr>
    <th scope="row">${itemProducto.codigo}</th>
    <td>${itemProducto.producto}</td>
    <td>${itemProducto.descripcion}</td>
    <td>${itemProducto.cantidad}</td>
    <td>${itemProducto.url}</td>
    <td class="text-center">
      <button class="btn btn-warning mt-2" onclick="prepararEdicion()">Editar</button>
      <button class="btn btn-warning mt-2" onclick="eliminarProductoFrutas('${itemProducto.codigo}')">Borrar</button>
    </td>
  </tr>`;
}
function crearFilaProductosInflado(itemProducto) {
  let tabla = document.querySelector("#tablaInflados");


  tabla.innerHTML += `<tr>
    <th scope="row">${itemProducto.codigo}</th>
    <td>${itemProducto.producto}</td>
    <td>${itemProducto.descripcion}</td>
    <td>${itemProducto.cantidad}</td>
    <td>${itemProducto.url}</td>
    <td class="text-center">
      <button class="btn btn-warning mt-2" onclick="prepararEdicion()">Editar</button>
      <button class="btn btn-warning mt-2" onclick="eliminarProductoInflado('${itemProducto.codigo}')">Borrar</button>
    </td>
  </tr>`;
}
function crearFilaProductosEspecias(itemProducto) {
  let tabla = document.querySelector("#tablaEspecias");
  tabla.innerHTML += `<tr>
    <th scope="row">${itemProducto.codigo}</th>
    <td>${itemProducto.producto}</td>
    <td>${itemProducto.descripcion}</td>
    <td>${itemProducto.cantidad}</td>
    <td>${itemProducto.url}</td>
    <td class="text-center">
      <button class="btn btn-warning mt-2" onclick="prepararEdicion()">Editar</button>
      <button class="btn btn-warning mt-2" onclick="eliminarProductoEspecias('${itemProducto.codigo}')">Borrar</button>
    </td>
  </tr>`;
}

//** Funcion para cargar los datos en la tabla del localstorage **//
function cargaInicialTabla() {
  listaProductosMix =
    JSON.parse(localStorage.getItem("listaProductoMix")) || [];
  listaProductosFrutas =
    JSON.parse(localStorage.getItem("listaProductoFrutas")) || [];
  listaProductosInflados =
    JSON.parse(localStorage.getItem("listaProductoInflados")) || [];
  listaProductosEspecias =
    JSON.parse(localStorage.getItem("listaProductoEspecias")) || [];

  listaProductosMix.forEach((itemProducto) => {
    crearFilaProductosMix(itemProducto);
  });
  listaProductosFrutas.forEach((itemProducto) => {
    crearFilaProductosFrutas(itemProducto);
  });
  listaProductosInflados.forEach((itemProducto) => {
    crearFilaProductosInflado(itemProducto);
  });
  listaProductosEspecias.forEach((itemProducto) => {
    crearFilaProductosEspecias(itemProducto);
  });
}


// LOGICA DELETE

window.eliminarProductoMix = (codigo) => {
  let productosFiltradoMix = listaProductosMix.filter((itemProductoMix)=>{ return itemProductoMix.codigo != codigo});
  console.log(productosFiltradoMix);
  }
window.eliminarProductoFrutas = (codigo) => {
  let productosFiltradoFrutas = listaProductosFrutas.filter((itemProductoFrutas)=>{ return itemProductoFrutas.codigo != codigo});
  console.log(productosFiltradoFrutas);
  }
window.eliminarProductoInflado = (codigo) => {
  let productosFiltradoInflado = listaProductosInflado.filter((itemProductoInflado)=>{ return itemProductoInflado.codigo != codigo});
  console.log(productosFiltradoInflado);
  }
window.eliminarProductoEspecias = (codigo) => {
  let productosFiltradoEspecias = listaProductosEspecias.filter((itemProductoEspecias)=>{ return itemProductoEspecias.codigo != codigo});
  console.log(productosFiltradoEspecias);
  }

  // listaProductos = productosFiltradoMix;