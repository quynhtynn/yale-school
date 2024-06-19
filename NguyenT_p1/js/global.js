document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
  const overlay = document.querySelector(".overlay");

  mobileMenuIcon.addEventListener("click", function (event) {
    menu.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });
  overlay.addEventListener("click", function (event) {
    menu.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });
});
