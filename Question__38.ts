let default_country = "Pakistan";
describe_city("Islamabad",default_country);
describe_city("Lahore",default_country);
describe_city("Paris","France");



function describe_city(city : string, country : string){
console.log(city+" is in "+country);
}

