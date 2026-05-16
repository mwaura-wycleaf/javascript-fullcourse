  /*Assignment operator*/
        //The = operator
        let x = 2;
        let y= 4;

        //The += operator
        let q;
        q = 4;
        q += 2; 
        document.getElementById("demo-10").innerHTML = q;

        //The -= operator
        q = 5;
        q -= 3;
        document.getElementById("demo-11").innerHTML = q;

        //The *= operator 
        q = 5;
        q *= 3;
        document.getElementById("demo-12").innerHTML = q;

        //The *= operator 
        q = 5;
        q **= 3;
        document.getElementById("demo-13").innerHTML = q;

        //The /= operator 
        q = 5;
        q /= 5;
        document.getElementById("demo-14").innerHTML = q;

        //The /= operator 
        q = 5;
        q %= 3;
        document.getElementById("demo-15").innerHTML = q;

        //The &&= operator..it is used between two values..if the first is true, the second value is assigned  
        q = true;
        let h = q &&= 3;
        document.getElementById("demo-16").innerHTML = h;
        
        //The ||= operator..it is used between two values..if the first is false, the second value is assigned  
        q = false;
        let n =q ||= 3;
        document.getElementById("demo-17").innerHTML = n;

        //The ??= operator(Nullish coalescing operatot)..it is used between two values..if the first is null or undefined, the second value is assigned  
        q = null;
        let o = q ??= 3;
        document.getElementById("demo-16").innerHTML = o;

       /*Arithmetic operators*/
        //Addition operator:+
        let z = x + y;
        document.getElementById("demo").innerHTML = z;

        //Multiplication operator:*
        let m = x * y;
        document.getElementById("demo-1").innerHTML = m;

        //Subtraction:-
        let s = y - x;
        document.getElementById("demo-4").innerHTML = s;

        //Division: /
        let d = y / x;
        document.getElementById("demo-5").innerHTML = d;

        //Modulus/remainder; %
        let r = y % x;
        document.getElementById("demo-6").innerHTML = r;

        //increment
        x++
        document.getElementById("demo-7").innerHTML = x;

        //decrement
        y--
        document.getElementById("demo-8").innerHTML = y;

        //Exponentiation
        let e = y**x
        document.getElementById("demo-9").innerHTML = e;
        //Concatenation

        let text1 = "What a very";
        let text2 = "nice day"
        document.getElementById("demo-2").innerHTML = text1 + " " + text2;

        //Adding Strings and numbers...type coercion
        let c = "5" + 4;
        document.getElementById("demo-3").innerHTML = c;

        /*Comparison operators-They compare two values
        == : equal to
        === : equal value and equal datatype
        != : not equal to
        !== : not equal value not equal type
        > : greater than
        < : less than
        >= : greater than or equal to
        <= : less than or equal to

        they always return a boolean value(either true or false)
        */
        console.log(2 > 4)//False