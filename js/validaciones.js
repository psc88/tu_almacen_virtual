function validarCampo(input) {
  if (input.value.trim().length > 0) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

function validarGeneralFormulario(e) {
  e.preventDefault();
  let alerta = document.querySelector("#mensajeAlerta");
  if (
    validarCodigoProducto(codigoForm) &&
    validarCampo(nombreProducto) &&
    validarCampo(descripcionProducto) &&
    validarCantidadProductos(cantidadForm) &&
    validarURL(urlForm)
  ) {
    alerta.className = "alert alert-danger mt-4 d-none";
  } else {
    alerta.className = "alert alert-danger mt-4";
  }
}

let codigoForm = document.querySelector("#codigoId");
let cantidadForm = document.querySelector("#cantidadProducto");
let nombreProducto = document.querySelector("#nombreProducto");
let descripcionProducto = document.querySelector("#descripcionProducto");
let urlForm = document.querySelector("#urlProducto");
let formulario = document.querySelector("#formularioProducto");

codigoForm.addEventListener("blur", () => {
  validarCodigoProducto(codigoForm);
});
cantidadForm.addEventListener("blur", () => {
  validarCantidadProductos(cantidadForm);
});
urlForm.addEventListener("blur", () => {
  validarURL(urlForm);
});

nombreProducto.addEventListener("blur", () => {
  validarCampo(nombreProducto);
});
descripcionProducto.addEventListener("blur", () => {
  validarCampo(descripcionProducto);
});
formulario.addEventListener("submit", validarGeneralFormulario);

function validarCodigoProducto(input) {
  if (input.value.trim() != "" && input.value.trim().length == 4) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

function validarCantidadProductos(input) {
  let patron = /^[0-9]{1,3}$/;
  if (patron.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

function validarURL(input) {
  let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  if (input.value.trim().length > 0 && patron.test(input.value.trim())) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

