var s1 = "Shah", s2 = "Shah";
//console.log(s1===s2.toLowerCase());
var n1 = 5, n2 = 3;
// console.log(n1>n2);
// console.log(n1<n2);
// console.log(n1==n2);
// console.log(n1!=n2);
// console.log(n1<=n2);
// console.log(n1>=n2);
// console.log(n1>=5 && n2>=5);
// console.log(n1>=5 || n2>=5);    
var arr = ['a', 'b', 'c'];
//console.log(arr.indexOf('d')!=-1);
//Question 25
var alien_color = "green";
if (alien_color == "green") {
    console.log('You just earned 5 point');
}
alien_color = "red";
if (alien_color != "green") {
    console.log(null);
}
//Question 26
if (alien_color == "green") {
    console.log('You just earned 5 points');
}
else {
    console.log('You just earned 10 points');
}
//Question 27
if (alien_color == "green") {
    console.log('You just earned 5 points');
}
else if (alien_color == "red") {
    console.log('You just earned 10 points');
}
else if (alien_color == "yellow") {
    console.log('You just earned 15 points');
}
//Question 28
var age = 100;
if (age < 2) {
    console.log("Baby");
}
else if (age >= 2 && age < 4) {
    console.log("Toddler");
}
else if (age >= 4 && age < 13) {
    console.log("Kid");
}
else if (age >= 13 && age < 20) {
    console.log("Teenager");
}
else if (age >= 20 && age < 65) {
    console.log("Adult");
}
else if (age >= 65) {
    console.log("Elder");
}
//Question 30
var username = ["admin", "shah", "zaman", "asad", "rauf"];
if (username.length == 0) {
    console.log("We need to find some users!");
}
for (var _i = 0, username_1 = username; _i < username_1.length; _i++) {
    var data = username_1[_i];
    if (data == "admin") {
        console.log("Hello ".concat(data, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(data, ", thank you for logging in again."));
    }
}
username = [];
if (username.length == 0) {
    console.log("We need to find some users!");
}
//Question 32
var current_users = ["shah", "zaman", "asad", "adil", "khalid"];
var new_users = ["khalid", "zaman", "daud", "adil", "sameer"];
for (var n = 0; n < new_users.length; n++) {
    for (var s = 0; s < current_users.length; s++) {
        if (new_users[n].indexOf(current_users[s]) != -1) {
            console.log("".concat(new_users[n], " Already Taken"));
        }
    }
}
//Question 33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var ordinal = "st";
for (var n = 0; n < numbers.length; n++) {
    if (numbers[n] % 10 == 1) {
        ordinal = "st";
        console.log(numbers[n] + "".concat(ordinal));
    }
    else if (numbers[n] % 10 == 2) {
        ordinal = "nd";
        console.log(numbers[n] + "".concat(ordinal));
    }
    else if (numbers[n] % 10 == 3) {
        ordinal = "rd";
        console.log(numbers[n] + "".concat(ordinal));
    }
    else {
        ordinal = "th";
        console.log(numbers[n] + "".concat(ordinal));
    }
}
//Question 36
function make_shirt(size, message) {
    console.log("".concat(message, " for ").concat(size, " shirt"));
}
var size = "2XL", mes = "BORN TO RULE";
make_shirt(size, mes);
//Question 37
function make_shirt1(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love TypeScript"; }
    if (size == "Medium") {
        message = "I Love TypeScript";
        console.log("".concat(message, " for ").concat(size, " shirt"));
    }
    else {
        console.log("".concat(message, " for ").concat(size, " shirt"));
    }
}
size = "2XL", mes = "BORN TO RULE";
make_shirt1(size, mes);
