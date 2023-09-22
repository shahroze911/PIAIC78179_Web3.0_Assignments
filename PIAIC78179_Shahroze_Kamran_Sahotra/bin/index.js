"use strict";
//js is single threaded, line by line compilation
// console.log("Task 1");
// setTimeout(() => {
//   console.log("Task 2");
// }, 1000);
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("Task 3");
// setTimeout(() => {
//   console.log("Task 4");
// }, 1000);
// console.log("Task 5");
//Condition based async functions
// console.log("Task A");
// setTimeout(() => {
//   console.log("Task B");
// }, 1000);
// console.log("Task C");
// setTimeout(() => {
//   console.log("Task D");
// }, 1000);
//Callbacks:pass a function within a function as a parameter...
// function task1(callBackFunc:(text:string)=>void){
//     console.log("ABC");
//     callBackFunc("Shah");
// }
//  function callback(txt:string){
//     console.log("Callback function",txt);
//  }
//  task1(callback)
//callbacks implementation
function taskA(newCallBack) {
    console.log("Task A: Go to workshop");
    setTimeout(() => {
        console.log("Task A: Car is fixed");
        newCallBack("Task A: Get your car");
    }, 2000);
}
function taskACallBack(txt) {
    console.log("Task A: Car Callback", txt);
    taskC(callCCallBack);
}
function taskC(newFunction) {
    console.log("Task C: Dress Pickup");
    setTimeout(() => {
        console.log("Task C: Dress is pressed");
        newFunction("Task C: Pickup your dress");
    }, 1000);
}
function callCCallBack(text) {
    console.log("Task C Callback", text);
    taskD(taskDCallBack);
}
function taskD(newFunction) {
    console.log("Task D: Event");
    setTimeout(() => {
        console.log("Task D: Ready for event");
        newFunction("Task D Callback: Attend Event");
    }, 1000);
}
function taskDCallBack(text) {
    console.log("Task D: Attend Event", text);
}
//Nested function, complexity increases. Callback Hell
taskA(function (txt) {
    console.log("Task A: Car Callback", txt);
    taskC(function (text) {
        console.log("Task C Callback", text);
        taskD(function (text) {
            console.log("Task D: Attend Event", text);
        });
    });
});
setTimeout(() => {
    console.log("Task B: Do Grocery");
}, 1000);
