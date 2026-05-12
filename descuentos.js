export function calcularDescuento(totalCompra) {

    if (totalCompra < 200) {
        let faltante = 200 - totalCompra;
        return `Te faltan ${faltante} para el descuento`;
    } else if (totalCompra >= 200 && totalCompra <= 500) {
        return "Tienes un descuento del 5%";
    } else {
        return "Tienes un descuento del 12%";
    }

}

export function totalDescuento(totalFinal) {
    if (totalFinal < 200) {
        let faltante = 200 - totalFinal;
        console.log(`Faltante $ ${faltante} para la promoción`);
    } else if (totalFinal >= 200 && totalFinal <= 500) {
        let descuento = totalFinal * 0.05;
        console.log(`Descuento aplicado ${descuento}`);
    } else {
        let descuento = totalFinal * 0.12;
        console.log(`Descuento aplicado ${descuento}`);
    }
}


calcularDescuento();
totalDescuento();



