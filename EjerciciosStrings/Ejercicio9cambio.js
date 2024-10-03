function swapcase(params) {
    let reformado = "";

    params.split("").forEach(e => {
        if (e === e.toUpperCase()) {
            reformado += e.toLowerCase();
        } else {
            reformado += e.toUpperCase();
        }
    });

    return reformado;
}


console.log(swapcase("dAvID"));
