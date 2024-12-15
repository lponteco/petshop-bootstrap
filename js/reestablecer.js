document.addEventListener("DOMContentLoaded", () => {
    const formRestablecer = document.getElementById("formRestablecer");
    const email = document.getElementById("email");
    const errorEmail = document.getElementById("errorEmail");
  
    const validarEmail = () => {
      const emailValue = email.value;
      
      if (emailValue === "") {
        errorEmail.innerText = "El correo electrónico no puede estar vacío.";
        return false;
      }
  
      if (!emailValue.includes('@')) {
        errorEmail.innerText = "El correo debe ser válido (incluye '@' y '.').";
        return false;
      }
  
      if (!emailValue.includes('.', emailValue.indexOf('@'))) {
        errorEmail.innerText = "El correo debe ser válido (incluye '@' y '.').";
        return false;
      }
  
      errorEmail.innerText = "";  
      return true;
    };
  
    formRestablecer.addEventListener("submit", (e) => {
      e.preventDefault();
  
      if (validarEmail()) {
        alert("Se ha enviado un enlace de restablecimiento a tu correo.");
      }
    });
  
    email.addEventListener("input", () => {
      const button = formRestablecer.querySelector("button[type='submit']");
      if (validarEmail()) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    });
  });  