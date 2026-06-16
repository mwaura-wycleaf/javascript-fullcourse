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
