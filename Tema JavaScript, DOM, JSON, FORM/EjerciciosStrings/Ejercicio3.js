let letras = "ZabCd";
function nextChar(letras) {
    let cambioLetra = '';

    for (let i = 0; i < letras.length; i++) {
        let char = letras[i];

        if (char == 'z' || char == 'Z') {
            cambioLetra += 'a';
        } else if (char >= 'a' && char <= 'y' || char >= 'A' && char <= 'Y') {
            cambioLetra += String.fromCharCode(char.charCodeAt(0) + 1);
        } else {
            cambioLetra += char;
        }
    }
    return cambioLetra;
}

let cambioLetra = nextChar(letras);
console.log(cambioLetra);
