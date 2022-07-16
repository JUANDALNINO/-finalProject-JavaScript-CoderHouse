// Array
let arrayCars = jsonArray["cars"];




// Init App
initApp();


//---------------------------------------------------------------------------------------------------------------------
//Frontend

// Function initApp
function initApp() {
    loadData();
}


//---------------------------------------------------------------------------------------------------------------------
// Json and storage
function loadData() {
    // Booking
    loadDatesDays();
    loadDatesMonths();
    loadDatesYear();
    loadCountries();
    loadCities();
}


//---------------------------------------------------------------------------------------------------------------------
// Classes
class Cars {
    constructor (id, carMake, carModel, carModelYear) {
        this.id = id;
        this.carMake = carMake;
        this.carModel = carModel;
        this.carModelYear = carModelYear;
    }
}


//---------------------------------------------------------------------------------------------------------------------
// Scripts

// -------------- Funcion crear nuevo carro
const btnNewCar = document.getElementById("createNewCar");
btnNewCar.addEventListener("click", function () {
    inputNewBranCar.value = '';
    inputNewCarModel.value = '';
    inputNewCarYear.value = '';

    createCar();
})



function createCar() {
    // Variables:
    const inputNewBranCar = document.getElementById("newBrandCar").value;
    const inputNewCarModel = document.getElementById("newCarModel").value;
    const inputNewCarYear = document.getElementById("newCarYear").value;

    let newCar = new Cars(getId(),inputNewBranCar, inputNewCarModel, inputNewCarYear);

    arrayCars.push(newCar);
    loadCars();

}


// Get ID
function getId() {
    if(arrayCars.length===0) {
        return 1;
    } else {
        const lastCar = arrayCars[arrayCars.length-1];
        return lastCar.id+1;
    }
}


//--------------- Funcion imprimir datos calendario:
/* Dates
console.log(jsonArray["calendar"][0]["days"]);
console.log(jsonArray["calendar"][0]["months"]);
console.log(jsonArray["calendar"][0]["year"]); */

// Function load dates days
function loadDatesDays() {

    let container = "";
    let containerTwo = "";

    for (const day of jsonArray["calendar"][0]["days"]) {

        let yearContainer = document.getElementById("pickUpDay");
        container = document.createElement("option");

        container.innerHTML = `<option>${day}</option>`;

        yearContainer.appendChild(container);

        let yearContainer2 = document.getElementById("returnDay");
        containerTwo = document.createElement("option");

        containerTwo.innerHTML = `<option>${day}</option>`;

        yearContainer2.appendChild(containerTwo);
    }
}


// Function load dates months
function loadDatesMonths() {

    let container = "";
    let containerTwo = "";

    for (const day of jsonArray["calendar"][0]["months"]) {

        let yearContainer = document.getElementById("pickUpMonth");
        container = document.createElement("option");

        container.innerHTML = `<option>${day}</option>`;

        yearContainer.appendChild(container);

        let yearContainer2 = document.getElementById("returnMonth");
        containerTwo = document.createElement("option");

        containerTwo.innerHTML = `<option>${day}</option>`;

        yearContainer2.appendChild(containerTwo);
    }
}


// Function load dates year
function loadDatesYear() {

    let container = "";
    let containerTwo = "";

    let year = jsonArray["calendar"][0]["year"];

    let yearContainer = document.getElementById("pickUpYear");
    container = document.createElement("option");

    container.innerHTML = `<option value="1">${year}</option>`;

    yearContainer.appendChild(container);

    let yearContainer2 = document.getElementById("returnYear");
    containerTwo = document.createElement("option");

    containerTwo.innerHTML = `<option value="1">${year}</option>`;

    yearContainer2.appendChild(containerTwo);
}


//--------------- Funcion imprimir datos locaciones:
/* Dates
console.log(jsonArray["colombianCities"][0].country);
console.log(jsonArray["colombianCities"]); */


// Function load countries
function loadCountries() {

    let container = "";

    let city = jsonArray["colombianCities"][0].country;

    let yearContainer = document.getElementById("countryList");
    container = document.createElement("option");

    container.innerHTML = `<option>${city}</option>`;

    yearContainer.appendChild(container);

}

// Function load cities
function loadCities() {

    for (let i = 0; i < jsonArray["colombianCities"].length; i++) {

        let city = jsonArray["colombianCities"][i].city;

        let cityContainer = document.getElementById("cityList");
        let container = document.createElement("option");

        container.innerHTML = `<option>${city}</option>`;

        cityContainer.appendChild(container);
    }
}



//--------------- Funcion imprimir carros:
const btnListCars = document.getElementById("listCars");
btnListCars.addEventListener("click", function() {
    loadCars();
})

//console.log(jsonArray["cars"]);

function loadCars() {
    let carContainer = document.getElementById("carListFind");
    carContainer.innerHTML = "";

    arrayCars.forEach((car) => {

        let carContainer = document.getElementById("carListFind");
        let container = document.createElement("div");

        container.innerHTML = `<div class="card p-2 cardCar">
        <img src="/simulatorRentalCar/assets/RENTAL CAR/carB.svg" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">${car.carMake}</h5>
            <p class="card-text">Model: ${car.carModel}</p>
            <p class="card-text">Year: ${car.carModelYear}</p>
            <a class="btn btn-primary" id="carSelected">Select</a>
        </div>
    </div>`;
        
        carContainer.appendChild(container);
    });
}



// Buscar Pruebas
function inputSearching() {
    const inputSearch = document.getElementById("inputSearch").value;
    findCar(inputSearch);
}
// Input

// Btn
const btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener("click", function (event) {
    event.preventDefault();

    inputSearching();
});

// Buscar Carro
function findCar(inputSearch) {
    let returnFind = arrayCars.filter(car => car.carMake.toLowerCase() === inputSearch.toLowerCase());
    console.log(returnFind);
    loadCars();
}


// Finish book
const btnSelectcar = document.getElementById("carSelected");