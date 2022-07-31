


const button = document.querySelector(".burger");
let menu = document.querySelector(".nav");
let navigation = document.querySelector(".nav__list");
let burgerButton = document.querySelector(".burger");
let toggle = document.querySelector('.nav-toggle');


navigation.addEventListener("click", function () {
  toggle.classList.toggle("opened");
});

navigation.addEventListener("click", function () {
  menu.classList.toggle("active");
});

toggle.addEventListener("click", function () {
  menu.classList.toggle("active");
});

(function () {
  toggle.addEventListener('click', function(e) {
    this.classList.toggle('opened'); 
  });
})();

// (function () {
//   let navigation = document.querySelector(".nav__list");
//   navigation.addEventListener('click', function(e) {
//     this.classList.toggle('opened'); 
//   });
// })();


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

