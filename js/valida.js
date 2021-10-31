window.onload = iniciar;

function iniciar(){
    document.getElementById('enviar').addEventListener('click',validate,false);
}

function valida_nombre(){
    var elemento = document.getElementById('nombre');
    if (elemento.value === ''){
        alert('El nombre no puede estar vacio');
        return false;    
    }
    return true;   
}

function valida_telefono(){
    var elemento =document.getElementById('telefono');
    if (elemento.value === ''){
        alert('El telefono no puede estar vacio');
        return false;    
    } else if(isNaN(elemento.value)){
        alert('El telefono debe ser numerico');
        return false
    }

    return true;
}    

function valida_email(){
    var elemento = document.getElementById('email');
    var expresion = /\w+@\w+\.+[a-z]/;    

    if (elemento.value === ''){
        alert('El e-mail no puede estar vacio');
        return false;    
    }else if(!expresion.test(elemento.value)){
        alert('El correo no es valido');
        return false;
    }
    return true; 
} 

function valida_mensaje(){
   var elemento = document.getElementById('mensaje');
    if (document.getElementsByid('mensaje').length === ''){
        alert('El mensaje no puede estar vacio');
        return false;    
    }
    return true; 
}


function  validate(e){
    if(valida_nombre() && valida_email() && valida_telefono() && valida_mensaje && confirm('Pulse aceptar si desea enviar el formulario')){
        return true;
    }
    return false;
}



