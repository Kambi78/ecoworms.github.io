document.addEventListener("DOMContentLoaded", () => {
  const menuHamburger = document.getElementById("menuHamburger");
  const menuHorizontal = document.getElementById("menuHorizontal");
  const loginButton = document.getElementById("loginButton");

  menuHamburger.addEventListener("click", () => {
    // Alternar la clase 'active' para abrir/cerrar el menú
    menuHorizontal.classList.toggle("active");
    loginButton.classList.toggle("active");
  });

  // Cierra el menú al hacer clic fuera de él
  document.addEventListener("click", (event) => {
    if (
      !menuHamburger.contains(event.target) &&
      !menuHorizontal.contains(event.target)
    ) {
      menuHorizontal.classList.remove("active");
      loginButton.classList.remove("active");
    }
  });
});
