"use strict";
function calc_credit(bal, min_bal, max_bal) {
    let sum = bal + min_bal + max_bal;
    if (sum >= 250 && sum < 300) {
        console.log(`A+`);
    }
    else if (sum >= 220 && sum < 250) {
        console.log(`B`);
    }
    else if (sum >= 180 && sum < 220) {
        console.log(`C`);
    }
    else if (sum >= 150 && sum < 180) {
        console.log(`D`);
    }
    else if (sum < 150 && sum >= 0) {
        console.log(`Low`);
    }
    else {
        console.log(`Invalid Input`);
    }
}
let balance = 100, minimum_balance = 25, maximum_balance = 50;
calc_credit(balance, minimum_balance, maximum_balance);
const input = require('prompt-sync')();
const nameS = input('What is your name?');
console.log(`Hey there ${nameS}`);
