var ordinals;
ordinals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
for (var i = 0; i <= ordinals.length; i++) {
    if (ordinals[i] === 1) {
        console.log(ordinals[i] + "st");
    }
    else if (ordinals[i] === 2) {
        console.log(ordinals[i] + "nd");
    }
    else if (ordinals[i] === 3) {
        console.log(ordinals[i] + "rd");
    }
    else if (ordinals[i] >= 4) {
        console.log(ordinals[i] + "th");
    }
}
