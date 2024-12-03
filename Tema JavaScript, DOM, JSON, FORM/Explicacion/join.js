const words = ["Hola", "mundo", "qué", "tal"];

// Unir con un espacio
const sentence = words.join(" ");
console.log(sentence); // "Hola mundo qué tal"

// Unir con una coma
const csv = words.join(", ");
console.log(csv); // "Hola, mundo, qué, tal"

// Unir sin separador
const noSeparator = words.join("");
console.log(noSeparator); // "Holamundoquétal"