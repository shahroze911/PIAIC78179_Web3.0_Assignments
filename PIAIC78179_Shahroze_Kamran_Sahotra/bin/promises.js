"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//inversion of control
function taskA() {
    console.log("Task A: Go to workshop");
    let result = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task A: Car is fixed");
            resolve("Task A: Get your car");
        }, 2000);
    });
    return result;
}
function pickDress() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Your Dress is ready");
            resolve("Task B: Pick Dress");
        });
    });
    return promise;
}
let aResponse = taskA();
//then shows resolve's value, catch shows reject's value
aResponse.then((text) => {
    console.log("Car Response", text);
    return pickDress();
}).then((text) => {
    console.log("Laundary response", text);
}).catch((error) => {
    console.log("Error", error);
});
function anyFunction(num) {
    console.log("Function");
    let promise = new Promise((resolve, reject) => {
        if (num > 3) {
            resolve("Done");
        }
        else {
            reject("Failed");
        }
    });
    return promise;
}
let a = anyFunction(2);
a.then(() => {
    console.log(a);
}).catch(() => {
    console.log(a);
});
