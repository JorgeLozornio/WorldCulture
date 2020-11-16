tablaUsuarios();

async function tablaUsuarios(){

    var lista = getUsuarios(),
        tbody = document.querySelector('#tblUsuarios tbody');

    tbody.innerHTML = '';

    for(var i = 0; i < ltsUsuarios.length; i++){
        var row = tbody.insertRow(i);
        var cId= row.insertCell(0);
        cId.innerHTML = lista[i].idUsuario;

        tbody.appendChild(row);
    }

}