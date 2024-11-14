function truncate_string(params, numero) {

    return (typeof params == 'string' && typeof numero == 'number')
        ? params.slice(0, numero)
        : null;
}

console.log(truncate_string("Robin Singh", 4));
