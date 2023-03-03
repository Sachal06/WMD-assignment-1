let magicians_lists : String [];
magicians_lists = ["Dynamo","Haryy Houdini","Hydra","Alpha"];

let unchanged_magicians : String [];
unchanged_magicians = [];

show_magicians(...magicians_lists);

function show_magicians(...op_magicians){

    op_magicians.forEach(element => {
        console.log(element);
    });
}
make_great(...magicians_lists);

function make_great(...magician_array){
    
     
    for(var i = 0; i<magician_array.length; i++){
        unchanged_magicians[i] = magician_array[i];
        magicians_list[i] = 'The Great '+ magician_array[i]
        console.log(magicians_list[i]);
    }
}

   