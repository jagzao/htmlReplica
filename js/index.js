var carousel = document.querySelector(".carousel");
var carouselImages = document.querySelectorAll(".carousel_image");
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
var counter = 1;
var size = carouselImages[0].clientWidth;

carousel.style.transform = "translateX(" + (-size * counter) + "px)";

function moveCarousel(n) {
  counter += n;
  carousel.style.transition = "transform 0.5s ease-in-out";
  carousel.style.transform = "translateX(" + (-size * counter) + "px)";
}

carousel.addEventListener("transitionend", function() {
  if (carouselImages[counter].id === "lastClone") {
    carousel.style.transition = "none";
    counter = carouselImages.length - 2;
    carousel.style.transform = "translateX(" + (-size * counter) + "px)";
  }
  if (carouselImages[counter].id === "firstClone") {
    carousel.style.transition = "none";
    counter = carouselImages.length - counter;
    carousel.style.transform = "translateX(" + (-size * counter) + "px)";
  }
});

prevBtn.addEventListener("click", function() {
  moveCarousel(-1);
});

nextBtn.addEventListener("click", function() {
  moveCarousel(1);
});

function showImage(n) {
  counter = n;
  carousel.style.transition = "transform 0.5s ease-in-out";
  carousel.style.transform = "translateX(" + (-size * counter) + "px)";
}