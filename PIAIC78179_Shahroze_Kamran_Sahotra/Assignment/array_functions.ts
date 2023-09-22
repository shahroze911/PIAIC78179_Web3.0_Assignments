console.log("Arrays Functions");
console.log("1. push()");
var students: (string | number | boolean)[] = [];
console.log("Array before push()=>", students);
students.push("Shahroze");
students.push(25);
students.push("Kamran");
students.push(22);
students.push("Sahotra");
students.push(30);
// for(var index in students){
//     console.log(students[index])
// }
//console.log("Array after push()=>",students)
// ***************************************************************************
console.log("2. pop()");
var fruits: Array<string | number | boolean> = [];
fruits.push("Apple");
fruits.push(true);
fruits.push("Mango");
fruits.push("Banana");
fruits.push(30);
//console.log("Array before pop()=>",fruits)
let a = fruits.pop();
// for (var i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }
// console.log("Array after pop()=>",fruits)
// console.log("Popped Element=>",a)
// ***************************************************************************
console.log("3. concat()");
console.log("Fruit array concating with Students Array");
var newArray = fruits.concat(students);
console.log(newArray);
console.log("Students Array concating with Fruits Array");
var newArray2 = students.concat(fruits);
console.log(newArray2);
// ***************************************************************************
console.log("4. shift()");
let getElement = students.shift();
console.log("Shifted Element=>", getElement);
console.log("Array after Shifting=>", students);
// ***************************************************************************
console.log("5. unshift()");
console.log("Array before Unshifting=>", fruits);
let getLength = fruits.unshift("Pineapple");
console.log("New Length=>", getLength);
console.log("Array after Unshifting=>", fruits);
// ***************************************************************************
console.log("6. join()");
console.log(students);
var str = students.join();
console.log(str);
str = students.join(" ");
console.log(str);
var str = students.join("*");
console.log("Student array converted into string and seaprated by * => " + str);
// ***************************************************************************
console.log("7. slice()");
console.log(fruits);
//it will start from index 1 and get 3-1=2 index's element
console.log("Sliced Array => " + fruits.slice(1, 3));
// ***************************************************************************
console.log("8. Indexof()");
console.log(students);
console.log(fruits);
console.log("Students Array Index => ", students.indexOf(30));
console.log("Fruits Array Index => ", fruits.indexOf(true));
//if not found returns -1
console.log("Fruits Array Index => ", fruits.indexOf(364));
// ***************************************************************************
console.log("9. includes()");
console.log(students);
var search = "Sahotra";
//returns true if found else false
if (students.includes(search)) {
  console.log(`Found ${search} on index ${students.indexOf(search)}`);
} else {
  console.log("Not found");
}
// ***************************************************************************
console.log("10. find()");
var state_details = [
  { Name: "Georgia", Capital: "Sacramento" },
  { Name: "Texas", Capital: "Austin" },
  { Name: "Alaska", Capital: "Juneau" },
  { Name: "Alaska", Capital: "Zabardast" },
  { Name: "Georgia", Capital: "Atlanta" },
];

var findState = state_details.find(function (item) {
  return item.Name == "Georgia";
});
console.log(findState);
// ***************************************************************************
console.log("11. findIndex()")
console.log(state_details.findIndex(e=>e.Name==="Texas"));
// ***************************************************************************
console.log("12. map()")
var new_array1=[1,3,5,9,4,6];
var val=new_array1.map(Math.sqrt);
console.log("Square root of each value in array => ",val);
val=new_array1.map((num=>{
  return num*2;
}))
console.log("Double of each value in array => ",val);
console.log("Advanced use of map()")
type User = {
  id: number;
  name: string;
};
const names = ['Aaron', 'Brian', 'Carl', 'Ruby', 'Omari', 'Brian', 'Aaron'];
function generate_user(name:string[]):User[]{

  return name.map((name,i,array)=>({
    name,id:array.indexOf(name)
  }));
}
var c=generate_user(names);
console.log(c);
// ***************************************************************************
console.log("13. filter()")
var s:any=state_details.filter(function (item){
  return item.Name==="Georgia"
});
console.log("Filter => ",s);
// ***************************************************************************
console.log("14. reduce()")
s=new_array1.reduce(function (a,b){
  return a+b;
})
console.log("Sum of all values of array into single value using reduce function() => ",s);
// ***************************************************************************
console.log("15. every()")
console.log(new_array1)
new_array1=new_array1.map((num)=>{
  return num*2;
})
console.log(new_array1)
s=new_array1.every(function (item){
  return item%2==0;
})
console.log(s);
// ***************************************************************************
console.log("16. some()")
s=new_array1.some(function(item){
  return item>5 && item%2==0;
});
console.log(s)
// ***************************************************************************
console.log("17. reverse()")
console.log(new_array1.reverse())

