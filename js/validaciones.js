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
  if (input.value.trim().length > 0 && input.value.trim().length == 4) {
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

export function validarGeneralForm() {
  let alerta = document.querySelector("#mensajeAlerta");
  if (
    validarCodigoProducto(codigoForm) &&
    validarCampo(nombreProducto) &&
    validarCampo(descripcionProducto) &&
    validarCantidadProductos(cantidadForm) &&
    validarURL(urlForm)
  ) {
    alerta.className = "alert alert-danger mt-4 d-none";
    return true;
  }else{
    alerta.className = "alert alert-danger mt-4";
    return false;
  }
}
