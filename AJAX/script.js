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

//Server response
//getAllResponseHeaders function returns all the header information of a resource, like length, server type, content type, last modeified, etc.
const _xhttp =new XMLHttpRequest();
_xhttp.onload = function() {
       document.getElementById("demo2").innerHTML = this.getAllResponseHeaders();
    }

    //Send a request to the server
    _xhttp.open("GET", "ajax_info.txt");
    _xhttp.send();

//getResponseHeader..returns a specific header information from a server
const __xhttp =new XMLHttpRequest();
 __xhttp.onload = function() {
       document.getElementById("demo3").innerHTML = this.getResponseHeader("Last-Modified");
    }

    //Send a request to the server
    __xhttp.open("GET", "ajax_info.txt");
    __xhttp.send();
