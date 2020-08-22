const menuButton = document.querySelector(".menu-btn");
const burger = document.querySelector(".menu-btn-burger");
const navbar = document.querySelector(".navbar");
const menuNav = document.querySelector(".menu-nav");
const menuItems = document.querySelectorAll(".menu-nav-item");

let menuShow = false;

function menutoggle() {
  if (!menuShow) {
    burger.classList.add("open");
    navbar.classList.add("open");
    menuNav.classList.add("open");
    menuItems.forEach((item) => item.classList.add("open"));

    menuShow = true;
  } else {
    burger.classList.remove("open");
    navbar.classList.remove("open");
    menuNav.classList.remove("open");
    menuItems.forEach((item) => item.classList.remove("open"));

    menuShow = false;
  }
}
menuButton.addEventListener("click", menutoggle);
