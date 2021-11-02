//** array de los productos */
let listaProductosMix = [];
let listaProductosFrutas = [];
let listaProductosInflados = [];
let listaProductosEspecias = [];

//** Carga inicial de los productos a la web */
cargaInicial();

//** Traemos los datos del localStorage y lo recorremos */
function cargaInicial(){
    listaProductosMix = JSON.parse(localStorage.getItem("listaProductosMix")) || [];
    listaProductosFrutas = JSON.parse(localStorage.getItem("listaProductosFrutas")) || [];
    listaProductosInflados = JSON.parse(localStorage.getItem("listaProductosInflados")) || [];
    listaProductosEspecias = JSON.parse(localStorage.getItem("listaProductosEspecias")) || [];
    if(listaProductosMix.length > 0){
        listaProductosMix.forEach(itemProducto => {
            crearColumnaMix(itemProducto);       
        });
    }
    if(listaProductosFrutas.length > 0){
        listaProductosFrutas.forEach(itemProducto => {
            crearColumnaFrutas(itemProducto);       
        });
    }
    if(listaProductosInflados.length > 0){
        listaProductosInflados.forEach(itemProducto => {
            crearColumnaInflados(itemProducto);       
        });
    }
    if(listaProductosEspecias.length > 0){
        listaProductosEspecias.forEach(itemProducto => {
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