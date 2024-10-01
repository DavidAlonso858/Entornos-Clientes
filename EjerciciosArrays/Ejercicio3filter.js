const numerosArray = [2, -5, -6, 7, -100, 777];

function nuevoNumerosArray(numerosArray) {
    let arrayPositivo = [];
    for (const e of numerosArray) {
        if (e >= 0) {
            arrayPositivo.push(e);
        }
    }
    return arrayPositivo;
}

console.log(nuevoNumerosArray(numerosArray));

const arrayPositivo = numerosArray.filter(e => {
    if (e >= 0) {
        console.log("positive number...", e);

        return true;
    } else {
        return false
    }

});

console.log(arrayPositivo);
