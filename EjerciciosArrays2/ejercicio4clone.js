let original = ["Manzana", "Pera", "Albaricoque"];

let clone = [...original]; // ... hace referencia a los argumentos del array

clone[0] = "Fresas"; // cambio en el clonado

console.log("Primer array con un cambio", clone);
