
function mostrarDireccion(){
    var xhttp, xmlDoc, txt, x, i;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        xmlDoc = this.responseXML;
        txt = "";
        x = xmlDoc.getElementsByTagName("CALLE");
        txt = txt + x[0].childNodes[0].nodeValue + "<br>";
        
        document.getElementById("divDirecciones").innerHTML = txt;
    }
    };
    xhttp.open("GET", "usuarios.xml", true);
    xhttp.send();
}