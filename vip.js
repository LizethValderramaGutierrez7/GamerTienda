export function esVIP(cantidad, total) {

    if (cantidad > 20 && total > 1000) {
        console.log("El cliente es VIP");
    } else {
        console.log("El cliente no es VIP");
    }
}

esVIP();