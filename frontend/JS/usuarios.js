
var ltsUsuarios = [
    {
        idUsuario : 1,
        nombre : "Jorge",
        apellidos : "Lozornio",
        email : "jlozornio321@accitesz.com",
        telefono : "3515678765",
        fechaNacimiento : "1999-03-04",
        contraseña : "qwe",
        tipo : "C",
        estado : "A" 
    },
    {
        idUsuario : 2,
        nombre : "Mauro",
        apellidos : "Castellanos",
        email : "mcastellanos123@accitesz.com",
        telefono : "3515678765",
        fechaNacimiento : "1999-05-04",
        contraseña : "jhgf",
        tipo : "C",
        estado : "A" 
    },
    {
        idUsuario : 3,
        nombre : "Luis",
        apellidos : "Fernandez",
        email : "lfernandez321@accitesz.com",
        telefono : "3515678765",
        fechaNacimiento : "1999-11-04",
        contraseña : "sdfasdf",
        tipo : "C",
        estado : "A" 
    }
];

generarTabla();
var idU = ltsUsuarios.length;

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
    console.log(ltsUsuarios[0].apellidos);
}

document.querySelector('#btnGuardar').addEventListener('click', guardarUsuario);
document.querySelector('#btnEditar').addEventListener('click', guardarEdit);
document.querySelector('#btnNuevo').addEventListener('click', borrarTxt);
document.querySelector('#btnBuscar').addEventListener('click', buscarUsuario);

function guardarUsuario(){

    idU++;

    var idUsuario = idU,
        nombre = document.querySelector('#nombre').value,
        apellidos = document.querySelector('#apellidos').value,
        email = document.querySelector('#email').value,
        telefono = document.querySelector('#telefono').value,
        fechaNacimiento = document.querySelector('#fechaNacimiento').value,
        contraseña = document.querySelector('#contrasena').value,
        tipo = document.querySelector('#tipo').value,
        estado = document.querySelector('#estado').value;

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

    generarTabla();
}

function guardarEdit(){
    console.log(document.querySelector('#nombre').value)
    for (let i = 0; i < ltsUsuarios.length; i++) {
        if(document.querySelector('#id').value == ltsUsuarios[i].idUsuario){
            ltsUsuarios[i].nombre = document.querySelector('#nombre').value;
            ltsUsuarios[i].apellidos = document.querySelector('#apellidos').value;
            ltsUsuarios[i].telefono = document.querySelector('#telefono').value;
            ltsUsuarios[i].email = document.querySelector('#email').value;
            ltsUsuarios[i].fechaNacimiento = document.querySelector('#fechaNacimiento').value;
            ltsUsuarios[i].contraseña = document.querySelector('#contrasena').value;
            ltsUsuarios[i].tipo = document.querySelector('#tipo').value;
            ltsUsuarios[i].estado = document.querySelector('#estado').value;

        }
        
    }
    generarTabla();
}

function generarTabla(){

    var tbody = document.querySelector('#tbodyUsuarios');

    tbody.innerHTML = " ";

    for (let i = 0; i < ltsUsuarios.length; i++) {
        var row = tbody.insertRow(i),
            idUsr = row.insertCell(0),
            nombreUsr = row.insertCell(1),
            apellidosUsr = row.insertCell(2),
            telefonoUsr = row.insertCell(3),
            emailUsr  = row.insertCell(4),
            fechaUsr  = row.insertCell(5),
            contraseñaUsr  = row.insertCell(6),
            tipoUsr  = row.insertCell(7),
            estadoUsr  = row.insertCell(8);
            configurar = row.insertCell(9);

        idUsr.innerHTML = ltsUsuarios[i].idUsuario;
        nombreUsr.innerHTML = ltsUsuarios[i].nombre;
        apellidosUsr.innerHTML = ltsUsuarios[i].apellidos;
        emailUsr.innerHTML = ltsUsuarios[i].email;
        telefonoUsr.innerHTML = ltsUsuarios[i].telefono;
        fechaUsr.innerHTML = ltsUsuarios[i].fechaNacimiento;
        contraseñaUsr.innerHTML = ltsUsuarios[i].contraseña;
        tipoUsr.innerHTML = ltsUsuarios[i].tipo;
        estadoUsr.innerHTML = ltsUsuarios[i].estado;
        configurar.innerHTML = `<button onClick="editarUsuario(this)">Editar</button>
                                <button onClick="eliminarUsuario(this)">Eliminar</button>`;
        
        tbody.appendChild(row);
    }

}

function editarUsuario(fila){
    selectedRow = fila.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("nombre").value = selectedRow.cells[1].innerHTML;
    document.getElementById("apellidos").value = selectedRow.cells[2].innerHTML;
    document.getElementById("telefono").value = selectedRow.cells[3].innerHTML;
    document.getElementById("email").value = selectedRow.cells[4].innerHTML;
    document.getElementById("fechaNacimiento").value = selectedRow.cells[5].innerHTML;
    document.getElementById("contrasena").value = selectedRow.cells[6].innerHTML;
    document.getElementById("tipo").value = selectedRow.cells[7].innerHTML;
    document.getElementById("estado").value = selectedRow.cells[8].innerHTML;
}

function eliminarUsuario(fila){
    selectedRow = fila.parentElement.parentElement;
    for (let i = 0; i < ltsUsuarios.length; i++) {
        if(ltsUsuarios[i].idUsuario == selectedRow.cells[0].innerHTML){
            ltsUsuarios.splice(i,1);
        }
        
    }
    generarTabla();
}

function borrarTxt(){
    document.querySelector('#id').value = "";
    document.querySelector('#nombre').value = "";
    document.querySelector('#apellidos').value = "";
    document.querySelector('#telefono').value = "";
    document.querySelector('#email').value = "";
    document.querySelector('#fechaNacimiento').value = "";
    document.querySelector('#contrasena').value = "";
    document.querySelector('#tipo').value = "";
    document.querySelector('#estado').value = "";
}

function buscarUsuario(){

    var tbody = document.querySelector('#tbodyUsuarios');
    tbody.innerHTML = " ";

    for (let i = 0; i < ltsUsuarios.length; i++) {
        
        if(document.querySelector('#buscar').value == ltsUsuarios[i].idUsuario ||
            document.querySelector('#buscar').value == ltsUsuarios[i].nombre ||
            document.querySelector('#buscar').value == ltsUsuarios[i].apellidos ||
            document.querySelector('#buscar').value == ltsUsuarios[i].telefono ||
            document.querySelector('#buscar').value == ltsUsuarios[i].email ||
            document.querySelector('#buscar').value == ltsUsuarios[i].fechaNacimiento ||
            document.querySelector('#buscar').value == ltsUsuarios[i].contraseña ||
            document.querySelector('#buscar').value == ltsUsuarios[i].tipo ||
            document.querySelector('#buscar').value == ltsUsuarios[i].estado){

                tablaBusqueda(i);                
        }
    }
    
}

function tablaBusqueda(i){
    var tbody = document.querySelector('#tbodyUsuarios');

    var row = tbody.insertRow(i),
        idUsr = row.insertCell(0),
        nombreUsr = row.insertCell(1),
        apellidosUsr = row.insertCell(2),
        telefonoUsr = row.insertCell(3),
        emailUsr  = row.insertCell(4),
        fechaUsr  = row.insertCell(5),
        contraseñaUsr  = row.insertCell(6),
        tipoUsr  = row.insertCell(7),
        estadoUsr  = row.insertCell(8);
        configurar = row.insertCell(9);

        idUsr.innerHTML = ltsUsuarios[i].idUsuario;
        nombreUsr.innerHTML = ltsUsuarios[i].nombre;
        apellidosUsr.innerHTML = ltsUsuarios[i].apellidos;
        emailUsr.innerHTML = ltsUsuarios[i].email;
        telefonoUsr.innerHTML = ltsUsuarios[i].telefono;
        fechaUsr.innerHTML = ltsUsuarios[i].fechaNacimiento;
        contraseñaUsr.innerHTML = ltsUsuarios[i].contraseña;
        tipoUsr.innerHTML = ltsUsuarios[i].tipo;
        estadoUsr.innerHTML = ltsUsuarios[i].estado;
        configurar.innerHTML = `<button onClick="editarUsuario(this)">Editar</button>
                                <button onClick="eliminarUsuario(this)">Eliminar</button>`;
        
        tbody.appendChild(row);
    
}