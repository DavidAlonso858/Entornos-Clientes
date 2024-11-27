function meterPelicula() {
    const director = document.querySelector("#DavidTi");
    const director2 = document.querySelector("#AlfredPaco");
    const director3 = document.querySelector("#GuillermoWan");
    let contador = 0;

    almacenDirectores.forEach(im => {
        const primero = document.createElement("img");

        const contenedor = document.createElement("div");
        contenedor.style.display = "flex"; // Alinea imagen y texto en fila


        primero.src = im.imagen; // para guardar imagenes
        primero.alt = "imagen director"
        contador++;

        const texto = document.createElement("div");
        texto.innerHTML = `<strong>Nombre:</strong> ${im.nombre} <br> <strong>Edad:</strong> ${im.edad} años`; // pillo los atributos que me falta
        texto.style.fontSize = "16px";
        texto.style.color = "aliceblue"
        texto.style.marginTop = "auto";
        texto.style.marginLeft = "10px"


        contenedor.appendChild(primero); // añado la imagen
        contenedor.appendChild(texto); // añado el texto

        if (contador <= 2) {
            director.appendChild(contenedor)

        } else if (contador <= 4) {
            director2.appendChild(contenedor)

        } else {
            director3.appendChild(contenedor)

        }
    })
}
meterImagen();