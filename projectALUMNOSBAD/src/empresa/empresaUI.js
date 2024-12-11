import { crearEmpresa, obtenerEmpresas, eliminarEmpresa } from './empresaController.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-alta-empresa');
    const tablaEmpresas = document.getElementById('tabla-empresas').querySelector('tbody');

    // Función para renderizar la tabla
    const renderTablaEmpresas = () => {
        const empresas = obtenerEmpresas();
        console.log(empresas);

        tablaEmpresas.innerHTML = '';
        empresas.forEach(empresa => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${empresa.id}</td>
                <td>${empresa.nombre}</td>
                <td>${empresa.direccion}</td>
                 <td>
                    <button class="editar" data-id="${empresa.id}">Editar</button>
                    <button class="eliminar" data-id="${empresa.id}">Eliminar</button>
                </td>
            `;
            tablaEmpresas.appendChild(fila);
        });
        // correcion de la forma de hacer el querySelectorAll de editar y eliminar ya que no se habia implementado bien la fila antes de trabajar con ellos
        document.querySelectorAll('.editar').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const empresaId = e.target.dataset.id;
                alert(`Editar empresa con ID: ${empresaId}`);
                const boton = document.querySelector("button")
                boton.innerHTML = "Editar empresa";
// cuando le das al boton cambia el texto de crear por editar 
                form.addEventListener('submit', (event) => {
                    event.preventDefault();
                    const nombre = form.nombre.value;
                    const direccion = form.direccion.value;
                    eliminarEmpresa(empresaId)
                    crearEmpresa(nombre, direccion);
                    renderTablaEmpresas();

                    // Limpiar el formulario
                    form.reset();
                });
            });
        });

        document.querySelectorAll('.eliminar').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const empresaId = e.target.dataset.id;
                eliminarEmpresa(empresaId);
                renderTablaEmpresas();
            });
        });
    };


    // Manejo del formulario
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const nombre = form.nombre.value;
        const direccion = form.direccion.value;

        crearEmpresa(nombre, direccion);
        renderTablaEmpresas();

        // Limpiar el formulario
        form.reset();
    });

    // Cargar la tabla inicialmente
    renderTablaEmpresas();
});
