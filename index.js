let nombre = prompt("¿Cuál es su nombre?");
let productos = prompt("Indiqueme la cantidad de productos en su compra");
let monto = prompt("Indique el total de su compra");

import { calcularDescuento } from "./descuentos.js";
console.log(calcularDescuento);

import { totalDescuento } from "./descuentos.js";
console.log(totalDescuento);

import { calcularEnvio } from "./envio.js";
console.log(calcularEnvio);

import { esVIP } from "./vip.js";
console.log(esVIP);

console.log(`Hola ${nombre}, la cantidad de tus productos son: ${productos}, la cantidad total de tu compra: ${monto}`);
console.log(`Costo de envio ${calcularEnvio}`);
console.log(`Tienes un descuento del ${calcularDescuento}`);
console.log(`El total de tu compra con el descuento es: ${totalDescuento}`);