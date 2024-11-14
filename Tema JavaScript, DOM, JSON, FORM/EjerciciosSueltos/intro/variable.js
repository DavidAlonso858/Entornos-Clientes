let number = 6;
console.log(number);

number = "david";
console.log(number);
console.log("el tipo es", typeof number);

number = [1, 2, 3, "bcd", 4, 5, 6, false];

console.log(number);
let persona = {
    nombre: "David",
    edad: "22",
};

persona.city = "Algeciras";

console.log(persona);
console.log(persona.hasOwnProperty("nombre")); // decir si tiene esa propiedad
console.log(typeof persona);

let fecha = new Date();
console.log("Fecha de hoy " + fecha); // al ponerle mas al mostrar se vuelve String
