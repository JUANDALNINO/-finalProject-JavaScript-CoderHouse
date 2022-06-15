// Load reservation
let actReser = localStorage.getItem("myReservation");

// Array para info del usuario
let newReservation = [];

// Funcion => guardar en array la info del usuario:
function newReservationFun() {
    reservationLoad();
}

// Funcion => guardar en array la info del usuario:
function printCalendarTwo(one, two) {
    // Objeto nueva reserva:
    let newReserv = new Reservation(one, two);

    // Push array:
    newReservation.push(newReserv);

    reservationSave();
}

// Function for save on LocalStorage:
function reservationSave() {
    let reserJson = JSON.stringify(newReservation);
    localStorage.setItem("myReservation", reserJson);
}

// Function for load on localStorage:
let LoadCompleteReser = [];
function reservationLoad() {
    let loadReser = localStorage.getItem("myReservation");
    LoadCompleteReser = JSON.parse(loadReser);
    printLoadComplete(LoadCompleteReser);
}

// Check reservation:
function actualReser() {
    if(!actReser) {
        alert("You don't have any reservations. Please book one.")
    } else {
        newReservationFun();
    }
}