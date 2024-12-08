document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formRegistro");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const terminos = document.getElementById("terminos");
    const btnEnviar = document.getElementById("btnEnviar");
  
    const errores = {
      name: "El nombre no puede estar vacío.",
      password: "La contraseña debe contener al menos 8 caracteres, una mayúscula, un número y un signo.",
      email: "El correo debe ser válido (incluye '@' y '.').",
      confirmPassword: "Las contraseñas deben coincidir.",
      terminos: "Acepte los términos para continuar.",
    };
  
    const validarCampo = (campo, errorId, condicion, mensaje) => {
      const error = document.getElementById(errorId);
      if (condicion) {
        error.innerText = mensaje;
        return false;
      } else {
        error.innerText = "";
        return true;
      }
    };
  
    const validarFormulario = () => {
      const nameValido = validarCampo(
        name,
        "errorName",
        name.value.trim() === "",
        errores.name
      );
  
      const emailValido = validarCampo(
        email,
        "errorEmail",
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value),
        errores.email
      );
  
      // Validación de la contraseña
      const passwordValido = validarCampo(
        password,
        "errorPassword",
        password.value.trim() === "" ||
        !/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password.value),
        errores.password
      );
  
      // Validación de la confirmación de la contraseña
      const confirmPasswordValido = validarCampo(
        confirmPassword,
        "errorConfirmPassword",
        confirmPassword.value.trim() === "" || confirmPassword.value !== password.value,
        errores.confirmPassword
      );
  
      // Validación de los términos
      const terminosValido = validarCampo(
        terminos,
        "errorTerminos",
        !terminos.checked,
        errores.terminos
      );
  
      // Habilitar o deshabilitar el botón según los estados de los campos
      const formularioValido =
        nameValido &&
        emailValido &&
        passwordValido &&
        confirmPasswordValido &&
        terminosValido;
  
      btnEnviar.disabled = !formularioValido;
  
      if (formularioValido) {
        btnEnviar.classList.add("active");
      } else {
        btnEnviar.classList.remove("active");
      }
    };
  
    // Escuchar cambios en todos los inputs y el checkbox
    form.addEventListener("input", validarFormulario);
    terminos.addEventListener("change", validarFormulario);
  
    // Controlar el envío del formulario
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  });