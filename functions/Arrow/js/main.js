
 let People = function(person, age) { 
        this.person = person; 
        this.age = age; 
        this.info = function() { 
  
            // logs People 
            document.write(this);  
  
           setTimeout(() => {  
            // arrow function to make lexical "this" binding 
            // here this=People."this" has been inherited 
            document.write(this.person + " is " + this.age  
                                           + " years old"); 
           }, 3000); 
        } 
    }  
let person1 = new People('John', 21); 
  
// logs : John is 21 years old after 3 seconds 
person1.info();  
/*let People = function(person, age) { 
        this.person = person; 
        this.age = age; 
        this.info = function() { 
  
         // logs People 
         document.write(this); 
  
         setTimeout(function() { 
            // here this!=People 
           document.write(this.person + " is " + this.age +  " years old");
       }, 3000); 
        } 
    }  
   let person1 = new People('John', 21); 
  
// logs : undefined is undefined years old after 3 seconds 
person1.info(); */