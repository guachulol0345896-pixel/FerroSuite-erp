// FerroSuite — Modelo (datos de prueba)
// Esta fase del prototipo NO se conecta a una base de datos real.
// Estos arreglos simulan la información mientras se construye el backend.

const modeloProductos = [
  { sku: "FER-0245", nombre: "Cemento Gris 50kg", unidad: "Unidad", stockActual: 120, stockMinimo: 30 },
  { sku: "FER-0110", nombre: "Varilla 1/2\"", unidad: "Varilla", stockActual: 18, stockMinimo: 20 },
  { sku: "FER-0087", nombre: "Cable Eléctrico THHN", unidad: "Metro", stockActual: 340, stockMinimo: 50 },
  { sku: "FER-0033", nombre: "Tornillo Autorroscante", unidad: "Unidad", stockActual: 900, stockMinimo: 200 },
  { sku: "FER-0199", nombre: "Pintura Blanca", unidad: "Kilogramo", stockActual: 12, stockMinimo: 15 },
];

const modeloProveedores = [
  { nombre: "Cementos Andinos SAS", nit: "900123456-7", telefono: "601 555 0110", diasEntrega: 3, cumplimiento: "95%" },
  { nombre: "Aceros del Norte", nit: "800987654-1", telefono: "601 555 0221", diasEntrega: 5, cumplimiento: "88%" },
  { nombre: "Electricos JR", nit: "901222333-9", telefono: "601 555 0330", diasEntrega: 2, cumplimiento: "97%" },
];
