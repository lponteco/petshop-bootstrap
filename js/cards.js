document.addEventListener("DOMContentLoaded", () => {
  let productos = [];

  // Cargar el JSON
  fetch("productos.json")
    .then(response => response.json())
    .then(data => {
      console.log(data);  // Verifica que el JSON se cargue correctamente
      productos = data;

      // Obtener la categoría desde la URL
      const categoriaActual = obtenerCategoriaDeURL();

      // Filtrar los productos según la categoría
      let productosFiltrados = productos.filter(producto => producto.categoria.toLowerCase() === categoriaActual.toLowerCase());

      // Filtrar productos destacados
      let productosDestacados = productos.filter(producto => producto.destacado === true);

      // Mostrar productos destacados
      mostrarProductosDestacados(productosDestacados);

      // Mostrar solo los productos filtrados por categoría
      mostrarProductos(productosFiltrados);
    })
    .catch(error => console.error("Error al cargar el JSON:", error));

  // Función para obtener la categoría de la URL
  function obtenerCategoriaDeURL() {
    const path = window.location.pathname;  // Obtiene la URL completa
    if (path.includes("gatos")) {
      return "gatos";
    } else if (path.includes("perros")) {
      return "perros";
    } else if (path.includes("avesyroedores")) {
      return "avesyroedores";
    } else if (path.includes("peces")) {
      return "peces";
    } else if (path.includes("otrasespecies")) {
      return "otrasespecies";
    } else {
      return "";  // En caso de no encontrar una categoría definida en la URL
    }
  }

  // Mostrar productos destacados en el DOM
  function mostrarProductosDestacados(lista) {
    const contenedorDestacados = document.getElementById("productos-destacados");
    contenedorDestacados.innerHTML = "";  // Limpiar contenido antes de mostrar nuevas cards

    // Asegúrate de que 'lista' tenga datos
    if (lista && lista.length > 0) {

      // Asegurarse de que los productos destacados se vean de a 4
      const gridContainer = document.createElement("div");
      gridContainer.id = "productos-destacados-grid";
      gridContainer.style.display = "grid";
      gridContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
      gridContainer.style.gap = "20px";
      gridContainer.style.justifyItems = "center";  // Para centrar los productos dentro de la cuadrícula
      contenedorDestacados.appendChild(gridContainer);

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
        gridContainer.appendChild(card);
      });
    } else {
      contenedorDestacados.innerHTML = "<p>No se encontraron productos destacados.</p>";
    }
  }

  // Mostrar productos en el DOM (por categoría)
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
    }
  }
});




  













  

  
  