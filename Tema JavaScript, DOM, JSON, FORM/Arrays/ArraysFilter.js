const lista = [1, 2, 3, 4];

// const listaPar = lista.filter(e => !(e % 2));
const listPar = lista.filter(e => {
    if (!(e % 2)) { // el 0 es false de por si 
        console.log("en then", e);
        return true;
    } else {
        return false;
    }
});
console.log(listPar);
