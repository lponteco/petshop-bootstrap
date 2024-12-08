document.addEventListener("DOMContentLoaded", () => {
    let productos = [];
  
    // Cargar el JSON
    fetch("productos.json")
      .then(response => response.json())
      .then(data => {
        console.log(data);  // Verifica que el JSON se cargue correctamente
        productos = data;
        mostrarProductos(productos);
      })
      .catch(error => console.error("Error al cargar el JSON:", error));
  
    // Mostrar productos en el DOM
    function mostrarProductos(lista) {
      const contenedor = document.getElementById("productos");
      contenedor.innerHTML = "";  // Limpiar contenido antes de mostrar nuevas cards
  
      // Asegúrate de que 'lista' tenga datos
      if (lista && lista.length > 0) {
        lista.forEach(producto => {
          const card = document.createElement("div");
          card.className = "card";
          const precio = parseFloat(producto.precio);
          
          // Manejo de errores para el precio
          if (isNaN(precio)) {
            console.error(`Precio no válido para el producto ${producto.nombre}`);
          }
          
          card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img">
            <h3 class="card-title">${producto.nombre}</h3>
            <p class="card-category">Categoría: ${producto.categoria}</p>
            <p class="card-price">Precio: $${precio.toFixed(2)}</p>
            <div class="card-buttons">
              <button id="${producto.botones.decrease}" class="btn">-</button>
              <input type="number" id="${producto.botones.input}" value="1" min="1">
              <button id="${producto.botones.increase}" class="btn">+</button>
              <a href="${producto.botones.comprar}" class="btn">Comprar</a>
            </div>
          `;
          contenedor.appendChild(card);
        });
      } else {
        contenedor.innerHTML = "<p>No se encontraron productos.</p>";
      }
    }
  });
  
  













  

  
  