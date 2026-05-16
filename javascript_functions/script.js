 //function syntax
        /*
        function functionName(parameter1, argument2) {
            //function Body
        }
       */
       //Function invocation-- a function can be invoked or called mors than once....when you access the function without (), it returns the function itself
       function sayHello() {
        return "Hello World!"
       }
       let greetings = sayHello();

       document.getElementById("demo").innerHTML = greetings;

       //function parameters
       function multiply(a, b) {
        return a * b;
       }
       let result1 = multiply(2, 3);
       let result2 = multiply(98, 74);

       document.getElementById("demo1").innerHTML = "first answer: " + result1 + "<br>" + "second answer: " + result2;

       function sayHi(fName, sName ="Milner") {//Function parameters
        //In this case the sName has a default parameter value predefined. In the case that the argument is not defined in the function invocation, the default parameter is used.
        return `Hi ${fName} ${sName}`;
       }

       let greeting = sayHi("James", "Matthews");//Function Arguments

       document.getElementById("demo2").innerHTML = greeting;

       //Function return..a function stops executing once it reaches a return statement
       //if a function does not return a value, storing in a variable will give undefined 
       function division(a, b) {
        return "Invalid";
        //This line will never run, exits after the first return statement
        //return a / b;
       }

       let divResult = division(1000, 4);
       document.getElementById("demo3").innerHTML = divResult;

       //function arguments--this are the real values passed to and received by the function
       function findMax() {
        let max = -Infinity;

        for (let i = 0; i < arguments.length; i++){
            if (arguments[i] > max) {
                max = arguments[i];
            }
        }
        return max;
       }

       let maxNumber = findMax(4, 5, 6);
       document.getElementById("demo4").innerHTML = maxNumber;

       //Function Expressions---thus is basically a functionstored in a variable
       //standard function
       function getAge(YOB) {
        return 2026 - YOB;
       }
       /*
       //Function expression--They can not be called before being declared , this is a special trait by a functional declaration
       let getAge = function (YOB) {
        return 2026 - YOB;
       }
        */
       //Arrow functions

       const addition = (a, b) => a + b;

       let addResult = addition (4, 6);
       document.getElementById("demo5").innerHTML = addResult;

       const greetMe = () => "Jambo Kenya";

       let $greetings = greetMe();
       document.getElementById("demo6").innerHTML = $greetings;

       let square = x => x**2;

       let squareResult = square(5);
        document.getElementById("demo7").innerHTML = squareResult;