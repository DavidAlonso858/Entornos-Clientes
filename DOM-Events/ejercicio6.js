function tablaindicada(columnas, filas, altoCelda, anchoCelda) {
    let tabla = document.querySelector(".tablaLocura");
    let fila;
    let columna;

    for (let i = 0; i < filas; i++) {
        fila = document.createElement("tr");
        tabla.appendChild(fila);
        for (let j = 0; j < columnas; j++) {
            columna = document.createElement("td");
            columna.style.width = anchoCelda;
            columna.style.height = altoCelda;
            fila.appendChild(columna);
        }
    }

    return tabla;

}

document.querySelector(".tablaLocura").append(tablaindicada(4, 6, "100px", "300px"));