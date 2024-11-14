let studentsName = ["Ivan Santiago", "Marco Aurelio", "Manuela Zorrilla", "David Alonso"]

function sortLastName(studentsName) {
    return studentsName.sort((a, b) => {
        let parteA = a.split(" ");
        let parteb = b.split(" ");
        
        // pillo el primer apellido de los dos elementos que comparo
        let apellidoA = parteA[1];
        let apellidoB = parteb[1];

        // si es mas grande aparece despues (1) y si es mas pequeño
        // antes (-1), forma de trabajar del sort
        return apellidoA > apellidoB ? 1 : -1;

    })
}

console.log(sortLastName(studentsName));
