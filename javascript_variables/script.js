 let x = 5;
        const y = 10;// The value of y cannot be changed because it is a constant
        let z = x + y;
        document.getElementById("demo").innerHTML = x + y;
        document.getElementById("demo-1").innerHTML = z;
         
        //Javascript variable names can only contain letters, numbers, underscores, and dollar signs. They must begin with a letter, an underscore, or a dollar sign. Variable names are case-sensitive.
        let _lastName = "Smith";
        let $lastName = "Smith";
        document.getElementById("demo-2").innerHTML = _lastName;
        document.getElementById("demo-3").innerHTML = $lastName;