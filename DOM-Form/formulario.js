document.getElementById("formularioPersonal").addEventListener("submit", function(event) {
    // Validación de campos vacíos
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const dni = document.getElementById("dni").value;
    const password = document.getElementById("password").value;

    if (!nombre || !apellido || !dni || !password) {
        alert("Por favor, completa todos los campos obligatorios.");
        event.preventDefault(); // evita que se envie
        return;
    }

    // Validación de DNI (formato español, ejemplo: 12345678A)
    const dniPattern = /^[0-9]{8}[A-Z]$/;
    if (!dniPattern.test(dni)) {
        alert("Por favor, introduce un DNI válido en formato 12345678A.");
        event.preventDefault(); // evita que se envie
    }
});