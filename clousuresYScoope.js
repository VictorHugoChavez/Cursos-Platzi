//Ques es el scope?
//alcance determina la accesibildad 
//Javascript Variables y determina la accesibilidad de variables, objetos y funciones desde difereneres partes del codigo

//variables
var a; //declaramos
var b='b'; // declaramos y asignamos
b='bb'// reasignacion
var a='aa'; // redeclaracion

//global scoope--> 
var fruit ='Apple';
function bestFruit(){
  cosnole.log(fruit);
}
bestFruit();

function contries(){
 country='Colombia'; // lo va tener como caracter global hay que tener cuidado
  console.log(country);
}

countries();
console.log(country);

//function scoope-->
function greeting(){
  let userName='Ana';// es de varibles local
  console.log(userName);
  if(userName ==='Ana'){
     console.log(`Hello ${useName}! `) 
  }
}
greeting();

console.log(useName);

//block scoope-->
functions fruits (){
  if (true){
    var fruit='Apple';
    let fruit2='kiwi';//block scope
    const fruit='Banana';//block scope
    
  }
  console.log(fruit);
  console.log(fruit2);// da un error porque es block scoope
  console.log(fruit2);// da un error ya ques es block scoope
}


//REasignacion

var firstNmae; // undefiend
firstname='oscar';
console.log(firstname);

const //error
let //error
var // si nos deja modificar

///modo stricto
//emc5  ----> constrol de la variables
'use strict';
pi=3.1416;
console.log(pi);
/// tambien puede ser el modo estricto dentro delas funcione

//CLOUSE-> es cuando una funcion accede a una variable fuera de su contexto
//lexical.js--> el ambito lexico significa el alcance de las variables dentro de nuestros codigos

//Hoisting






