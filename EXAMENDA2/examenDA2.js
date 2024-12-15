
window.onload = () => {
    mostrar();
    controlInput();
}

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
        divIndividual.id = `${p.nombre}`; // Hay que ponerle una id unica dentro del forEach
        //  para luego trabajar con ellos

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
        input.id = `cantidad${p.nombre}`
        input.value = p.stock;

        const br = document.createElement("br");

        if (p.stock != 0) {
            boton.innerText = "Comprar"
            boton.className = "btn btn-warning m-2"
            boton.id = `button${p.nombre}`
        }

        divIndividual.appendChild(img)
        divIndividual.appendChild(h4)
        divIndividual.appendChild(parrafo)
        divIndividual.appendChild(input)
        divIndividual.appendChild(br)
        divIndividual.appendChild(boton)

        general.appendChild(divIndividual);


        document.getElementById(`button${p.nombre}`).addEventListener("click", () => {
            crearElementoCarrito(p, input.value); // TRABAJO CON CADA UNO AL HACER CLICK
        });

    })
}

let totalDelTotal = 0;

function crearElementoCarrito(product, numProd) {
    const tbody = document.getElementById("tbody");

    const sub = product.precio * numProd;

    // Actualizar el total acumulado
    totalDelTotal += sub;

    tbody.innerHTML += `<tr id="tr${product.nombre}">
                <td>
                    <button id="${product.nombre}add">+</button>
                    <p id="${product.nombre}cant">${numProd}</p>
                    <button id="${product.nombre}remove">-</button>
                </td>
                <td>${product.nombre}</td>
                <td>${product.precio}€</td>
                <td>${product.precio * numProd}€</td>
                <td><button id="eliminar${product.nombre}">Eliminar</button></td>
            </tr>`;

    document.getElementById(`${product.nombre}add`).addEventListener("click", () => {
        const cantidadEl = document.getElementById(`${product.nombre}cant`);
        let cantidad = parseInt(cantidadEl.textContent); // pasar a int parseInt el .textContent
        cantidad++;
        cantidadEl.textContent = cantidad;

        // Actualizar subtotal y total acumulado
        const nuevoSub = product.precio;
        totalDelTotal += nuevoSub;
        actualizarTotal();
    });

    document.getElementById(`${product.nombre}remove`).addEventListener("click", () => {
        const cantidadEl = document.getElementById(`${product.nombre}cant`);
        let cantidad = parseInt(cantidadEl.textContent);
        if (cantidad > 1) {
            cantidad--;
            cantidadEl.textContent = cantidad;

            // Actualizar subtotal y total acumulado
            const nuevoSub = product.precio;
            totalDelTotal -= nuevoSub;
            actualizarTotal();
        }
    });

    document.getElementById(`eliminar${product.nombre}`).addEventListener("click", () => {
        const tr = document.getElementById(`tr${product.nombre}`);
        const nuevoSub = product.precio * cantidad;

        // Restar subtotal al total acumulado
        totalDelTotal -= nuevoSub;

        // Eliminar fila
        tbody.removeChild(tr);
        actualizarTotal();
    });

    actualizarTotal();
}

function actualizarTotal() {

    let totalDiv = document.getElementById("tbody");
    const h5 = document.createElement("h5")
    h5.innerHTML = "Valor total: " + totalDelTotal;

    totalDiv.appendChild(h5);
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

// no se por que cuando pillo el selectorAll de los input me lo devuelve vacio aqui 
// y no en la funcion por eso pillo el body (es por el )

document.querySelector("body").addEventListener("change", controlInput)
