let suma = (a, b) => { // forma lambda
    return a + b;
}

let num1 = 8;
let num2 = 8;
console.log("Primer numero: ", num1);
console.log("Segundo numero: ", num2);

console.log("El resultado de la suma es: ", suma(num1, num2));

function suma2(a, b) {
    return a + b;
}

let a = parseInt(prompt("Introduzca el numero: "));
let b = parseInt(prompt("Introduzca el segundo numero: "));
let mensaje = suma2(a, b);
alert(`El resultado es\n${mensaje}`);

let sumaBody = (a, b) => {
    return a + b;
}

document.getElementById("su").innerHTML = `El resultado final es ${sumaBody(5, 5)}`;




function suma3(a, b) {
    return a + b;
}
document.getElementById("pulsa").onclick = function () {
    let a = 7;
    let b = 7;
    let sumaFinal = suma3(a, b);
    document.getElementById("pri").innerHTML = `El primer numero es ${a}<br>El segundo numero es ${b}<br><h1>El resultado final es ${sumaFinal}</h1>`;
}
