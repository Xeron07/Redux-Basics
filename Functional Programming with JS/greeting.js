/**
 * In js function are first class citizen
 * If a function takes function as an argument or 
 * return a function as argument 
 * then it is an higher order function
 */


/**
 * calling and passing function as an argument
 */

function sayHello(){
 return "Hello, Good Morning";
}

//this is a higher order function
function greet(fn){
 console.log(fn());
}

//Passing sayHello as an argument
//only passing it's ref
greet(sayHello);


/**
 * returning a function 
 * this is a higher order function
 */
function sayHelloAgain(){
    return function(){
        return "hello, Good Morning";
    };
   }

   let fn = sayHelloAgain();

   let messasge = fn();

//=============================================//


let input = "  Javascript  ";

//Non Functional syntex
let output= "<div>"+input+"</div>";

//Functional syntex
const trim = str=>str.trim();
const wrapInDiv=str=>`<div>${trim}</div>`;
const toLowerCase=str=>str.toLowerCase();

//This is an example of Function Composition
const result=wrapInDiv(toLowerCase(trim(input)));

//==================Composing && Piping=================//
//in lodash.js
