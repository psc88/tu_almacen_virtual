import { Producto } from "./clasesProductos.js";
//** array de los productos */
let listaProductosMix = [];
let listaProductosFrutas = [];
let listaProductosInflados = [];
let listaProductosEspecias = [];
let listaProductosFavorito = [];

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
        <button class="btn btn-warning" onclick="convertirFavorito('${producto.categoria}','${producto.codigo}')"><i class="far fa-heart"></i></button>
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
        <button class="btn btn-warning" onclick="convertirFavorito('${producto.categoria}','${producto.codigo}')"><i class="far fa-heart"></i></button>
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
        <button class="btn btn-warning" onclick="convertirFavorito('${producto.categoria}','${producto.codigo}')"><i class="far fa-heart"></i></button>
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
      <button class="btn btn-warning"><a href="error.html"><i class="far fa-heart"></i></a></button>
    </td>
  </tr>`;
}
    let codigoFavorito = [];
    let cantidadFavorito = [];
    let descripcionFavorito = [];
    let productoFavorito = [];
    let urlFavorito = [];
    let categoriaFavorito = [];

  window.convertirFavorito = (categoriaProductoFavorito,codigo)=>{
    switch (categoriaProductoFavorito){
      case 'mix':
        let productoBuscado = listaProductosMix.find((itemProducto)=>{
          return itemProducto.codigo == codigo
          })
          codigoFavorito= productoBuscado.codigo
          cantidadFavorito = productoBuscado.cantidad
          descripcionFavorito = productoBuscado.descripcion
          productoFavorito = productoBuscado.producto
          urlFavorito = productoBuscado.url
          categoriaFavorito = productoBuscado.categoria
          agregarProducto()
        break;
      case 'frutas':
        console.log("buscandoproducto")
        let productoBuscado2 = listaProductosFrutas.find((itemProducto)=>{
          return itemProducto.codigo == codigo
          })
          codigoFavorito= productoBuscado2.codigo
          cantidadFavorito = productoBuscado2.cantidad
          descripcionFavorito = productoBuscado2.descripcion
          productoFavorito = productoBuscado2.producto
          urlFavorito = productoBuscado2.url
          categoriaFavorito = productoBuscado2.categoria
          agregarProducto();
        break;
      case 'inflados':
        console.log("buscandoproducto")
        let productoBuscado3 = listaProductosInflados.find((itemProducto)=>{
          return itemProducto.codigo == codigo
          })
          codigoFavorito= productoBuscado3.codigo
          cantidadFavorito = productoBuscado3.cantidad
          descripcionFavorito = productoBuscado3.descripcion
          productoFavorito = productoBuscado3.producto
          urlFavorito = productoBuscado3.url
          categoriaFavorito = productoBuscado3.categoria
          agregarProducto();
        break;
      case 'especias':
        console.log("buscandoproducto")
        let productoBuscado4 = listaProductosEspecias.find((itemProducto)=>{
          return itemProducto.codigo == codigo
          })
          codigoFavorito= productoBuscado4.codigo
          cantidadFavorito = productoBuscado4.cantidad
          descripcionFavorito = productoBuscado4.descripcion
          productoFavorito = productoBuscado4.producto
          urlFavorito = productoBuscado4.url
          categoriaFavorito = productoBuscado4.categoria
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