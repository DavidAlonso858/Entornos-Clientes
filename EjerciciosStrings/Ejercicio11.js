function uncamelize(params, separador) {
    let reformado = "";
    let reformado2 = "";
    let parar = false;

    if (separador == null) {
        separador = " ";
    }

    for (let index = 0; index < params.length && !parar; index++) {
        if (params[index] == params[index].toUpperCase()) {
            reformado = params.slice(0, index);
            reformado2 = params.slice(index);
            parar = true;
        }
    }
    reformado2 = reformado2.toLowerCase();
    let nuevoFormato = reformado + separador+reformado2;

    return nuevoFormato
}

console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld', '-'));
console.log(uncamelize('helloWorld', '_'));
console.log(uncamelize('helloWorld', '$$$'));
