// Objetos a tratar => carros

// La clase como molde para los carros:
class Car {
    constructor(id, marca, modelo, anio) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
}


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


// Menu inicial:
//menuInicial();

function menuInicial() {
    let opcion = 0;

    while (opcion != 10) {
        opcion = Number(prompt("Seleccione una opción: 1. Agregar nuevo carro - 2. Ver listado de carros disponibles - 3. Buscar un carro -  10. Salir"));

        switch (opcion) {
            case 1: {
                agregarCarroNuevo();
                break;
            }
            case 2: {
                listarCarros();
                break;
            }
            case 3: {
                let carroEncontrado = buscarCarro();

                console.log("Carros encontrado:");
                console.table(carroEncontrado);
                break;
            }
            case 10: {
                alert("Gracias por preferirnos");
                break;
            }
            default: {
                alert("Opción invalida");
                break;
            }
        }
    }
}



// Funciones:
// 1. Agregar nuevo carro:
function agregarCarroNuevo() {

    // Variables
    let newCarForm = document.getElementById("formNewCar");
    let newCarFormNew = new FormData(newCarForm);
    
    let marca = newCarFormNew.get("brandCar");
    let modelo = newCarFormNew.get("modelCar");
    let anio = newCarFormNew.get("yearCar");


    // Objeto carro nuevo:
    let newCar = new Car(getId(), marca, modelo, anio);

    // Agregar carro al array:
    catalogo.push(newCar);

    alert("Carro creado con éxito");

    const divNewCar = document.getElementById("listCarNew");
    let newCarContainer = document.createElement("div");

    divNewCar.innerHTML = `<div class="cardCarNew">
                                <div class="carInfo">
                                    <p> Marca: ${marca} </p>
                                    <p> Modelo: ${modelo} </p>
                                    <p> Año: ${anio} </p>
                                </div>
                            </div>`;

    divNewCar.appendChild(newCarContainer);

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
                                        <p> Marca: ${carro.marca} </p>
                                        <p> Modelo: ${carro.modelo} </p>
                                        <p> Año: ${carro.anio} </p>
                                    </div>
                                </div>`;

        listCarFindDiv.appendChild(contenedor);
    }
}


//---------------------------------

// 3. Buscar un carro:
function buscarCarro() {
    let buscarMarcaCarro = prompt("Ingrese la marca o el modelo del carro");

    return catalogo.find((buscarMarca) => buscarMarca.marca.toLowerCase() == buscarMarcaCarro.toLowerCase());
}


function carroBuscando() {
    let carroEncontrado = buscarCarro();

    alert("Carro encontrado con éxito. Inspecciona la consola para verlo!");

    console.log("Carros encontrado:");
    console.table(carroEncontrado);
}


//---------------------------------

// SECTION CALENDAR:
let formName ="";
function bookCalendar() {
    const formCalendar = document.getElementById("formCalendar");

  formCalendar.addEventListener("click", function() {
      let formData = new FormData(formCalendar);
      formName = formData.get("datePick");
      printCalendar();
  })
};

function printCalendar() {
    const divBookRef = document.getElementById("printBook");

    bookContainer = document.createElement("div");
    bookContainer.innerHTML = `<div class="cardCar">
                                    <div class="carInfo">
                                        <p> Your reservation starts on: ${formName} </p>
                                    </div>
                                </div>`;

    divBookRef.appendChild(bookContainer);

    //Video min 15
}