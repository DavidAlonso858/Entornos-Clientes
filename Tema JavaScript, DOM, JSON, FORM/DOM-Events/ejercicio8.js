function tablaindicada(columnas, filas, altoCelda, anchoCelda) {
    let tabla = document.querySelector(".tablaLocura2");
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

tablaindicada(3, 3, "100px", "300px");

document.querySelector(".botonFila").addEventListener("click", function () {
    let fila = document.createElement("tr");
    document.querySelector(".tablaLocura2").appendChild(fila);

})
document.querySelector(".botonColumna").addEventListener("click", function () {
    let columna = document.createElement("td");
    columna.style.width = "300px";
    columna.style.height = "100px";
    document.querySelector(".tablaLocura2").appendChild(columna);

})