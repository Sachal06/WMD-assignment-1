

let sandwich_items : String [];
sandwich_items = ["Burger Bread","Onions","Garlic","Beef Patty"];

let sandwich_1 : String [];
sandwich_1 = ["bread","Lettuce","Ketchup","lasgna"];

let sandwich_2 : String [];
sandwich_2 = ["peta bread","Lettuce","Black Olives","Ketchup"];

sandwiches(...sandwich_items);
sandwiches(...sandwich_1);
sandwiches(...sandwich_2);

function sandwiches(...sandwich_items){
    for (var i = 0; i<sandwich_items.length; i++){
        console.log(sandwich_items[i]);
    }
}



