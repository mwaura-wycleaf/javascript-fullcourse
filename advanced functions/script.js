//function declaration

function myFunction (x, y) {
    return x * y;
}

//function expression (Named)
const myFunction = function name(x, y) {
    return x * y;
}

//function expression (Anonymous)
const myFunction =  function (x, y) {
    return x * y;
}

//Arrow function 
const myFunction = (x, y) => x * y;

//function constructor
const myFunction = new Function ("X", "Y", "return x * y");

//object method
const obj = {
    myFunction(x, y) {
        return x * y;
    }
}

//Function callbacks
 //event handling
 function displayDate() {
    document.getElementById("demo").innerHTML = new Date();
 }

 document.getElementById("myButton").addEventListener("click", displayDate);
 console.log(new Date())