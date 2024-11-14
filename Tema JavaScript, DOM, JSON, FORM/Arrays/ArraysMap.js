const lista = [1, 2, 3, 4];

// const listaDouble = lista.map(e => e * 2); // para cada elemento lo multi por 2
const listaDouble = lista.map(e => {
    let numero = e * 2 // para cada elemento lo multi por 2
    numero += 8; // y luego mas 8
    return numero;
});

console.log(lista);
console.log(listaDouble);

