// LO HAGO DE ESTA FORMA POR SI TRABAJAMOS LUEGO EN LA INSERCION DE DATOS EN EL JSON

function meterImagen() {
    const main = document.querySelector("main"); // Meto el contenido del json en el main
    let contador = 0;
    let contenedorActual;

    almacenDirectores.forEach(im => {
        // Creo una nueva fila cada 3 columnas
        if (contador % 3 === 0) {
            contenedorActual = document.createElement("div");
            contenedorActual.className = "row"; // Clase Bootstrap
            contenedorActual.style.marginBottom = "20px";
            contenedorActual.style.marginLeft = "200px"; // para alinearlo (igual se puede hacer mejor)
            main.appendChild(contenedorActual);
        }

        // Creo la columna para el director
        const columna = document.createElement("div");
        columna.className = "col-lg-4 col-md-4 col-sm-12"; // Clase Boostrap (cada fila tiene 12 de maximo por eso el 4 en el lg para cada columna)

        const contenedor = document.createElement("div"); // div que va a almacenar la imagen del json y sus datos en forma de columna
        contenedor.style.display = "flex";

        // Guardo la imagen con el forEach que estoy recorriendo del JSON
        const primero = document.createElement("img");
        primero.src = im.imagen;
        primero.alt = `Imagen de ${im.nombre}`;

        // Guardo los datos a parte de la imagen del JSON
        const texto = document.createElement("div");
        texto.innerHTML = `<strong>Nombre:</strong> ${im.nombre} <br> <strong>Edad:</strong> ${im.edad} años`;
        texto.style.fontSize = "16px";
        texto.style.color = "aliceblue";
        texto.style.marginLeft = "10px";
        texto.style.marginTop = "auto";

        // lo añado al div que almacena la imagen y datos
        contenedor.appendChild(primero);
        contenedor.appendChild(texto);

        // añado ese div a la columna (3 por fila)
        columna.appendChild(contenedor);

        // la fila a la que añado la columna
        contenedorActual.appendChild(columna);

        contador++;
    });
}
meterImagen();