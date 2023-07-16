let s1:string="Shah",s2="Shah";
//console.log(s1===s2.toLowerCase());

let n1:number=5,n2=3;
// console.log(n1>n2);
// console.log(n1<n2);
// console.log(n1==n2);
// console.log(n1!=n2);
// console.log(n1<=n2);
// console.log(n1>=n2);
// console.log(n1>=5 && n2>=5);
// console.log(n1>=5 || n2>=5);    

let arr:string[]=['a','b','c'];
//console.log(arr.indexOf('d')!=-1);

//Question 25
let alien_color:string=`green`;
if(alien_color== `green`){
    console.log('You just earned 5 point');
}
alien_color=`red`;
if(alien_color!=`green`){
    console.log(null);
}

//Question 26
if(alien_color==`green`){
    console.log('You just earned 5 points');
}
else{
    console.log('You just earned 10 points');
}

//Question 27

if(alien_color==`green`){
    console.log('You just earned 5 points');
}
else if(alien_color==`red`){
    console.log('You just earned 10 points');
}
else if(alien_color==`yellow`){
    console.log('You just earned 15 points');
}


//Question 28
let age:number=100;
if(age<2){
    console.log("Baby")
}
else if(age>=2 && age<4){
    console.log("Toddler")
}
else if(age>=4 && age<13){
    console.log("Kid")
}
else if(age>=13 && age<20){
    console.log("Teenager")
}
else if(age>=20 && age<65){
    console.log("Adult")
}
else if(age>=65){
    console.log("Elder")
}

//Question 30
let username:string[]=[`admin`,`shah`,`zaman`,`asad`,`rauf`];
if(username.length==0){
    console.log("We need to find some users!")
}
for(let data of username){
    if(data==`admin`){
        console.log(`Hello ${data}, would you like to see a status report?`);        
    }
    else{
        console.log(`Hello ${data}, thank you for logging in again.`);        
    }
}

username=[];
if(username.length==0){
    console.log("We need to find some users!")
}


//Question 32
let current_users:string[]=[`shah`,`zaman`,`asad`,`adil`,`khalid`];
let new_users:string[]=[`khalid`,`zaman`,`daud`,`adil`,`sameer`];
for(let n=0;n<new_users.length;n++){
    for(let s=0;s<current_users.length;s++){
        if(new_users[n].indexOf(current_users[s])!=-1){
            console.log(`${new_users[n]} Already Taken`);
        }
        
    }
    
}

//Question 33
let numbers:number[]=[1,2,3,4,5,6,7,8,9,10];
let ordinal=`st`;
for(let n=0;n<numbers.length;n++){
    if(numbers[n]%10==1){
        ordinal=`st`;
        console.log(numbers[n]+`${ordinal}`);
    }
    else if(numbers[n]%10==2){
        ordinal=`nd`;
        console.log(numbers[n]+`${ordinal}`);
    }
    else if(numbers[n]%10==3){
        ordinal=`rd`;
        console.log(numbers[n]+`${ordinal}`);
    }
    else{
        ordinal=`th`;
        console.log(numbers[n]+`${ordinal}`);
    }

}


//Question 36
function make_shirt(size:string, message:string){
    console.log(`${message} for ${size} shirt`)
}

let size:string="2XL",mes="BORN TO RULE";
make_shirt(size,mes);


//Question 37
function make_shirt1(size:string=`Large`, message:string=`I Love TypeScript`){
    if(size==`Medium`){
        message=`I Love TypeScript`
        console.log(`${message} for ${size} shirt`)
    }
    else{
        console.log(`${message} for ${size} shirt`)
    }
    
}
size="2XL",mes="BORN TO RULE";
make_shirt1(size,mes);

