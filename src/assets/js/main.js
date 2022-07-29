


const button = document.querySelector(".burger");
let menu = document.querySelector(".nav");
let burgerButton = document.querySelector(".burger");

button.addEventListener("click", function () {
  menu.classList.toggle("active");
});

