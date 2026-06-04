//mouse events
const box = document.getElementById("box");

//mouseover
box.addEventListener("mouseover", function() {
    box.innerHTML = "Mouse is over me";
});

//mouseout
box.addEventListener("mouseout", function() {
    box.innerHTML = "Mouse is out";
});

//keyboard events
//event.key
k.addEventListener("keydown", function (event) {
    document.getElementById("demo").innerHTML = "You pressed:" + event.key;
});

//event.code
k2.addEventListener("keydown", function (event) {
console.log(event.code)
});

//Load events

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("demo1").innerHTML = "HTML is loaded!"
})

