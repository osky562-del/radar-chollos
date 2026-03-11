const buscarChollos = require("./bot")

setInterval(()=>{

console.log("Escaneando productos...")

buscarChollos()

},1800000)
