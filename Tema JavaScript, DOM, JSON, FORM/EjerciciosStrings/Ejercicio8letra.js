const capitalize_Words = (cadena) => {
    let reformado = '';
    let separado = cadena.split(" ");

    separado.forEach(e => {
        reformado += e.charAt(0).toUpperCase() + e.slice(1) + ' ';
    });
    // slice devuelve la palabra luego del primer caracter hasta el final
    
    return reformado;
};

console.log(capitalize_Words("js string exercises"));
