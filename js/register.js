    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const termsInput = document.getElementById('terms');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const termsError = document.getElementById('termsError');

    // Ocultar los mensajes de error inicialmente
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    confirmPasswordError.style.display = 'none';
    termsError.style.display = 'none';


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
            emailError.textContent = "Ingrese su correo";
            emailError.style.display = 'block';
            valid = false;
        } else if (!validateEmail(email)) {
            emailError.textContent = "El correo debe contener un @ y un punto.";
            emailError.style.display = 'block';
            valid = false;
        } else {
            emailError.style.display = 'none';
        }

        // Validación de la contraseña
        const password = passwordInput.value.trim();
        if (!password) {
            passwordError.textContent = "Ingrese su contraseña";
            passwordError.style.display = 'block';
            valid = false;
        } else if (!validatePassword(password)) {
            passwordError.textContent = "La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.";
            passwordError.style.display = 'block';
            valid = false;
        } else {
            passwordError.style.display = 'none';
        }

        // Validación de la confirmación de la contraseña
        const confirmPassword = confirmPasswordInput.value.trim();
        if (!confirmPassword) {
            confirmPasswordError.textContent = "Vuelva a ingresar su contraseña";
            confirmPasswordError.style.display = 'block';
            valid = false;
        } else if (confirmPassword !== password) {
            confirmPasswordError.textContent = "Las contraseñas no coinciden";
            confirmPasswordError.style.display = 'block';
            valid = false;
        } else {
            confirmPasswordError.style.display = 'none';
        }

        // Validación del checkbox de términos
        if (!termsInput.checked) {
            termsError.textContent = "Debe aceptar los términos y condiciones";
            termsError.style.display = 'block';
            valid = false;
        } else {
            termsError.style.display = 'none';
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

    // Función para validar la contraseña
    function validatePassword(password) {
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return regex.test(password);
    }