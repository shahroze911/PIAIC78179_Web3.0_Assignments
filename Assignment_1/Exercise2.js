//Question 38
function describe_city(name, coutry) {
    if (coutry === void 0) { coutry = "Pakistan"; }
    console.log("".concat(name, " is in ").concat(coutry));
}
describe_city("Lahore");
describe_city("Karachi");
describe_city("London", "UK");
//Question 39
function city_country(name, coutry) {
    console.log("\"".concat(name, " , ").concat(coutry, "\""));
}
city_country("Lahore", "Pakistan");
city_country("Karachi", "Pakistan");
city_country("London", "UK");
//Question 40
function make_album(artistName, albumTitle, tracks) {
    var s;
    if (tracks == undefined) {
        tracks = 0;
    }
    s = {
        ArtistName: artistName,
        AlbumTitle: albumTitle,
        No_of_Tracks: tracks
    };
    return s;
}
var a = make_album("Atif Aslam", "Coke Studio");
var b = make_album("Sonu Nigam", "Tamasha", 5);
var c = make_album("NFAK", "Afreen");
console.log(a);
console.log(b);
console.log(c);
console.log("\n************************************************************************\n");
//Question 41
function magician(names) {
    console.log(names);
}
function show_magician(names) {
    for (var n = 0; n < names.length; n++) {
        names[n] = "Great " + names[n];
    }
    console.log(names);
}
var magic = ["Akbar", "Amar", "Nawaz Shareef"];
magician(magic);
show_magician(magic);
