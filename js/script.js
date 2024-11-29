// insertar header
document.getElementById("header").innerHTML = `
<header>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <a class="navbar-brand mx-auto" href="#">
                <img src="/img/logo.png" alt="Logo" width="50" height="50" class="d-inline-block align-text-top">
                Garritas🐾
            </a>

            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/index.html">Inicio</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Productos
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/productos/perros.html">Perros</a></li>
                            <li><a class="dropdown-item" href="/productos/gatos.html">Gatos</a></li>
                            <li><a class="dropdown-item" href="/productos/avesyroedores.html">Aves y Roedores</a></li>
                            <li><a class="dropdown-item" href="/productos/peces.html">Peces</a></li>
                            <li><a class="dropdown-item" href="/productos/otrasespecies.html">Otras Especies</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contacto</a>
                    </li>
                </ul>
            </div>

<div class="navbar-icons">
    <a href="#" id="dark-mode-toggle"><i class="fa-solid fa-moon"></i></a>
    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
    <a href="login.html"><i class="fa-solid fa-user"></i></a>
    <a href="#" onclick="openCart()"><i class="fa-solid fa-cart-shopping"></i></a>
</div>

        </div>
    </nav>
</header>
`;

// insertar footer
document.getElementById("footer").innerHTML = `
<footer class="text-center py-1">
    <div class="container">
        <div class="d-flex justify-content-center mb-2">

            <div class="footer-icons">
                <a href="https://www.google.com.ar/maps" target="_blank" class="mx-2 text-dark">
                    <i class="fa-solid fa-location-dot" style="color: #241b00;"></i></a>
        
                    <a href="https://wa.me/" target="_blank" class="mx-2 text-dark">
                    <i class="fa-brands fa-whatsapp" style="color: #241b00;"></i></a>
        
                    <a href="https://www.instagram.com/" target="_blank" class="mx-2 text-dark">
                    <i class="fa-brands fa-instagram" style="color: #241b00;"></i></a>
        
                    <a href="https://es-la.facebook.com/" target="_blank" class="mx-2 text-dark">
                    <i class="fa-brands fa-facebook" style="color: #241b00;"></i></a>
            </div>

        </div>
        <p class="mb-0">&copy; 2024 PetShop Garritas. Todos los derechos reservados.</p>
    </div>
</footer>
`;