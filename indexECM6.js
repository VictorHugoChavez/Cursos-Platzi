function newFunction(name, age, country){
  var name=name||'Oscar';
  var age=age ||32;
  var country=country||'Mx';
  console.log(name,age,country);
}
function newFunction(name='Oscar', age=32, country='MX'){
  console.log(name,age,country);
};


newFunction2();
newFunction('Ricardo','23','CO');

//tEMPLATE  ---> ``

let hello="hello";
let world="world";

let result=` ${hello} ${world}`
console.log(result);
/// Ejercicios operador de propagacion, donde muestra todos los valores como de concatenar, uniendo valores    "..."
let team1 = ['Oscar', 'Julian', 'Ricard'];
let team2=['Valeria', 'Yesica', 'Camila'];

let education =['David',...team1, ...team2];

{
  var global="Global Var";
}
{
  let globalLet="Global Var";
}

const a='b';
a='a';  /// Maracara error


let name='oscar';
let age=32;

obj={name:name, age:age};

obj2={name,age};

//Arrow functions
const names=[{name:'Oscar',age:32},{name:'Yessica',age:27}]

let listOfNames=names.map(item=>console.log(item.name));

const listOfNames3=name=>{ .......}

const squeare=num=>num*num;

///Promesas

const helloPromise=() =>{
  return new Promise((resolve,reject)=>{ if(true){
   resolve('Hey');
  }else{
    reject('Ups!!');
  }
  });
}
helloPrimise()
  .then(response=>console.log(response)).then(()=>console.log('Hola')).catch(error=>console.log(error));
  
  
  
  class calculator{
    constructor(){
      this.ValueA=0;
      this.valueB=0;
  }
  sum(ValueA,ValueB){
    this.valueA=valueA;
    this.valueB=valueB;
    return this.valueA + this.valueB;
  }
  
  const calc=new calculator();
  console.log(calc.sum(2,2));
  
  
  
  //ECM7
  
  let numbers=[1,2,3,4,5,6,7,8];
  
 if(numbers.includes(7)){
 console.log("Hola mundo")
 }else{
 console.log("No hay hola mundo");
 
 //exponencial es nesesario declarar dos veces ->    **
 
 
 //ECM8
 
.lenght

Object.values()/// trae todo en arreglos

//PadStar y Padend
const string="Hello";
console.log(string.padStart(7,'hi')); //-> agrega hasta el valor septimo concatena los valores
console.log(string.padEnd(10,'bye')); // -> agrega los valores hasta el valor indicado si se pasa no lo podra agregar

//Promsesas


//ENC9
   
   
   
   
//emc10
let array=[1,2,3,[1,2,3[1,2,3]]];
console.log(array.flat(2));
   let array2=[1,2,3,4,5];
   console.log(array.flatMap(value=>[value,value*2]));   ///---> va mapear cada uno de nuestros valores
   
   
   
let hello='         Hello world              ';
   
console.log(hello);
console.log(hello.trimStart()); // -> elimina los espacios de nuestro string al inicio
console.log(hello.trimEnd()); //->Elimina los espacios de nuestro string al final
   
   ////optional Catcj Binding
try{
  
}catch{
  error
}
   
let entries=[["name","oscar],["age",32]];
console.log(Object.fromEntries(entries)); // construye los valores  en clave valor con mi arreglo y con el metodo Object.fromEntries


let mySymbol=` My symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);
             
///EC11
   
//Dinamic Import
// dividir el codigo en multipartes para tarabajar en codigo separado
const button=document.getElementById("id");
   
   const abIG=857954652132136n;
   const atherBig=BigInt(8798465214362541654);

   //imprime todos numeros altos que no estan en los antiguos EMC11
   
   
   Promise.allSettled([promise,promise2,promise3]) /// va se r rechazada hasta cuenado uno sea rechazada
   
   console.log(window) ///undefiend
   console.log(globalThis) /// apoyo para ver valores
   
   
   const foo= null?? 'default string' /// operador que pregunta si hay un nulo el primero es nulo y despues arroja el mesnaje
   
   const user={}; //optionalChange significa no que rompe la aplicacion dandonos un undefiend 
   console.log(user?.profile?.email);
   
//emc12
  const string="JavaScript es maravilloso, con Javascript puedo crear el futuro de la web";
   const replaceString=string.replace("Javascript","Phython"); /// solo sustituye un valor que conincida
   console.log(replaceString);
   
   const replace2=string.replaceAll("JavaScript","Python");// sustituye valores que conscida en total
   console.log(replace2);
   /////////////////////////////////////////////////////////////////
   
   //signos privados en la clases  es con el # con Java
   
  // #show
 // get #add
   /////////////////////////////////////////////////////////////////
   
   
const promise1=new Promise((resolve,reject)=>reject("1"))
////operadores
//&&=
//||=
//??=

//trimStar 10
//optional catch Bindin try{...}catch{...}
array.includes ES7.
///¿Qué se implementó en ECMAScript 8?   ->Object Entries
NEXT-> RETORNA EL SIGUINETE VALOR
EXPORTAR MODULO -> export default functionName;
   PROMESA
   const helloPromise = () => { 
	return new Promise((resolve, reject) => { 
		if (true) { 
			resolve('Hey!'); 
		} else { 
			reject('Whooops!'); 
		} 
	}); 
};
   
   ARROE FUNCTION -> ES6
   
   NODEJS INICIALIZA PORYECTI-> NMP INIT

   
   
   
