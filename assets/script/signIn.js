const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const form = document.getElementById("form");
const inputContainer = document.querySelector(".signIn__input");
const passwordContainer = document.getElementById("passwordInput-container");

// Get email and password from server.

const emailErrorText = document.createElement("p");
const passwordErrorText = document.createElement("p");
emailErrorText.innerHTML = "The email you entered is incorrect";

passwordErrorText.innerHTML = "The password you entered is incorrect";

emailErrorText.className = "error";
passwordErrorText.className = "error";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    emailInput.value !== "" &&
    emailInput.value.includes("@") &&
    emailInput.value.length > 6
  ) {
    emailInput.value = "";
  } else {
    emailInput.style.borderColor = "red";
    inputContainer.appendChild(emailErrorText);
  }

  if (passwordInput.value !== "") {
    passwordInput.value = "";
  } else {
    passwordInput.style.borderColor = "red";
    passwordContainer.appendChild(passwordErrorText);
  }
});
