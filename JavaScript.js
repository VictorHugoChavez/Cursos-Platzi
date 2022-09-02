// Javascript es un lenguaje interpredado, orientado a objetos, debilmente tipado y dinamico

//Debilmente Tipado

4+"7";  // 47
4*"7";   //28
2+true; //3
false-3; //-3

//Dinamico lenguajes donde corre en RunTime 
//Motor Javascript V8

//Backwars
//La compatibilidd con versiones anteriores significa cuando se acepta como JS valido, no habra un cambio de futuro que haga que el codigo deje de funcionar
// Forwards Ser compatible con versiones futuras significa que incluir una adicion al lenguaje en un programa no causaria que se rompa si se ejecuta en un motor JS anterior

//BABEL

//Copiladores de JS, donde utiliza versiones nuevas y utiliza nuevas

//HTML, CSS, JS
// WA ya no requiere tanto productos web
//Backend- FrontEnd
//number
//String
//Boolean
//null
//undefiend
//[Array]
//{Objeto
//typeof me muestra el tipo de valor dentro de Javascript
//typeof null     ------ object
//typeof undefiend   ------ undefiend
// typeof []  -------------- object

var nombre="Osacar";  // ------>Reseva en memoria
var edad; // Declaracion de una variables
edad=30; // inicializar

var elementos=[ "Computadora", "Celular"];
var persona={
nombre:"Diego",
edad:30
}
//Funciones
//Declarativas
function miFunction(){
  return 3;
}


//Expresion
miFunction();
var miFunction=function(a,b){
  return a+b;
}

miFunction();

//Scope
//Variables Locales y globales
//Hosting
//Cuando las variables y funciones se declaran antes del codigo

//*  *//
