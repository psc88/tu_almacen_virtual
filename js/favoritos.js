let listaProductosFavoritos = JSON.parse(localStorage.getItem("listaProductosFavoritos")) || [];

cargaInicialFavoritos()
function cargaInicialFavoritos() {
    listaProductosFavoritos.forEach((itemProducto) => {
        crearEspacioFavorito(itemProducto);
    });
}


function crearEspacioFavorito(itemProducto) {
    let espacioFavoritos = document.querySelector("#cargaFavoritos")
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
             <button class="btn text-primary" onclick="eliminarFavorito('${itemProducto.codigo}')">Eliminar</button>
          </div>
         </div>
      </article>`
}

window.eliminarFavorito = (codigo) => {
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
            let productosFiltrado = listaProductosFavoritos.filter((itemProductoFrutas) => {
                return itemProductoFrutas.codigo != codigo
            });
            listaProductosFavoritos = productosFiltrado;
            localStorage.setItem("listaProductosFavoritos", JSON.stringify(listaProductosFavoritos));
            borrarFilas();
            listaProductosFavoritos.forEach((itemProducto) => {
                crearEspacioFavorito(itemProducto);
            });
        };
        Swal.fire(
            'Eliminado!',
            'El producto fue correctamente eliminado',
            'success'
        )
    })
}

function borrarFilas() {
    let tabla = document.querySelector("#cargaFavoritos");
    tabla.innerHTML = "";
}

function borrarFilasMix() {
    let tabla = document.querySelector("#tablaMix");
    tabla.innerHTML = "";
}
