const toggleIcons = document.querySelectorAll(".toggle-icon");

toggleIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.parentNode.classList.toggle("show");

    if (icon.parentNode.classList.contains("show")) {
      icon.textContent = "-";
    } else {
      icon.textContent = "+";
    }
  });
});
