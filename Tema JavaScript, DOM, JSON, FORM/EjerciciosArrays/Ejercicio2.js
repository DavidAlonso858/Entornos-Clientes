const numeros = [1, 2, 3, 4];

function traditional(numeros) {
    let numeroArray = []
    for (const e of numeros) {
        numeroArray.push(Math.pow(e, 2));
    }
    return numeroArray;
}
console.log(traditional(numeros));


const numerosCuadrados = numeros.map(e => {
    let numero = Math.pow(e, 2);
    return numero;
});

console.log(numerosCuadrados);
