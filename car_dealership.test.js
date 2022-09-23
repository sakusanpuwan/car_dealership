// Need to fix issues with tests

const Dealership = require('./car_dealership');
const Car = require('./car_dealership');

const lighteningMcQueen = new Car("Pixar",100,"Thermal");
const batmobile = new Car("Wayne Industries",1000,"Electric");
const docHudson = new Car("Pixar",500,"Thermal");
const mysteryMachine = new Car("WB",50,"Thermal");
const delorean = new Car("Back to the Future",250,"Electric");

const dealers = new Dealership("Dealers",4);

dealers.addCarToStock(batmobile);
dealers.addCarToStock(lighteningMcQueen);
dealers.addCarToStock(docHudson);

describe('car', () => {

    test("can get car's price", () => {
        // expected = 100;
        // actual = lighteningMcQueen.price;
        expect(lighteningMcQueen.price).toBe(100);
    });

    test("can get car's manufacturer", () => {
        expected = "Pixar";
        actual = lighteningMcQueen.getManufacturer();
        expect(actual).toBe(expected);
    });
    
    test("can get car's engine type", () => {
        expected = "Thermal";
        actual = lighteningMcQueen.getEngineType();
        expect(actual).toBe(expected);
    })
});

describe("dealership", () => {

    test.skip("can add car to stock", () => {
        dealers.addCarToStock(mysteryMachine);
        expected = "No room!";
        actual = dealers.addCarToStock(delorean);
        //actual = dealers.countCarStock();
        expect(actual).toBe(expected);
    });

    test.skip("can return all manufacturers", () => {
        expected = 2;
        actual = dealers.getAllManufacturers().length;
        expect(actual).toBe(expected);
    })

    test.skip("can return all cars from a given manufacturer", () => {
        expected = 2;
        actual = dealers.findCarsWithManufacturer("Pixar");
    });

    test.skip("can find total stock value," ,() => {
        expected = 1600;
        actual = dealers.findTotalValueOfStock();
        expect(actual).toBe(expected);
    })

    test("can remove car from stock", () => {
        dealers.removeCarFromStock(batmobile);
        expected = 2;
        actual = dealers.countCarStock();
        expect(actual).toBe(expected);
    })
});

