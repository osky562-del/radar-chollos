const productos = require("./scanner")

function buscarChollos(){

productos.forEach(producto => {

let precioCompra = Math.floor(Math.random()*80)+40
let precioVenta = Math.floor(Math.random()*200)+120

let beneficio = precioVenta - precioCompra

if(beneficio > 40){

console.log("🔥 CHOLLO DETECTADO")

console.log(producto)
console.log("Compra:",precioCompra)
console.log("Venta:",precioVenta)
console.log("Beneficio:",beneficio)

}

})

}

module.exports = buscarChollos
