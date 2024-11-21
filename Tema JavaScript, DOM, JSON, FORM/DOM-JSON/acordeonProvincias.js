function añadirComunidades() {
    const acordeon = document.querySelector("#accordionComunidades");

    elegirComunidad.forEach((element, indexComunidad) => {
        const item = document.createElement("div"); // creo el div del header
        item.className = "accordion-item";

        const encabezado = document.createElement("h2"); // el h2 con cada comunidad
        encabezado.className = "accordion-header bg-secondary";
        encabezado.innerHTML = `
        <button class="accordion-button bg-secondary" type="button" data-bs-toggle="collapse"
                     data-bs-target="#collapseComunidad${indexComunidad}" aria-expanded="false" aria-controls="collapseComunidad${indexComunidad}">
        ${element.label} (${element.provinces.length} provincias)
        </button>`;

        const contenido = document.createElement("div");
        contenido.id = `collapseComunidad${indexComunidad}`;
        contenido.className = "accordion-collapse collapse";
        contenido.setAttribute("data-bs-parent", "#accordionComunidades");

        const body = document.createElement("div");
        body.className = "accordion-body";

        añadirProvincia(body, element.provinces, indexComunidad);

        contenido.appendChild(body);
        item.appendChild(encabezado); // se lo añado al div para luego añadirlo al acordeon
        item.appendChild(contenido); // se lo añado al div para luego añadirlo al acordeon
        acordeon.appendChild(item);

    });
}
añadirComunidades();

function añadirProvincia(body, provincias, indexComunidad) {
    const subAcordeon = document.createElement("div");
    subAcordeon.className = "accordion";
    subAcordeon.id = `accordionProvincias${indexComunidad}`;

    provincias.forEach((provincia, indexProvincia) => {
        const provinciaItem = document.createElement("div");
        provinciaItem.className = "accordion-item";

        // Crear el encabezado de la provincia
        const provinciaEncabezado = document.createElement("h2");
        provinciaEncabezado.className = "accordion-header";
        provinciaEncabezado.innerHTML = `
            <button class="accordion-button bg-info" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseProvincia${indexComunidad}-${indexProvincia}" aria-expanded="false" aria-controls="collapseProvincia${indexComunidad}-${indexProvincia}">
                ${provincia.label} (${provincia.towns.length} municipios)
            </button>`;

        // Crear el contenedor colapsable para municipios
        const provinciaContenido = document.createElement("div");
        provinciaContenido.id = `collapseProvincia${indexComunidad}-${indexProvincia}`;
        provinciaContenido.className = "accordion-collapse collapse";
        provinciaContenido.setAttribute("data-bs-parent", `#accordionProvincias${indexComunidad}`);

        const provinciaBody = document.createElement("div");
        provinciaBody.className = "accordion-body";

        // Añadir los municipios al contenido de la provincia
        añadirMunicipios(provinciaBody, provincia.towns);

        // Estructura final de cada provincia
        provinciaContenido.appendChild(provinciaBody);
        provinciaItem.appendChild(provinciaEncabezado);
        provinciaItem.appendChild(provinciaContenido);
        subAcordeon.appendChild(provinciaItem);
    });

    body.appendChild(subAcordeon);
}

function añadirMunicipios(body, municipios) {
    const listaMunicipios = document.createElement("ul");
    listaMunicipios.className = "list-group";

    municipios.forEach(municipio => {
        const municipioItem = document.createElement("li");
        municipioItem.className = "list-group-item";
        municipioItem.textContent = municipio.label;
        listaMunicipios.appendChild(municipioItem);
    });

    body.appendChild(listaMunicipios);
}