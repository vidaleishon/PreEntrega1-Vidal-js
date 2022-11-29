//Ingrese un nombre

let nombreIngresado = prompt ("¿Cuál es su nombre?");

if (nombreIngresado !="") {
    alert ("Saludos, " + nombreIngresado)
}
else {
    alert ("Por favor, ingrese su nombre.") 
    
}

//Ingrese un número

let ingresarNumero = prompt ("Ingrese un número del 1 al 10")

for (let i = 1; i < 10 ; i++) {

    if (i == ingresarNumero) {
        break;
    }
     alert (i)
}