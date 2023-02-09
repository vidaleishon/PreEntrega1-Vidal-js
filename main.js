
class Reserva {
  constructor(nombreReserva, emailReserva, fechaInicioReserva, fechaFinReserva, datosExtra) {
    this.nombre = nombreReserva;
    this.email = emailReserva;
    this.fechaLlegada = fechaInicioReserva;
    this.fechaSalida = fechaFinReserva;
    this.datosExtra = datosExtra;
  }
}

const datosReserva = JSON.parse(localStorage.getItem("reserva")) || [];

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

  const nuevaReserva = new Reserva(nombreReserva, emailReserva, fechaInicioReserva, fechaFinReserva, datosExtra);

  datosReserva.push(nuevaReserva);
  localStorage.setItem("reserva", JSON.stringify(datosReserva));


  console.log(nuevaReserva)

  let descuento = 1;
  if (cantidadDias >= 7 && cantidadDias < 16) {
    descuento = 0.95;
    console.log("Su reserva es de " + cantidadDias + " noches. Debido a la cantidad de fechas en su posible estadía, se le ofrecerá un descuento del 5%. El precio final de su reserva es de ARS$ " + (precioTotal * 0.95))
  } else if (cantidadDias >= 16 && cantidadDias < 30) {
    descuento = 0.92;
    console.log("Su reserva es de " + cantidadDias + " noches. Debido a la cantidad de fechas en su posible estadía, se le ofrecerá un descuento del 8%. El precio final de su reserva es de ARS$ " + (precioTotal * 0.92))
  } else if (cantidadDias > 30) {
    descuento = 0.88;
    console.log("Su reserva es de " + cantidadDias + " noches. Debido a la cantidad de fechas en su posible estadía, se le ofrecerá un descuento del 12%. El precio final de su reserva es de ARS$ " + (precioTotal * 0.88))
  } else {
    console.log("Su reserva es de " + cantidadDias + " noches. El precio final de su reserva es de $" + precioTotal)
  }

  let precioFinal = precioTotal * descuento

  let nodo = document.getElementById("respuestaconsulta");
  nodo.innerHTML = `<h3>Su reserva:</h3>
  <h5> Nombre: </h5> <p>${nombreReserva}</p> 
  <h5> Email: </h5><p>${emailReserva}</p>   
  <h5> Fecha de Llegada: </h5><p>${fechaInicioReserva}</p> 
  <h5> Fecha de Salida: </h5><p>${fechaFinReserva}</p> 
  <h5> Datos a tener en cuenta: </h5><p>${datosExtra}</p> 
  <p> Realizada desde el día ${fechaInicioReserva} hasta el día ${fechaFinReserva}. Por un total de ${cantidadDias} noches, el precio total es de <strong>ARS$${precioFinal}</strong>. </p>`

}

const formulario = document.querySelector("#formulario_reserva");

formulario.onsubmit = (e) => {
  e.preventDefault();
  reserva(e);

}





