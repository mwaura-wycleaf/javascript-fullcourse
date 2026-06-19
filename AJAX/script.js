 //The XMLHttpRequest object...used to exchange data with a server behind the scenes
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
}

//AJAX uses a combination of browser built in XMLHttpRequest object(to request data from a web server)
//The XMLHttpRequest Object
//onreadystatechange property...defines a callback function to be executed when the readystate changes
function $loadDoc() {
    const $xhttp = new XMLHttpRequest();
    $xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("demo1").innerHTML = this.responseText;
        }
    }

    //Send a request to the server
    $xhttp.open("GET", "ajax_info.txt");
    $xhttp.send();
}