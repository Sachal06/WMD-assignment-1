

let magicians : String [];
magicians = ["Dynamo","Haryy Houdini","Hydra","Alpha"];

let unchanged_magicians : String [];
unchanged_magicians = [];


show_magicians(...magicians);

function show_magicians(...magics){

    magics.forEach(element => {
        console.log(element);
    });
}
make_great(...magicians);

function make_great(...magician_array){
    
     
    for(var i = 0; i<magician_array.length; i++){
        unchanged_magicians[i] = magician_array[i];
        magicians[i] = 'The Great '+ magician_array[i]
        console.log(magicians[i]);
    }
}


show_magicians(...unchanged_magicians);
show_magicians(...magicians);

