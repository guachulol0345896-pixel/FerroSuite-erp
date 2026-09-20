// FerroSuite — Controlador de Inventario
// Pinta la tabla a partir del modelo y atiende el formulario de "Agregar producto".
// No hay conexión a base de datos ni lógica de negocio real todavía: solo agrega
// la fila a la tabla en pantalla, para visualizar cómo se vería el flujo.

function pintarTablaProductos() {
  const tbody = document.querySelector("#tabla-productos tbody");
  if (!tbody) return;
  tbody.innerHTML = "";
  modeloProductos.forEach((p) => {
    const fila = document.createElement("tr");
    const bajoStock = p.stockActual <= p.stockMinimo;
    fila.innerHTML = `
      <td>${p.sku}</td>
      <td>${p.nombre}</td>
      <td>${p.unidad}</td>
      <td>${p.stockActual}</td>
      <td>${p.stockMinimo}</td>
      <td><span class="status ${bajoStock ? "active" : "pending"}">${bajoStock ? "Stock bajo" : "Normal"}</span></td>
    `;
    tbody.appendChild(fila);
  });
}

function atenderFormularioProducto() {
  const form = document.querySelector("#form-producto");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nuevo = {
      sku: form.sku.value || "SIN-SKU",
      nombre: form.nombre.value,
      unidad: form.unidad.value,
      stockActual: Number(form.stockActual.value) || 0,
      stockMinimo: Number(form.stockMinimo.value) || 0,
    };
    modeloProductos.push(nuevo);
    pintarTablaProductos();
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  pintarTablaProductos();
  atenderFormularioProducto();
});
