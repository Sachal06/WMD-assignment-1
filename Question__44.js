var sandwich_items;
sandwich_items = ["Burger Bread", "Onions", "Garlic", "Beef Patty"];
var sandwich_1;
sandwich_1 = ["bread", "Lettuce", "Ketchup", "lasgna"];
var sandwich_2;
sandwich_2 = ["peta bread", "Lettuce", "Black Olives", "Ketchup"];
sandwiches.apply(void 0, sandwich_items);
sandwiches.apply(void 0, sandwich_1);
sandwiches.apply(void 0, sandwich_2);
function sandwiches() {
    var sandwich_items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sandwich_items[_i] = arguments[_i];
    }
    for (var i = 0; i < sandwich_items.length; i++) {
        console.log(sandwich_items[i]);
    }
}
