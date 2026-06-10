const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
