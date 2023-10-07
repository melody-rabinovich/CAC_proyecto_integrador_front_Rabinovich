let inputCantidad = document.getElementById('inputCantidad');
const precioIndividual = 1000;
const precioTotalElement = document.getElementById('precioTotal');

function multiplicarPrecio() {
    const cantidad = parseInt(inputCantidad.value);
    if (!isNaN(cantidad)) {
        const resultado = cantidad * precioIndividual;
        precioTotalElement.textContent = resultado.toFixed(2); // Actualizar el contenido con el resultado
    } else {
        precioTotalElement.textContent = '0.00'; // Mostrar 0.00 si la cantidad no es válida
    }
}
