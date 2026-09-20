// FerroSuite — Controlador de Proveedores
// Pinta la tabla a partir del modelo y atiende el formulario de "Agregar proveedor".
// No hay conexión a base de datos ni lógica de negocio real todavía.

function pintarTablaProveedores() {
  const tbody = document.querySelector("#tabla-proveedores tbody");
  if (!tbody) return;
  tbody.innerHTML = "";
  modeloProveedores.forEach((p) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${p.nombre}</td>
      <td>${p.nit}</td>
      <td>${p.telefono}</td>
      <td>${p.diasEntrega}</td>
      <td>${p.cumplimiento}</td>
    `;
    tbody.appendChild(fila);
  });
}

function atenderFormularioProveedor() {
  const form = document.querySelector("#form-proveedor");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nuevo = {
      nombre: form.nombre.value,
      nit: form.nit.value,
      telefono: form.telefono.value,
      diasEntrega: Number(form.diasEntrega.value) || 0,
      cumplimiento: "—",
    };
    modeloProveedores.push(nuevo);
    pintarTablaProveedores();
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  pintarTablaProveedores();
  atenderFormularioProveedor();
});
