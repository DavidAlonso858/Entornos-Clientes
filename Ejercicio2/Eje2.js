let a = +prompt("Introduzca un numerin: ");
let b = +prompt("Introduzca otro numerin: ");

let suma = (a, b) => a + b;
let resta = (a, b) => a - b;
let multi = (a, b) => a * b;

alert(` ${a} mas ${b} es ${suma(a, b)}\n ${a} menos ${b} es ${resta(a, b)}\n ${a} multiplicado por ${b} es ${multi(a, b)}`);

let mayor18 = false;
if (suma(a, b) > 18) {
    mayor18 = true;
}
alert(`Es la suma mayor que 18 ${mayor18} `);

