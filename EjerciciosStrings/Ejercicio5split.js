function separar(params) {
    let letras = params.split(" "); // para separarlo por el espacio

    let primero = letras[0];
    let segundo = letras[1] ? letras[1][0] + "." : ""; // si existe apellido pillar primera letra

    // Hacerlo con forEach

    return `${primero} ${segundo}`;
}

console.log(separar("Robin Singh"));


