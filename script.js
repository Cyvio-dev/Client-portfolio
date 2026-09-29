const button = document.querySelector(".switch");
const button_container = document.querySelector(".switch-container");
const body = document.body;

button_container.addEventListener("click", () => {
    body.classList.toggle("dark")
});

button.addEventListener("click", () => {
    body.classList.toggle("dark")
});

const dropdown_button = document.querySelector(".menu-button");
const dropdown_wrapper = document.querySelector(".nav-sections");

dropdown_button.addEventListener("click", () => {
    dropdown_wrapper.classList.toggle("open")
});