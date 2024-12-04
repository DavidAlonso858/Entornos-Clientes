// Llenar el select de países
const selectPaises = document.getElementById("paises");
const cargarPaises = () => {
    countries.forEach((pais) => {
        const opcionPais = document.createElement("option");
        opcionPais.value = pais;
        opcionPais.textContent = pais;
        selectPaises.appendChild(opcionPais);
    });
};
cargarPaises();

// CHECK ALL GENDERS
const seleccionarTodosGeneros = document.getElementById('selectAllGenders');
const checkboxesGeneros = document.querySelectorAll('.genderCheckbox');

seleccionarTodosGeneros.addEventListener('change', (evento) => {
    const estaSeleccionado = evento.target.checked;
    checkboxesGeneros.forEach((checkbox) => {
        checkbox.checked = estaSeleccionado;
    });
});

checkboxesGeneros.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        const todosSeleccionados = Array.from(checkboxesGeneros).every((cb) => cb.checked);
        const algunoDesmarcado = Array.from(checkboxesGeneros).some((cb) => !cb.checked);

        seleccionarTodosGeneros.checked = todosSeleccionados;
        seleccionarTodosGeneros.indeterminate = !todosSeleccionados && !algunoDesmarcado;
    });
});

// SELECT DE ANIOS
const seleccionarDesde = document.getElementById("desde");
const seleccionarHasta = document.getElementById("hasta");
const anioActual = new Date().getFullYear();

const cargarAnios = (selectElemento) => {
    for (let anio = 2000; anio <= anioActual; anio++) {
        const opcionAnio = document.createElement("option");
        opcionAnio.value = anio;
        opcionAnio.textContent = anio;
        selectElemento.appendChild(opcionAnio);
    }
};

cargarAnios(seleccionarDesde);
cargarAnios(seleccionarHasta);

// RESULTADO FIND
const buscarBoton = document.querySelector(".find");
const textoBusquedaInput = document.getElementById("text");
const resultadosContenedor = document.getElementById("results");

buscarBoton.addEventListener("click", (evento) => {
    evento.preventDefault();

    const textoBusqueda = textoBusquedaInput.value.trim().toLowerCase();
    const paisSeleccionado = selectPaises.value !== "allCountries" ? selectPaises.value : null;
    const desdeAnio = parseInt(seleccionarDesde.value) || null;
    const hastaAnio = parseInt(seleccionarHasta.value) || null;
    const generosSeleccionados = Array.from(checkboxesGeneros)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);

    const peliculasFiltradas = pelis.filter((peli) => {
        const anioPeli = parseInt(peli.Year);
        const cumpleAnio = (!desdeAnio || anioPeli >= desdeAnio) && (!hastaAnio || anioPeli <= hastaAnio);

        const cumpleBusqueda =
            !textoBusqueda ||
            peli.Title.toLowerCase().includes(textoBusqueda) ||
            (peli.Director && peli.Director.toLowerCase().includes(textoBusqueda)) ||
            (peli.Actors && peli.Actors.toLowerCase().includes(textoBusqueda)) ||
            (peli.Genre && peli.Genre.toLowerCase().includes(textoBusqueda));

        const cumplePais = !paisSeleccionado || peli.Country.includes(paisSeleccionado);

        const cumpleGeneros = generosSeleccionados.length === 0 || generosSeleccionados.some((genero) => peli.Genre.split(", ").includes(genero));

        return cumpleAnio && cumpleBusqueda && cumplePais && cumpleGeneros;
    });

    resultadosContenedor.innerHTML = "";

    if (peliculasFiltradas.length > 0) {
        const contador = document.createElement("p");
        contador.textContent = `Se encontraron ${peliculasFiltradas.length} películas:`;
        resultadosContenedor.appendChild(contador);

        peliculasFiltradas.forEach((peli, index) => {
            const tarjetaPeli = document.createElement("div");
            tarjetaPeli.className = "movie-card";
            tarjetaPeli.dataset.index = index;

            const cuerpoTarjeta = document.createElement("div");

            const titulo = document.createElement("h5");
            titulo.textContent = peli.Title;

            const imagen = document.createElement("img");
            imagen.src = peli.Images[0];
            imagen.style.width = "200px";

            const genero = document.createElement("p");
            genero.textContent = `Género: ${peli.Genre}`;

            const botonDetalles = document.createElement("button");
            botonDetalles.textContent = "Details";
            botonDetalles.className = "details-button";

            cuerpoTarjeta.appendChild(titulo);
            cuerpoTarjeta.appendChild(imagen);
            cuerpoTarjeta.appendChild(genero);
            cuerpoTarjeta.appendChild(botonDetalles);
            tarjetaPeli.appendChild(cuerpoTarjeta);

            const detallesPeli = document.createElement("div");
            detallesPeli.style.display = "none";
            detallesPeli.innerHTML = `<pre>${JSON.stringify(peli, null, 2)}</pre>`;

            const inputRating = document.createElement("input");
            inputRating.type = "number";
            inputRating.min = "0";
            inputRating.max = "10";
            inputRating.step = "0.1";
            inputRating.value = peli.imdbRating || 0;

            const botonActualizar = document.createElement("button");
            botonActualizar.textContent = "Update";
            botonActualizar.addEventListener("click", () => {
                const nuevoRating = parseFloat(inputRating.value);
                if (nuevoRating >= 0 && nuevoRating <= 10) {
                    peli.imdbRating = nuevoRating;
                } else {
                    alert("Introduce un rating válido entre 0 y 10.");
                }
            });

            const botonCerrar = document.createElement("button");
            botonCerrar.textContent = "Close details";
            botonCerrar.addEventListener("click", () => {
                detallesPeli.style.display = "none";
                botonDetalles.disabled = false;
                tarjetaPeli.classList.remove("bg-secondary");
            });

            detallesPeli.appendChild(inputRating);
            detallesPeli.appendChild(botonActualizar);
            detallesPeli.appendChild(botonCerrar);
            tarjetaPeli.appendChild(detallesPeli);

            botonDetalles.addEventListener("click", () => {
                detallesPeli.style.display = "block";
                botonDetalles.disabled = true;
                tarjetaPeli.classList.add("bg-secondary");
            });

            resultadosContenedor.appendChild(tarjetaPeli);
        });
    } else {
        const noResultados = document.createElement("p");
        noResultados.textContent = "No se encontraron películas que coincidan con tus criterios.";
        resultadosContenedor.appendChild(noResultados);
    }
});
