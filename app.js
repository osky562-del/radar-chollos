import { db, collection, getDocs } from "./firebase.js";

async function buscar() {
  const contenedor = document.getElementById("resultados");
  contenedor.innerHTML = "Cargando...";

  const querySnapshot = await getDocs(collection(db,"chollos"));
  let html = "";

  querySnapshot.forEach(doc => {
    const d = doc.data();
    html += `
      <div class="resultado">
        Producto: ${d.producto}<br>
        Compra: ${d.precioCompra}€<br>
        Venta: ${d.precioVenta}€<br>
        Beneficio: ${d.beneficio}€
      </div>
    `;
  });

  contenedor.innerHTML = html;
}

window.buscar = buscar;
