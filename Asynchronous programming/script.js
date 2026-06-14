//Asynchronous flow allows certain operations to run in the background and let their results be displayed when they are ready

function myDisplayer(some) {
    document.querySelector("#demo").innerHTML += some + " "
}

myDisplayer("A");

setTimeout(function() {
    myDisplayer("B")
}, 2000);

myDisplayer("C");

//Waiting for intervals
setInterval(myFunction, 1000)
function myFunction() {
    let time = new Date();
    document.getElementById("demo1").innerHTML = time.getHours() + ": " + time.getMinutes() + ": " + time.getSeconds();
}

//Javascript promises...a Promise is either fulfilled, pending or rejected
//creating a promise object
function myDisplayer1(some) {
    document.querySelector("#demo2").innerHTML += some + " "
}

let myPromise = new Promise(function(resolve, reject){
    ok = true;

    if (ok) {
        resolve("OK")
    }else {
        resolve("Error");
    }
});

//Using then to display the result
myPromise.then(
    function(value){myDisplayer1(value)},
    function(value){myDisplayer1(value)},
)

//if ok is false it will output Error

//using then() and catch method()
//then() runs whwn the promise is fulfilled
function myDisplayer2(_some) {
    document.querySelector("#demo3").innerHTML += _some + " "
}

let promise = Promise.resolve("OK");

promise
.then(
    function(value){myDisplayer2(value)}
)
.catch(
    function(value){myDisplayer2(value)}
)

//catch() runs when the promise is rejected

function myDisplayer3(_some) {
    document.querySelector("#demo4").innerHTML += _some;
}

let $promise = Promise.reject("Error");

$promise
.then(
function(value){myDisplayer3(value)}
)
.catch(
    function(value){myDisplayer3(value)}
) 


//Returning a promise
function myDisplayer4($some) {
    document.querySelector("#demo5").innerHTML += $some + " "
}
//Three functions to run in steps
function step1() {
    return Promise.resolve("A");
}
function step2(value) {
    return Promise.resolve(value + "B");
}
function step3(value) {
    return Promise.resolve(value + "C");
}

step1()
.then(function(value){
    return step2(value);
})
.then(function(value){
    return step3(value);
})
.then(function(value){
    myDisplayer4(value);
})

//async and await...they were craeted to reduce nesting and improve readability
//the async keyword before a function makes the function return a promise
async function $myFunction() {
    return "Hello";
}

//is the same as
function $myFunction() {
    return Promise.resolve("Hello");
}

function myDisplayer5($texty) {
    document.getElementById("demo6").innerHTML = $texty;
}

async function _myFunction() {
    return "Hello";
}

_myFunction().then(
    function(value){myDisplayer5(value)}
)

//the await keyword...makes a function pause execution and wait for a resolved promise before it continues
function myDisplayer6($texty) {
    document.getElementById("demo7").innerHTML = $texty;
}

function $step1(){
    return Promise.resolve("A")
}

async function run() {
    let value = await $step1();
    myDisplayer6(value)
}

run();

//fetch API...fetch returns a promise
//Getting json data
fetch("data.json")
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
})