/*let nombre = prompt("¿Cuál es su nombre?");
let productos = prompt("Indiqueme la cantidad de productos en su compra");
let monto = prompt("Indique el total de su compra");*/

import { calcularDescuento } from "./descuentos.js";
console.log(calcularDescuento(totalCompra));

import { totalDescuento } from "./descuentos.js";
console.log(totalDescuento(totalFinal));

import { calcularEnvio } from "./envio.js";
console.log(calcularEnvio(cantidadProductos));

import { esVIP } from "./vip.js";
console.log(esVIP(cantidad, total));

/*console.log(`Hola ${nombre}, la cantidad de tus productos son: ${productos}, la cantidad total de tu compra: ${monto}`);*/
/*console.log(calcularDescuento(totalCompra));
console.log(totalDescuento(totalFinal));
console.log(calcularEnvio(cantidadProductos));
console.log(esVIP(cantidad, total));*/