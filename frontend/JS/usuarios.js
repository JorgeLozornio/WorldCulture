
var ltsUsuarios = [];
var idU = 0;

function añadirUsuario( 
    id,
    nmbr,
    apll,
    eml, 
    tel, 
    fechaNac, 
    pws, 
    t, 
    est 
    ){

        var nuevoUsuario = {
            idUsuario : id,
            nombre : nmbr,
            apellidos : apll,
            email : eml,
            telefono : tel,
            fechaNacimiento : fechaNac,
            contraseña : pws,
            tipo : t,
            estado : est
        };

    console.log(nuevoUsuario);
    ltsUsuarios.push(nuevoUsuario);    
    console.log(ltsUsuarios);
}

document.querySelector('#btnGuardar').addEventListener('click', guardarUsuario);

function guardarUsuario(){

    idU++;
    var idUsuario = idU,
        nombre = document.querySelector('#nombre').value,
        apellidos = document.querySelector('#apellidos').value,
        email = document.querySelector('#email').value,
        telefono = document.querySelector('#telefono').value,
        fechaNacimiento = document.querySelector('#fechaNacimiento').value,
        contraseña = document.querySelector('#contrasena').value,
        tipo = "C",
        estado = "A";

    añadirUsuario(
        idUsuario, 
        nombre, 
        apellidos, 
        email,
        telefono, 
        fechaNacimiento, 
        contraseña,
        tipo,
        estado);
}

function getUsuarios(){
    return ltsUsuarios;
    console.log('hola')
}

