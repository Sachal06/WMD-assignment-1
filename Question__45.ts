let car_info = make_car("Lamborghini","Galarado",['Color','Yellow'],['SunRoof','Yes'])
console.log(car_info);
console.log(car_info.Manufacturer);
console.log(car_info.Model);

function make_car(Manufacturers,Model_name,...modificaions){
    let car_description={
     'Manufacturer':Manufacturers,
     'Model':Model_name,
    }
    modificaions.forEach((arbitrary_option)=>{
     let [key,value]=modificaions;
     car_description[key]=value;
    });
    return car_description;

   }




   