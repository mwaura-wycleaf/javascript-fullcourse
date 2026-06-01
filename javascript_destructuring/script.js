  //object destructuring

        let person = {
            firstName:"Ann",
            secondName:"Dunham",
            age:50,
        }

        let {firstName, secondName} = person;

        document.querySelector("#demo").innerHTML = firstName + " " + secondName;

        let {secondName: name} = person;

        document.querySelector("#demo1").innerHTML = name;