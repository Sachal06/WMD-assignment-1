var magicians;
magicians = ["Dynamo", "Haryy Houdini", "Hydra", "Alpha"];
var unchanged_magicians;
unchanged_magicians = [];
show_magicians.apply(void 0, magicians);
function show_magicians() {
    var magics = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        magics[_i] = arguments[_i];
    }
    magics.forEach(function (element) {
        console.log(element);
    });
}
make_great.apply(void 0, magicians);
function make_great() {
    var magician_array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        magician_array[_i] = arguments[_i];
    }
    for (var i = 0; i < magician_array.length; i++) {
        unchanged_magicians[i] = magician_array[i];
        magicians[i] = 'The Great ' + magician_array[i];
        console.log(magicians[i]);
    }
}
show_magicians.apply(void 0, unchanged_magicians);
show_magicians.apply(void 0, magicians);
