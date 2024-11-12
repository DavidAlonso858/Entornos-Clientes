/* APARTADO CONTINENTE Y PAISES*/

function añadirContinente() {
    const selector = document.querySelector("#continentes");
    const ejemploOption = document.createElement("option");

    ejemploOption.innerHTML = "--- Selecciona Continente ---";

    selector.appendChild(ejemploOption);

    companies.forEach(continente => {
        const option = document.createElement("option");

        option.innerHTML = continente.continent; /* cada option almacena nombre continente*/
        selector.appendChild(option);
    })
}
añadirContinente();

function añadirPaises() {
    const cuerpo = document.querySelector("#cuerpo");
    let paises = []
    cuerpo.innerHTML = "";
    companies.forEach(c => { /*Almaceno los nombres de paises en un array para luego ordenar*/
        c.countries.forEach(c2 => {
            paises.push(c2.name);
        })
    })

    paises.sort(); /*ordeno*/

    paises.forEach(p => { /* recorro el array para crear fila y celda por cada pais*/
        const pais = document.createElement("tr");
        const paisCelda = document.createElement("td");
        paisCelda.innerHTML = p;
        pais.appendChild(paisCelda);

        cuerpo.appendChild(pais);

    })
}

añadirPaises();
function paisesSeleccion() {
    const cuerpo = document.querySelector("#cuerpo");
    const selecccion = document.querySelector("#continentes").value;
    let paisesContinente = []

    const continente = companies.find(c => c.continent === selecccion) // encontrar el continente

    cuerpo.innerHTML = ""; // limpio la tabla

    if (continente) { // compruebo
        continente.countries.forEach(c2 => { // aceder directamente a la propiedad del continente encontrado
            paisesContinente.push(c2.name)
        })
    }

    paisesContinente.sort();

    paisesContinente.forEach(pC => { /* recorro el array para crear fila y celda por cada pais*/
        const fila = document.createElement("tr");
        const celda = document.createElement("td");

        celda.innerHTML = pC;
        fila.appendChild(celda);

        cuerpo.appendChild(fila);
    })
}

/* si no se pulsa continente salen todos y si se pulsa salen los de ese*/
document.querySelector("#countries").addEventListener("click", function () {
    const selecccion = document.querySelector("#continentes").value;
    console.log(selecccion);

    if (selecccion === "--- Selecciona Continente ---") {
        añadirPaises();
    } else {
        paisesSeleccion();
    }
});

/*APARTADO NUMERO DE COMPAÑIAS */
function numeroCompañias() {
    const cuerpo = document.querySelector("#cuerpo");
    const selecccion = document.querySelector("#continentes").value;

    const continente = companies.find(c => c.continent === selecccion) // encontrar el continente

    cuerpo.innerHTML = ""; // limpio la tabla

    if (continente) { // compruebo
        const paisesOrdenados = continente.countries.sort((a, b) => { // ordeno por nombre
            return a.name.localeCompare(b.name); // compara los nombres 
        });


        paisesOrdenados.forEach(p => {
            const fila = document.createElement("tr");

            /*celda para el nombre del pais*/
            const celdaNombre = document.createElement("td");
            celdaNombre.innerHTML = p.name;

            fila.appendChild(celdaNombre);

            /*celda para el numero de compañias*/
            const celdanumero = document.createElement("td");

            celdanumero.innerHTML = p.companies.length; // almaceno el numero de compañias
            fila.appendChild(celdanumero);


            cuerpo.appendChild(fila);
        })
    }
}

/* si no se pulsa continente salen todos y si se pulsa salen los de ese junto al numero*/
document.querySelector("#companies").addEventListener("click", function () {
    const selecccion = document.querySelector("#continentes").value;
    console.log(selecccion);

    if (selecccion === "--- Selecciona Continente ---") {
        añadirPaises();
    } else {
        numeroCompañias();
    }
});




/*APARTADO NOMBRE COMPAÑIAS */
function nombreCompañias() {

    const cuerpo = document.querySelector("#cuerpo");
    const selecccion = document.querySelector("#continentes").value;

    const continente = companies.find(c => c.continent === selecccion) // encontrar el continente

    cuerpo.innerHTML = ""; // limpio la tabla

    if (continente) { // compruebo
        const paisesOrdenados = continente.countries.sort((a, b) => { // ordeno por nombre
            return a.name.localeCompare(b.name); // compara los nombres 
        });


        paisesOrdenados.forEach(p => {
            const fila = document.createElement("tr");

            /*celda para el nombre del pais*/
            const celdaNombre = document.createElement("td");
            celdaNombre.innerHTML = p.name;

            fila.appendChild(celdaNombre);

            /*celda para el numero de compañias*/
            const celdanumero = document.createElement("td");
            celdanumero.innerHTML = p.companies.length; // almaceno el numero de compañias

            fila.appendChild(celdanumero);

            const celdaCompañia = document.createElement("td");
            const nombre = p.companies.map(m => Object.keys(m)[0]) //
            celdaCompañia.innerHTML = nombre;

            fila.appendChild(celdaCompañia);

            cuerpo.appendChild(fila);
        })
    }
}


/* si no se pulsa continente salen todos y si se pulsa salen los de ese junto al numero y nombre compañia*/
document.querySelector("#nameCompany").addEventListener("click", function () {
    const selecccion = document.querySelector("#continentes").value;
    console.log(selecccion);

    if (selecccion === "--- Selecciona Continente ---") {
        añadirPaises();
    } else {
        nombreCompañias();
    }
});