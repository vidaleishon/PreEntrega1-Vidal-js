//Ingrese un nombre

let nombreIngresado = prompt ("¿Cuál es su nombre?");

if (nombreIngresado !="") {
    alert ("Saludos, " + nombreIngresado)
}
else {
    alert ("Por favor, la próxima ingrese su nombre.") 
    
}

//Ingrese un número

let ingresarNumero = prompt ("Ingrese un número del 1 al 10")

for (let i = 0; i < 10 ; i++) {
    if (i == ingresarNumero) {
        break;
    }
     alert (i + 1)
}
switch (ingresarNumero) {
    case "1": break;
    case "2": break;
    case "3": break;
    case "4": break;
    case "5": break;
    case "6": break;
    case "7": break;
    case "8": break;
    case "9": break;
    case "10": break;
    case ">10": alert ("Dato muy grande")
    default: alert ("Dato incorrecto.")
    
}