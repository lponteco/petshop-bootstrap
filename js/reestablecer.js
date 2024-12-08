document.addEventListener("DOMContentLoaded", () => {
    const formRestablecer = document.getElementById("formRestablecer");
    const email = document.getElementById("email");
    const errorEmail = document.getElementById("errorEmail");
  
    // Función para validar el correo electrónico
    const validarEmail = () => {
      const emailValue = email.value;
      
      // Si el campo de correo está vacío
      if (emailValue === "") {
        errorEmail.innerText = "El correo electrónico no puede estar vacío.";
        return false;
      }
  
      // Si el correo no contiene el '@'
      if (!emailValue.includes('@')) {
        errorEmail.innerText = "El correo debe ser válido (incluye '@' y '.').";
        return false;
      }
  
      // Si el correo no contiene el punto ('.') después del '@'
      if (!emailValue.includes('.', emailValue.indexOf('@'))) {
        errorEmail.innerText = "El correo debe ser válido (incluye '@' y '.').";
        return false;
      }
  
      // Si el correo es válido
      errorEmail.innerText = "";  // Limpiar cualquier mensaje de error
      return true;
    };
  
    // Al enviar el formulario
    formRestablecer.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Validar el correo electrónico al enviar el formulario
      if (validarEmail()) {
        // Mostrar un mensaje de éxito solo si el correo es válido
        alert("Se ha enviado un enlace de restablecimiento a tu correo.");
      }
    });
  
    // Habilitar el botón de envío solo si el correo es válido
    email.addEventListener("input", () => {
      const button = formRestablecer.querySelector("button[type='submit']");
      if (validarEmail()) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    });
  });  