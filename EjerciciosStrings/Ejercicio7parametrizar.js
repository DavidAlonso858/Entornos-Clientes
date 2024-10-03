function string_parameterize(params) {
    let reformado = params.replaceAll(" ", "-");
    reformado = reformado.toLocaleLowerCase();
    return reformado;
}

console.log(string_parameterize("Robin Singh from USA"));
