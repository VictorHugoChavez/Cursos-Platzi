function suma(numero1, numero2) {
    return numero1 + numero2
}

function calcular(numero1, numero2, callback) {
    return callback(numero1, numero2);
};

console.log(calcular(2, 2, suma));


setTimeout(function() {
    console.log("Hola Javascript")
}, 10000)

function gretting(name) {
    console.log(`Hola ${name}`);
}
setTimeout(gretting, 2000, 'Victor')