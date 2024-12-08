document.getElementById("carousel").innerHTML = `
    <section>
        <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img id="carouselImg1" src="./img/carousel/carouselhome.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img id="carouselImg2" src="./img/carousel/carouselcuotas.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img id="carouselImg3" src="./img/carousel/carouselenvios.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Próximo</span>
            </button>
        </div>
    </section>
`;

document.getElementById("main").innerHTML = `
<main>
<section class="container mt-5">
    <h2 class="text-center mb-4">Nuestras Categorías</h2>
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">

        <div class="col">
            <div class="card category-card">
                <a href="/perros.html">
                    <img id="categoria1" src="./img/categorias/perrosok.jpg" class="card-img-top" alt="imagen de perro">
                </a>
            </div>
        </div>

        <div class="col">
            <div class="card category-card">
                <a href="/gatos.html">
                    <img id="categoria2" src="./img/categorias/gatoskaisa.jpg" class="card-img-top" alt="imagen de gato">
                </a>
            </div>
        </div>

        <div class="col">
            <div class="card category-card">
                <a href="/avesyroedores.html">
                    <img id="categoria3" src="./img/categorias/avesyroedores.jpg" class="card-img-top" alt="imagen de aves y roedores">
                </a>
            </div>
        </div>

        <div class="col">
            <div class="card category-card">
                <a href="/peces.html">
                    <img id="categoria4" src="./img/categorias/peces.jpg" class="card-img-top" alt="imagen de pez">
                </a>
            </div>
        </div>

        <div class="col">
            <div class="card category-card">
                <a href="/otrasespecies.html">
                    <img id="categoria5" src="./img/categorias/otrasespecies.jpg" class="card-img-top" alt="imagen de otras especies">
                </a>
            </div>
        </div>

    </div>
</section>
</main>
`;


document.getElementById("contacto").innerHTML = `
<section class="contact">
<h2>Contacto</h2>
<a name="contact"></a>
<form id="formRegistro" action="https://formspree.io/f/xzzbjlyr" method="POST">
  <label for="name">Nombre:</label>
  <input type="text" id="name" name="name" placeholder="Tu nombre">
  <p class="error1" id="errorName"></p> <!-- Cambié errorNombre por errorName -->

  <label for="email">Correo electrónico:</label>
  <input type="text" id="email" name="email" placeholder="Tu correo electrónico">
  <p class="error1" id="errorEmail"></p> <!-- Cambié errorEmail por errorEmail -->

  <label for="message">Mensaje:</label>
  <textarea id="message" name="message" placeholder="Escribí acá tu mensaje"></textarea>
  <p class="error1" id="errorMessage"></p> <!-- Cambié errorMessage por errorMessage -->

  <button id="btnEnviar" disabled type="submit">Enviar</button>
</form>
</section>
`;