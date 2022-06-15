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


// Clase para almacenar datos usuario de reserva y calendario:
class Reservation {
    constructor(pickCar, returnCar) {
        this.pickCar = pickCar;
        this.returnCar = returnCar;
    }
}