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

// Email Subscription validity
const form = document.getElementById("subscribe-form");
const email = document.getElementById("email-input-field");
const subscribeBtn = document.querySelector(".subscribe-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    email.value !== "" &&
    email.value.includes("@") &&
    email.value.length > 6
  ) {
    console.log(email.value);
  } else {
    console.log(123);
    email.classList.add("error");
    return;
  }
});
