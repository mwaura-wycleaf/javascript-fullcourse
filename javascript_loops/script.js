//For loop
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let len = cars.length;
let text = "";

for(let i = 0; i < len; i++){
    text += cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;

//while loop
let $text = "";

let $i = 0;
while ($i < 10){
    $text += "The number is " + $i + "<br>";
    $i++;
}

document.getElementById("demo-1").innerHTML = $text;

//do...while loop
let _text = "";
let _i = 0;

do {
    _text += "<br>The number is " + _i;
    _i++;
}
while(_i <= 10);

document.getElementById("demo-2").innerHTML = _text;

//break statement
let texty = "";

for (let index = 0; index < 10; index++){
    if (index === 3){break;}
    texty += "<br>The number is " + index;
}

document.getElementById("demo-3").innerHTML = texty;

//continue statement
let _texty = "";

for (let _index = 0; _index < 10; _index++){
    if (_index === 3){continue;}
    _texty += "<br>The number is " + _index;
}

document.getElementById("demo-4").innerHTML = _texty;

//for...in-----it it mostly typicalyy used for iterating over object keys
const person = {
    firstName:"John",
    secondName:"Maina",
    age:25
}

let te$xt = "";

for (let x in person){
   te$xt += person[x] + " ";
}

console.log(te$xt)