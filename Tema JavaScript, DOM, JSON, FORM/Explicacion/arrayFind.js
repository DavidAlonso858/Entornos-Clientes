const list = [1, 2, 3, 4, 5];

let list2 = list.find(e => e > 2);
// solo me devuelve el primero que cumple eso mientras que filter todos
console.log(typeof list2);
console.log(list2);