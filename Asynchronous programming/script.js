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

//Javascript promises...a promise is either fulfilled, pending or rejected
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

