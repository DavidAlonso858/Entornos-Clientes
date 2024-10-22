function encabezado() { // creo una funcion que devuelva los h con el texto introducido por mi (createElement y createTextContent)
    for (let index = 1; index < 7; index++) {
        let prueba = document.createElement(`h${index}`)
        prueba.textContent = "DAVID";
        document.body.appendChild(prueba);
    }
}

encabezado();