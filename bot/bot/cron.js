// cron.js
import { generarChollos } from "./bot.js";

console.log("Radar iniciado. Escaneo cada 30 minutos.");

setInterval(async () => {
  console.log("Escaneando productos...");
  await generarChollos();
}, 1800000); // 1800000ms = 30 minutos

// Ejecuta la primera vez inmediatamente
generarChollos();
