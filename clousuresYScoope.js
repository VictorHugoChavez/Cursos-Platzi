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




¿La herramienta de Google Chrome que nos permite hacer debugging se llama?
Chrome DevTools

JavaScript solo utiliza el hoisting en declaraciones, mas no en inicializaciones
Verdadero

Analiza el siguiente código e identifica la variable declarada en el alcance de la función:

const fruits = () => { if (true) { var fruit1 = 'apple'; const fruit2 = 'banana'; let fruit3 = 'kiwi'; } }
var fruit1 = ‘apple’;

Las variables declaradas con let y const, NO se pueden volver a declarar en el mismo ámbito.
Verdadero

¿En qué momento se genera una closure?
Cuando una función accede a una variable fuera de su contexto y la recuerda.

Es el tipo de dato que se asigna por defecto al declarar una variable.
Undefined


Variables declaradas con "let" y "const" son de "block scope"
Verdadero

¿Cuál es el alcance que tiene el function scope?
Se puede acceder a una variable que se ubica dentro de una función, pero no podemos llamarla desde el ámbito global.

Término que se refiere a la accesibilidad que tiene una variable, función u objeto.
Scope



/////////////
¿Qué sucederá si ejecutamos el siguiente código? ``` nameOfDog("Elmo"); function nameOfDog(name) { console.log(name); }; ```
Se muestra en consola el siguiente mensaje: "Variable name undefined".

¿Cuál de las siguientes opciones NO se puede considerar como una variable global?
let scope = "I am global";`

¿Para qué se utiliza el modo estricto en JavaScript?
Lo aplicamos para generar variables inmutables de forma estricta.

¿Qué es Code Runner?
Es un plugin de Visual Studio Code que nos habilita el uso del scope y los closures dentro del código.


