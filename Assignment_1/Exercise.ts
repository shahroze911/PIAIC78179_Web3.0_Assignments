console.log("************************************************************************")
//Question 2
let personName:string="Shahroze";
let message:string=`Hi, ${personName} How are you? Hope you're doing good!`;
console.log(message);
console.log("\n************************************************************************\n")
//Question 3
console.log(personName.toLowerCase())
console.log(personName.toUpperCase())
console.log("\n************************************************************************\n")
//Question 4
console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.")
console.log("\n************************************************************************\n")
//Question 5
let authorName:string="Thommas Shelby";
let qoute:string="Good taste is for people who can't afford sapphires.";
let display:string=`${authorName} once said, "${qoute}"`
console.log(display)
console.log("\n************************************************************************\n")
//Question 6
personName="\tShahroze Kamran Sahotra \t";
console.log(personName); 
console.log(personName.trim()); 
personName="\n Shahroze Kamran Sahotra \n \n";
console.log(personName); 
console.log(personName.trim()); 
console.log("\n************************************************************************\n")
//Question 7,8
console.log(5+3)
console.log(12-4)
console.log(4*2)
console.log(16/2)
console.log("\n************************************************************************\n")
//Question 9
let n:number=8;
message=" is your favourite number";
console.log(`${n} ${message}`)
console.log("\n************************************************************************\n")
//Question 11
let names:string[]=['Zeerik','Zohaib'];
names.push('Sameer');
names[3]='Hamza';
for(let data of names){
    console.log(data);
}
console.log("\n************************************************************************\n")
//Question 12
message="Hope you are doing great!"
for(let data of names){
    console.log(data+","+message);
}
console.log("\n************************************************************************\n")
//Question 13: Vehicles Example
let vehicles:string[]=["Volvo","Ford","Camry"];
let messages:string[]=[" is a wonderful car"," is one of oldest car company"," is my favourite car"];
let len=vehicles.length;
for (let n=0;n<len;n++){
    console.log(vehicles[n]+" "+messages[n]);
}
console.log("\n************************************************************************\n")
//Question 14: Guests Exercise
let guests:string[]=names;
message=" You are invited for dinner!"
for(let data of names){
    console.log(data+","+message);
}
console.log("\n************************************************************************\n")
//Question 15
console.log(guests);
let dlt=guests.splice(2,1);
//console.log(dlt);
guests.splice(2,0,"Asad");
for(let data of guests){
    console.log(data+","+message);
}
console.log("\n"+ dlt+" couldn't make to the dinner ");
console.log("\n************************************************************************\n");
//Question 16
//Added New Guest at Start
guests.unshift("Adil");
console.log(guests);
//Added new Guest at ENd
guests.push("Aoun");
console.log(guests);
//Added New Guest at middle
guests.splice(3,0,"Mehboob");
console.log(guests);

for(let data of guests){
    console.log(data+","+message);
}
console.log("\n************************************************************************\n");
//Question 17
console.log("Only two persons are invited");
len=guests.length;
console.log(len);
do{
    console.log("Sorry for the inconvenience "+guests.pop())
    len=guests.length;
    len--;    
}while(len!=1)
for(let data of guests){
    console.log(data+","+message);
}

do{
    console.log("Sorry for the inconvenience "+guests.pop())
    len=guests.length;
    len--;    
}while(len!=-1)
console.log(guests);
console.log("\n************************************************************************\n");
//Question 18
let locations:string[]=["Switzerland","Los Angeles","New York","Las Vegas","UAE"];
console.log(locations);
let updatedLocations:string[]=locations;
console.log(updatedLocations.sort());
console.log(updatedLocations.reverse());










