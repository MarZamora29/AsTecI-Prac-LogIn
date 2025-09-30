const form = document.getElementById("loginForm");
const message = document.getElementById("message");

const validEmail = "test@correo.com";
const validPassword = "123456A"; //E: agregue "A"-mayúscula

//E: Función para validar contraseña-------------------------
function validarPassword(password) {
  const minLength = 6;
  const tieneMayuscula = /[A-Z]/.test(password); // al menos con una mayúscula
  if (password.length < minLength) {
    return "La contraseña debe tener al menos 6 caracteres";
  }
  if (!tieneMayuscula) {
    return "La contraseña debe incluir al menos una letra mayúscula";
  }
  return ""; // vacío si no hay errores
}
//E: ------------------------------------------------------

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

//E: ------------------------------------------------------
// Validar contraseña antes de checar usuario/contraseña correctos
const errorPassword = validarPassword(password);
if (errorPassword) {
    message.textContent = errorPassword;
    message.style.color = "red";
    return; //E: si falla la validación aquí se detiene
}
//E:-------------------------------------------------------

    if (email == validEmail && password == validPassword) {
        message.textContent= "login exitoso, redirigiendo..."; //E:se agregó: redirigiendo...
        message.style.color = "green";
        //E: redirección ---------------------------------
        setTimeout(() => {
            window.location.href = "bienvenida.html"; 
        }, 2000); //E:-------------------------------------
    } else {
        message.textContent = "Usuario o contraseña incorrectos";
        message.style.color = "red";
    }
});