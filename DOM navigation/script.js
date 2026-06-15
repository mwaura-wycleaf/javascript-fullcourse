// document.getElementById("id02").innerHTML = document.getElementById("id01").innerHTML;
// //or
//  document.getElementById("id02").innerHTML = document.getElementById("id01").firstChild.nodeValue;
// //or
// document.getElementById("id02").innerHTML = document.getElementById("id01").childNodes[0].nodeValue;

//creating new html Elements

const para = document.createElement("p");
const node = document.createTextNode("This is new")
para.appendChild(node);

const element = document.getElementById("id03")
const child = document.getElementById("id01")
element.appendChild(para)

//Remove element
child.remove();

//Remove child element
const parent = document.getElementById("div-1")
parent.removeChild(element);

//Replacing child
const demo = document.getElementById("demo")
parent.replaceChild(para, demo)

//HTML DOM collection
let myCollection = document.getElementsByTagName("p");
console.log(myCollection.length)
