   //indexOf and lastIndexOf
        let text = "Please sit down";
        let index = text.indexOf("sit");    
        let _index = text.lastIndexOf("sit");    
        document.getElementById("demo").innerHTML = index;
        document.getElementById("demo1").innerHTML = _index;

        //Search() method
        let $index = text.search("down");
        document.getElementById("demo2").innerHTML = $index;

        //includes()...returns true or false
        let __index = text.includes("sit");
        let __$index = text.includes("Sit");
        document.getElementById("demo3").innerHTML = __index;
        document.getElementById("demo4").innerHTML = __$index;
       
         //The startswith and endsWith methods works the same as includes..they return true or false only that you can specify a starting position
        
