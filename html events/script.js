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