// Array para info del usuario
let newReservation = [];

// Funcion => guardar en array la info del usuario:
function newReservationFun() {
    alert("Funcionando Reservation")
}

// Funcion => guardar en array la info del usuario:
function printCalendarTwo(one, two) {
    // Objeto nueva reserva:
    let newReserv = new Reservation(one, two);

    // Push array:
    newReservation.push(newReserv);

    console.log(newReservation);
}