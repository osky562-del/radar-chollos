// bot.js
import { productos } from "./scanner.js";
import { db } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";

export async function generarChollos() {
  for (const p of productos) {
    const precioCompra = Math.floor(Math.random() * 80) + 40;
    const precioVenta = Math.floor(Math.random() * 200) + 120;
    const beneficio = precioVenta - precioCompra;

    if (beneficio > 40) {
      await addDoc(collection(db, "chollos"), {
        producto: p,
        precioCompra,
        precioVenta,
        beneficio,
        fecha: new Date()
      });
      console.log("Chollo añadido:", p, "Beneficio:", beneficio);
    }
  }
}
