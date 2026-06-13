/*syntax
class className {
constructor() {...}
}
*/
//You can use a class to create an object

class car {
    constructor (name, year){
        this.name = name;
        this.year = year;
    }
}

const myCar1 = new car("Ford", 2014);
const myCar2 = new car("Audi", 2019);
