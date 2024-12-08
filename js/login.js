document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formRegistro");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const btnEnviar = document.getElementById("btnEnviar");
  
    const errores = {
      password: "La contraseña debe contener al menos 8 caracteres, una mayúscula, un número y un signo.",
      email: "El correo debe ser válido (incluye '@' y '.').",
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
      const emailValido = validarCampo(
        email,
        "errorEmail",
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value),
        errores.email
      );
  
      // validacion para la contraseña
      const passwordValido = validarCampo(
        password,
        "errorPassword",
        password.value.trim() === "" || 
        !/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password.value),
        errores.password
      );
  
      // Habilitar o deshabilitar el botón según los estados de los campos
      const formularioValido = emailValido && passwordValido;
  
      btnEnviar.disabled = !formularioValido;
  
      if (formularioValido) {
        btnEnviar.classList.add("active");
      } else {
        btnEnviar.classList.remove("active");
      }
    };
  
    // Escuchar cambios en todos los inputs y el checkbox
    form.addEventListener("input", validarFormulario);
  
    // Controlar el envío del formulario
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  });