const lista = [1, 2, 3, 4];

let encontrado = lista.find(e => e > 2);
let encontradoIndice = lista.findIndex(e => e > 2);
console.log(encontrado);
console.log(encontradoIndice); // muestra el indice
console.log("el tipo del elemento es", typeof encontrado);

let encontrado2 = lista.indexOf(100);
console.log("encotrado2", encontrado2); // -1 porque no esta
