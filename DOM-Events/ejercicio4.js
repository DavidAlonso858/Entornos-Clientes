
document.getElementById("boton1").addEventListener("click", function () {
    let contenidoInput = document.querySelector("input");

    let añadirLista = document.getElementById("lista") // pillo el ul
    let añadirLI = document.createElement("li"); // creo li
    añadirLI.textContent = contenidoInput.value; // al li le añado el texto del input

    añadirLista.insertBefore(añadirLI, añadirLista.firstChild); // parametro y posicion

    contenidoInput.value = " "; // para que salga vacio al introducir algo
})