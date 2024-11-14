const num = [5, 4, 6, 9];

const initialValue = 0;
const numMedia = num.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,

);

console.log(numMedia / num.length);
