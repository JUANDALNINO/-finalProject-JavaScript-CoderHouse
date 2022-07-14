
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

    // List Cars
    loadCars();
}



//---------------------------------------------------------------------------------------------------------------------
// Scripts

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
//console.log(jsonArray["cars"]);

function loadCars() {

    let container = "";

    for (const car of jsonArray["cars"]) {

        let carContainer = document.getElementById("carListFind");
        container = document.createElement("div");

        container.innerHTML = `<div class="card p-2 cardCar">
        <img src="/simulatorRentalCar/assets/RENTAL CAR/carB.svg" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">${car.carMake}</h5>
            <p class="card-text">Model: ${car.carModel}</p>
            <p class="card-text">Year: ${car.carModelYear}</p>
            <a href="#" class="btn btn-primary">Select</a>
        </div>
    </div>`;

        carContainer.appendChild(container);
    }

}