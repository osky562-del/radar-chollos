// bot.js
import { db, collection, addDoc } from "./firebase.js";

async function generarChollosFake() {
  const productos = ["iPhone 13", "PS5", "Amazfit GTR 3", "Apple Watch"];
  for (const p of productos) {
    const compra = Math.floor(Math.random()*80)+40;
    const venta = Math.floor(Math.random()*200)+120;
    const beneficio = venta-compra;
    await addDoc(collection(db,"chollos"), {
      producto: p,
      precioCompra: compra,
      precioVenta: venta,
      beneficio,
      fecha: new Date()
    });
  }
}

setInterval(generarChollosFake, 1800000); // 30 minutos
