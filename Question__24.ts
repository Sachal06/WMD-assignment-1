

let check = "Checking";

console.log(check === "Checking" ? true : false);
console.log(check === "Checkingsss" ? true : false);

console.log(check.toLowerCase() === "condition" ? true : false);
console.log(check.toLowerCase() === "CONDITION" ? true : false);

let digit_1 = 23;
let digit_2 = 37;

console.log(digit_1 === digit_2 ? true : false);
console.log(digit_1 > digit_2 ? true : false);
console.log(digit_1 < digit_2 ? true : false);
console.log(digit_1 >= digit_2 ? true : false);
console.log(digit_1 <= digit_2 ? true : false);


if(digit_1 < digit_2 && digit_2 > digit_1){
    console.log(digit_2+" is greater");
}

if(digit_1 > digit_2 && digit_2 < digit_1){
    console.log(digit_2+" is greater");
}


if(digit_1 < digit_2 || digit_2 > digit_1){
    console.log(digit_2+" is greater");
}

if(digit_1 > digit_2 || digit_2 < digit_1){
    console.log(digit_1+" is smaller");
}

var mountains : String [];
var mountain = "K-1,K-2,Everest,Tango Towers,Siachin";

mountains = mountain.split(",");




let to_be_matched = "Urdu"
mountains.forEach(element => {
    
    if(to_be_matched === element){
        console.log(to_be_matched+" is present in the languages list");
    }

});

let false_detection = "Glacier";
mountains.forEach(element => {
    
    if(false_detection === element){
        console.log(false_detection+" is present in the mountains list");
    }
    else{
        console.log(false_detection+" is not present in the mountain list");
    }

});



