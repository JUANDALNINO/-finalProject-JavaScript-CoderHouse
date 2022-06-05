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


// Array de catálogo:
let catalogo = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];


// Menu inicial:
menuInicial();

function menuInicial() {
    let opcion = 0;

    while (opcion != 10) {
        opcion = Number(prompt("Seleccione una opción: 1. Agregar nuevo carro - 2. Ver listado de carros disponibles - 3. Buscar un carro -  10. Salir"));

        switch(opcion) {
            case 1 : {
                agregarCarroNuevo();
                break;
            }
            case 2: {
                listarCarros();
                break;
            }
            case 3: {
                let carroEncontrado = buscarCarro();

                console.log("Carros encontrados:");
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
        let marca = prompt("Ingrese la marca del carro");
        let modelo = prompt("Ingrese el modelo del carro");
        let anio = Number(prompt("Ingrese el año del carro"));

        // Objeto carro nuevo:
        let newCar = new Car(getId(), marca, modelo, anio);

        // Agregar carro al array:
        catalogo.push(newCar);

        alert("Carro creado con éxito");
        console.table(catalogo);

//---------------------------
    // ----------------------DOM--------------------------
    // 01. Modificar elementos en el HTML
    // => 1. Carro nuevo agregado al array 
    // Al crear carro nuevo aparece en pantalla

        const marcaCarNew = document.getElementById("marcaCarNew");
        const modeloCarNew = document.getElementById("modeloCarNew");
        const anioCarNew = document.getElementById("anioCarNew");

        marcaCarNew.innerHTML = marca;
        modeloCarNew.innerHTML = modelo;
        anioCarNew.innerHTML = anio;
// ----------------------------
    }

    // Funcion de crear ID automaticamente:
    function getId() {
        if(catalogo.length === 0) {
            return 1;
        } else {
            let ultimoId = catalogo[catalogo.length-1];
            return ultimoId.id+1;
        }
    }


    // 2. Ver listado de carros disponibles
    function listarCarros() {
        console.log("El listado de los carros es:");

        catalogo.forEach( (carro) => {
            console.log(carro.marca + " " + carro.modelo + " " + carro.anio);
        })

//-------------------
    // ----------------------DOM--------------------------
        // 02. Crear elementos en el HTML
        // => 2. Listado de carros disponibles en el Array: 
        // Lista los carros disponibles en el array:

        for(const carro of catalogo) {
            let contenedor = document.createElement("div");
        
            contenedor.innerHTML = `<h3> ID: ${carro.id}</h3>
                                    <p> Marca: ${carro.marca} </p>
                                    <p> Modelo: ${carro.modelo} </p>
                                    <p> Año: ${carro.anio} </p>`;
            
        
            let listCarFindDiv = document.getElementById("carFindDiv");
            listCarFindDiv.appendChild(contenedor);
        }
//-------------------

    }


    // 3. Buscar un carro:
    function buscarCarro() {
        let buscarMarcaCarro = prompt("Ingrese la marca del carro");

        return catalogo.find( (buscarMarca) => buscarMarca.marca.toLowerCase() == buscarMarcaCarro.toLowerCase());
    }





// ----------------------DOM--------------------------
    // 02. Crear elementos en el HTML
    // => 3. Carro buscado: 
    // Al buscar un carro este se crea en el html:
