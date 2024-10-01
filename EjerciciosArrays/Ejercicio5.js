const numerosGrande = [888, 999, 2222, 5555];


const Grande = numerosGrande.reduce(
    (numMax, e) => numMax > e ? numMax : e
); // devuelve el numero mas grande 


console.log(Grande);
