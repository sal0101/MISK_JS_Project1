data = (require('./data'));

data = JSON.parse(data);

let logData = function() {
for(let i =0; i< data.people.length;++i)console.log(data.people[i]);
}

let logNames = function() {
for(let i =0; i< data.people.length;++i)console.log(data.people[i].name);
}

let logNameEyes = function() {
for(let i =0; i< data.people.length;++i){

console.log(data.people[i].name);
console.log(data.people[i].eye_color);
}

}

let logByMass = function() {
for(let i =0; i< data.people.length;++i)if(data.people[i].mass > 75)console.log(data.people[i].name);}


// Show the data

logData();
console.log("******");
logNames();
console.log("******");
logNameEyes();
console.log("******");
logByMass();