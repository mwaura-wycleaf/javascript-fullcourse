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

//settime out
const btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    setTimeout(showMsg, 2000)
});

function showMsg() {
document.getElementById("demo2").innerHTML ="Greetings after 2 seconds"
}

//set interval and clear interval
let count = 0;
let myInterval;

const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");

btnStart.addEventListener("click", function() {
    myInterval = setInterval(counter, 1000)
});

btnStop.addEventListener("click", function(){
    clearInterval(myInterval);
})

function counter() {
    count++;
    document.getElementById("counter").innerHTML = count;
}
