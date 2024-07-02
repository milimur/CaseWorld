const contenedorTarjetas = document.getElementById("cart-container");
const cantidadElement = document.getElementById("cantidad");
const precioElement = document.getElementById("precio");
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesContainer = document.getElementById("totales");

/** Crea las tarjetas de productos teniendo en cuenta lo guardado en localstorage */
function crearTarjetasProductosCarrito() {
  contenedorTarjetas.innerHTML = "";
  const productos = JSON.parse(localStorage.getItem("fundas"));
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      const nuevaFunda = document.createElement("div");
      nuevaFunda.classList = "tarjeta-producto";
      nuevaFunda.innerHTML = `
        <img src="../productImage/${producto.id}.jpg" alt="Funda ${producto.id}">
        <h3>${producto.nombre}</h3>
        <span>$${producto.precio}</span>
        <div id="cantidad">
          <button class="decremento">-</button>
          <input type="number" class="cantidad" value="${producto.cantidad}" min="1">
          <button class="incremento">+</button>
        </div>
      `;
      contenedorTarjetas.appendChild(nuevaFunda);

      // Botón de restar cantidad
      nuevaFunda
        .getElementsByClassName("decremento")[0]
        .addEventListener("click", (e) => {
          const cantidadElement = e.target.parentElement.getElementsByClassName("cantidad")[0];
          cantidadElement.value = restarAlCarrito(producto);
          actualizarTotales();
        });

      // Botón de sumar cantidad
      nuevaFunda
        .getElementsByClassName("incremento")[0]
        .addEventListener("click", (e) => {
          const cantidadElement = e.target.parentElement.getElementsByClassName("cantidad")[0];
          cantidadElement.value = agregarAlCarrito(producto);
          actualizarTotales();
        });

      // Campo de entrada para la cantidad
      nuevaFunda
        .getElementsByClassName("cantidad")[0]
        .addEventListener("change", (e) => {
          const nuevaCantidad = parseInt(e.target.value, 10);
          if (nuevaCantidad > 0) {
            actualizarCantidadCarrito(producto, nuevaCantidad);
            actualizarTotales();
          } else {
            e.target.value = producto.cantidad;
          }
        });
    });
  }
  revisarMensajeVacio();
  actualizarTotales();
  actualizarNumeroCarrito();
}

crearTarjetasProductosCarrito();

/** Actualiza el total de precio y unidades de la página del carrito */
function actualizarTotales() {
  const productos = JSON.parse(localStorage.getItem("fundas"));
  let cantidad = 0;
  let precio = 0;
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      cantidad += producto.cantidad;
      precio += producto.precio * producto.cantidad;
    });
  }
  cantidadElement.innerText = cantidad;
  precioElement.innerText = precio;
  if (precio === 0) {
    reiniciarCarrito();
    revisarMensajeVacio();
  }
}

document.getElementById("reiniciar").addEventListener("click", () => {
  contenedorTarjetas.innerHTML = "";
  reiniciarCarrito();
  revisarMensajeVacio();
});

/** Muestra o esconde el mensaje de que no hay nada en el carrito */
function revisarMensajeVacio() {
  const productos = JSON.parse(localStorage.getItem("fundas"));
  carritoVacioElement.classList.toggle("escondido", productos && productos.length > 0);
  totalesContainer.classList.toggle("escondido", !productos || productos.length === 0);
}

/** Actualiza la cantidad de un producto en el carrito */
function actualizarCantidadCarrito(producto, nuevaCantidad) {
  let memoria = JSON.parse(localStorage.getItem("fundas"));
  const indiceProducto = memoria.findIndex(funda => funda.id === producto.id);
  if (indiceProducto !== -1 && nuevaCantidad > 0) {
    memoria[indiceProducto].cantidad = nuevaCantidad;
    localStorage.setItem("fundas", JSON.stringify(memoria));
    actualizarNumeroCarrito();
  }
}