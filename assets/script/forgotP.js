const emailInput = document.getElementById("email");
const form = document.getElementById("form");
const inputContainer = document.getElementById("input-container");
const reset = document.getElementById("reset");
const success = document.getElementById("success");

const errorMessage = document.createElement("p");
errorMessage.innerHTML = "The email you entered is incorrect";
errorMessage.className = "error";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (emailInput.value !== "123") {
    emailInput.style.borderColor = "red";
    inputContainer.appendChild(errorMessage);
  } else {
    reset.style.display = "none";
    success.style.display = "block";
  }
});
