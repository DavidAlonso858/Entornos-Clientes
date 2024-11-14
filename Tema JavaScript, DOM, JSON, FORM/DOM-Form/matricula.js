let lista = [];
let contador = 0;
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

            mostrarLista();
            document.querySelector("h5").innerText = `${contador}º Persona autorizada`;
        } else {
            console.log("La lista esta completa");

        }
    }
})


function añadirComunidad() {
    const selector = document.querySelector("#comunidad");
    const ejemplo = document.createElement("option");

    ejemplo.innerHTML = "--Selecciona la comunidad--"
    selector.appendChild(ejemplo);

    elegirComunidad.forEach(c => {

        const option = document.createElement("option");
        option.innerHTML = c.label;
        selector.appendChild(option);
    }
    )
}

añadirComunidad();

function añadirProvincia() {

    const selector = document.querySelector("#comunidad").value;
    const provincia = document.querySelector("#municipio");

    const comunidad = elegirComunidad.find(c => c.label === selector)

    // uso la comunidad encontrada para almacenar las provincias 

    provincia.innerHTML = ""; // para que se resetee al selecciona otra comunidad
    if (comunidad) {
        comunidad.provinces.forEach(c => {
            const option = document.createElement("option");
            option.innerHTML = c.label;
            provincia.appendChild(option);
        })
    }

}

function añadirLocalidad() {

    const selectorComunidad = document.querySelector("#comunidad").value; // saco la comunidad
    const selectorProvincia = document.querySelector("#municipio").value; // saco la provincia
    const localidad = document.querySelector("#localidad");

    const comunidad = elegirComunidad.find(c => c.label === selectorComunidad)

    const provinciaEncontrada = comunidad.provinces.find(p => p.label === selectorProvincia);

    localidad.innerHTML = ""; // para que se resetee al selecciona otra provincia
    if (provinciaEncontrada) {
        provinciaEncontrada.towns.forEach(t => {
            const option = document.createElement("option");
            option.innerHTML = t.label;
            localidad.appendChild(option);
        })
    }

}

añadirComunidad();
document.querySelector("#comunidad").addEventListener("blur", añadirProvincia);
document.querySelector("#municipio").addEventListener("blur", añadirLocalidad);



document.querySelector("#quitar").addEventListener("click", function () {
    const Ndocumentacion = document.querySelector("#nie").value;

    if (Ndocumentacion === "") {
        alert("Por favor, ingresa el NIF/NIE/Pasaporte de la persona a eliminar.");
        return;
    }

    const index = lista.findIndex(persona => persona.DNI === Ndocumentacion);

    if (index !== -1) {
        lista.splice(index, 1);
        contador--;

        mostrarLista();
        document.querySelector("h5").innerText = `${contador}º Persona autorizada`;
        alert("Persona eliminada correctamente.");
    } else {
        alert("No se encontró una persona con ese NIF/NIE/Pasaporte.");
    }
});


function mostrarLista() {
    let listaHTML = "<h6>";
    lista.forEach(e => {
        listaHTML += `<p>${e.Nombre}, ${e.Apellido1}, ${e.Apellido2}, ${e.DNI}, ${e.Telefono} </p>`;
    });
    listaHTML += "</h6>";
    document.querySelector("#muestraLista").innerHTML = listaHTML;
}

