//** array de los productos */
let listaProductosMix = [];
let listaProductosFrutas = [];
let listaProductosInflados = [];
let listaProductosEspecias = [];
let listaUsuarios = []
let usuarioLogueado = []

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


  // for (let i = 0; i < nuevaLista.length; i++) {
  //   if (email.value === "pcastillo@hotmail.com" && pass.value === "Pablo123!" ||
  //     email.value === "ccarral@hotmail.com" && pass.value === "Carral123!" ||
  //     email.value === "epalermo@hotmail.com" && pass.value === "Epalermo132!") {
  //     //logica para mostar navbar para usuarios
  //   } else if (email.value === nuevaLista[i].correo && pass.value === nuevaLista[i].contraseña) {
  //     //logica para mostrar
  //   }
  // }



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
  if (usuarioLogueado.length > 0){
    usuarioLogueado.forEach(usuario => {
      crearNavbar(usuario)
    });
  } else {
    let navBar = document.querySelector("#navBarUsuario")
      navBar.innerHTML += `<div class="collapse navbar-collapse" id="navbarTuAlmacen">
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
      </ul>
    </div>`
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
          <span class="badge bg-success">Articulo:</span>${producto.codigo}<br />
          <span class="fw-bold"> Descripción: </span> ${producto.descripcion}
        </p>
        <p class="card-text"></p>
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
          <span class="badge bg-success">Articulo:</span>${producto.codigo}<br />
          <span class="fw-bold"> Descripción: </span> ${producto.descripcion}
        </p>
        <p class="card-text"></p>
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
          <span class="badge bg-success">Articulo:</span>${producto.codigo}<br />
          <span class="fw-bold"> Descripción: </span> ${producto.descripcion}
        </p>
        <p class="card-text"></p>
      </div>
    </div>
  </article>`;
}

function crearColumnaEspecias(producto) {
  let grillaFrutas = document.querySelector("#principalEspecias");
  grillaFrutas.innerHTML += `<tr>
    <th scope="row">${producto.producto}</th>
    <td>${producto.descripcion}</td>
    <td>${producto.cantidad}</td>
    <td class="text-center">
      <button class="btn btn-warning" onclick="prepararEdicion()"><i class="far fa-heart"></i></button>
    </td>
  </tr>`;
}

function crearNavbar(usuario){
  for (let i = 0; i < usuarioLogueado.length; i++) {
    if(usuario.nombre === "pcastillo@hotmail.com" || usuario.nombre === "ccarral@hotmail.com" || usuario.nombre === "epalermo@hotmail.com" ){
      let navBar = document.querySelector("#navBarUsuario")
      navBar.innerHTML += `<div class="collapse navbar-collapse" id="navbarTuAlmacen">
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
                Hola ${listaUsuarios[i].nombre}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="./favoritos.html">Ver sitio Favoritos</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="./login.html">Salir</a></li>
              </ul>
        </li>
      </ul>
    </div>`
    } else if (usuario.nombre === listaUsuarios[i].correo){
      let navBar = document.querySelector("#navBarUsuario")
      navBar.innerHTML += `<div class="collapse navbar-collapse" id="navbarTuAlmacen">
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
                <li><a class="dropdown-item" href="./login.html">Salir</a></li>
              </ul>
        </li>
      </ul>
    </div>`
    }
  }
  
}