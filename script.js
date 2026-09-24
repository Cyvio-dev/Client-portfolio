const button = document.querySelector(".switch");
const body = document.body;

button.addEventListener("click", () => {
    body.classList.toggle("dark")
});

const dropdown_button = document.querySelector(".menu-button");
const dropdown_wrapper = document.querySelector(".nav-sections");

dropdown_button.addEventListener("click", () => {
    dropdown_wrapper.classList.toggle("open")
});