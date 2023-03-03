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
