export class Producto {
    constructor(codigo, producto, descripcion, cantidad, url, categoria) {
        this.codigo = codigo;
        this.producto = producto;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.url = url;
        this.categoria = categoria;
    }

    get mostarCodigo() {
        return this.codigo;
    }
    get mostrarProducto() {
        return this.producto;
    }
    get mostrarDescripcion() {
        return this.descripcion;
    }
    get mostrarCantidad() {
        return this.cantidad;
    }
    get mostrarUrl() {
        return this.url;
    }
    get mostrarCategoria() {
        return this.categoria;
    }

    set modificarCodigo(nuevoCodigo) {
        this.codigo = nuevoCodigo;
    }
    set modificarProducto(nuevoProducto) {
        this.producto = nuevoProducto;
    }
    set modificarDescripcion(nuevoDescripcion) {
        this.descripcion = nuevoDescripcion;
    }
    set modificarCantidad(nuevoCantidad) {
        this.cantidad = nuevoCantidad;
    }
    set modificarUrl(nuevoUrl) {
        this.url = nuevoUrl;
    }
    set modificarCategoria(nuevoCategoria) {
        this.categoria = nuevoCategoria;
    }
}