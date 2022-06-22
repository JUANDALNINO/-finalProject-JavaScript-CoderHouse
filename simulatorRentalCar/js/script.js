


// Carros disponibles:
let car1 = new Car(1, "Nissan", "Versa", 2020);
let car2 = new Car(2, "Nissan", "Sentra", 2022);
let car3 = new Car(3, "Volkswagen", "Jetta", 2018);
let car4 = new Car(4, "Mazda", "CX-30", 2021);
let car5 = new Car(5, "Toyota", "Camry", 2020);
let car6 = new Car(6, "Mazda", "CX-5", 2017);
let car7 = new Car(7, "Jeep", "Grand Cherokee", 2020);
let car8 = new Car(8, "Toyota", "Tacoma", 2021);
let car9 = new Car(9, "Ford", "Focus", 2018);
let car10 = new Car(10, "Hyundai", "Accent", 2022);
/*
let car11 = new Car(11, "Renault", "Duster", 2017);
let car12 = new Car(12, "", "", );
let car13 = new Car(13, "", "", );
let car14 = new Car(14, "", "", );
let car15 = new Car(15, "", "", );
let car16 = new Car(16, "", "", );
let car17 = new Car(17, "", "", );
let car18 = new Car(18, "", "", );
let car19 = new Car(19, "", "", );
let car20 = new Car(20, "", "", );
*/


// Array de catálogo:
let catalogo = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];


// Funciones:
// 1. Agregar nuevo carro:
function agregarCarroNuevo() {

    // Variables
    let newCarForm = document.getElementById("formNewCar");
    let newCarFormNew = new FormData(newCarForm);

    let marca = newCarFormNew.get("brandCar");
    let modelo = newCarFormNew.get("modelCar");
    let anio = newCarFormNew.get("yearCar");

    if (marca != 0 && modelo != 0 && anio != 0) {

        // Objeto carro nuevo:
        let newCar = new Car(getId(), marca, modelo, anio);

        // Agregar carro al array:
        catalogo.push(newCar);

        alertCarCreated();

        const divNewCar = document.getElementById("listCarNew");
        let newCarContainer = document.createElement("div");

        divNewCar.innerHTML = `<div class="cardCarNew">
                                <div class="carInfo">
                                    <p> Brand: ${marca} </p>
                                    <p> Model: ${modelo} </p>
                                    <p> Year: ${anio} </p>
                                    <p> You can see this car in the list Vehicles </p>
                                </div>
                            </div>`;

        divNewCar.appendChild(newCarContainer);

    } else {
        alertWriteBlanks();
    }

    // ----------------------------
}

// Funcion de crear ID automaticamente:
function getId() {
    if (catalogo.length === 0) {
        return 1;
    } else {
        let ultimoId = catalogo[catalogo.length - 1];
        return ultimoId.id + 1;
    }
}


// 2. Ver listado de carros disponibles
function listarCarros() {
    let contenedor = "";

    for (const carro of catalogo) {
        let listCarFindDiv = document.getElementById("carFindDiv");
        contenedor = document.createElement("div");
        contenedor.innerHTML = `<div class="cardCar">
                                    <div class="carInfo">
                                        <p> Brand: ${carro?.marca} </p>
                                        <p> Model: ${carro?.modelo} </p>
                                        <p> Year: ${carro?.anio} </p>
                                    </div>
                                </div>`;

        listCarFindDiv.appendChild(contenedor);
    }
}


//---------------------------------

// 3. Buscar un carro:
function buscarCarro() {
    let buscarMarcaCarro = document.getElementById("brandCarSearch").value;

    return catalogo.find((buscarMarca) => buscarMarca.marca.toLowerCase() == buscarMarcaCarro.toLowerCase());
}


function carroBuscando() {
    let contenedor = document.createElement("div");
    let buscarMarca = buscarCarro();

    contenedor.innerHTML = `<div class="cardCar">
                                <div class="carInfo">
                                    <p> Brand: ${buscarMarca?.marca}<p>
                                    <p> Model: ${buscarMarca?.modelo}<p>
                                    <p> Year: ${buscarMarca?.anio}<p>
                                </div>
                            </div>`;

    let carFind = document.getElementById("carSearchDiv");

    carSearchDiv.appendChild(contenedor);
}


//---------------------------------

// SECTION CALENDAR:

function bookCalendar() {
    addDataPickReturn();
};


// Add => PickUp and Return

function addDataPickReturn() {
    let pickDate = document.getElementById("datePick").value;
    let returnDate = document.getElementById("dateReturn").value;

    //With Ternario
    selectDates();
    function selectDates() {
        (pickDate!=0 && returnDate!=0) ? printCalendar(pickDate, returnDate) : alertFirstBook();
    }
}



// Print new reservation => On HTML
function printCalendar(pickDate, returnDate) {

    printCalendarTwo(pickDate, returnDate);

    const divBookRef = document.getElementById("printBook");

    bookContainer = document.createElement("div");
    bookContainer.innerHTML = `<div class="cardCarCalendar">
                                    <div class="carInfo">
                                        <p> Congrats!<br>You have a new reservation: <br>
                                        ${pickDate} </p> 
                                        <p>And finish on: <br>${returnDate}</p>
                                    </div>
                                </div>`;

    divBookRef.appendChild(bookContainer);
}


// Print load reservation:
function printLoadComplete(load) {

    for(const loading of LoadCompleteReser) {
        const divReservation = document.getElementById("printReservation");

        let reservationContainer = document.createElement("div");
            reservationContainer.innerHTML = `<div class="cardCarReservation">
                                                <div class="">
                                                    <p> Your reservation:</p>
                                                    <p>Start on: ${loading?.pickCar} to ${loading?.returnCar}</p>
                                                </div>
                                            </div>`;
    
        divReservation.appendChild(reservationContainer);
    }
}