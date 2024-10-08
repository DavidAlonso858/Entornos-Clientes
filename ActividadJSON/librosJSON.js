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
