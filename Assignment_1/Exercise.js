console.log("************************************************************************");
//Question 2
var personName = "Shahroze";
var message = "Hi, ".concat(personName, " How are you? Hope you're doing good!");
console.log(message);
console.log("\n************************************************************************\n");
//Question 3
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log("\n************************************************************************\n");
//Question 4
console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.");
console.log("\n************************************************************************\n");
//Question 5
var authorName = "Thommas Shelby";
var qoute = "Good taste is for people who can't afford sapphires.";
var display = "".concat(authorName, " once said, \"").concat(qoute, "\"");
console.log(display);
console.log("\n************************************************************************\n");
//Question 6
personName = "\tShahroze Kamran Sahotra \t";
console.log(personName);
console.log(personName.trim());
personName = "\n Shahroze Kamran Sahotra \n \n";
console.log(personName);
console.log(personName.trim());
console.log("\n************************************************************************\n");
//Question 7,8
console.log(5 + 3);
console.log(12 - 4);
console.log(4 * 2);
console.log(16 / 2);
console.log("\n************************************************************************\n");
//Question 9
var n = 8;
message = " is your favourite number";
console.log("".concat(n, " ").concat(message));
console.log("\n************************************************************************\n");
//Question 11
var names = ['Zeerik', 'Zohaib'];
names.push('Sameer');
names[3] = 'Hamza';
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var data = names_1[_i];
    console.log(data);
}
console.log("\n************************************************************************\n");
//Question 12
message = "Hope you are doing great!";
for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
    var data = names_2[_a];
    console.log(data + "," + message);
}
console.log("\n************************************************************************\n");
//Question 13: Vehicles Example
var vehicles = ["Volvo", "Ford", "Camry"];
var messages = [" is a wonderful car", " is one of oldest car company", " is my favourite car"];
var len = vehicles.length;
for (var n_1 = 0; n_1 < len; n_1++) {
    console.log(vehicles[n_1] + " " + messages[n_1]);
}
console.log("\n************************************************************************\n");
//Question 14: Guests Exercise
var guests = names;
message = " You are invited for dinner!";
for (var _b = 0, names_3 = names; _b < names_3.length; _b++) {
    var data = names_3[_b];
    console.log(data + "," + message);
}
console.log("\n************************************************************************\n");
//Question 15
console.log(guests);
var dlt = guests.splice(2, 1);
//console.log(dlt);
guests.splice(2, 0, "Asad");
for (var _c = 0, guests_1 = guests; _c < guests_1.length; _c++) {
    var data = guests_1[_c];
    console.log(data + "," + message);
}
console.log("\n" + dlt + " couldn't make to the dinner ");
console.log("\n************************************************************************\n");
//Question 16
//Added New Guest at Start
guests.unshift("Adil");
console.log(guests);
//Added new Guest at ENd
guests.push("Aoun");
console.log(guests);
//Added New Guest at middle
guests.splice(3, 0, "Mehboob");
console.log(guests);
for (var _d = 0, guests_2 = guests; _d < guests_2.length; _d++) {
    var data = guests_2[_d];
    console.log(data + "," + message);
}
console.log("\n************************************************************************\n");
//Question 17
console.log("Only two persons are invited");
len = guests.length;
console.log(len);
do {
    console.log("Sorry for the inconvenience " + guests.pop());
    len = guests.length;
    len--;
} while (len != 1);
for (var _e = 0, guests_3 = guests; _e < guests_3.length; _e++) {
    var data = guests_3[_e];
    console.log(data + "," + message);
}
do {
    console.log("Sorry for the inconvenience " + guests.pop());
    len = guests.length;
    len--;
} while (len != -1);
console.log(guests);
console.log("\n************************************************************************\n");
//Question 18
var locations = ["Switzerland", "Los Angeles", "New York", "Las Vegas", "UAE"];
console.log(locations);
var updatedLocations = locations;
console.log(updatedLocations.sort());
console.log(updatedLocations.reverse());
//Question 19
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
