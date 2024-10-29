/* 
convertir a mayuscula cuando pierde el foco(blur)
*/
document.querySelector("#nombre").addEventListener("blur", function () {
    const cambioNombre = document.querySelector("#nombre");
    cambioNombre.value = cambioNombre.value.toUpperCase()

})

document.querySelector("#numero").addEventListener("keydown", function () {
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
})
document.querySelector("#cantidad").addEventListener("blur", function () {
    const cantidadAlmacenada = document.querySelector("#cantidad");

    let valor = cantidadAlmacenada.value;
    let nuevoValor = "";

    console.log(typeof valor);

    if (valor.includes(',')) {
        nuevoValor = valor.replace(',', '.');

    } else {
        nuevoValor += ".00"
    }

    cantidadAlmacenada.value = nuevoValor;
})




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