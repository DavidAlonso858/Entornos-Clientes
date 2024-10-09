let original = ["Manzana", "Pera", "Albaricoque"];

let clone = [...original]; // ... hace referencia a los argumentos del array

clone[0] = "Fresas"; // cambio en el clonado

console.log("Primer array con un cambio", clone);

let original2 = [
    [1, 2, 3], 
    [4, 5, 6]
];

let clone2 = original2.map(fila => [...fila]);

clone2[0][0] = 7777;
console.log(clone2);

