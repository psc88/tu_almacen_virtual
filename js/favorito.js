
let listaProductosFavoritos = JSON.parse(localStorage.getItem("listaProductosFavoritos")) || [];


cargaInicialFavoritos()
function cargaInicialFavoritos(){
    let listaProductosFavorito = JSON.parse(localStorage.getItem("listaProductosFavoritos")) || [];
    listaProductosFavorito.forEach((itemProducto) => {
        crearEspacioFavorito(itemProducto);});
    }
      
      
function crearEspacioFavorito(itemProducto){
let espacioFavoritos = document.getElementById("papaProductos")
      espacioFavoritos.innerHTML += `<article class="row border-bottom p-2">
      <div class="col-sm-3 col-md-3">
       <div class="img-fluid d-flex justify-content-center">
         <img
         src="${itemProducto.url}"
        class="card-img-top w-50"
        alt="${itemProducto.producto}"
        />
       </div>
       </div>
       <div class="col-sm-4 col-md-4">
         <div class="w-100">
       <h5 class="card-title">${itemProducto.producto}</h5>
        <p class="card-text">
           <span class="badge bg-success me-2">Articulo:</span>${itemProducto.codigo}<br />
            <span class="fw-bold"> Descripción: </span> ${itemProducto.descripcion}</p>
             <button class="btn text-primary onclick="eliminarFavorito()">Eliminar</button>
          </div>
         </div>
      </article>`
}


//window.eliminarFavorito = () => {
   // console.log("eliminando")
    
    // listaProductosEspecias = productosFiltradoEspecias;
    // localStorage.setItem(
    //   "listaProductosEspecias",
    //   JSON.stringify(listaProductosEspecias)
    // );
    // borrarFilasEspecias();
    // listaProductosEspecias.forEach((itemProducto) => {
    //   crearFilaProductosEspecias(itemProducto);
    // });
  
 
      
  function borrarFilasMix(){
    let tabla = document.querySelector("#tablaMix");
    tabla.innerHTML = "";
  }   
    
