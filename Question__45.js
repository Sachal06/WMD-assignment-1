var car_info = make_car("Lamborghini", "Galarado", ['Color', 'Yellow'], ['SunRoof', 'Yes']);
console.log(car_info);
console.log(car_info.Manufacturer);
console.log(car_info.Model);
function make_car(Manufacturers, Model_name) {
    var modificaions = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        modificaions[_i - 2] = arguments[_i];
    }
    var car_description = {
        'Manufacturer': Manufacturers,
        'Model': Model_name
    };
    modificaions.forEach(function (arbitrary_option) {
        var key = modificaions[0], value = modificaions[1];
        car_description[key] = value;
    });
    return car_description;
}
