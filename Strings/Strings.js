let person = "nuria";
let city = "malaga";
let str = `hi${person}, are you in ${city}`;
console.log(str);

let str2 = `hi ${person}, 
are you in:
 ${city}`;
console.log(str2);

(function (a, b) { // forma poco usada
    console.log("se suman", a, b);
    return a + b;
})(2, 3);

let sum = (a, b) => { // forma lambda
    return a + b;
}

sum(2, 3);

