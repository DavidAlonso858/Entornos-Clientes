const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    // Validar cada campo del formulario
    form.querySelectorAll('input, select, textarea').forEach(element => {
        if (element.value.trim() === '' && element.hasAttribute('required')) {
            element.classList.add('is-invalid');
            isValid = false;
        } else {
            element.classList.remove('is-invalid');
        }

        // Validar campos de radio para que al menos uno esté seleccionado
        if (element.type === 'radio') {
            const radioGroup = form.querySelectorAll(`input[name="${element.name}"]`);
            const isRadioGroupValid = Array.from(radioGroup).some(radio => radio.checked);
            if (!isRadioGroupValid) {
                radioGroup.forEach(radio => radio.classList.add('is-invalid'));
                isValid = false;
            } else {
                radioGroup.forEach(radio => radio.classList.remove('is-invalid'));
            }
        }
    });

    // Si todos los campos son válidos, enviar el formulario
    if (isValid) {
        alert('Formulario enviado correctamente.');
        form.submit();
    } else {
        alert('Por favor, completa todos los campos obligatorios.');
    }
});