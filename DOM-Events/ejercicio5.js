const colores = ["rgb(200,055,155)", "rgb(155,66,4)", "rgb(99,166,77)", "rgb(255,111,10)"]

function coloresTabla(colores) {
    let pillarTabla = document.querySelectorAll("td");
    let contador = 0;

    for (const ele of pillarTabla) {
        if (contador < colores.length) {
            ele.style.backgroundColor = colores[contador];
            contador++;
        }
    }
}

coloresTabla(colores);