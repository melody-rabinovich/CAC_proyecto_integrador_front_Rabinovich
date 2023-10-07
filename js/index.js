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


function isEmpty(unString){
    // son innecesarias tantas verificaciones iguales pero si saco alguna no funciona, jajajaj no sé porqué
    return toString(unString) === "" || toString(unString) === " " || unString.length == 0;
}

const miModal = document.getElementById('exampleModal');


function verificarDatos(){

    const inputNombre = document.getElementById('inputNombre').value;
    const inputApellido = document.getElementById('inputApellido').value;
    const inputMail = document.getElementById('inputEmail').value;
    const inputCantidad = document.getElementById('inputCantidad').value;

    console.log(1)
    if (isEmpty(inputNombre) || 
        isEmpty(inputApellido) ||
        isEmpty(inputMail) ||
        isEmpty(inputCantidad)){
            
            alert("datos insuficientes")
    } else{
        // cerrar modal
        alert("compra realizada con éxito!")
        $(miModal).modal('hide');

    }
    
    
}
