
let magicians_lists : String [];
magicians_lists = ["Dynamo","Haryy Houdini","Hydra","Alpha"];

show_magicians(...magicians_lists);

function show_magicians(...op_magicians){

    op_magicians.forEach(element => {
        console.log(element);
    });
}



