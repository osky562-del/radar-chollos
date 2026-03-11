async function escanear(){

console.log("escaneando chollos...")

// ejemplo simulación

let productos = [

"iphone 13",
"ps5",
"amazfit gtr 3",
"apple watch"

]

productos.forEach(p => {

let compra = Math.floor(Math.random()*50)+40
let venta = Math.floor(Math.random()*150)+120

let beneficio = venta-compra

if(beneficio > 40){

console.log("CHOLLO:",p,beneficio)

}

})

}
