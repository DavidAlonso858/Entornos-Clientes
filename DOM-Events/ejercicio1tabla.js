let almacenarTAbla = document.querySelector("#age-table");

console.log(almacenarTAbla); // a) la tabla con esa id

let almacenarLabel = document.querySelectorAll("td > label");

console.log(almacenarLabel.length); // b) todos los label dentro de la tabla

let primerTd = document.querySelectorAll("td");

console.log(primerTd[0].innerText); // c) el primer td con la palabra Age

let almacenarFormu = document.getElementsByName("search");

console.log(almacenarFormu[0]); // d) para pillar el form y no el input

let almacenarInputs = document.querySelectorAll("form > input");

console.log(almacenarInputs[0]); // e) el primer input en el form

console.log(almacenarInputs[almacenarInputs.length-1]); // f) el ultimo input del form





