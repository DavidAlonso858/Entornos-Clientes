let pillarDiv = document.querySelectorAll("div > p");
let pillarEnlaces = document.querySelectorAll("a");
let contador = 0;
let contador2 = 0;
console.log(pillarDiv); // pruebo que pillo los parrafos del div

console.log("\nEl numero de enlaces que tiene la web", pillarEnlaces.length);
// .length porque el querySelectorAll lo guarda como un array

console.log("\nLa direccion del segundo enlace", pillarEnlaces[1]);

for (const enla of pillarEnlaces) {
    if (enla.href.startsWith("https://iesbelen.org/")) { // que empiece con eso y pillado el href del elemento que es a
        contador++
    }
}

console.log("\nNumero de enlaces del instituto", contador);

let tercerParrafo = pillarDiv[2];
// guardo el tercer parrafo para luego pillar los enlaces que tiene dentro

let numEnlacesTercero = tercerParrafo.querySelectorAll("a");

console.log("\nLos enlaces del tercer parrafo solo", numEnlacesTercero.length);


