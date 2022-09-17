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
        setTimeout(() => resolve("A"), 2000);
    });
};
const promise2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("B"), 1000);
    });
};

promise1().then((result) => {
    console.log(result);
    promise2().then((result) => console.log(result));
});