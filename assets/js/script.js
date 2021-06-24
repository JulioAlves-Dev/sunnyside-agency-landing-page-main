const buttonMenuMobile = document.querySelector(".header .menu-hamburger");
const menuMobile = document.querySelector(".header .nav-mobile");

let menuOpen = false;

buttonMenuMobile.addEventListener("click", () => {
  if (!menuOpen) {
    menuMobile.style.display = "block";
    menuMobile.classList.remove("menu-close");
    menuMobile.classList.add("menu-open");
    menuOpen = true;
  } else {
    menuMobile.classList.remove("menu-open");
    menuMobile.classList.add("menu-close");

    setTimeout(() => {
      menuMobile.style.display = "none";
    }, 300);
    menuOpen = false;
  }
});

const tagsA = document.querySelectorAll("* a");
tagsA.forEach((e) => {
  e.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
