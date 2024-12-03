const list = [1, 2, 3, 4, 5];

let list2 = list.findIndex(e => e > 2);
let list5 = list.findIndex(e => e === 4);

console.log(typeof list2);
console.log(list2);
// devuelve el indice donde se encuentra el primer elemento que cumple esa funcionkf
console.log(list5);

//El index of busca elementos y el findindex te busca con las condiciones que tu pases


// Usando findIndex para buscar una cadena que contenga "Ad"
const indexOfStringAd = list.findIndex(e => typeof e === "string" && e.includes("Ad"));
console.log("Índice de la cadena que contiene 'Ad':", indexOfStringAd); // 5