


const button = document.querySelector(".burger");
let menu = document.querySelector(".nav");
let burgerButton = document.querySelector(".burger");

button.addEventListener("click", function () {
  menu.classList.toggle("active");
});

menu.addEventListener("click", function () {
  menu.classList.toggle("active");
});


let anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    let blockID = anchor.getAttribute("href");
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

const line = document.querySelector(".questions__wrap");
let details = document.querySelector(".questions__summary");

details.addEventListener("click", function () {
  line.classList.toggle("active_wrap");
});