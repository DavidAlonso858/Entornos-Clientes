let a = +prompt("Introduce tu primera nota: ");
let b = +prompt("Introduce tu segunda nota: ");
let c = +prompt("Introduce tu tercera nota: ");
let d = +prompt("Introduce tu cuarta nota: ");

let media = (a, b, c, d) => (a + b + c + d) / 4;

alert(`La media es de ${media(a, b, c, d)}`);
let resultado = media(a, b, c, d);

switch (true) { // se ejecuta el caso que es true
    case (resultado => 5 && resultado < 6): alert(`pass ${resultado}`);
        break;
    case (resultado => 6 && resultado < 7): alert(`sufficient ${resultado}`);
        break;
    case (resultado >= 7 && resultado < 8): alert(`good ${resultado}`);
        break;
    case (resultado >= 8): alert(`outstanding ${resultado}`);
        break;

    default: console.log("fail");
        break;
}