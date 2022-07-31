


const button = document.querySelector(".burger");
let menu = document.querySelector(".nav");
let burgerButton = document.querySelector(".burger");

button.addEventListener("click", function () {
  menu.classList.toggle("active");
});


const line = document.querySelector(".questions__wrap");
let details = document.querySelector(".questions__summary");

details.addEventListener("click", function () {
  line.classList.toggle("active_wrap");
});