document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginBtn");
  const messageDiv = document.getElementById("message");

  loginBtn.addEventListener("click", function () {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      messageDiv.textContent = "Por favor, completa todos los campos.";
      messageDiv.className = "error";
      return;
    }

    // Validación de ejemplo
    if (username === "admin" && password === "1234") {
      messageDiv.textContent = "Inicio de sesión exitoso.";
      messageDiv.className = "success";
      // Puedes redirigir si quieres:
      // window.location.href = "dashboard.html";
    } else {
      messageDiv.textContent = "Usuario o contraseña incorrectos.";
      messageDiv.className = "error";
    }
  });
});
