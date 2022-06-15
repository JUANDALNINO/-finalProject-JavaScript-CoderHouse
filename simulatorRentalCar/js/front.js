/*---------------------------EVENTOS---------------------------*/

// SECTION CALENDAR:
function formCalendar() {
  bookCalendar();
}

// Ocultar:
let calendar = document.getElementById("container_calendar");

let btnBook = document.getElementById("btnBook");

btnBook.addEventListener("click", function () {
  formCalendar();
  // if (calendar.style.display != "none") {
  //   calendar.style.display = "none";
  //   btnBook.textContent = "View";
  // } else {
  //   calendar.style.display = "block";
  //   btnBook.textContent = "Ocult";
  // }
});


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