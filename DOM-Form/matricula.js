document.querySelector("#añadir").addEventListener("click", function () {
    event.preventDefault();

    let formatoValido = true;

    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const dni = document.querySelector("#nie");

    // Controlo nombre
    if (!nombre.checkValidity()) {
        nombre.classList.add("is-invalid");
        formatoValido = false;
    } else {
        nombre.classList.remove("is-invalid")
        nombre.classList.add("is-valid");
    }

    //Controlo apellido
    if (!apellido.checkValidity()) {
        apellido.classList.add("is-invalid");
        formatoValido = false;
    } else {
        apellido.classList.remove("is-invalid")
        apellido.classList.add("is-valid");
    }
    
    // Controlo dni
    if (!dni.checkValidity()) {
        dni.classList.add("is-invalid");
        formatoValido = false;
    } else {
        dni.classList.remove("is-invalid");
        dni.classList.add("is-valid");
    }


    if (formatoValido && lista.length < 5) {
        const dni = document.querySelector("#nie");
        const telefono = document.querySelector("#telefono");

        if (lista.length < 5) {
            lista.push({
                Nombre: nombre.value,
                Apellido1: apellido.value,
                Apellido2: apellido2.value,
                DNI: dni.value,
                Telefono: telefono.value,
            },
            )
            contador++;

            let listaHTML = "<h6>";
            lista.forEach(e => {
                listaHTML += `<p>${e.Nombre}, ${e.Apellido1}, ${e.Apellido2}, ${e.DNI}, ${e.Telefono} </p>`;
            });
            listaHTML += "</h6>";

            document.querySelector("h5").innerText = `${contador}º Persona autorizada`;
            document.querySelector("#muestraLista").innerHTML = listaHTML;
        } else {
            console.log("La lista esta completa");

        }
    }
})
let lista = [];
let contador = 0;

document.querySelector("#quitar").addEventListener("click", function () {
    if (lista.length > 0) {

        lista.pop();
        contador--

        let listaHTML = "<h6>";
        lista.forEach(e => {
            listaHTML += `<p>${e.Nombre}, ${e.Apellido1}, ${e.Apellido2}, ${e.DNI}, ${e.Telefono} </p>`;
        });
        listaHTML += "</h6>";

        document.querySelector("h5").innerText = `${contador}º Persona autorizada`;
        document.querySelector("#muestraLista").innerHTML = listaHTML;
    } else {
        alert(`no hay elementos que quitar`);
    }
})

