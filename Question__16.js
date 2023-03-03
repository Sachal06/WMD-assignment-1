var invited_guests;
invited_guests = ["John Smith", "Will Smith", "Imran Nazeer"];
invited_guests.forEach(function (element) {
    console.log("Dear Mr." + element + ",We request your pleasure to join us for dinner.");
});
var new_guest = "ImranKhan";
console.log("Mr. " + invited_guests[0] + " won't be ale to join for us dinner.");
invited_guests = [new_guest, "WillSmith", "Imran Nazeer"];
invited_guests.forEach(function (element) {
    console.log("Mr." + element + ",We request your pleasure to join us for dinner.");
});
console.log("Gentlemen, It seems we have more room on the table. So three more guests will be accompanying us");
invited_guests.unshift("Bill Gates");
invited_guests = [new_guest, "Cristiano Ronaldo", "Will Smith", "Imran Nazeer"];
invited_guests.push("Jeff Bezos");
invited_guests.forEach(function (element) {
    console.log("Dear Mr." + element + ",We request your pleasure to join us for dinner.");
});
