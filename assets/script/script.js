/// NAV RESPONSIVENESS ///

const openNav = document.querySelector(".open");
const closeNav = document.querySelector(".close");
const sideNav = document.querySelector(".side-nav");

openNav.addEventListener("click", () => sideNav.classList.add("visible"));

closeNav.addEventListener("click", () => sideNav.classList.remove("visible"));

// FAQ TOGGLE//

const toggleIcons = document.querySelectorAll(".toggle-icon");

toggleIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.parentNode.classList.toggle("show");

    if (icon.parentNode.classList.contains("show")) {
      icon.src = "./assets/images/- .svg";
    } else {
      icon.src = "./assets/images/+.svg";
    }
  });
});
