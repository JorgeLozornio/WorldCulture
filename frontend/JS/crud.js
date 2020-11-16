var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["imagen"] = document.getElementById("imagen").value;
    formData["codigo"] = document.getElementById("codigo").value;
    formData["nombre"] = document.getElementById("nombre").value;
    formData["descripcion"] = document.getElementById("descripcion").value;
    formData["departamento"] = document.getElementById("departamento").value;
    formData["seccion"] = document.getElementById("seccion").value;
    formData["compra"] = document.getElementById("compra").value;
    formData["venta"] = document.getElementById("venta").value;
    formData["stock"] = document.getElementById("stock").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.imagen;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.codigo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.nombre;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.descripcion;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.departamento;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.seccion;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.compra;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.venta;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.stock;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                       <a onClick="onDelete(this)">Borrar</a>`;
}

function resetForm() {
    document.getElementById("imagen").value = "";
    document.getElementById("codigo").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("departamento").value = "";
    document.getElementById("seccion").value = "";
    document.getElementById("compra").value = "";
    document.getElementById("venta").value = "";
    document.getElementById("stock").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("imagen").value = selectedRow.cells[0].innerHTML;
    document.getElementById("codigo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("nombre").value = selectedRow.cells[2].innerHTML;
    document.getElementById("descripcion").value = selectedRow.cells[3].innerHTML;
    document.getElementById("departamento").value = selectedRow.cells[4].innerHTML;
    document.getElementById("seccion").value = selectedRow.cells[5].innerHTML;
    document.getElementById("compra").value = selectedRow.cells[6].innerHTML;
    document.getElementById("venta").value = selectedRow.cells[7].innerHTML;
    document.getElementById("stock").value = selectedRow.cells[8].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.imagen;
    selectedRow.cells[1].innerHTML = formData.codigo;
    selectedRow.cells[2].innerHTML = formData.nombre;
    selectedRow.cells[3].innerHTML = formData.descripcion;
    selectedRow.cells[4].innerHTML = formData.departamento;
    selectedRow.cells[5].innerHTML = formData.seccion;
    selectedRow.cells[6].innerHTML = formData.compra;
    selectedRow.cells[7].innerHTML = formData.venta;
    selectedRow.cells[8].innerHTML = formData.stock;
}

function onDelete(td) {
    if (confirm('¿Deseas borrar este producto?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("imagen").value == "" || document.getElementById("codigo").value == "" || document.getElementById("nombre").value == "" || document.getElementById("descripcion").value == "" || document.getElementById("departamento").value == "" || document.getElementById("seccion").value == "" || document.getElementById("compra").value == "" || document.getElementById("venta").value == "" || document.getElementById("stock").value == "") {
        isValid = false;
        document.getElementById("imagenValidationError").classList.remove("hide");
        document.getElementById("codigoValidationError").classList.remove("hide");
        document.getElementById("nombreValidationError").classList.remove("hide");
        document.getElementById("descripcionValidationError").classList.remove("hide");
        document.getElementById("departamentoValidationError").classList.remove("hide");
        document.getElementById("seccionValidationError").classList.remove("hide");
        document.getElementById("compraValidationError").classList.remove("hide");
        document.getElementById("ventaValidationError").classList.remove("hide");
        document.getElementById("stockValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("imagenValidationError").classList.contains("hide"))
            document.getElementById("imagenValidationError").classList.add("hide" || !document.getElementById("codigoValidationError").classList.contains("hide"))
        document.getElementById("codigoValidationError").classList.add("hide" || !document.getElementById("nombreValidationError").classList.contains("hide"))
        document.getElementById("nombreValidationError").classList.add("hide" || !document.getElementById("descripcionValidationError").classList.contains("hide"))
        document.getElementById("descripcionValidationError").classList.add("hide" || !document.getElementById("departamentoValidationError").classList.contains("hide"))
        document.getElementById("departamentoValidationError").classList.add("hide" || !document.getElementById("seccionValidationError").classList.contains("hide"))
        document.getElementById("seccionValidationError").classList.add("hide" || !document.getElementById("compraValidationError").classList.contains("hide"))
        document.getElementById("compraValidationError").classList.add("hide" || !document.getElementById("ventaValidationError").classList.contains("hide"))
        document.getElementById("ventaValidationError").classList.add("hide" || !document.getElementById("stockValidationError").classList.contains("hide"))
        document.getElementById("stockValidationError").classList.add("hide");
    }
    return isValid;
}