const jsonURL = 'productos.json';

function cargarProductos(categoria) {
    fetch(jsonURL)
        .then(response => response.json())
        .then(data => {
            const productosFiltrados = data.filter(producto => producto.categoria === categoria);

            mostrarProductos(productosFiltrados);
        })
        .catch(error => console.error('Error al cargar los productos:', error));
}

function mostrarProductos(productos) {
    const contenedor = document.getElementById('productos-container');
    
   
    contenedor.innerHTML = ''; 

    productos.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('card'); 

        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img">
            <div class="card-content">
                <div class="card-title">${producto.nombre}</div>
                <div class="card-price">$${producto.precio}</div>
                <button class="card-button" onclick="agregarAlCarrito(${producto.id})">Comprar</button>
            </div>
        `;

        contenedor.appendChild(divProducto);
    });
}


cargarProductos('gatos');


