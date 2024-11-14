/* 
convertir a mayuscula cuando pierde el foco(blur)
*/

function nombre() {
    const cambioNombre = document.querySelector("#nombre");
    cambioNombre.value = cambioNombre.value.toUpperCase()

    if (cambioNombre.value.length < 7) {
        alert("minimo 7 caracteres");
    }
    let valor = cambioNombre.value;
    let contador = 0;
    for (let index = 0; index < valor.length; index++) {
        console.log('p');
        if (valor.charAt[index] === ' ') {
            
            contador++;
        }
    }

    if (contador == 0) {
        alert("Debes poner un apellido al menos");
    }
}

function formatoTarjeta() {
    const numeroTarjeta = document.querySelector("#numero");
    console.log(typeof numeroTarjeta.value);

    let valorCambiado = numeroTarjeta.value.replace(/\s/g, ""); /* para pillar todos los tipos de espacios*/

    let valorBueno = "";
    for (let index = 0; index < valorCambiado.length; index++) {
        if (index > 0 && index % 4 === 0) {
            valorBueno += " ";
        }
        valorBueno += valorCambiado[index];
    }

    numeroTarjeta.value = valorBueno;
}

function cantidad() {
    const cantidadAlmacenada = document.querySelector("#cantidad");

    let valor = cantidadAlmacenada.value;
    let nuevoValor = "";

    console.log(typeof valor);

    if (valor.includes(',')) {
        nuevoValor = valor.replace(',', '.');

    } else {
        nuevoValor = valor
        nuevoValor += ".00";
    }

    cantidadAlmacenada.value = nuevoValor;
}
function fecha() {
    const fechaActual = Date.now();
    const fechaIntro = new Date(document.querySelector("#fecha").value)
    if (fechaIntro < fechaActual) {
        alert(`La fecha debe ser anterior a la actual`);
    }
}

document.querySelector("#submitButton").addEventListener("click", nombre);
document.querySelector("#submitButton").addEventListener("click", formatoTarjeta);
document.querySelector("#submitButton").addEventListener("click", fecha);
document.querySelector("#submitButton").addEventListener("click", cantidad);


/* Destacar focus*/
document.querySelector("#nombre").addEventListener("focus", function () {
    let cambio = document.querySelector("#nombre")
    cambio.style.backgroundColor = "yellow";
})

document.querySelector("#numero").addEventListener("focus", function () {
    let cambio = document.querySelector("#numero")
    cambio.style.backgroundColor = "yellow";
})

document.querySelector("#fecha").addEventListener("focus", function () {
    let cambio = document.querySelector("#fecha")
    cambio.style.backgroundColor = "yellow";
})

document.querySelector("#seguridad").addEventListener("focus", function () {
    let cambio = document.querySelector("#seguridad")
    cambio.style.backgroundColor = "yellow";
})
document.querySelector("#cantidad").addEventListener("focus", function () {
    let cambio = document.querySelector("#cantidad")
    cambio.style.backgroundColor = "yellow";
})