//NULLISH COALESCING OPERATOR
let height = 0;

console.log(height || 300);
console.log(height ?? 300); // solo devuelve 300 si es nulo o indefinido

let name = "";

console.log(name || "David");
console.log(name ?? "David");

//SPREAD OPERATOR
let array1 = [7, 8, 9, "David"];

let array2 = ["Tell me your final numbers and your name", ...array1]; // copia los argumentos del array

console.log(array2);

//DESTRUCTURING ARRAYS
let arr = ["my surname", "is", "David", "Alonso"];

let [a, b, , d] = arr; // me salto el tercer valor con las dos ,,
console.log(a);
console.log(b);
console.log(d);

