"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//TASK
// First go to Car Maintenance
// While car is repairing, do some grocery
// When car is fixed, get your car and then go to laundary
// when your dress is ready , go to attend event
function carMaintenance() {
    console.log("Task A: Go to Workshop");
    let result = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task A: Car is fixed");
            resolve("Get your Car");
        }, 2000);
    });
    return result;
}
function doLaundary() {
    console.log("Task C: Go to Laundary");
    let result = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task C: Dress is ready");
            resolve("Get your Dress");
        }, 2000);
    });
    return result;
}
function attendEvent() {
    console.log("Task D: Get Ready for Event");
    let result = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task D: Ready for Event");
            resolve("Go to Event");
        }, 2000);
    });
    return result;
}
let aResponse = carMaintenance();
aResponse
    .then((message) => {
    console.log("Task A Response: ", message);
    return doLaundary();
})
    .then((message) => {
    console.log("Task C Response: ", message);
    return attendEvent();
})
    .then((message) => {
    console.log("Task D Response: ", message);
})
    .catch((Error) => {
    console.log(Error);
});
setTimeout(() => {
    console.log("Task B: Do Grocery");
}, 1000);
