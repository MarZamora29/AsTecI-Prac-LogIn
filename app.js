const form = document.getElementById("loginForm");
const message = document.getElementById("message");

const validEmail = "test@correo.com";
const validPassword = "123456";

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email == validEmail && password == validPassword) {
        message.textContent= "login exitoso";
        message.style.color = "green";
    } else {
        message.textContent = "Usuario o contraseña incorrectos";
        message.style.color = "red";
    }
});