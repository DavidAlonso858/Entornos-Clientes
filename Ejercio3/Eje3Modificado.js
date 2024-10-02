let contador = 0;
let suma = 0;
let a;

do {
    a = +prompt("Introduce tu nota: ");
    if (!Number.isNaN(a)) {
        suma += a;
        contador++;
        console.log(contador);


    }
} while (!Number.isNaN(a));

let media = (suma) => (suma) / contador;
alert(`La media es de ${media(suma)}`);
let resultado = media(suma);

switch (true) { // se ejecuta el caso que es true
    case (resultado => 5 && resultado < 6): alert(`pass ${resultado}`);
        break;
    case (resultado => 6 && resultado < 7): alert(`sufficient ${resultado}`);
        break;
    case (resultado >= 7 && resultado < 8): alert(`good ${resultado}`);
        break;
    case (resultado >= 8): alert(`outstanding ${resultado}`);
        break;

    default: alert(`fail`);
        break;
}