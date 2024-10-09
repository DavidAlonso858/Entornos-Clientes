
document.querySelector(".container").innerHTML = clase;

function csvarray(csv, separator = ",") {
    let filas = csv.split("\n");
    console.log(filas);

    return filas.map(fila => fila.split(separator))
}


function crearTabla(csv) {
    const tabla = document.createElement("table");
    const datos = csvarray(csv);

    datos.forEach(fila => {
        const tr = document.createElement("tr");
        fila.forEach(celda => {
            const td = document.createElement("td");
            td.textContent = celda;
            tr.appendChild(td);
        });
        tabla.appendChild(tr);
    });

    return tabla;
}

document.querySelector(".lista").appendChild(crearTabla(csv));
