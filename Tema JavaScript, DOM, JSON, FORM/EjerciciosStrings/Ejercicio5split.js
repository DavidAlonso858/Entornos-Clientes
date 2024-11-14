function separar(params) {
    let letras = params.split(" "); // para separarlo por el espacio
    let reformado = "";
    let primero = letras[0];
    let segundo = letras[1] ? letras[1][0] + "." : ""; // si existe apellido pillar primera letra

    // Hacerlo con forEach
    letras.forEach((palabra, index) => {
        if (index === 0) {
            // La primera palabra es el nombre completo
            reformado += palabra;
        } else if (index === 1) {
            // La segunda palabra es el apellido, tomamos la primera letra y la agregamos con un punto
            reformado += " " + palabra[0] + ".";
        }
    });

    return reformado;

   // return `${primero} ${segundo}`;
}

console.log(separar("Robin Singh"));


