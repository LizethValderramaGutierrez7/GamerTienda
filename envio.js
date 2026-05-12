export function calcularEnvio(cantidadProductos) {

    if (cantidadProductos < 3) {
        console.log("No se permiten compras menores a 3 productos");

    } else if (cantidadProductos >= 3 && cantidadProductos <= 10) {
        console.log("Costo de envío: $15 USD");

    } else {
        console.log("Envío gratis");
    }

}

calcularEnvio();