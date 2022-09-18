import fetch from "node-fetch";

const API = "https://api-escuelajs.co/api/v1";

function fecthData(urlApi) {
    return fetch(urlApi);
}

fecthData(`${API}/products`)
    .then((response) => response.json())
    .then((products) => {
        console.log(products);
    })
    .then(() => {
        console.log("Hola");
    })
    .catch((error) => console.log(error));

const promise1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("promise1"), 10000);
    });
};
const promise2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("promise2"), 1000);
    });
};

promise2().then((result) => {
    console.log(result);
    promise1().then((result) => console.log(result));
});


const employe = {
        firstName: 'Pedro',
        age: 30,
        phone: 55516453,
    }
    //const street = employe ? .street;

console.log(street);

const array = [21, 13, 34, 26, 2, 20];
const foundNumber = array.find(number => number > 20);
console.log(foundNumber);

let transportes = ['avion', 'coche', 'metro', 'microbus']
console.log(transportes.shift(5));

let a = 10
if (a == "10") {
    console.log("Valor1");
} else {
    console.log("Valor2")
}
let nombre = 'Victor/Ernesto/Carlos/Maria/Viri'
let aNombre = nombre.split('');
console.log(aNombre.length);


function f(x, y = 2, z = 7) {
    return x + y + z;
}
console.log(f(1) === 10)

let objeto1 = {
    name: 'Carlos',
    lastname: 'Alberto',
    age: 25,
}
var json = JSON.stringify(objeto1);
console.log(json);

console.log('°-°'.padEnd(13, '-').padStart(10, '-'))


(function f(f) {
    return typeof f()
})
(function() { return 1; })

console.log(f())

var jsonTexto = '{"color":"blanco","km":10000,"rueda":{"marca":"desconocida","estado":"malo"}}';
var coche = JSON.parse(jsonTexto);
console.log(coche)


const director = {
    name: 'Gabriel Sosa',
    compania: 'Accenture',
    age: 32,
    phonenumber: 6543213215
}

const nuevoDirector = {...director };
director.name = 'Antonio Jaimes'
console.log(nuevoDirector)


const arreglo = [1, 2, 3, 4];
const arreglo2 = [10, 16, 20, 21];

let valor = [...arreglo, arreglo2]
console.log(valor)

[1, 2, 3, 4, 10, 12, 16, 19, 20, 21, 22, 100]
[
    [1, 2, 3, 4],
    [10, 16, 20, 21],
    [100, 12, 19, 22]
]
[
    [1, 2, 3, 4],
    [10, 16, 20, 21]
]

class ope {
    static ave(arre) {
        let res = 0;
        for (let valor of arre) {
            res += valor;
        }
        return res / arre.length;
    }
}
let suma = ope.ave([5, 10, 15])
console.log(suma)

var a;
var b = a == null;

console.log(b)

const event = new CustomEvent('my-event', { detail: { message: "Something happend" } });
this.dispatchEvent(event);



var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "promise1");
});
var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "promise2");
});
var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 9000, "promise3");
});
var p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "promise4");
});


Promise.all([p2, p1, p4, p3]).then(values => { console.log(values); });


promise2
promise1
promise4
promise3