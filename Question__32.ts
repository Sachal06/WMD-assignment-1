let current_users : String [];
current_users = ["Ali","Imran","Larry","George","Waheed","Waleed"];
let new_users : String [];
new_users = ["Abbas","Jahangir","Hameed","Hafeez","Waheed","Larry"];
for(var i = 0; i < current_users.length; i++){
    for(var j = 0; j < new_users.length; ++j){

        if(current_users[i].toLowerCase() === new_users[j].toLowerCase()){
            console.log(new_users[j].toLowerCase()+" Users Exists!");
        
        }
        else{
            console.log(" Username is available");
        }
       
    }
    

}

