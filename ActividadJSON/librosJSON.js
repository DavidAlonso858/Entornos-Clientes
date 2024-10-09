let arrayLibros = [
    {
        Title: "Paradise Lost",
        Genre: "Poem",
        Author: "John Milton",
        Pages: 453,
        Date: "May 10, 1667",
        Read: false,
        Website: ""
    },
    {
        Title: "Don Quijote de la Mancha",
        Genre: "Parody",
        Author: "Miguel de Cervantes",
        Pages: 1560,
        Date: "January 16, 1605",
        Read: true,
        Website: ""
    },
    {
        Title: "Dune",
        Genre: "Epic Science Fiction ",
        Author: "Frank Herbert",
        Pages: 784,
        Date: "August 01, 1965",
        Read: true,
        Website: ""
    },
    {
        Title: "Berserk",
        Genre: "Dark Fantasy",
        Author: "Kentaro Miura",
        Pages: 8000,
        Date: "November 26, 1990",
        Read: true,
        Website: ""
    },
    {
        Title: "The Stranger",
        Genre: "Existentialism",
        Author: "Albert Camus",
        Pages: 159,
        Date: "May 19, 1942",
        Read: false,
        Website: ""
    },
]
arrayLibros.forEach(libro => {
    console.log(libro);
});


document.querySelector(".inicio").innerHTML = "Showcase Books";

// HACER TABLA DESDE JS createElement
function mostrario() {
    const tabla = document.createElement("table");

    const apartados = document.createElement("tr");
    const encabezado = ["Title", "Genre", "Author", "Pages", "Date", "Read", "Website"];

    encabezado.forEach(e => {
        const primera = document.createElement("th");
        primera.textContent = e;

        apartados.appendChild(primera);
    });

    tabla.appendChild(apartados);

    arrayLibros.forEach(libro => {
        const fila = document.createElement("tr");

        for (const key in libro) {
            const columna = document.createElement("td");
            columna.textContent = libro[key];

            fila.appendChild(columna);
        }

        tabla.appendChild(fila);
    });

    return tabla;
}

document.querySelector(".tablaLibros").append(mostrario())

// FUNCIONES DE CADA BOTON
function nombraGeneros(arrayLibros) {
    const arrayGeneros = [];

    arrayLibros.forEach(l => {
        arrayGeneros.push(l.Genre);
    })
    return arrayGeneros.join("<br>")
}

document.querySelector(".boton1").addEventListener("click", function () {
    document.querySelector(".contenidoGeneros").innerHTML = nombraGeneros(arrayLibros)
});

function librosLargos(arrayLibros) {
    const arrayLibrosLargos = arrayLibros.filter(l => l.Pages > 300);

    arrayLibros = arrayLibrosLargos.map(l => l.Title);

    return arrayLibros.join("<br>")
}

document.querySelector(".boton2").addEventListener("click", function () {
    document.querySelector(".libros300").innerHTML = librosLargos(arrayLibros)
});


// function masDosAños(arrayLibros) {
//     const fechaActual = new Date();

//     const arrayDosAños = arrayLibros.filter(l => {
//         const fecha = new Date(l.Date)
//         const diferenciaEnMilisegundos = fechaActual - fecha; // Calcular la diferencia en milisegundos

//         // Comparar si la diferencia es mayor a dos años (en milisegundos)
//         return diferenciaEnMilisegundos > 2 * 365 * 24 * 60 * 60 * 1000;
//     });

//     arrayDosAños = arrayDosAños.map(l => l.Title);

//     return arrayDosAños.join("<br>");
// }

// document.querySelector(".boton3").addEventListener("click", function () {
//     document.querySelector(".dosAños").innerHTML = masDosAños(arrayLibros);
// });

