let user_names : String [];
user_names = ["Admin","James","Ahmed","Ayan","Sheldon"];

let username = "Ayan";

for(var i = 0; i< user_names.length; i++){
    if(user_names[i] === username){
        console.log("Hello "+username+", thank you for logging in again");
    }
}


