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
            if (j % 2 == 0) { // Ejercicio 7 (pares de las columnas que a ojo humano son impares)
                columna.style.backgroundColor = "blue";
            }
            fila.appendChild(columna);
        }
    }

    return tabla;

}

tablaindicada(4, 6, "100px", "300px");