# Proyecto de filmografia Director-Pelicula

Este proyecto es una aplicacion web que sirve para gestionar a diferentes directores y sus peliculas a través de un CRUD (Crear, Leer, Actualizar, Eliminar). En mi caso lo voy a centrar en el género de terror.

> <span style="color:blue;">INFORMACION**</span>
1. He creado la estructura del proyecto (más adelante se complementará la parte de la capa Servlet, DAO y Model)

2. Esta parte del proyecto ha servido para crear las vistas (**index.html, /src/director/listaDirectores.html, /src/pelicula/listaPeliculas.html**)

3. Los json de los que obtengo la información alamacenada de cada entidad (**/assests/directores.js,/assests/peliculas.js**)

4. Los JS con los que trabajo para poder crear el contenido del main de las vistas con los datos pasado del json (/src/director/Director.js, /src/pelicula/Pelicula.js)

>EJECUCION

  -Abrir el index.html con el live server o ejecutando npx live-server dentro de la carpeta del proyecto


>Anotaciones

He intentado mostrar las coordenadas del json para que muestre un mapa en cada una pero la única manera que he encontrado es con la API de google maps y como pongo en el comentario dentro de Pelicula.js me pedía la tarjeta para habilitarla y tampoco sabía muy bien usarla.

La parte de Crear he hecho la plantilla y he supuesto que más adelante sabremos implementar mejor las capas como hacemos con JAVA, porque ahora mismo en JS nos falta conocimiento para poder desarrollar el CRUD de forma efectiva.
