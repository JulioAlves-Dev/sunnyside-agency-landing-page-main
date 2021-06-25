const buttonMenuMobile = document.querySelector(".header .menu-hamburger");
const menuMobile = document.querySelector(".header .nav-mobile");

buttonMenuMobile.addEventListener("click", handleClick);

let htmladdEvent = false;

function handleClick() {
  menuMobile.classList.toggle("active");
  outsideClick(this);
}

function outsideClick(element) {
  const html = document.documentElement;
  if (!htmladdEvent) {
    html.addEventListener("click", handleOutsideClick);
    htmladdEvent = true;
  }

  function handleOutsideClick(event) {
    const containsElement = element.parentNode.contains(event.target);
    if (!containsElement) {
      menuMobile.classList.remove("active");
      html.removeEventListener("click", handleOutsideClick);
      htmladdEvent = false;
    }
  }
}

const tagsA = document.querySelectorAll("* a");
tagsA.forEach((e) => {
  e.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
