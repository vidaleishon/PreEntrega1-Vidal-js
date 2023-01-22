class Reserva {
  constructor(nombreReserva, emailReserva, fechaInicioReserva, fechaFinReserva, datosExtra) {
    this.nombre = nombreReserva;
    this.email = emailReserva;
    this.fechaLlegada = fechaInicioReserva;
    this.fechaSalida = fechaFinReserva;
    this.datosExtra = datosExtra;
  }
}
function reserva() {
  let nombreReserva = document.getElementById("nombreyapellido").value;
  let emailReserva = document.getElementById("email").value;
  let fechaInicioReserva = document.getElementById("fechallegada").value;
  let fechaFinReserva = document.getElementById("fechasalida").value;
  let datosExtra = document.getElementById("datosextra").value;
  var fechaLlegada = new Date(fechaInicioReserva).getTime();
  var fechaSalida = new Date(fechaFinReserva).getTime();
  var diff = fechaSalida - fechaLlegada;
  var cantidadDias = diff / (1000 * 60 * 60 * 24);
  var precioTotal = cantidadDias * 13500;

  const nuevaReserva = new Reserva(nombreReserva, emailReserva, fechaInicioReserva, fechaFinReserva, datosExtra)

  console.log(nuevaReserva)

  if (cantidadDias >= 7 && cantidadDias < 16) {
    console.log("Debido a la cantidad de días de su posible estadía, se le ofrecerá un descuento del 5%. El precio final de su reserva es de ARS$ " + (precioTotal * 0.95))
  } else if (cantidadDias >= 16 && cantidadDias < 30) {
    console.log("Debido a la cantidad de días de su posible estadía, se le ofrecerá un descuento del 8%. El precio final de su reserva es de ARS$ " + (precioTotal * 0.92))
  } else if (cantidadDias > 30) {
    console.log("Debido a la cantidad de días de su posible estadía, se le ofrecerá un descuento del 12%. El precio final de su reserva es de ARS$ " + (precioTotal * 0.88))
  } else {
    console.log("Su reserva es de " + cantidadDias + " días. El precio final de su reserva es de $" + precioTotal)
  }

}
