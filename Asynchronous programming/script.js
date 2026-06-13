//Asynchronous flow allows certain operations to run in the background and let their results be displayed when they are ready

function myDisplayer(some) {
    document.querySelector("#demo").innerHTML += some + " "
}

myDisplayer("A");

setTimeout(function() {
    myDisplayer("B")
}, 2000);

myDisplayer("C");
