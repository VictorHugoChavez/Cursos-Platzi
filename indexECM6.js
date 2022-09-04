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








  
