function createCar(manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    args.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
// Example usage
var myCar = createCar("Toyota", "Camry", ["color", "blue"], ["optionalFeature", "Sunroof"]);
console.log(myCar);
