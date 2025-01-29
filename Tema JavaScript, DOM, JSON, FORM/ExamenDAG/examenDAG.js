window.onload = () => {
    mostrar();
}

const tbody = document.querySelector("#tarBody");
const form = document.querySelector("#tarForm");
const addTarButton = document.querySelector("#addTar");
const updateTarButton = document.querySelector("#updateTar");

const errorElement = document.querySelector("#error");

let tituloInput = document.querySelector("#Titulo")
let fechaVenInput = document.querySelector("#fechVen")
let editingIndex = null;


document.querySelector("#consola").addEventListener("click", function () {
    tareas.forEach(t => {
        console.log(t);
    })
})

function mostrar() {

    const tareasOrdenadas = tareas.sort((a, b) => {
        return a.Prioridad.localeCompare(b.Prioridad);
    });

    tareasOrdenadas.forEach((t, index) => {
        const fila = document.createElement("tr");

        const prioridad = document.createElement("td");
        const completado = document.createElement("td");
        const creacion = document.createElement("td");

        prioridad.textContent = t.Prioridad;

        if (tareaMarcado) {
            t.Completado === true;
        }

        if (prioridad.textContent === "baja") {
            console.log("hola");

            prioridad.style.color = "green";
        } else if (prioridad.textContent === "media") {
            prioridad.style.color = "yellow";
        } else if (prioridad.textContent === "alta") {
            prioridad.style.color = "red";

        }

        if (t.Completado === true) {
            completado.textContent = "Si"
        } else {
            completado.textContent = "No";
        }

        creacion.textContent = t.Creacion.toString().slice(0, 25);

        fila.innerHTML = `
        <td class="editable" data-index="${index}">${t.Titulo}</td>
        <td>${t.FechaVen}</td>
        <td>${t.Completado}</td>
        <td>${creacion.textContent}</td>
        <td><button data-index="${index}" class="deleteTar">Eliminar</button></td>
    `;

        if (t.Completado === false) {
            fila.appendChild(prioridad)
            tbody.appendChild(fila);
        }
    })

    document.querySelectorAll(".deleteTar").forEach(button => {
        button.addEventListener("click", () => {
            const index = parseInt(button.dataset.index);
            alert(`Estas seguro de eliminar la tarea?`)
            tareas.splice(index, 1);
            tbody.innerHTML = "";
            mostrar();
        });
    });

    document.querySelectorAll(".editable").forEach(cell => {
        cell.addEventListener("click", () => {
            console.log(cell);

            const index = parseInt(cell.dataset.index);
            const tarea = tareasOrdenadas[index];

            tituloInput.value = tarea.Titulo;
            fechaVenInput.value = tarea.FechaVen;
            editingIndex = index;

            addTarButton.style.display = "none";
            updateTarButton.style.display = "inline-block";
            marcar.style.display = "inline-block";
        });
    });
}

updateTarButton.addEventListener("click", () => {
    const Titulo = tituloInput.value.trim();
    const FechaVen = fechaVenInput.value.trim();
    let Prioridad = tareas[editingIndex].Prioridad;
    console.log(Prioridad);


    const prioridadInput = document.querySelector('input[name="estado"]:checked');
    const marcado = document.querySelector('input[name="tareaMarcado"]:checked');



    errorElement.textContent = "";
    const Creacion = new Date();
    let Completado = false;

    console.log(marcado);

    if (marcado) {
        Completado = marcado.checked;
        tareas.splice(editingIndex, 1);
        tbody.innerHTML = "";
        mostrar();
        form.reset();
        editingIndex = null;
    } else {

        if (prioridadInput) {
            Prioridad = prioridadInput.value;
        }

        tareas[editingIndex] = { Titulo, FechaVen, Prioridad, Completado, Creacion };
        tbody.innerHTML = "";
        mostrar();

        form.reset();

        editingIndex = null;
    }
});

addTarButton.addEventListener("click", () => {
    const Titulo = tituloInput.value.trim();
    const FechaVen = fechaVenInput.value;
    const prioridadInput = document.querySelector('input[name="estado"]:checked');
    const Completado = false;

    console.log(Loca);

    if (!Titulo || !FechaVen || !prioridadInput) {
        errorElement.textContent = "Por favor, completa todos los campos y la fecha tiene que ser posterior a la actual.";
        return;
    }

    const Prioridad = prioridadInput.value;
    console.log(prioridadInput);
    console.log(Prioridad);

    errorElement.textContent = "";
    const Creacion = new Date();


    const newTarea = { Titulo, FechaVen, Prioridad, Completado, Creacion };
    tareas.push(newTarea);

    tbody.innerHTML = "";
    mostrar();

    form.reset();
});


