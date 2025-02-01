
function añadirGeneros() {
    const valor = document.querySelector("#meterGeneros");
    let generos = [];

    genders.forEach(g => {
        generos.push(g);
    })

    generos.sort();

    generos.forEach(g1 => {
        const generoCheck = document.createElement("input");
        generoCheck.type = "checkbox";
        generoCheck.id = g1;
        generoCheck.value = g1;

        const genero = document.createElement("label");
        genero.innerHTML = g1;
        genero.className = "m-2"

        valor.appendChild(generoCheck);
        valor.appendChild(genero);
    })
}

añadirGeneros();

function comprobarGeneros() {
    const all = document.querySelector("#allgenders");
    const generosContainer = document.querySelector("#meterGeneros");
    const generos = generosContainer.querySelectorAll("input");

    all.addEventListener("change", () => {
        generos.forEach(g => {
            if (g !== all) {
                g.checked = all.checked;
            }
        });
    });


}


comprobarGeneros();

function añadirPaises() {
    const valor = document.querySelector("#country");

    let pais = [];
    const option = document.createElement("option");

    option.innerHTML = "All countries";
    valor.appendChild(option)

    countries.forEach(c => {
        pais.push(c);
    })
    pais.sort();

    pais.forEach(p => {
        const option = document.createElement("option");
        option.innerHTML = p;

        valor.appendChild(option)
    })
}

function MostrarAnno() {
    const yearSelect1 = document.querySelector("#year");
    const yearSelect2 = document.querySelector("#year2");

    let year2020 = new Date();
    year2020.setFullYear(2000);

    let yearNow = new Date();

    let ListaAnno = [];

    for (let fecha = new Date(year2020); fecha.getFullYear() <= yearNow.getFullYear(); fecha.setFullYear(fecha.getFullYear() + 1)) {
        ListaAnno.push(new Date(fecha));
    }

    ListaAnno.forEach(anno => {
        const annoOption1 = document.createElement("option");
        annoOption1.innerHTML = anno.getFullYear();
        annoOption1.value = anno.getFullYear();
        const annoOption2 = document.createElement("option");
        annoOption2.innerHTML = anno.getFullYear();
        annoOption2.value = anno.getFullYear();

        yearSelect1.appendChild(annoOption1);
        yearSelect2.appendChild(annoOption2);
    });
}
MostrarAnno()
añadirPaises()


function busquedaGeneral() {
    event.preventDefault();
    const valorTexto = document.querySelector("#texto").value.trim().toLowerCase();
    const cuerpo = document.querySelector("#cuerpo");
    const paisSeleccionado = document.querySelector("#country").value;
    const yearDesde = parseInt(document.querySelector("#year").value);
    const yearHasta = parseInt(document.querySelector("#year2").value);
    const generosSeleccionados = Array.from(document.querySelectorAll("#meterGeneros input:checked"))
        .map(g => g.value);

    cuerpo.innerHTML = "";
    const buscarPorTitulo = document.querySelector("#title").checked; // para que me busque por lo seleccionado
    const buscarPorDirector = document.querySelector("#director").checked;
    const buscarPorActores = document.querySelector("#actors").checked;

    const busqueda = pelis.filter(p => {
        let cumpleTexto;
        if (buscarPorTitulo && buscarPorDirector && buscarPorActores) {
            cumpleTexto = valorTexto ? p.Title.toLowerCase().includes(valorTexto) || p.Director.toLowerCase().includes(valorTexto) || p.Actors.toLowerCase().includes(valorTexto) : true;
        } else if (buscarPorDirector) {
            cumpleTexto = p.Director.toLowerCase().includes(valorTexto)
        } else if (buscarPorActores) {
            cumpleTexto = p.Actors.toLowerCase().includes(valorTexto)
        } else if (buscarPorTitulo) {
            cumpleTexto = p.Title.toLowerCase().includes(valorTexto);
        } else {
            cumpleTexto = valorTexto ? p.Title.toLowerCase().includes(valorTexto) || p.Director.toLowerCase().includes(valorTexto) || p.Actors.toLowerCase().includes(valorTexto) : true;
        }
        const cumplePais = paisSeleccionado === "All countries" || p.Country === paisSeleccionado;
        const cumpleYear = (!yearDesde || p.Year >= yearDesde) && (!yearHasta || p.Year <= yearHasta);
        const cumpleGenero = generosSeleccionados.length === 0 || generosSeleccionados.some(g => p.Genre.includes(g));

        return cumpleTexto && cumplePais && cumpleYear && cumpleGenero;
    });

    const parrafo = document.createElement("p");
    parrafo.className = "m-5 fw-bold";
    parrafo.innerHTML = busqueda.length;
    cuerpo.appendChild(parrafo);

    if (busqueda.length > 0) {
        busqueda.forEach(b => {
            const div = document.createElement("div");
            const img = document.createElement("img");
            const h3 = document.createElement("h3");
            const generos = document.createElement("p");
            const boton = document.createElement("button");

            h3.innerHTML = b.Title;

            img.src = b.Images[0];
            img.width = 200;
            img.height = 200;

            generos.innerHTML = b.Genre;

            boton.innerHTML = "Details";
            boton.className = "btn bg-warning text-dark";

            div.className = "m-5";
            div.appendChild(img);
            div.appendChild(h3);
            div.appendChild(generos);
            div.appendChild(boton);


            // imdb
            const detallesPeli = document.createElement("div");
            detallesPeli.style.display = "none";
            detallesPeli.innerHTML = `<pre>${JSON.stringify(b, null, 2)}</pre>`;

            const inputRating = document.createElement("input");
            inputRating.type = "number";
            inputRating.min = "0";
            inputRating.max = "10";
            inputRating.step = "0.1";
            inputRating.value = b.imdbRating || 0;

            const botonActualizar = document.createElement("button");
            botonActualizar.textContent = "Update";
            botonActualizar.addEventListener("click", () => {
                const nuevoRating = parseFloat(inputRating.value);
                if (nuevoRating >= 0 && nuevoRating <= 10) {
                    b.imdbRating = nuevoRating;
                    detallesPeli.innerHTML += `
                        <h3>Nueva nota ${b.imdbRating}</h3>`
                    console.log(b.imdbRating);

                } else {
                    alert("Introduce un rating válido entre 0 y 10.");
                }
            });

            const botonCerrar = document.createElement("button");
            botonCerrar.textContent = "Close details";
            botonCerrar.addEventListener("click", () => {
                detallesPeli.style.display = "none";
                boton.disabled = false;
                div.classList.remove("bg-secondary");
            });

            detallesPeli.appendChild(inputRating);
            detallesPeli.appendChild(botonActualizar);
            detallesPeli.appendChild(botonCerrar);
            div.appendChild(detallesPeli);

            boton.addEventListener("click", () => {
                detallesPeli.style.display = "block";
                boton.disabled = true;
                div.classList.add("bg-secondary");
            });

            cuerpo.appendChild(div);
        });
    } else {
        const vacio = document.createElement("p");
        vacio.innerHTML = "No se encontraron resultados.";
        cuerpo.appendChild(vacio);
    }
}

document.querySelector("#boton").addEventListener("click", busquedaGeneral);