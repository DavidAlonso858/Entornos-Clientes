let duplicate = [7, 7, 7, 8, 9, 10, 11, 9];

let noDuplicate = duplicate.filter((numero, indice) => {
   return duplicate.indexOf(numero) == indice;
    // se queda con el primero en aparecer 
    //ya que es el unico que coincide con el indice
})

console.log(noDuplicate);

