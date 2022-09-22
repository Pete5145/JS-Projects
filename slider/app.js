const body = document.body;
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
const carouselImages = document.querySelectorAll("#carousel-image");

let length = 0;
btnRight.addEventListener("click", () => {
  if (length < 4) {
    carouselImages[length].style.display = "none";
    carouselImages[length + 1].style.display = "block";
    length++;
  }
});

btnLeft.addEventListener("click", () => {
  if (length > 0) {
    carouselImages[length].style.display = "none";
    carouselImages[length - 1].style.display = "block";
    length--;
  }
});
