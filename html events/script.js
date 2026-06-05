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
//Apart from DOMContentLoaded there is also load which works almost the same way

//Timing events
setInterval(showTime, 1000);

function showTime() {
    const time = new Date();
    document.getElementById("clock").innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
}
