export function validarCampo(input) {
  if (input.value.trim() != "") {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

export function validarCodigoProducto(input) {
if (input.value.trim() != "" && input.value.trim().length >= 3) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

export function validarCantidadProductos(input) {
  let patron = /^[0-9]{1,3}$/;
  if (patron.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

export function validarURL(input) {
  let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  if (input.value.trim().length > 0 && patron.test(input.value.trim())) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

export function validarCategoria(input){
  let patron = /^[m][i][x]$/;
  let patron1 = /^[f][r][u][t][a][s]$/;
  let patron2 = /^[i][n][f][l][a][d][o][s]$/;
  let patron3 = /^[e][s][p][e][c][i][a][s]$/;
  if (input.value.trim().length > 0 && patron.test(input.value.trim()) || patron1.test(input.value.trim()) || patron2.test(input.value.trim()) || patron3.test(input.value.trim())){
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

export function validarPass(input){
  let patron = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  if (patron.test(input.value)) {
    input.className = "form-control w-50 is-valid";
    return true;
  } else {
    input.className = "form-control w-50 is-invalid";
    return false;
  }
}

export function validarMail(input){
  let patron = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  let valor = document.querySelector("#emailAgre")
  if(patron.test(input.value)){
    input.className = "form-control w-50 is-valid";
    return true;
  } else {
    input.className = "form-control w-50 is-invalid";
    return false;
  }
}

export function validarGeneralForm() {
  let alerta = document.querySelector("#mensajeAlerta");
  if (
    validarCodigoProducto(codigoForm) &&
    validarCampo(nombreProducto) &&
    validarCampo(descripcionProducto) &&
    validarCantidadProductos(cantidadForm) &&
    validarURL(urlForm) &&
    validarCategoria(categoria)
  ) {
    alerta.className = "alert alert-danger mt-4 d-none";
    return true;
  } else {
    alerta.className = "alert alert-danger mt-4";
    return false;
  }
}

export function validarGeneralLogin(){
  let alerta = document.querySelector("#mensajeAlertaLogin");
  if (
    validarMail(email) &&
    validarPass(pass)
  ) {
    alerta.className = "alert alert-danger mt-4 d-none";
    return true;
  } else {
    alerta.className = "alert alert-danger mt-4";
    return false;
  }
}

let codigoForm = document.querySelector("#codigoId");
let cantidadForm = document.querySelector("#cantidadProducto");
let nombreProducto = document.querySelector("#nombreProducto");
let descripcionProducto = document.querySelector("#descripcionProducto");
let urlForm = document.querySelector("#urlProducto");
let categoria = document.querySelector("#cagetoriaProducto")
let email = document.querySelector("#inputEmail");
let pass = document.querySelector("#inputPassword");

