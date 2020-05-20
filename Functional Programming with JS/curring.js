/**
 * Curring is a technique that allow
 * us to take a function of N arguments
 * and convert to a single argument function
 */


 //Example

 function add(a,b){
     return a+b;
 }

 //calling add function
 add(1,2);

 //after curring
 function addC(a){
     return fucntion(b){
         return a+b;
     }
 }

 //this curry function takes two parantesis
 // instead of 2 arguments
//calling curring function
 addC(1)(2)//replace of add(1,2)


 //By using arrow function
 const addC2=a=>b=>a+b; //(a,b)=>a+b;