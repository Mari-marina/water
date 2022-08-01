




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



//# sourceMappingURL=script.js.map
