
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


function busquedaTitulo() {
    event.preventDefault();

    const valorTexto = document.querySelector("#texto");
    const cuerpo = document.querySelector("#cuerpo");
    const valor2 = valorTexto.value.trim().toLowerCase();

    const busqueda = pelis.filter(p => p.Title.toLowerCase().includes(valor2));
    // numero busqueda
    const parrafo = document.createElement("p")
    parrafo.className = "m-5 fw-bold"
    parrafo.innerHTML = busqueda.length;
    cuerpo.appendChild(parrafo);

    if (busqueda) {
        busqueda.forEach(b => {
            const div = document.createElement("div");
            const img = document.createElement("img");
            const h3 = document.createElement("h3");
            const generos = document.createElement("p");
            const boton = document.createElement("button");

            h3.innerHTML = b.Title;


            img.src = b.Images[0];
            img.width = 200
            img.height = 200

            generos.innerHTML = b.Genre;

            boton.innerHTML = "Details"
            boton.className = "btn bg-warning text-dark"


            div.appendChild(img);
            div.appendChild(h3);
            div.appendChild(generos);
            div.appendChild(boton)

            cuerpo.appendChild(div)
        })

    }

}

function busquedaDirector() {
    event.preventDefault();

    const valorTexto = document.querySelector("#texto");
    const cuerpo = document.querySelector("#cuerpo");
    const valor2 = valorTexto.value.trim().toLowerCase();



    const busqueda = pelis.filter(p => p.Director.toLowerCase().includes(valor2));
    // numero busqueda
    const parrafo = document.createElement("p")
    parrafo.className = "m-5 fw-bold"
    parrafo.innerHTML = busqueda.length;
    cuerpo.appendChild(parrafo);
    if (busqueda) {
        busqueda.forEach(b => {
            const div = document.createElement("div");
            const img = document.createElement("img");
            const h3 = document.createElement("h3");
            const generos = document.createElement("p");
            const boton = document.createElement("button");


            h3.innerHTML = b.Title;


            img.src = b.Images[0];
            img.width = 200
            img.height = 200

            generos.innerHTML = b.Genre;

            boton.innerHTML = "Details"
            boton.className = "btn bg-warning text-dark"

            div.appendChild(img);
            div.appendChild(h3);
            div.appendChild(generos);
            div.appendChild(boton)


            cuerpo.appendChild(div)
        })

    }

}

function busquedaActores() {
    event.preventDefault();

    const valorTexto = document.querySelector("#texto");
    const cuerpo = document.querySelector("#cuerpo");
    const valor2 = valorTexto.value.trim().toLowerCase();


    const busqueda = pelis.filter(p => p.Actors.toLowerCase().includes(valor2));
    // numero busqueda
    const parrafo = document.createElement("p")
    parrafo.className = "m-5 fw-bold"
    parrafo.innerHTML = busqueda.length;
    cuerpo.appendChild(parrafo);
    if (busqueda) {
        busqueda.forEach(b => {
            const div = document.createElement("div");
            const img = document.createElement("img");
            const h3 = document.createElement("h3");
            const generos = document.createElement("p");
            const boton = document.createElement("button");

            h3.innerHTML = b.Title;


            img.src = b.Images[0];
            img.width = 200
            img.height = 200

            generos.innerHTML = b.Genre;

            boton.innerHTML = "Details"
            boton.className = "btn bg-warning text-dark"

            div.appendChild(img);
            div.appendChild(h3);
            div.appendChild(generos);
            div.appendChild(boton)

            cuerpo.appendChild(div)
        })

    }

}

function busquedaGeneral() {
    event.preventDefault();
    const valor = document.querySelector("#texto");
    const cuerpo = document.querySelector("#cuerpo");
    const valor2 = valor.value.trim().toLowerCase();

    const busqueda = pelis.filter(p => p.Title.toLowerCase().includes(valor2) || p.Director.toLowerCase().includes(valor2) || p.Actors.toLowerCase().includes(valor2));

    cuerpo.innerHTML = "";

    // numero busqueda
    const parrafo = document.createElement("p")
    parrafo.className = "m-5 fw-bold"
    cuerpo.appendChild(parrafo);
    parrafo.innerHTML = busqueda.length;



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

            boton.innerHTML = "Details"
            boton.className = "btn bg-warning text-dark"

            div.className = "m-5"
            div.appendChild(img);
            div.appendChild(h3);
            div.appendChild(generos);
            div.appendChild(boton)


            cuerpo.appendChild(div);
        });
    } else {
        const vacio = document.createElement("p");
        vacio.innerHTML = "No se encontraron resultados.";
        cuerpo.appendChild(mensaje);
    }
}

document.querySelector("#boton").addEventListener("click", function () {

    const valorTitulo = document.querySelector("#title").checked;
    const valorDirector = document.querySelector("#director").checked;
    const valorActor = document.querySelector("#actors").checked;
    const cuerpo = document.querySelector("#cuerpo");

    cuerpo.innerHTML = "";
    if (!valorTitulo && !valorDirector && !valorActor) {
        busquedaGeneral();
    } else {
        if (valorTitulo) {
            busquedaTitulo();
        } if (valorDirector) {
            busquedaDirector();
        } if (valorActor) {
            busquedaActores();
        }
    }
})
