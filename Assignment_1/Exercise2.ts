//Question 38
function describe_city(name:string,coutry:string=`Pakistan`){
    console.log(`${name} is in ${coutry}`);
}

describe_city(`Lahore`);
describe_city(`Karachi`);
describe_city(`London`,`UK`);

//Question 39
function city_country(name:string,coutry:string){
    console.log(`"${name} , ${coutry}"`);
}

city_country(`Lahore`,`Pakistan`);
city_country(`Karachi`,`Pakistan`);
city_country(`London`,`UK`);

//Question 40
function make_album(artistName:string,albumTitle:string,tracks?:number){
let s:object;
if(tracks==undefined){
    tracks=0;
}
s={
    ArtistName:artistName,
    AlbumTitle:albumTitle,
    No_of_Tracks:tracks
    
};
return s;
}

var a=make_album(`Atif Aslam`,`Coke Studio`);
var b=make_album(`Sonu Nigam`,`Tamasha`,5);
var c=make_album(`NFAK`,`Afreen`);
console.log(a);
console.log(b);
console.log(c);
console.log("\n************************************************************************\n");

//Question 41
function magician(names:string[]){
    console.log(names);
    return names
}
function show_magician(names:string[]){
    for(let n=0;n<names.length;n++){
        names[n]=`Great `+names[n];
    }
    console.log(names);
    return names;
    }

let magic:string[]=[`Akbar`,`Amar`,`Nawaz Shareef`];
let old:string[]=magician(magic);
let new_array:string[]=show_magician(magic);






