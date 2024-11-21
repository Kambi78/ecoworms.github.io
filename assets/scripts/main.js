document.addEventListener("DOMContentLoaded", () => {
  const menuHamburguesita = document.getElementById("menuHamburguesita");
  const menuHorizontal = document.getElementById("menuHorizontal");
  const loginButton = document.getElementById("loginButton");

  const toggleMenu = (action) => {
    menuHorizontal.classList[action]("active");
    loginButton.classList[action]("active");
  };

  menuHamburguesita.addEventListener("click", () => {
    toggleMenu("toggle");
  });

  document.addEventListener("click", (event) => {
    if (
      !menuHamburguesita.contains(event.target) &&
      !menuHorizontal.contains(event.target)
    ) {
      toggleMenu("remove");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      toggleMenu("remove");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const openLoginForm = document.querySelector("#loginButton a");
  const closeModal = document.getElementById("closeModal");
  const authModal = document.getElementById("authModal");
  const loginForm = document.getElementById("loginForm");

  openLoginForm.addEventListener("click", (e) => {
    e.preventDefault();
    authModal.classList.remove("hidden");
  });

  closeModal.addEventListener("click", () => {
    authModal.classList.add("hidden");
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
      alert(`¡Bienvenido, ${username}!`);
      authModal.classList.add("hidden");
    } else {
      alert("Por favor, completa ambos campos.");
    }
  });
});

document
  .querySelector(".create-button a")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const targetSection = document.querySelector("#AgregarProyecto");
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
