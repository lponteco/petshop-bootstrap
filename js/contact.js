document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formRegistro");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const btnEnviar = document.getElementById("btnEnviar");
  
    const errores = {
      name: "El nombre no puede estar vacío.",
      email: "El correo debe ser válido (incluye '@' y '.').",
      message: "Por favor, escriba su mensaje.",
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
  
      const messageValido = validarCampo(
        message,
        "errorMessage", 
        message.value.trim() === "",
        errores.message
      );
  
      // Habilitar o deshabilitar el botón según los estados de los campos
      const formularioValido = nameValido && emailValido && messageValido;
  
      btnEnviar.disabled = !formularioValido;
  
      if (formularioValido) {
        btnEnviar.classList.add("active");
      } else {
        btnEnviar.classList.remove("active");
      }
    };
  
    // Escuchar cambios en todos los inputs
    form.addEventListener("input", validarFormulario);
  
    // Controlar el envío del formulario
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  });