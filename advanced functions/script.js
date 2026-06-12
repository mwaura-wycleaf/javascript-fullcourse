// //function declaration

// function myFunction (x, y) {
//     return x * y;
// }

// //function expression (Named)
// const myFunction = function name(x, y) {
//     return x * y;
// }

// //function expression (Anonymous)
// const myFunction =  function (x, y) {
//     return x * y;
// }

// //Arrow function 
// const myFunction = (x, y) => x * y;

// //function constructor
// const myFunction = new Function ("X", "Y", "return x * y");

// //object method
// const obj = {
//     myFunction(x, y) {
//         return x * y;
//     }
// }

//Function callbacks
 //event handling
 function displayDate() {
    document.getElementById("demo").innerHTML = new Date();
 }

 document.getElementById("myButton").addEventListener("click", displayDate);
 console.log(new Date())

//Asynchronous operations...they are executed at a later time
setTimeout(myFunction, 4000)
function myFunction() {
    document.getElementById("demo1").innerHTML = "there is no much love left"
}

//Note: Array methods like map, forEach accept callback functions

//sequential operation..from the word sequence
function displayResult(theResult) {
    document.getElementById("demo2").innerHTML = theResult;
}

//function to calculate sum
function returnSum(num1, num2) {
    return num1 + num2;
}

//call the calculate sum
let result = returnSum(7, 9);

//call the displayResult function
displayResult(result)

//using a callback

function myDisplayer (numberSum) {
     document.getElementById("demo3").innerHTML = numberSum;
}

function myCalculator(number1, number2, myCallback){
let sum = number1 + number2;
myCallback(sum);
}

myCalculator(5, 5, myDisplayer)


//The this key word
function thisFunction() {
    return this;
}

console.log(thisFunction());

let x = this;

document.getElementById("demo4").innerHTML = "This is:" + x;
console.log(x);

//Arrow functions in methods
const person = {
    firstName: "Lesley",
    secondName:"Ohara",
    sayHello: () => {
        return this.firstName;
    }
}

document.getElementById("demo5").innerHTML = person.sayHello();

//function call()

const person1 = {
    name: "Jessy"
}

const person2= {
    name: "Jeddy"
}

const person3 = {
    name: "Jenny"
}

function greet(greeting){
    return greeting + " " + this.name
}

console.log(greet.call(person2, "Hello"));

//borrowing a method from another object
const $person = {
    fullName: function () {
        return this.firstName + " " + this.secondName
    }
}

const person_1 = {
    firstName:"Eric",
    secondName:"Debank",
}

console.log($person.fullName.call(person_1))

//function apply()
//syntax....functionName.apply(this, [arg1, arg2, ....])

console.log(greet.apply(person3, ["hello"]))
console.log($person.fullName.apply(person_1))

//function bind()
//syantax...const newFunction =functionName.bind (this, arg1, arg2,...);
const greetJessy = greet.bind(person1, "Hey");

console.log(greetJessy())

let fullNames = $person.fullName.bind(person_1);
console.log(fullNames())

//when a function is used as a callback, this keyword is lost
const _person = {
    firstName:"Shumeira",
    secondName:"Mheuka",
    display: function () {
        document.querySelector("#demo6").innerHTML = this.firstName + " " + this.secondName;
    }
}
 setTimeout(_person.display, 3000)

 //Bind solves the above problem

 let display = _person.display.bind(_person);

 setTimeout(display, 3000)

//Closures...They make it posiible for a function to have "private" variables
//variables declared without var, const, let are always global

function $myFunction() {
   a = 4;
};
$myFunction();
document.querySelector("#demo7").innerHTML = a * a;
console.log(a * a);

function myCounter() {
    let counter = 0;
    return function() {
        counter++;
        return counter;
    }
}

const add = myCounter();
add();
add();
add();

console.log(add());