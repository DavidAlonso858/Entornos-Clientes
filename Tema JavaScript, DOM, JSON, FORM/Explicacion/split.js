const text = "Hola, mundo, qué, tal";

// Dividir usando una coma como separador
const parts = text.split(", ");
console.log(parts); // ["Hola", "mundo", "qué", "tal"]

// Dividir en palabras usando un espacio
const words = text.split(" ");
console.log(words); // ["Hola,", "mundo,", "qué,", "tal"]

// Dividir usando un límite
const limited = text.split(", ", 2);
console.log(limited); // ["Hola", "mundo"]

// Dividir por cada carácter
const characters = text.split("");
console.log(characters); // ["H", "o", "l", "a", ",", " ", "m", ...]