var magicians_lists;
magicians_lists = ["Dynamo", "Haryy Houdini", "Hydra", "Alpha"];
var unchanged_magicians;
unchanged_magicians = [];
show_magicians.apply(void 0, magicians_lists);
function show_magicians() {
    var op_magicians = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        op_magicians[_i] = arguments[_i];
    }
    op_magicians.forEach(function (element) {
        console.log(element);
    });
}
make_great.apply(void 0, magicians_lists);
function make_great() {
    var magician_array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        magician_array[_i] = arguments[_i];
    }
    for (var i = 0; i < magician_array.length; i++) {
        unchanged_magicians[i] = magician_array[i];
        magicians_list[i] = 'The Great ' + magician_array[i];
        console.log(magicians_list[i]);
    }
}
