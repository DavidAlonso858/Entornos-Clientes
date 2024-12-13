
console.log(products.length);

function mostrar() {

    const general = document.querySelector("#divGeneral");
    products.forEach(p => {
        const divIndividual = document.createElement("div");
        const img = document.createElement("img");
        const h4 = document.createElement("h4");
        const parrafo = document.createElement("p");
        const boton = document.createElement("button");
        const input = document.createElement("input");

        divIndividual.className = "border border-shadow mb-4"
        divIndividual.id = `${p.nombre}`;

        img.src = p.imagen
        img.width = "200"
        img.height = "200"
        console.log(img);

        h4.innerHTML = p.nombre;

        parrafo.innerHTML = `Precio: ${p.precio} - ${p.stock} stock`

        if (p.stock < 4 && p.stock != 0) {
            parrafo.innerHTML = `Precio: ${p.precio} - quedan pocas unidades`
        }

        parrafo.className = "fw-bold"
        input.type = "number";
        input.id = "numerin";
        input.value = "-1";

        const br = document.createElement("br");

        if (p.stock != 0) {
            boton.innerText = "Comprar"
            boton.className = "btn btn-warning m-2"
            boton.id = "botonCompra"
        }

        divIndividual.appendChild(img)
        divIndividual.appendChild(h4)
        divIndividual.appendChild(parrafo)
        divIndividual.appendChild(input)
        divIndividual.appendChild(br)
        divIndividual.appendChild(boton)

        general.appendChild(divIndividual);
    })
}

function controlInput() {
    const input = document.querySelectorAll("input")
    const valores = Object.values(products);

    console.log(input);

    let contador = 0;
    input.forEach(i => {
        let valor = + i.value;
        if (valor < 0) {
            console.log(typeof valor);
            i.value = "0";
        }
        console.log(valores[contador].stock);
        if (valor > valores[contador].stock) {

            i.value = 0
            alert(`No hay tanto stock`)
        }
        contador = contador + 1;
        console.log(contador);

    }
    )
}


window.onload = () => {
    mostrar();
    controlInput();
    // me di cuenta tarde de lo de trabajar individualment con las id por eso esto
    products.forEach(f => {
        document.querySelector("#botonCompra").addEventListener("click", function () {
            const div = document.querySelector("#div2")
            const tabla = document.querySelector("#tabla");

            const tablabody = document.createElement("tbody")
            const fila = document.createElement("tr");

            const nombre = document.querySelectorAll("h4")

            fila.appendChild()
            tablabody.appendChild(fila)
            tabla.appendChild(tablabody)
            div.appendChild(tabla)

        })
    })
}

// no se por que cuando pillo el selectorAll de los input me lo devuelve vacio aqui 
// y no en la funcion por eso pillo el body (es por el )

document.querySelector("body").addEventListener("change", controlInput)
