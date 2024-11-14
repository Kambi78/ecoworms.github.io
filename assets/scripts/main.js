document.addEventListener("DOMContentLoaded", () => {
  const menuHamburguesita = document.getElementById("menuHamburguesita");
  const menuHorizontal = document.getElementById("menuHorizontal");
  const loginButton = document.getElementById("loginButton");

  menuHamburguesita.addEventListener("click", () => {
    menuHorizontal.classList.toggle("active");
    loginButton.classList.toggle("active");
  });

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
