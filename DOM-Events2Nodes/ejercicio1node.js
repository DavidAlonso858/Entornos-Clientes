
function nodo(event) {
    const elemento = event.target;

    console.log("Elemento clicado:", elemento.tagName, elemento.id || "Sin id");

    // Padre
    const father = elemento.parentElement;

    console.log("Padre:", father.tagName, father.id || "SIN ID");

    // 2. Hermanos
    const siblings = Array.from(father.children).filter(sibling => sibling !== elemento.parentElement);
    console.log("Hermanos:", siblings.map(sibling => `${sibling.tagName} ${sibling.id || "Sin ID"}`).join(", ") || "No hay hermanos");

    // 3. Hermano anterior
    const previousSibling = elemento.previousElementSibling;
    console.log("Hermano anterior:", previousSibling ? `${previousSibling.tagName} ${previousSibling.id || "Sin ID"}` : "No hay hermano anterior");

    // 4. Hermano siguiente
    const nextSibling = elemento.nextElementSibling;
    console.log("Hermano siguiente:", nextSibling ? `${nextSibling.tagName} ${nextSibling.id || "Sin ID"}` : "No hay hermano siguiente");

    // 5. Abuelo
    const grandfather = father.parentElement;
    console.log("Abuelo:", grandfather.tagName, grandfather.id || "Sin ID");

    // 6. Hermanos del abuelo
    const grandfatherSiblings = Array.from(grandfather.children).filter(sibling => sibling !== father);
    console.log("Hermanos del abuelo:", grandfatherSiblings.map(sibling => `${sibling.tagName} ${sibling.id || "Sin ID"}`).join(", ") || "No hay hermanos del abuelo");

    // 7. Hermanos del padre
    const fatherSiblings = grandfatherSiblings;
    console.log("Hermanos del padre:", fatherSiblings.map(sibling => `${sibling.tagName} ${sibling.id || "Sin ID"}`).join(", ") || "No hay hermanos del padre");

    // 8. Primos
    const cousins = grandfatherSiblings.flatMap(sibling => Array.from(sibling.children));
    console.log("Primos:", cousins.map(cousin => `${cousin.tagName} ${cousin.id || "Sin ID"}`).join(", ") || "No hay primos");

    // 9. Hijos
    const children = Array.from(father.children);
    console.log("Hijos:", children.map(c => `${c.tagName} ${c.id || "Sin ID"}`).join(", ") || "No hay hijos");

    // 10. Nietos
    const grandchildren = children.flatMap(c => Array.from(c.children));
    console.log("Nietos:", grandchildren.map(gc => `${gc.tagName} ${gc.id || "Sin ID"}`).join(", ") || "No hay nietos");
}




document.querySelector("#child2").addEventListener("click", nodo)
document.querySelector("#child3 h4").addEventListener("click", nodo)
const tds = document.querySelectorAll('td');

// Busca el <td> que contiene el texto "Jon"
tds.forEach(td => {
    if (td.textContent === "Jon") {
        td.addEventListener("click", nodo); // Agregar el evento al <td> encontrado
    }
});