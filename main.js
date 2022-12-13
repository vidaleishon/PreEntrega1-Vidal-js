let consultaEntrada = prompt("Buenas! ¿Eres tutor o invitado?").toLowerCase()

if (consultaEntrada == "tutor") {
    alert ("Bienvenido, tutor!")
} else if (consultaEntrada == "invitado") {
    alert ("Bienvenido!")
}

while (consultaEntrada != "tutor" && consultaEntrada != "invitado") {      
    alert ("Por favor, especifique.");
    consultaEntrada = prompt ("¿Eres tutor o invitado?").toLowerCase();
    if (consultaEntrada == "tutor") {
        alert ("Bienvenido, tutor!")
    } else if (consultaEntrada == "invitado") {
        alert ("Bienvenido!")
    }
}

let consultaReserva = prompt("¿Desea reservar?").toLowerCase()
if (consultaReserva == "si") {
    alert ("Perfecto!")
}

let cantidadFechas = parseInt(prompt("Cuántas noches necesita?"))
alert ("El total es " + 6500*cantidadFechas) 