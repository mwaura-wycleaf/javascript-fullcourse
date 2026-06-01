//Reference errors...occurs when you try to access a variable before declaration

let x = 5;

try {
    x = y + 1;
}catch (err) {
    let text = err.name + "<br>" + err.message;
    document.querySelector("#demo").innerHTML = text;
}

//type error

try {
    x(5)
}catch (error) {
    let _text = error.name;
    document.querySelector("#demo1").innerHTML = _text;
}

//range error

try {
    new Array(-1)
}catch (err) {
    let text1 = err.name + "<br>" + err. message;
    document.querySelector("#demo2").innerHTML = text1;
}

//syntax errors
try {
    //let $x = Math.floor(4.6;)
} catch (err) {
    let theError = err.name + "<br>" + err.message;
    document.querySelector("#demo3").innerHTML = theError;
}