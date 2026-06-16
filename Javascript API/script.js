let file = 'rete.txt'

fetch(file)
.then(x => x.text())
.then(y => document.getElementById("demo").innerHTML = y);

//using async
async function getText(file) {
    let myObject = await fetch(file);
    let myText= await myObject.text();
    console.log(myText)
}

getText("rete.txt")

//Web Geolocation API...gets the users current location
let x = document.getElementById("demo-1")
function getLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else {
        x.innerHTML = "Geolocation is not supported by this browser"
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude:" + position.coords.latitude + "<br>longitude:" + position.coords.longitude;
}
console.log(navigator.geolocation)

//Web API storage
localStorage.setItem("name", "Lexi Missy")
document.getElementById("demo-2").innerHTML = localStorage.getItem("name")

//Session storage...it differs with localStorage in that it stores data for only one session
sessionStorage.setItem("_name", "Isaac Axel");
document.getElementById("demo-3").innerHTML = sessionStorage.getItem("_name")