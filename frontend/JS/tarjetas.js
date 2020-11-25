function validar(form){
    var cad=validartitulartargeta(form..value);
    cad+=validarFecha(form..value);
    cad+=validarCodSeguridad(form..value);
    if(cad!=''){
        document.getElementById("notificaciones").innerHTML='<p>'+cad+'</p>';
        return false;
    }
    else{
       return true; 
    }


}

function validartitulartargeta(tamaño){
    if (tamaño.length()>50){
        return 'Debe ser menor de 50 caracteres ';

}else {
    return '';
}
}
    function validarCodSeguridad(parametro){
        if(parametro > 4 || parametro < 3){
            return 'El codigo de seguridad debe de tener al menos 3 digitos ';
        } else {
            return '';
        }
}

function validarFecha(fecha){
        var fecha1=new Date();
        if(fecha<fecha1){
            return 'La tarjeta aun no se caduca'+"<br>";
        }
        return '';
    }
    


