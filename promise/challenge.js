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
        setTimeout(() => resolve("promise1"), 10000);
    });
};
const promise2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("promise2"), 1000);
    });
};

promise1().then((result) => console.log(result));
promise2().then((result) => console.log(result));


const employe = {
    firstName: "Pedro",
    age: 30,
    phone: 55516453,
};
//const street = employe ? .street;

console.log(street);

const array = [21, 13, 34, 26, 2, 20];
const foundNumber = array.find((number) => number > 20);
console.log(foundNumber);

let transportes = ["avion", "coche", "metro", "microbus"];
console.log(transportes.shift(5));

let a = 10;
if (a == "10") {
    console.log("Valor1");
} else {
    console.log("Valor2");
}
let nombre = "Victor/Ernesto/Carlos/Maria/Viri";
let aNombre = nombre.split("");
console.log(aNombre.length);

function f(x, y = 2, z = 7) {
    return x + y + z;
}
console.log(f(1) === 10);

let objeto1 = {
    name: "Carlos",
    lastname: "Alberto",
    age: 25,
};
var json = JSON.stringify(objeto1);
console.log(json);

console.log("°__°".padEnd(10, "-").padStart(13, "-"))
console.log("°__°".padStart(10, "-").padEnd(13, "-"))
    (function f(f) {
        return typeof f();
    })(function() {
        return 1;
    });

console.log(f());

var jsonTexto =
    '{"color":"blanco","km":10000,"rueda":{"marca":"desconocida","estado":"malo"}}';
var coche = JSON.parse(jsonTexto);
console.log(coche);

const director = {
    name: "Gabriel Sosa",
    compania: "Accenture",
    age: 32,
    phonenumber: 6543213215,
};
const alumno = {
    name: 'Ernesto',
    lastname: 'Antonio',
    age: 29
}
const nuevoDirector = {...director, ...alumno }
console.log(nuevoDirector);
const nuevoDirector = {...director };
director.name = "Antonio Jaimes";
console.log(nuevoDirector);

const writeer = {
    name: 'Juan Rulfo',
    country: 'Mexico'
}
const anothe = {...writeer };
writeer.name = "Mariano Azuela"
console.log(anothe);

const arreglo = [1, 2, 3, 4];
const arreglo2 = [10, 16, 20, 21];

let valor = [...arreglo, arreglo2];
console.log(valor)[(1, 2, 3, 4, 10, 12, 16, 19, 20, 21, 22, 100)][
    ([1, 2, 3, 4], [10, 16, 20, 21], [100, 12, 19, 22])
][([1, 2, 3, 4], [10, 16, 20, 21])];

class ope {
    static ave(arre) {
        let res = 0;
        for (let valor of arre) {
            res += valor;
        }
        return res / arre.length;
    }
}
let suma = ope.ave([5, 10, 15]);
console.log(suma);

var a;
var b = a == null;

console.log(b);

const event = new CustomEvent("my-event", {
    detail: { message: "Something happend" },
});
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

Promise.all([p2, p1, p4, p3]).then((values) => {
    console.log(values);
});

promise2;
promise1;
promise4;
promise3;

import { LitElement, html } from "lit";
export class MyElement extends LitElement {
    static get properties() {
        return {
            state: { type: Object },
        };
    }
    constructor() {
        super();
        this.state = { seconds: 0 };

        this.interval = setInterval(
            () =>
            (this.state = {
                seconds: this.state.seconds + 1,
            }),
            1000
        );
    }

    render() {
        return html ` <div>Count: ${this.state.seconds}</div> `;
    }
}
customElements.define("my-element", MyElement);


import { html, LitElement } from 'lit';
export class BBComponent extends LitElement {
    static get properties() {
        return { object: { type: Object } }
    }
    constructor() {
        super();
        this.object = { myProp: 'Initial Value' };
    }
    handleClick() {
        this.object.myProp = 'Current value';
    }
    render() {
        return html `
        <h2>${this.object.myProp}</h2>
        <button @click=${this.handleClick}>Click me!</button>
        `;
    }
}

function f(x, y = 2, z = 3) {
    return x + y + z;
}
comsole.log(f(1, 3, 6) === 10)

var a = [1, 2, 3];
a[10] = 10;
console.log(a.length);


let mascotas = ["perro", "gato", "pez", "canario"];
mascotas.filter(mascota => mascota.length >= 1);
console.log(mascotas);

let condicion1, resultado, condicion2;
condicion1 = 2 > 8;
condicion2 = 8 > 2;

resultado = !condicion1 || !condicion2;
console.log(resultado)

const array = [21, 13, 34, 26, 3, 5];
const foundNumber = array.map(number => number > 20);
console.log(foundNumber)

let arr = [0, 1, 2, 3, 4, 5]
console.log(arr.at(-1));

const employee = {
    name: 'john',
    age: 30,
}
const street = employee.address.street;
console.log(street)

let arr = [isNaN(20), isNaN('20'), isNaN(undefined), isNaN(null), isNaN('5e-3'), isNaN('hola')]
console.log(arr);


bdsnfbdf


jfhdjfshkjfds
fkajfdklfd
dasewr

fhgdfgskjfd
assmbdfnfbdmnfb