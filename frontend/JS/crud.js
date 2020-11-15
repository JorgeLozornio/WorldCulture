// var nuevoId;
// var db = openDatabase("worldcultureDB", "1.0", "worlcultureDB", 65535);

// function limpiar() {
//     document.getElementById("codigo").value = "";
//     document.getElementById("item").value = "";
//     document.getElementById("descripcion").value = "";
//     document.getElementById("departamento").value = "";
//     document.getElementById("seccion").value = "";
//     document.getElementById("precioCompra").value = "";
//     document.getElementById("precioVenta").value = "";
// }

// //Botonoes

// $(function) {
// $("#crear").click(function() {
//     db.transaction(function(transaction) {
//         var sql = "CREATE TABLE productos " +
//             "(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, " +
//             "item VARCHAR (100) NOT NULL, " +
//             "precioCompra DECIMAL (5,2) NOT NULL)";
//         transaction.executeSql(sql, undefined, function() {
//             alert("Tabla creada satisfactoriamente");
//         }, function(transaction, err) {
//             alert(err.message);
//         })
//     });
// });
// })
$()