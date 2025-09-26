const form = document.getElementById("loginForm");
const form = document.getElementById("message");

const validEmail = "correo@dominio.com";
const validPassword = "123";

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email == validEmail && password == validPassword) {
        message.textContent= "login exitoso";
        message.style.color = "green";
    } else {
        message.textContent = "ERROR, usuario o contraseña incorrecto(s)";
        message.style.color = "red";
    }
});