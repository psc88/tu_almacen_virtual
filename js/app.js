//** array de los productos */
let listaProductoMix = [];
let listaProductoFrutas = [];
let listaProductoInflados = [];
let listaProductoEspecias = [];

//** Carga inicial de los productos a la web */
cargaInicial();

//** Traemos los datos del localStorage y lo recorremos */
function cargaInicial(){
    listaProductoMix = JSON.parse(localStorage.getItem("listaProductoMix")) || [];
    listaProductoFrutas = JSON.parse(localStorage.getItem("listaProductoFrutas")) || [];
    listaProductoInflados = JSON.parse(localStorage.getItem("listaProductoInflados")) || [];
    listaProductoEspecias = JSON.parse(localStorage.getItem("listaProductoEspecias")) || [];
    if(listaProductoMix.length > 0){
        listaProductoMix.forEach(itemProducto => {
            crearColumnaMix(itemProducto);       
        });
    }
    if(listaProductoFrutas.length > 0){
        listaProductoFrutas.forEach(itemProducto => {
            crearColumnaFrutas(itemProducto);       
        });
    }
    if(listaProductoInflados.length > 0){
        listaProductoInflados.forEach(itemProducto => {
            crearColumnaInflados(itemProducto);       
        });
    }
    if(listaProductoEspecias.length > 0){
        listaProductoEspecias.forEach(itemProducto => {
            crearColumnaEspecias(itemProducto);       
        });
    }
}

//** Funcion para crear las columnas */
function crearColumnaMix(producto){
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

function crearColumnaFrutas(producto){
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

function crearColumnaInflados(producto){
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

function crearColumnaEspecias(producto){
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