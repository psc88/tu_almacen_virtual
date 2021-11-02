export class Usuario {
    constructor(nombre, apellido, correo, contraseña){
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.contraseña = contraseña;
    }

    get mostrarNombre() {
      return this.nombre;
    }

    get mostrarAppelido() {
      return this.apellido;
    }
    get mostrarCorreo() {
      return this.correo;
    }
    get mostrarContraseña() {
      return this.contraseña;
    }

    set modificarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }
    set modificarApellido(nuevoApellido){
        this.apellido = nuevoApellido;
    }
    set modificarCorreo(nuevoCorreo){
        this.correo = nuevoCorreo;
    }
    set modificarContraseña(nuevoContraseña){
        this.contraseña = nuevoContraseña;
    }
}