//Reference errors...occurs when you try to access a variable before declaration

let x = 5;

try {
    x = y + 1;
}catch (err) {
    let text = err.name + "<br>" + err.message;
    document.querySelector("#demo").innerHTML = text;
}