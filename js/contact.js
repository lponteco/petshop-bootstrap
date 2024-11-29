const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

// Ocultar los mensajes de error inicialmente
nameError.style.display = 'none';
emailError.style.display = 'none';
messageError.style.display = 'none';

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario para que no se recargue la página

    let valid = true;

    // Validación del nombre
    const name = nameInput.value.trim();
    if (!name) {
        nameError.textContent = "Ingrese su nombre";
        nameError.style.display = 'block';
        valid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Validación del correo
    const email = emailInput.value.trim();
    if (!email) {
        emailError.textContent = "Ingrese su correo electrónico";
        emailError.style.display = 'block';
        valid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = "El correo debe contener un @ y un punto.";
        emailError.style.display = 'block';
        valid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Validación del mensaje (si es necesario)
    const message = messageInput.value.trim();
    if (!message) {
        messageError.textContent = "Por favor, ingrese un mensaje.";
        messageError.style.display = 'block';
        valid = false;
    } else {
        messageError.style.display = 'none';
    }

    // Si el formulario es válido, lo enviamos
    if (valid) {
        form.submit(); // Aquí enviamos el formulario si todo está bien
    }
});

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
