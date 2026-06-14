//json syntax...it is almost identical to javaScript objects
//{"name":"Wycliff"}...JSON
{name: "Wycliff"}//object.

//JSON data types
//String
//{"name":"Wycliff"}

//Numbers
//{"age": 30};

//Objects
/*
{
    "employee":{"name": 'John', "age":30}
}
*/

//Arrays
/*{
    "employee":["John", "Anna", "Klaus"];
}
*/

//Boolen
/*{
    "sale":true;
}*/

//Null
/*{
    "middleName":null
}*/

//JSON.parse...converts JSON to object or value
const text = '{"name": "John", "age":30}';

const myObj = JSON.parse(text);

document.getElementById("demo").innerHTML = myObj.name + "," + myObj.age;

const $text = '["Ford", "BMW", "Audi", "Fiat"]';
console.log(JSON.parse($text)[0])

//Note: functions and dates are not allowed in JSON, you write then as strings and convert them later

//JSON.stringify...it does the exact opposite of JSON.parse
const obj = {
    name: "Ahmed",
    religion:"Islam",
    city: "Abu Dhabi"
}

const myJson = JSON.stringify(obj);
console.log(myJson);

const friends = ["Jamal", "Bakari", "kenya"];

const myJsonFriends = JSON.stringify(friends);
console.log(myJsonFriends)