document.querySelector("#boton").addEventListener("click", function () {
    const formatoCorrecto = true;

    const numSecreto = document.querySelector("#numSecreto");
    const nombre = document.querySelector("#nombre");
    const numTarjeta = document.querySelector("#numTarjeta");
    const fecha = document.querySelector("#fecha");

    if (!nombre.checkValidity()) {
        nombre.classList.add("is-invalid");
        formatoCorrecto = false
    } else {
        nombre.classList.remove("is-invalid");
        nombre.classList.add("is-valid");
    }


    if (!numSecreto.checkValidity()) {
        numSecreto.classList.add("is-invalid");
        formatoCorrecto = false
    } else {
        numSecreto.classList.remove("is-invalid");
        numSecreto.classList.add("is-valid");
    }


    if (!numTarjeta.checkValidity()) {
        numTarjeta.classList.add("is-invalid");
        formatoCorrecto = false
    } else {
        numTarjeta.classList.remove("is-invalid");
        numTarjeta.classList.add("is-valid");
    }


    if (!fecha.checkValidity()) {
        fecha.classList.add("is-invalid");
        formatoCorrecto = false
    } else {
        fecha.classList.remove("is-invalid");
        fecha.classList.add("is-valid");
    }
})

function cantidad() {
    const cantidad = document.querySelector("#amount");
    const contidad2 = cantidad.value;

    let valorbueno = contidad2.replace(",", ".");

    if (!valorbueno.includes("€")) {
        valorbueno += "€";
    }

    cantidad.value = valorbueno;
}

function validarNombre() {
    const valor = document.querySelector("#nombre");
    let contador = 0;
    const valor2 = valor.value;

    for (let index = 0; index < valor2.length; index++) {
        if (valor2.chartAt(index) === " ") {
            contador++;
        }
    }

    if (contador === 0) {
        valor.classList.add("is-invalid");
    }
}

function validarTarjeta() {
    const tarjeta = document.querySelector("#numTarjeta");
    const tarjeta2 = tarjeta.value;
    let valorBueno = tarjeta2.replace(/[^0-9]/g, "");

    let formateo = "";
    for (let index = 0; index < valorBueno.length; index++) {
        if (index > 0 && index % 4 === 0) {
            formateo += " ";
        }
        formateo += valorBueno.charAt(index);
    }

    tarjeta.value = formateo;
}

function numTarjeta() {
    const num = document.querySelector("#numSecreto")
    const num2 = num.value;

    let valorBueno = num2.replace(/[^0-9]/g, "");

    num.value = valorBueno;
}

function validarFecha() {
    const fechaInput = document.querySelector("#fecha");
    const valor = fechaInput.value;

    let valorBueno = valor.replace(/[^0-9]/g, "");

    let formateo = "";
    for (let index = 0; index < valorBueno.length; index++) {
        if (index === 2) {
            formateo += "/";
        }
        formateo += valorBueno.charAt(index);
    }

    fechaInput.value = formateo;
}

document.querySelector("#nombre").addEventListener("blur", validarNombre);
document.querySelector("#amount").addEventListener("blur", cantidad);
document.querySelector("#numTarjeta").addEventListener("input", validarTarjeta);
document.querySelector("#numSecreto").addEventListener("input", numTarjeta);
document.querySelector("#fecha").addEventListener("input", validarFecha);
