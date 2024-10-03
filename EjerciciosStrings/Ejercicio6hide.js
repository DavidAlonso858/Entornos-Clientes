function protect_email(params) {
    let cifrado = params.split("@");

    let cifrado1 = cifrado[0];
    let cifrado2 = cifrado[1];

    let cifradoFinal = cifrado1.slice(0, (cifrado1.length / 2)) + "...";

    return cifradoFinal + "@" + cifrado2;
}

console.log(protect_email("robin_singh@example.com"));
