const Car = function (manufacturer, price, engineType) {
    this.manufacturer = manufacturer;
    this.price = price;
    this.engineType = engineType;
}

Car.prototype.getManufacturer = function() {return this.manufacturer};
Car.prototype.setManufacturer = function(manufacturer) {this.manufacturer = manufacturer};
Car.prototype.getPrice = function() {return this.price};
Car.prototype.setPrice = function(price) {this.price = price};
Car.prototype.getEngineType = function () {return this.engineType};
Car.prototype.setEngineType = function(engineType) {this.engineType = engineType};

const Dealership = function (name, maximumCars){
    this.name = name;
    this.maximumCars = maximumCars;
    this.carsInStock = [];
}

Dealership.prototype.getCarsInStock = function() {return this.carsInStock};
Dealership.prototype.setCarsInStock = function(carsInStock) {this.carsInStock = carsInStock};

Dealership.prototype.addCarToStock = function(car) {
    if (this.carsInStock.length < this.maximumCars) {
        this.carsInStock.push(car);
    }else{
        return "No room!";
    }
    
};

Dealership.prototype.removeCarFromStock = function(car) {
    const index = this.carsInStock.findIndex((value) => value === car);
    updatedCarsInStock = this.carsInStock.splice(index,1);
    this.setCarsInStock(updatedCarsInStock);
}

Dealership.prototype.countCarStock = function () {return this.carsInStock.length}

Dealership.prototype.getAllManufacturers = function () {
    const manufacturers = this.carsInStock.map(car => car.manufacturer);
    return manufacturers;
}

Dealership.prototype.findCarsWithManufacturer = function (given_manufacturer) {
    return this.carsInStock.filter(car => car.manufacturer === given_manufacturer);
}

Dealership.prototype.findTotalValueOfStock = function () {
    const total = this.carsInStock.reduce((reducer,car) => {
        return reducer + car.price;
    },0);

    return total;
};

const Customer = function(name, wallet) {
    this.name = name;
    this.wallet = wallet;
    this.car = null;
}

Customer.prototype.buyCar = function(car,dealership) {
    if (this.wallet >= car.price) {
        let index = dealers.getCarsInStock.findIndex()
        
    }
}


module.exports = Car;
module.exports = Dealership;

const lighteningMcQueen = new Car("Pixar",100,"Thermal");
const batmobile = new Car("Wayne Industries",1000,"Electric")
const docHudson = new Car("Pixar",500,"Thermal")
const dealers = new Dealership("Dealers",4);

dealers.addCarToStock(batmobile);
dealers.addCarToStock(lighteningMcQueen);
dealers.addCarToStock(docHudson);

console.log(dealers.getAllManufacturers());
console.log(dealers.findCarsWithManufacturer("Pixar"));
console.log(dealers.findTotalValueOfStock());
