const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
}
// Escribe una funcion que muestre el numero de propiedades del objeto
// y que devuelva la suma de todos los salarios
// utilizando Object.values y el bucle for of

function muestraPropiedades(s) {
    const keys = Object.keys(salaries);
    const valores = Object.values(salaries);

    keys.sort(); // ya devuelve un array por lo que ordeno directamente
    for (const element of keys) {
        console.log(element);
    }

    let suma = 0;
    console.log('\nNumero de propiedades', valores.length);

    for (const element of valores) {
        suma += element;
    }

    console.log('\nLa suma de los salarios es', suma);
}

muestraPropiedades(salaries);
