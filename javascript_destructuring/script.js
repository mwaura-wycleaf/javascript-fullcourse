  //object destructuring

let person = {
    firstName:"Ann",
    secondName:"Dunham",
    age:50,
}

let {firstName, secondName} = person;

document.querySelector("#demo").innerHTML = firstName + " " + secondName;

let {secondName: name} = person;

document.querySelector("#demo1").innerHTML = name;

//string destructuring
  
let myName = "Wycliff";

let [a1, a2, a3] = myName;

console.log(a2);

//Array destructuring

let fruits = ["Banana", "Apple", "Orange"];

let [fruit1, fruit2] = fruits;

document.querySelector("#demo2").innerHTML = fruit1;