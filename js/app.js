// slider \\
const itemsSlide = document.querySelectorAll(".container-slides img");
const nbSlides = itemsSlide.length;
console.log(nbSlides);
const next = document.querySelector(".right");
const before = document.querySelector(".left");
let count = 0;
// function next
next.addEventListener("click", nextSlide);
function nextSlide() {
    itemsSlide[count].classList.remove("active");
    if (count < nbSlides - 1) {
        count++;
    } else {
        count = 0;
    }
    itemsSlide[count].classList.add("active");
}
// function before
before.addEventListener("click", beforeSlide);
function beforeSlide() {
    itemsSlide[count].classList.remove("active");
    if (count > 0) {
        count--;
    } else {
        count = nbSlides - 1;
    }
    itemsSlide[count].classList.add("active");
}
