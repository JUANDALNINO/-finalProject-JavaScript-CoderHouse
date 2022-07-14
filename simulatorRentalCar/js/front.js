/*---------------------------EVENTOS---------------------------*/

// SECTION CALENDAR:
function formCalendar() {
  bookCalendar();
}

// Book:
let btnBook = document.getElementById("btnBook");

btnBook.addEventListener("click", function () {
  bookCalendar();

});

// Reservation:
let btnReservation = document.getElementById("btnReservation");

btnReservation.addEventListener("click", function () {
  actualReser();
})


// SECTION VEHÍCULOS:
let btn1 = document.getElementById("btnView");

btn1.addEventListener("click", function () {
  listarCarros();
});


// SECTION FIND A CAR:
let btnFind = document.getElementById("btn_Find");

btnFind.addEventListener("click", function () {
  carroBuscando();
})


// SECTION NEW CAR:
let btnNewCar = document.getElementById("btn_NewCar");

btnNewCar.addEventListener("click", function () {
  agregarCarroNuevo();
})



//----------------------
// SECTION COUNTRIES
const btnCountry = document.getElementById("btnCountry");
const inputCountry = document.getElementById("countrySearch");


btnCountry.addEventListener("click", function () {
  let countryName = inputCountry.value;
  let finalUrl = `https://restcountries.com/v3.1/name/${countryName}/`;

  buscarPais(finalUrl);

})