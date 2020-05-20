/**
 * example of lodash for composing & piping
 */

//importing package
import {compose, pipe} from 'lodash/fp'; 


let input = "  Javascript  ";

//Non Functional syntex
let output= "<div>"+input+"</div>";

//Functional syntex
const trim = str=>str.trim();
const wrapInDiv=str=>`<div>${trim}</div>`;
const toLowerCase=str=>str.toLowerCase();

//This is an example of Function Composition
//old tech
const result=wrapInDiv(toLowerCase(trim(input)));

//using compose
//in compose function order of operation
//is from right to left
//compose is a higher order function
const transform=compose(wrapInDiv,toLowerCase,trim)//only passing function as argument
transform(input);


//using pipe function
//in pipe order of operation is
//left to right
//pipe() is also a higher order function
const transformFomPipe=pipe(trim,toLowerCase,wrapInDiv);


 //using currying technique 
const wrap=type=>str=>`<${type}>${trim}</${type}>`;
const transformWithCurry=pipe(trim,toLowerCase,wrap("type"));//only passing function as argument
transformWithCurry(input);
