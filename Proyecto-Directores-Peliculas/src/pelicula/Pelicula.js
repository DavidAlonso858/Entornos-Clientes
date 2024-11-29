// LO HAGO DE ESTA FORMA POR SI TRABAJAMOS LUEGO EN LA INSERCION DE DATOS EN EL JSON

function filtroSelect() {
    const select = document.querySelector("#Directores");
    const option = document.createElement("option");

    option.innerHTML = "--Selecciona Director--";
    select.appendChild(option);
    // un option por cada nombre de director del json
    almacenDirectores.forEach(im => {
        const option = document.createElement("option");

        option.innerHTML = im.nombre;
        option.value = im.id;
        select.appendChild(option);
    });


}

filtroSelect();

document.querySelector("#Directores").addEventListener("click", function () {
    const select = document.querySelector("#Directores");
    const selectedDirectorId = parseInt(select.value); // Obtener el ID del director seleccionado
    if (!selectedDirectorId) {
        meterImagen();
    } else {

        const peliculasFiltradas = almacenPeliculas.filter(
            pelicula => pelicula.idDirector === selectedDirectorId
        );
        meterImagen(peliculasFiltradas); // Actualizar la vista
    }

})

// si no se le pasa salen todas de forma predefinida
function meterImagen(peliculasFiltradas = almacenPeliculas) {
    const main = document.querySelector("main"); // Meto el contenido del json en el main
    main.innerHTML = ""; // para que no se acumule con el filtro de directores
    let contador = 0;
    let contenedorActual;

    peliculasFiltradas.forEach(im => {
        // Creo una nueva fila cada 3 columnas
        if (contador % 3 === 0) {
            contenedorActual = document.createElement("div");
            contenedorActual.className = "row"; // Clase Bootstrap
            contenedorActual.style.marginBottom = "20px";
            contenedorActual.style.marginLeft = "200px";
            main.appendChild(contenedorActual);
        }

        // Creo la columna para el director
        const columna = document.createElement("div");
        columna.className = "col-lg-4 col-md-4 col-sm-12"; // Clase Boostrap (cada fila tiene 12 de maximo por eso el 4 en el lg para cada columna)

        const contenedor = document.createElement("div"); // div que va a almacenar la imagen del json y sus datos en forma de columna
        contenedor.style.display = "flex";

        // Guardo la imagen con el forEach que estoy recorriendo del JSON
        const primero = document.createElement("img");
        primero.src = im.imagen;
        primero.alt = `Imagen de ${im.nombre}`;
        primero.style.height = "500px"
        primero.style.width = "250x"

        // Guardo los datos a parte de la imagen del JSON
        const texto = document.createElement("div");
        // el booleano del premio lo paso a si o no 
        texto.innerHTML = `<strong>Título:</strong> ${im.titulo} <br> <strong>Año:</strong> ${im.año}  <br> <strong>Premios:</strong> ${im.premio === true ? `Sí` : `No`}  
        <br><strong> País:</strong>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52816169.558200695!2d-161.49265223136007!3d36.102185713814805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sEstados%20Unidos!5e0!3m2!1ses!2ses!4v1732828075211!5m2!1ses!2ses" width="200" height="100" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
        // HE INTENTADO CONVERTIR LAS COORDENADAS QUE TENGO EN EL JSON pero para poder usar la api de google maps me pedia la tarjeta y tampoco sabia muy bien aplicarlo
        texto.style.fontSize = "16px";
        texto.style.color = "aliceblue";
        texto.style.marginLeft = "10px";
        texto.style.marginTop = "auto";

        // lo añado al div que almacena la imagen y datos
        contenedor.appendChild(primero);
        contenedor.appendChild(texto);

        // añado ese div a la columna (3 por fila)
        columna.appendChild(contenedor);

        // la fila a la que añado la columna
        contenedorActual.appendChild(columna);

        contador++;
    });
}
meterImagen();



