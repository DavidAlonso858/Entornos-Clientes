window.onload = () => {
    muestraPorTipo(person);
}

const person = {
    "nombre": "Noon",
    "edad": 6,
    "aficiones": ["Deporte", "Lectura", "Viajar"],
    "emancipado": true,
    "nacionalidad": ["Española", "Inglesa", "China", "Francesa",]
}

function muestraPorTipo(p) {
    // const entradas = Object.entries(p);
    // console.log(entradas);
    // console.log(entradas[2][1]);

    const valores = Object.values(p);
    const keys = Object.keys(p);
    const formu = document.querySelector("#formuTipo");

    for (let index = 0; index < keys.length; index++) {
        const div = document.createElement("div");
        div.className = "row";
        const label = document.createElement("label");
        label.innerHTML = keys[index].slice(0, 1).toUpperCase().concat(keys[index].slice(1));
        label.className = "fw-bold mt-2";

        div.appendChild(label);

        console.log(typeof valores[index]);

        switch (typeof valores[index]) {
            case "string":
                const input1 = document.createElement("input");
                input1.type = "Text";
                input1.value = "texto"
                div.appendChild(input1);
                break;
            case "number":
                const input2 = document.createElement("input");
                input2.type = "number";
                input2.value = "1";
                div.appendChild(input2);
                break;
            case "object":
                for (const e of valores[index]) {
                    const label = document.createElement("label");
                    const input3 = document.createElement("input");
                    input3.type = "checkbox";
                    input3.className = "m-2";
                    label.innerHTML = e;
                    label.appendChild(input3);
                    div.appendChild(label);
                }
                break;
            case "boolean":
                const input4 = document.createElement("input");
                input4.type = "radio";
                input4.checked = true;
                div.appendChild(input4);
                break;
            default:
                alert(`fallo en el tipo`)
                break;
        }
        formu.appendChild(div);

    }
    const boton = document.createElement("input");
    boton.className = "bg-warning text-dark mt-4"
    boton.type = "submit";

    formu.appendChild(boton);
}
