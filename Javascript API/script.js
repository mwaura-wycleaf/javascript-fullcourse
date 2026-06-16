let file = 'rete.txt'

fetch(file)
.then(x => x.text())
.then(y => document.getElementById("demo").innerHTML = y);