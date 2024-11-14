document.querySelector("#enviar").addEventListener("click", function () {
    let formatoValido = true;

    const nombre = document.querySelector("#nombre");
    const card = document.querySelector("#card");
    const numSecreto = document.querySelector("#numSecreto");
    const fecha = document.querySelector("#fecha");

    if (!nombre.checkValidity()) {
        nombre.classList.add("is-invalid")
        formatoValido = false;
    } else {
        nombre.classList.remove("is-invalid")
        nombre.classList.add("is-valid")
    }

    if (!card.checkValidity()) {
        card.classList.add("is-invalid")
        formatoValido = false;
    } else {
        card.classList.remove("is-invalid")
        card.classList.add("is-valid")
    }

    if (!numSecreto.checkValidity()) {
        numSecreto.classList.add("is-invalid")
        formatoValido = false;
    } else {
        numSecreto.classList.remove("is-invalid")
        numSecreto.classList.add("is-valid")
    }

    if (!fecha.checkValidity()) {
        fecha.classList.add("is-invalid")
        formatoValido = false;
    } else {
        fecha.classList.remove("is-invalid")
        fecha.classList.add("is-valid")
    }

})

function validarNombre() {
    const nombre = document.querySelector("#nombre").value;
    const nombre2 = document.querySelector("#nombre");
    let contador = 0;
    for (let index = 0; index < nombre.length; index++) {
        if (nombre.charAt(index) === " ") {
            contador++;
        }

    }
    if (contador === 0) {
        alert(`Tiene que haber un apellido separado por el espacio`)
        nombre2.classList.add("is-invalid")

    }
}

function validarTarjeta() {
    const card = document.querySelector("#card");

    let valorBueno = card.value.replace(/[^0-9]/g, '') /* la g aplica general*/
    let formateo = "";

    for (let index = 0; index < valorBueno.length; index++) {
        if (index > 0 && index % 4 === 0) {
            formateo += " "
        }
        formateo += valorBueno[index];
    }
    card.value = formateo;
}
function añadirAmount() {
    const amount = document.querySelector("#amount")
    let valor = amount.value;

    let valorBueno = valor.replace(',', '.');
    valorBueno += "€";
    amount.value = valorBueno;
}

function validarSecreto(params) {
    const numSecreto = document.querySelector("#numSecreto");

    let valor = numSecreto.value

    let valorBueno = valor.replace(/[^0-9]/g, '')

    numSecreto.value = valorBueno;
}
document.querySelector("#amount").addEventListener("blur", añadirAmount)
document.querySelector("#enviar").addEventListener("click", validarNombre)

document.querySelector("#nombre").addEventListener("blur", validarNombre);

document.querySelector("#card").addEventListener("input", validarTarjeta);
document.querySelector("#numSecreto").addEventListener("input", validarSecreto);

