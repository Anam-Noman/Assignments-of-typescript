// Assignment # 21
//They think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items.
// Define a TypeScript class for a Car
var Car = /** @class */ (function () {
    function Car(make, model, year, color, price) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
    }
    return Car;
}());
// Create an array of Car objects
var cars = [
    new Car("Toyota", "Camry", 2019, "Silver", 25000),
    new Car("Honda", "Civic", 2020, "Black", 23000),
    new Car("Ford", "Mustang", 2018, "Red", 35000),
    new Car("Tesla", "Model S", 2021, "White", 75000),
    new Car("Chevrolet", "Corvette", 2022, "Blue", 65000)
];
// Print information about each car
cars.forEach(function (car, index) {
    console.log("Car ".concat(index + 1, ":"));
    console.log("Make: ".concat(car.make));
    console.log("Model: ".concat(car.model));
    console.log("Year: ".concat(car.year));
    console.log("Color: ".concat(car.color));
    console.log("Price: $".concat(car.price));
    console.log();
});
