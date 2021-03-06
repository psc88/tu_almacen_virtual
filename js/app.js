import { Producto } from "./clasesProductos.js";
//** array de los productos */
let listaProductosMix = [];
let listaProductosFrutas = [];
let listaProductosInflados = [];
let listaProductosEspecias = [];
let listaUsuarios = []
let usuarioLogueado = []
let usuariosTotales = []
let codigoFavorito = [];
let cantidadFavorito = [];
let descripcionFavorito = [];
let productoFavorito = [];
let urlFavorito = [];
let categoriaFavorito = [];
let listaProductosFavorito = JSON.parse(localStorage.getItem("listaProductosFavoritos")) || [];
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


//** Carga inicial de los productos a la web */
cargaInicial();

//** Traemos los datos del localStorage y lo recorremos */
function cargaInicial() {
  listaProductosMix = JSON.parse(localStorage.getItem("listaProductosMix")) || [];
  listaProductosFrutas = JSON.parse(localStorage.getItem("listaProductosFrutas")) || [];
  listaProductosInflados = JSON.parse(localStorage.getItem("listaProductosInflados")) || [];
  listaProductosEspecias = JSON.parse(localStorage.getItem("listaProductosEspecias")) || [];
  listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || []
  usuarioLogueado = JSON.parse(localStorage.getItem("usuarioActual")) || [];
  usuariosTotales = listaEmpleados.concat(listaUsuarios);

  if (listaProductosMix.length > 0) {
    listaProductosMix.forEach(itemProducto => {
      crearColumnaMix(itemProducto);
    });
  }
  if (listaProductosFrutas.length > 0) {
    listaProductosFrutas.forEach(itemProducto => {
      crearColumnaFrutas(itemProducto);
    });
  }
  if (listaProductosInflados.length > 0) {
    listaProductosInflados.forEach(itemProducto => {
      crearColumnaInflados(itemProducto);
    });
  }
  if (listaProductosEspecias.length > 0) {
    listaProductosEspecias.forEach(itemProducto => {
      crearColumnaEspecias(itemProducto);
    });
  }
  if (usuarioLogueado.length > 0) {
    usuarioLogueado.forEach(usuario => {
      crearNavbar(usuario)
    });
  } else {
    let navBar = document.querySelector("#navbarTuAlmacen")
    navBar.innerHTML += `
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0" id="paraUsuarios">
        <li class="nav-item">
          <a
            class="nav-link active text-white ms-3"
            aria-current="page"
            href="./index.html"
            >Inicio</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-white ms-3" href="./login.html"
            >Ingresar</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-white ms-3" href="./crearContacto.html"
            >Crear Cuenta</a
          >
        </li>
      </ul>`
  }
}

//** Funcion para crear las columnas */
function crearColumnaMix(producto) {
  let grillaMix = document.querySelector("#principalMix");
  grillaMix.innerHTML += `<article
    class="
      m-3
      ms-2
      col-sm-12 col-md-5 col-lg-3
      d-flex
      justify-content-center
    "
  >
    <div class="card" style="width: 18rem">
      <div class="m-3 d-flex justify-content-center">
        <img
          src=${producto.url}
          class="card-img-top w-100"
          alt=${producto.producto}
        />
      </div>

      <div class="card-body border-top">
        <p class="card-text">
          <span class="badge bg-success me-2">Articulo:</span>${producto.codigo}<br />
          <span class="fw-bold"> Descripción: </span> ${producto.descripcion}
        </p>
        <div id="agregarFavoritos">
        <button class="btn btn-warning" onclick="convertirFavorito('${producto.categoria}','${producto.codigo}')" ><i class="far fa-heart"></i></button>
        </div>
      </div>
    </div>
  </article>`;
}

function crearColumnaFrutas(producto) {
  let grillaFrutas = document.querySelector("#principalFrutas");
  grillaFrutas.innerHTML += `<article
    class="
      m-3
      ms-2
      col-sm-12 col-md-5 col-lg-3
      d-flex
      justify-content-center
    "
  >
    <div class="card" style="width: 18rem">
      <div class="m-3 d-flex justify-content-center">
        <img
          src=${producto.url}
          class="card-img-top w-100"
          alt=${producto.producto}
        />
      </div>
  
      <div class="card-body border-top">
        <p class="card-text">
          <span class="badge bg-success me-2">Articulo:</span>${producto.codigo}<br />
          <span class="fw-bold"> Descripción: </span> ${producto.descripcion}
        </p>
        <div id="agregarFavoritos">
        <button class="btn btn-warning" onclick="convertirFavorito('${producto.categoria}','${producto.codigo}')" ><i class="far fa-heart"></i></button>  
      </div>
      </div>
    </div>
  </article>`;
}

function crearColumnaInflados(producto) {
  let grillaFrutas = document.querySelector("#principalInflados");
  grillaFrutas.innerHTML += `<article
    class="
      m-3
      ms-2
      col-sm-12 col-md-5 col-lg-3
      d-flex
      justify-content-center
    "
  >
    <div class="card" style="width: 18rem">
      <div class="m-3 d-flex justify-content-center">
        <img
          src=${producto.url}
          class="card-img-top w-100"
          alt=${producto.producto}
        />
      </div>
  
      <div class="card-body border-top">
      
        <p class="card-text">
          <span class="badge bg-success me-2">Articulo:</span>${producto.codigo}<br />
          <span class="fw-bold"> Descripción: </span> ${producto.descripcion}
        </p>
        <div id="agregarFavoritos">
         <button class="btn btn-warning" onclick="convertirFavorito('${producto.categoria}','${producto.codigo}')" ><i class="far fa-heart"></i></button>
      </div>
    </div>
  </article>`;
}

function crearColumnaEspecias(producto) {
  let grillaFrutas = document.querySelector("#principalEspecias");
  grillaFrutas.innerHTML += `<tr>
    <th scope="row" class="text-white">${producto.producto}</th>
    <td class="text-white">${producto.descripcion}</td>
    <td class="text-white">${producto.cantidad}</td>
    <td class="text-center ">
    <button class="btn btn-warning"><a href="./error.html"><i class="far fa-heart"></i></a></button> 
    </td>
  </tr>`;
}

/* funcion para crear el navbar */
function crearNavbar(usuario) {
  let contador = 0;
  for (let i = 0; i < usuariosTotales.length; i++) {
    if (usuario.nombre === "pcastillo@hotmail.com" || usuario.nombre === "ccarral@hotmail.com" || usuario.nombre === "epalermo@hotmail.com") {
      contador++;
      if (contador === 1) {
        let nombreAdministrador;
        listaEmpleados.forEach((empleado) => {
          switch (usuario.nombre) {
            case "pcastillo@hotmail.com":
              nombreAdministrador = "Pablo"
              break;
            case "ccarral@hotmail.com":
              nombreAdministrador = "Carlos"
              break;
            case "epalermo@hotmail.com":
              nombreAdministrador = "Enrico"
              break;
          }
        })
        let navBar = document.querySelector("#navbarTuAlmacen")
        navBar.innerHTML += `
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0" id="paraUsuarios">
          <li class="nav-item">
            <a
              class="nav-link active text-white ms-3"
              aria-current="page"
              href="#"
              >Inicio</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-white ms-3" href="admin.html">Administrador</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white ms-3" href="nosotros.html"
              >Acerca de nosotros</a
            >
          </li>
          <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Hola ${nombreAdministrador}
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="./favoritos.html">Ver sitio Favoritos</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" onclick="desloguear()" href="./login.html">Salir</a></li>
                </ul>
          </li>
        </ul>
        `
      }
    } else if (listaUsuarios[i] && usuario.nombre === listaUsuarios[i].correo) {
      let navBar = document.querySelector("#navbarTuAlmacen")
      navBar.innerHTML += `
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0" id="paraUsuarios">
        <li class="nav-item">
          <a
            class="nav-link active text-white ms-3"
            aria-current="page"
            href="./index.html"
            >Inicio</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-white ms-3" href="./nosotros.html"
            >Acerca de nosotros</a
          >
        </li>
        <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Hola ${listaUsuarios[i].nombre}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="./favoritos.html">Tus Favoritos</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" onclick="desloguear()" href="./login.html">Salir</a></li>
              </ul>
        </li>
      </ul>`
    }
  }
}

// funcion para guardar en favorito
window.convertirFavorito = (categoriaProductoFavorito, codigo) => {
  switch (categoriaProductoFavorito) {
    case 'mix':
      let productoBuscado = listaProductosMix.find((itemProducto) => {
        return itemProducto.codigo == codigo
      })
      codigoFavorito = productoBuscado.codigo
      cantidadFavorito = productoBuscado.cantidad
      descripcionFavorito = productoBuscado.descripcion
      productoFavorito = productoBuscado.producto
      urlFavorito = productoBuscado.url
      categoriaFavorito = productoBuscado.categoria
      agregarProducto()
      break;
    case 'frutas':
      let productoBuscado2 = listaProductosFrutas.find((itemProducto) => {
        return itemProducto.codigo == codigo
      })
      codigoFavorito = productoBuscado2.codigo
      cantidadFavorito = productoBuscado2.cantidad
      descripcionFavorito = productoBuscado2.descripcion
      productoFavorito = productoBuscado2.producto
      urlFavorito = productoBuscado2.url
      categoriaFavorito = productoBuscado2.categoria
      agregarProducto();
      break;
    case 'inflados':
      let productoBuscado3 = listaProductosInflados.find((itemProducto) => {
        return itemProducto.codigo == codigo
      })
      codigoFavorito = productoBuscado3.codigo
      cantidadFavorito = productoBuscado3.cantidad
      descripcionFavorito = productoBuscado3.descripcion
      productoFavorito = productoBuscado3.producto
      urlFavorito = productoBuscado3.url
      categoriaFavorito = productoBuscado3.categoria
      agregarProducto();
      break;
  }
}

function agregarProducto() {
  let productoNuevoFavorito = new Producto(
    codigoFavorito,
    productoFavorito,
    descripcionFavorito,
    cantidadFavorito,
    urlFavorito,
    categoriaFavorito
  );
  listaProductosFavorito.push(productoNuevoFavorito);
  localStorage.setItem(
    "listaProductosFavoritos",
    JSON.stringify(listaProductosFavorito)
  );
}

// funcion para desloguear usuarios
window.desloguear = () => {
  localStorage.removeItem("usuarioActual")
  localStorage.removeItem("listaProductosFavoritos")
}
