const form = document.getElementById("loginForm");
const form = document.getElementById("message");

const validEmail = "correo@dominio.com";
const validPassword = "123";

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
})