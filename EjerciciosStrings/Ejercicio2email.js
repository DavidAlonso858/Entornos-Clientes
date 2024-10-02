function sendEmail(nombre, edad, mensaje, email) {
    if (!nombre || !edad || !mensaje || !email) {
        return null;
    }

    const status = parseInt(edad) >= 18
        ? `${nombre} is a valid user (${email})` : `${nombre} is not a valid user (${email})`;

    if (parseInt(edad) < 18) {
        return status;
    }

    return `${status}
            \nA user has posted a comment: ` // concateno lo dos mensajes
        + `\nname: ${nombre}, `
        + `\nage: ${edad}, `
        + `\ncomments: ${mensaje}`;
}

console.log(sendEmail("David", 22, "un saludo", "dalogar0801@g.educaand.es"));