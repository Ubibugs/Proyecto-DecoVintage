const $formulario = document.getElementById("formulario");
const $inputs = document.querySelectorAll("#formulario input")

/* campos y sus reglas de validacion */
const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, 
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    contrasena: /^.{4,12}$/, 
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
    celular: /^\d{7,14}$/ 
}
const campos = {
    usuario: false,
    nombre: false,
    contrasena: false,
    correo: false,
    celular: false
}

/* seleccion de input */
const validarFormulario = (e) => {
    switch(e.target.name) {
        case "usuario":
            validarCampo(expresiones.usuario, e.target, "usuario");
        break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre");
        break;
        case "contrasena":
            validarCampo(expresiones.contrasena, e.target, "contrasena");
            validarContrasena2();
        break;
        case "contrasena2":
            validarContrasena2();
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, "correo");
        break;
        case "celular":
            validarCampo(expresiones.celular, e.target, "celular");
        break;
    }
}

/* validar escritos */
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos[campo] = true;
        console.log("Funciona");
    } else {
           document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
           document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
           document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
           document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
           document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
           campos[campo] = false;
           console.log("Funciona");
        }
}

/* validar contrasena */
const validarContrasena2 = () => {
    let inputContrasena1 = document.getElementById("contrasena");
    let inptContrasena2 = document.getElementById("contrasena2");

    if (inputContrasena1.value !== inptContrasena2.value) {
        document.getElementById(`grupo__contrasena2`).classList.add("formulario__grupo-incorrecto");
        document.getElementById(`grupo__contrasena2`).classList.remove("formulario__grupo-correcto");
        document.querySelector(`#grupo__contrasena2 i`).classList.add("fa-times-circle");
        document.querySelector(`#grupo__contrasena2 i`).classList.remove("fa-check-circle");
        document.querySelector(`#grupo__contrasena2 .formulario__input-error`).classList.add("formulario__input-error-activo");
        campos[password] = false;
        console.log("Funciona");
    } else {
        document.getElementById(`grupo__contrasena2`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__contrasena2`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__contrasena2 i`).classList.remove("fa-times-circle");
        document.querySelector(`#grupo__contrasena2 i`).classList.add("fa-check-circle");
        document.querySelector(`#grupo__contrasena2 .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos[password] = true;
        console.log("Funciona");
    }
}

/* captura validacion */ 
$inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

/* validacion general */
$formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const $terminos = document.getElementById("terminos");
    if(campos.usuario && campos.nombre && campos.contrasena && campos.correo && campos.celular && $terminos.checked) {
        // formulario.reset();

        document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
        setTimeout(() => {
            document.getElementById("formulario__mensaje-exito").classList.remove("formulario__mensaje-exito-activo");
            document.getElementById("formulario__grupo-terminos").style.display = "none";
        }, 3000);
        document.querySelectorAll(".formulario__grupo--correcto").forEach ((icono) => {
            icono.classList.remove("formulario__grupo--correcto");
        });
        
        setTimeout(() => {
            location.reload();
        }, 5000);
    } else {
        document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
    }
});