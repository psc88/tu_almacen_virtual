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
let productoExistente = false;
let listaUsuarios = [];
let usuarioActual = [];
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

//** llamado de la funcion para carga inicial de la tabla **//
cargaInicialTabla();

//** Agregado de eventos blur (foco) **//
codigoForm.addEventListener("blur", () => {
  validarCodigoProducto(codigoForm);
});
nombreProducto.addEventListener("blur", () => {
  validarCampo(nombreProducto);
});
descripcionProducto.addEventListener("blur", () => {
  validarCampo(descripcionProducto);
});
cantidadForm.addEventListener("blur", () => {
  validarCantidadProductos(cantidadForm);
});
urlForm.addEventListener("blur", () => {
  validarURL(urlForm);
});
categoria.addEventListener("blur", () => {
  validarCategoria(categoria)
});

formulario.addEventListener("submit", guardarProducto);

//** guardar producto en localstorage y crear tabla **//
function guardarProducto(e) {
  e.preventDefault();
  if (validarGeneralForm()) {
    if (productoExistente === false) {
      agregarProducto();
    } else {
      actualizarProductos(categoria.value)
    }
  }
}

//** Agregado de producto segun la categoria **//
function agregarProducto() {
  let productoNuevo = new Producto(
    codigoForm.value,
    nombreProducto.value,
    descripcionProducto.value,
    cantidadForm.value,
    urlForm.value,
    categoria.value
  );
  switch (productoNuevo.categoria) {
    case "mix":
      listaProductosMix.push(productoNuevo);
      localStorage.setItem(
        "listaProductosMix",
        JSON.stringify(listaProductosMix)
      );
      limpiarFormulario();
      crearFilaProductosMix(productoNuevo);
      Swal.fire(
        'Bien hecho!',
        'El producto fue correctamente agregado!',
        'success'
      )

      break;
    case "frutas":
      listaProductosFrutas.push(productoNuevo);
      localStorage.setItem(
        "listaProductosFrutas",
        JSON.stringify(listaProductosFrutas)
      );
      limpiarFormulario();
      crearFilaProductosFrutas(productoNuevo);
      Swal.fire(
        'Bien hecho!',
        'El producto fue correctamente agregado!',
        'success'
      )
      break;
    case "inflados":
      listaProductosInflados.push(productoNuevo);
      localStorage.setItem(
        "listaProductosInflados",
        JSON.stringify(listaProductosInflados)
      );
      limpiarFormulario();
      crearFilaProductosInflado(productoNuevo);
      Swal.fire(
        'Bien hecho!',
        'El producto fue correctamente agregado!',
        'success'
      )
      break;
    case "especias":
      listaProductosEspecias.push(productoNuevo);
      localStorage.setItem(
        "listaProductosEspecias",
        JSON.stringify(listaProductosEspecias)
      );
      limpiarFormulario();
      crearFilaProductosEspecias(productoNuevo);
      Swal.fire(
        'Bien hecho!',
        'El producto fue correctamente agregado!',
        'success'
      )
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
  let tabla = document.querySelector("#tablaMix")
  tabla.innerHTML += `<tr>
    <th scope="row">${itemProducto.codigo}</th>
    <td>${itemProducto.producto}</td>
    <td>${itemProducto.descripcion}</td>
    <td>${itemProducto.cantidad}</td>
    <td><a href='${itemProducto.url}' class='text-decoration-none text-white'>${itemProducto.producto}</a></td>
    <td class="text-center">
      <button class="btn btn-warning mt-2" id="mix" onclick="prepararEdicion('${itemProducto.categoria}','${itemProducto.codigo}')">Editar</button>
      <button class="btn btn-warning mt-2" onclick="eliminarProductoMix('${itemProducto.codigo}')">Borrar</button>

    </td>
  </tr>`
}
function crearFilaProductosFrutas(itemProducto) {
  let tabla = document.querySelector("#tablaFrutas");
  tabla.innerHTML += `<tr>
    <th scope="row">${itemProducto.codigo}</th>
    <td>${itemProducto.producto}</td>
    <td>${itemProducto.descripcion}</td>
    <td>${itemProducto.cantidad}</td>
    <td><a href='${itemProducto.url}' class='text-decoration-none text-white'>${itemProducto.producto}</a></td>
    <td class="text-center">
      <button class="btn btn-warning mt-2" onclick="prepararEdicion('${itemProducto.categoria}','${itemProducto.codigo}')">Editar</button>
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
    <td><a href='${itemProducto.url}' class='text-decoration-none text-white'>${itemProducto.producto}</a></td>
    <td class="text-center">
      <button class="btn btn-warning mt-2" id="inf" onclick="prepararEdicion('${itemProducto.categoria}','${itemProducto.codigo}')">Editar</button>
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
       <td class="text-center">
      <button class="btn btn-warning mt-2" onclick="prepararEdicion('${itemProducto.categoria}','${itemProducto.codigo}')">Editar</button>
      <button class="btn btn-warning mt-2" onclick="eliminarProductoEspecias('${itemProducto.codigo}')">Borrar</button>
    </td>
  </tr>`;
}
function crearFilaUsuarios(itemUsuario) {
  let tabla = document.querySelector("#tablaUsuario")
  tabla.innerHTML += `<tr>
  <th scope="row">${itemUsuario.nombre} + ${itemUsuario.apellido}</th>
  <td>${itemUsuario.correo}</td>
  <td>${itemUsuario.contraseña}</td>
  <td class="text-center">
  <button class="btn btn-warning mt-2" onclick="eliminarUsuario('${itemUsuario.correo}')">Borrar</button>
  </td>
</tr>`
}
function crearFilasEmpleado(itemEmpleado) {
  let tabla = document.querySelector("#tablaEmpleado")
  tabla.innerHTML += `<tr>
  <th scope="row">${itemEmpleado.nombre} ${itemEmpleado.apellido}</th>
  <td>${itemEmpleado.correo}</td>
  <td>${itemEmpleado.contraseña}</td>
  <td class="text-center">
    <button class="btn btn-warning mt-2>Editar</button>
    <button class="btn btn-warning mt-2>Borrar</button>
  </td>
</tr>`
}

function crearNavbar(usuario) {
  let navBar = document.querySelector("#desloguearAdministrador")
  navBar.innerHTML += `<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
   Hola ${usuario.nombre} 
  </a>
  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
    <li><a class="dropdown-item" href="./favoritos.html">Ver sitio Favoritos</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" onclick="desloguear()" href="./login.html">Salir</a></li>
  </ul>`
}
window.desloguear = () => {
  localStorage.removeItem("usuarioActual")
}
//** Funcion para cargar los datos en la tabla del localstorage **//

function cargaInicialTabla() {
  listaProductosMix = JSON.parse(localStorage.getItem("listaProductosMix")) || [];
  listaProductosFrutas = JSON.parse(localStorage.getItem("listaProductosFrutas")) || [];
  listaProductosInflados = JSON.parse(localStorage.getItem("listaProductosInflados")) || [];
  listaProductosEspecias = JSON.parse(localStorage.getItem("listaProductosEspecias")) || [];
  listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || [];
  usuarioActual = JSON.parse(localStorage.getItem("usuarioActual")) || [];
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
  listaUsuarios.forEach((itemUsuario) => {
    crearFilaUsuarios(itemUsuario);
  });
  listaEmpleados.forEach((itemEmpleado) => {
    crearFilasEmpleado(itemEmpleado)
  });
  usuarioActual.forEach((usuario) => {
    crearNavbar(usuario)
  })
}


function borrarFilasMix() {
  let tabla = document.querySelector("#tablaMix");
  tabla.innerHTML = "";
}
function borrarFilasfrutas() {
  let tabla = document.querySelector("#tablaFrutas");
  tabla.innerHTML = "";
}
function borrarFilasInflado() {
  let tabla = document.querySelector("#tablaInflados");
  tabla.innerHTML = "";
}
function borrarFilasEspecias() {
  let tabla = document.querySelector("#tablaEspecias");
  tabla.innerHTML = "";
}

//** Funcion para eliminar producto
window.eliminarProductoMix = (codigo) => {
  Swal.fire({
    title: '¿Deseas eliminar este producto?',
    text: "Si eliminas el producto no podras recuperarlo!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Eliminalo',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      let productosFiltradoMix = listaProductosMix.filter((itemProductoMix) => {
        return itemProductoMix.codigo != codigo
      });
      listaProductosMix = productosFiltradoMix;
      localStorage.setItem("listaProductosMix", JSON.stringify(listaProductosMix));
      borrarFilasMix();
      listaProductosMix.forEach((itemProducto) => {
        crearFilaProductosMix(itemProducto);
      });
    }
    Swal.fire(
      'Eliminado!',
      'El producto fue correctamente eliminado',
      'success'
    )
  })
}


window.eliminarProductoFrutas = (codigo) => {
  Swal.fire({
    title: '¿Deseas eliminar este producto?',
    text: "Si eliminas el producto no podras recuperarlo!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Eliminalo',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      let productosFiltradoFrutas = listaProductosFrutas.filter((itemProductoFrutas) => {
        return itemProductoFrutas.codigo != codigo
      });
      listaProductosFrutas = productosFiltradoFrutas;
      localStorage.setItem("listaProductosFrutas", JSON.stringify(listaProductosFrutas));
      borrarFilasfrutas();
      listaProductosFrutas.forEach((itemProducto) => {
        crearFilaProductosFrutas(itemProducto);
      });
    };

    Swal.fire(
      'Eliminado!',
      'El producto fue correctamente eliminado',
      'success'
    )
  })
}


window.eliminarProductoInflado = (codigo) => {
  Swal.fire({
    title: '¿Deseas eliminar este producto?',
    text: "Si eliminas el producto no podras recuperarlo!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Eliminalo',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      let productosFiltradoInflado = listaProductosInflados.filter((itemProductoInflado) => {
        return itemProductoInflado.codigo != codigo
      });
      listaProductosInflados = productosFiltradoInflado;
      localStorage.setItem(
        "listaProductosInflados",
        JSON.stringify(listaProductosInflados)
      );
      borrarFilasInflado();
      listaProductosInflados.forEach((itemProducto) => {
        crearFilaProductosInflado(itemProducto);
      });
    };

    Swal.fire(
      'Eliminado!',
      'El producto fue correctamente eliminado',
      'success'
    )
  })
}


window.eliminarProductoEspecias = (codigo) => {
  Swal.fire({
    title: '¿Deseas eliminar este producto?',
    text: "Si eliminas el producto no podras recuperarlo!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Eliminalo',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      let productosFiltradoEspecias = listaProductosEspecias.filter(
        (itemProductoEspecias) => {
          return itemProductoEspecias.codigo != codigo;
        }
      );
      listaProductosEspecias = productosFiltradoEspecias;
      localStorage.setItem(
        "listaProductosEspecias",
        JSON.stringify(listaProductosEspecias)
      );
      borrarFilasEspecias();
      listaProductosEspecias.forEach((itemProducto) => {
        crearFilaProductosEspecias(itemProducto);
      });
    };

    Swal.fire(
      'Eliminado!',
      'El producto fue correctamente eliminado',
      'success'
    )
  })
}




// Edicion por categoria de productos

window.prepararEdicion = (categoriaP, codigo) => {
  switch (categoriaP) {
    case 'mix':
      let productoBuscado = listaProductosMix.find((itemProducto) => {
        return itemProducto.codigo == codigo
      })
      codigoForm.value = productoBuscado.codigo
      cantidadForm.value = productoBuscado.cantidad
      descripcionProducto.value = productoBuscado.descripcion
      nombreProducto.value = productoBuscado.producto
      urlForm.value = productoBuscado.url
      categoria.value = productoBuscado.categoria
      productoExistente = true;
      break;
    case 'frutas':
      let productoBuscado2 = listaProductosFrutas.find((itemProducto) => {
        return itemProducto.codigo == codigo
      })
      codigoForm.value = productoBuscado2.codigo
      cantidadForm.value = productoBuscado2.cantidad
      descripcionProducto.value = productoBuscado2.descripcion
      nombreProducto.value = productoBuscado2.producto
      urlForm.value = productoBuscado2.url
      categoria.value = productoBuscado2.categoria
      productoExistente = true;
      break;
    case 'inflados':
      let productoBuscado3 = listaProductosInflados.find((itemProducto) => {
        return itemProducto.codigo == codigo
      })
      codigoForm.value = productoBuscado3.codigo
      cantidadForm.value = productoBuscado3.cantidad
      descripcionProducto.value = productoBuscado3.descripcion
      nombreProducto.value = productoBuscado3.producto
      urlForm.value = productoBuscado3.url
      categoria.value = productoBuscado3.categoria
      productoExistente = true;
      break;
    case 'especias':
      let productoBuscado4 = listaProductosEspecias.find((itemProducto) => {
        return itemProducto.codigo == codigo
      })
      codigoForm.value = productoBuscado4.codigo
      cantidadForm.value = productoBuscado4.cantidad
      descripcionProducto.value = productoBuscado4.descripcion
      nombreProducto.value = productoBuscado4.producto
      urlForm.value = productoBuscado4.url
      categoria.value = productoBuscado4.categoria
      productoExistente = true;
      break;
  }
}

function actualizarProductos(categoria) {
  switch (categoria) {
    case 'mix':
      let posicion = listaProductosMix.findIndex((itemproducto) => { return itemproducto.codigo == codigoForm.value })
      listaProductosMix[posicion].producto = nombreProducto.value
      listaProductosMix[posicion].cantidad = cantidadForm.value
      listaProductosMix[posicion].descripcion = descripcionProducto.value
      listaProductosMix[posicion].url = urlForm.value
      localStorage.setItem("listaProductosMix", JSON.stringify(listaProductosMix))
      borrarTablaMix()
      listaProductosMix.forEach((itemProducto) => { crearFilaProductosMix(itemProducto) })
      limpiarFormulario()
      Swal.fire(
        'Producto Modificado!',
        'El producto fue correctamente modificado!',
        'success'
      )
      break;
    case 'frutas':
      let posicion2 = listaProductosFrutas.findIndex((itemproducto) => { return itemproducto.codigo == codigoForm.value })
      listaProductosFrutas[posicion2].producto = nombreProducto.value
      listaProductosFrutas[posicion2].cantidad = cantidadForm.value
      listaProductosFrutas[posicion2].descripcion = descripcionProducto.value
      listaProductosFrutas[posicion2].url = urlForm.value
      localStorage.setItem("listaProductosFrutas", JSON.stringify(listaProductosFrutas))
      borrarTablaFrutas()
      listaProductosFrutas.forEach((itemProducto) => { crearFilaProductosFrutas(itemProducto) })
      limpiarFormulario()
      Swal.fire(
        'Producto Modificado!',
        'El producto fue correctamente modificado!',
        'success'
      )
      break;
    case 'inflados':
      let posicion3 = listaProductosInflados.findIndex((itemproducto) => { return itemproducto.codigo == codigoForm.value })

      listaProductosInflados[posicion3].producto = nombreProducto.value
      listaProductosInflados[posicion3].cantidad = cantidadForm.value
      listaProductosInflados[posicion3].descripcion = descripcionProducto.value
      listaProductosInflados[posicion3].url = urlForm.value
      localStorage.setItem("listaProductosInflados", JSON.stringify(listaProductosInflados))
      borrarTablaInflados()
      listaProductosInflados.forEach((itemProducto) => { crearFilaProductosEspecias(itemProducto) })
      limpiarFormulario()

      Swal.fire(
        'Producto Modificado!',
        'El producto fue correctamente modificado!',
        'success'
      )
      break;
    case 'especias':
      let posicion4 = listaProductosEspecias.findIndex((itemproducto) => { return itemproducto.codigo == codigoForm.value })
      listaProductosEspecias[posicion4].producto = nombreProducto.value
      listaProductosEspecias[posicion4].cantidad = cantidadForm.value
      listaProductosEspecias[posicion4].descripcion = descripcionProducto.value
      listaProductosEspecias[posicion4].url = urlForm.value
      localStorage.setItem("listaProductosEspecias", JSON.stringify(listaProductosEspecias))
      borrarTablaEspecias()
      listaProductosEspecias.forEach((itemProducto) => {
        crearFilaProductosEspecias(itemProducto);
      });
      Swal.fire(
        'Producto Modificado!',
        'El producto fue correctamente modificado!',
        'success'
      )
      break;
  }

}

function borrarTablaMix() {
  let tabla = document.querySelector("#tablaMix");
  tabla.innerHTML = ""
}
function borrarTablaFrutas() {
  let tabla = document.querySelector("#tablaFrutas");
  tabla.innerHTML = ""
}
function borrarTablaInflados() {
  let tabla = document.querySelector("#tablaInflados");
  tabla.innerHTML = ""
}
function borrarTablaEspecias() {
  let tabla = document.querySelector("#tablaEspecias");
  tabla.innerHTML = ""
}

function borrarTablaUsuarios() {
  let tabla = document.querySelector("#tablaUsuario");
  tabla.innerHTML = ""
}

/* Funcion para eliminar el Usuario  */
window.eliminarUsuario = (codigo) => {
  Swal.fire({
    title: '¿Deseas eliminar este Usuario?',
    text: "Una vez eliminado no podras recuperarlo!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Eliminalo',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      let usuarioFiltrado = listaUsuarios.filter((listaUsuarios) => {
        return listaUsuarios.correo != codigo;
      });
      listaUsuarios = usuarioFiltrado;
      localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
      borrarTablaUsuarios()
      listaUsuarios.forEach((itemUsuario) => {
        crearFilaUsuarios(itemUsuario);
      });
    }

    Swal.fire(
      'Eliminado!',
      'El usuario fue Eliminado',
      'success'
    )
  })
}

/* Boton para limpiar el formulario*/
btnlimpiarFormulario.addEventListener("click", limpiarFormulario);