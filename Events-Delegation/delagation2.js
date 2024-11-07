const tr = document.querySelector("tr");

tr.addEventListener("mouseover", (event) => {
    const info = document.querySelector("#info")

    if (event.target.tagName === 'TD') { 
        info.innerHTML ="Elemento por el que pasa "+event.target.tagName+ "<br> Coordenada X en la pantalla: " + event.clientX + "<br> Coordenada Y en la pantalla: " + event.clientY + "<br> Coordenada X en el elemento: " + event.offsetX  +"<br> Coordenada Y en el elemento: " + event.offsetY;
        event.target.classList.toggle('bg-danger')  
    }

 })

 tr.addEventListener("mouseout", (event) => {

    if (event.target.tagName === 'TD') { 
        event.target.classList.toggle('bg-danger')  
    }

 })