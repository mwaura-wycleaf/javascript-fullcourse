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