var nombre = document.getElementById('nombre');
var apellidos = document.getElementById('apellidos');
var telefono = document.getElementById('telefono');
var email = document.getElementById('email');
var fechaNacimiento = document.getElementById('fechaNacimiento');
var contrasena = document.getElementById('contrasena');
var error = document.getElementById('error');



error.style.color = 'red';
error.style.marginLeft = '15px';
error.style.fontSize = '20px';

function enviarDatos() {
    console.log('Enviando datos del usuario');

    var errores = [];

    if (nombre.value === null || nombre.value === '') {

        errores.push('Ingresa tu nombre');
    }

    if (nombre.value.length > 50) {

        errores.push('Ingresa un Nombre con un maximo de 50 caracteres');
    }

    if (apellidos.value === null || apellidos.value === '') {

        errores.push('Ingresa tus apellidos');
    }

    if (apellidos.value.length > 50) {

        errores.push('Ingresa un Nombre con un maximo de 50 caracteres');
    }


    if (telefono.value === null || telefono.value === '') {

        errores.push('Ingresa tu telefono');
    }

    if (telefono.value.length > 10 || telefono.value.length < 10) {

        errores.push('El numero de telefono debe contener 10 digitos');
    }

    if (email.value === null || email.value === '') {

        errores.push('Ingresa tu email');
    }

    if (fechaNacimiento.value === null || fechaNacimiento.value === '') {

        errores.push('Ingresa tu fecha de nacimiento');
    }

    if (contrasena.value === null || contrasena.value === '') {

        errores.push('Ingresa tu contrasena');
    }

    error.innerHTML = errores.join(', ');


    return false;
}