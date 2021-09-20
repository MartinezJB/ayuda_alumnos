let botonIngreso = document.querySelector("#ingresar");


const validarDatos = function() {
    event.preventDefault();
    let user = document.querySelector("#user").value;
    let password = document.querySelector("#password").value;

    if( esUsuarioValido(user) && esContraseñaValida(password) ){
        alert("acceso concedido")
        window.location.href = "./principal.html"
    }else {
        return -1
    }
}

function esUsuarioValido(user) {
    
    if(isNaN(user)) {
        alert("El usuario solo puede ser números. Reintente nuevamente.");
        return false
    }else if( user.toString().length != 8 ) {
        alert("El usuario es incorrecto. Reintente nuevamente.");
        return false
    }else {
        return true
    }

    // return !isNaN(user) && user.toString().length == 8  //este es un codigo mas legible, pero no especifica el error
}

function esContraseñaValida(contra) {

    if(contra.length < 6){
        alert("Contraseña demasiado corta.")
        return false
    }
    
    let cantLetras = 0;
    let cantNumeros = 0;
    
    for(let i of contra){
        if( i > -1 ) {
            cantNumeros += 1;
        }else{
            cantLetras += 1;
        }
    }

    if(cantNumeros < 1){
        alert("La contraseña debe poseer al menos un numero")
        return false
    }
    else if(cantLetras < 1) {
        alert("La contraseña debe poseer al menos una letra")
        return false
    }else {
        return true
    }
    
    //return cantLetras >= 1 && cantNumeros >= 1;  //similar al anterior, no especifica porqué la contraseña esta mal
}

botonIngreso.addEventListener("click", validarDatos);