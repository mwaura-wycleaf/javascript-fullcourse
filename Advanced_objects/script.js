//this in javascript
const person = {
    firstName: "John",
    secondName: "Doe",
    id:6376,
    fullName: function() {
        return this.firstName + " " + this.secondName;//In this case it refers to the object
    }
}

document.getElementById("demo").innerHTML = person.fullName();

//object iterations

//Object.assign...copies properties from one or more source objects to a target object

const person1 = {
    firstName: "Jaime",
    secondName:"Laurel"
}

//Assign source to target
Object.assign(person, person1)

//returns an array of the key/value pairs in an object
document.getElementById("demo1").innerHTML = Object.entries(person);
//object.values operate the same as .entries

let text = "";

for (let [title, name] of Object.entries(person1)){
    text += title + ": " + name + "<br>"
}

document.getElementById("demo2").innerHTML = text;

//fromEntries...creates an object from a list of key pairs

const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
]
console.log(Object.fromEntries(fruits))


//get and set
//get
const person2 = {
    firstName: "Jane",
    secondName: "Doe",
    language: "en",
    get lang() {
        return this.language;
    } 
}

document.getElementById("demo3").innerHTML = person2.lang;

//set
const person3 = {
    firstName:"simon",
    language: "NO",
    set lang(value) {
        this.language = value;
    }
};

person3.lang = "en"
console.log(person3.language);

//other useful methods
//add property
Object.defineProperty(person3, "year", {value: "2008"});

console.log(person3);

//to cahnge property you can use define.property

//Listing object properties
console.log(Object.getOwnPropertyNames(person3));

//object protection
//Object.preventExtensions...prevents addition of elements to an object

Object.preventExtensions(person3);// this means you cannot add an element to the person object, it throws an error

//Object.seal...prevents addition or deletion of new properties
Object.seal(person3);//you cannot add or delete

//object.freeze...prevents modification
Object.freeze(person3);//you cannot change