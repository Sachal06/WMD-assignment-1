

var mountains : String [];
var mountain = "K-1,K-2,Everest,Tango Towers,Siachin";

mountains = mountain.split(",");

for(var i = 0; i<mountains.length; i++){
    console.log(mountains[i]);
}

