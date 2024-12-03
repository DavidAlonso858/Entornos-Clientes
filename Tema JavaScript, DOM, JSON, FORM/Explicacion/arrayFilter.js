const list = [1, 2, 3, 4, 5];


//Filter devuelve un boolean con todos los elementos que cumplan eso mientras que find solo uno
const list2 = list.filter(e => e > 3);
const list3 = list.filter(e => e % 2 == 0);
const list5 = list.filter(e => e === 5 || e % 2 === 0);
const list4 = list.filter(e => {
    if (!(e % 2)) {
        return true;
    } else {
        return false;
    }
});

console.log(typeof list);
console.log(list2);
console.log(list3);
console.log(list5);

