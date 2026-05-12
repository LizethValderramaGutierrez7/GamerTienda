let productos = ["Mouse", "Teclado", "Monitor", "Audifonos"];

function mostrarInventario(productos) {
    for(let i = 0; i < productos.length; i++){
console.log(productos[i]);
    }
}
mostrarInventario(productos);

function agregarProducto(productos, nuevoProducto){
    productos.push(nuevoProducto);
}
console.log(agregarProducto(productos, "Videojuegos"));
console.log(productos);

function eliminarUltimoProducto(productos, eliminarProducto){
    productos.pop(eliminarProducto);
}
console.log(eliminarUltimoProducto(productos, "videojuegos"));
console.log(productos);

function reemplazarProducto(indice, productoNuevo){
    productos.splice(indice, 1, productoNuevo);
}
console.log(reemplazarProducto(1, "Consolas"));
console.log(productos);


function buscarProducto(producto){
    let indice = productos.indexOf(producto);
if(indice !== -1){
    console.log("El producto esta en la posición:", indice);
}else{
    console.log("El producto no existe");
}
}
buscarProducto("Monitor");

function ordenarProductos() {
    productos.sort();
    console.log(productos);
}
ordenarProductos();

 function mostrarCantidad(){
console.log(productos.length);
    
 }
 mostrarCantidad(productos);