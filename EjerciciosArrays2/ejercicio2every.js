let array1 = ["galletas", "huevos", "arroz", "ajos"];
let array2 = ["galletas", "huevos", "arroz", "ajos"];

let iguales = array1.length == array2.length && array1.every((comida, indice) => comida == array2[indice]);

// el === compara tambien el tipo de la variable sea el mismo 

console.log("Son iguales los dos array:", iguales);
