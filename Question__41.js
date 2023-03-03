var magicians_lists;
magicians_lists = ["Dynamo", "Haryy Houdini", "Hydra", "Alpha"];
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
