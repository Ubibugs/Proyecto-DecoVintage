// objeto.metodo(json)

$("#formulario1").validate({
    rules: {
        "txtEmail": {
            required: true,
            email: true
        },
        "txtContrasena": {
            required: true,
            minlength: 5
        },
        "txtRepetirContrasena": {
            required: true,
            equalTo: '#id_txtContrasena'
        }
    }, // --> Fin de reglas
    messages: {
        "txtEmail": {
            required: 'Ingrese e-mail',
            email: 'No cumple con el formato'
        },
        "txtContrasena": {
            required: 'Ingrese contraseña',
            minlength: 'Minimo 5 caracteres'
        },
        "txtRepetirContrasena": {
            required: 'Repita la contraseña',
            equalTo: ' Las contraseñas no son similares'
        }
    } //-->Fin de mensajes

});

