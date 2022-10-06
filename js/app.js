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

// *** cookie modal ***
let cookieModal = document.querySelector("#cookieModal");
let acceptCookie = document.querySelector("#acceptCookie");
let cancelCookie = document.querySelector("#refusedCookie");
//
cancelCookie.addEventListener("click", function () {
    cookieModal.classList.remove("active");
});
//
acceptCookie.addEventListener("click", function () {
    let d = new Date();
    d.setMinutes(2 + d.getMinutes());
    document.cookie = "MonSiteImmo=true; expires = ' + d + ';";
    cookieModal.classList.remove("active");
});

// check cookie exist
const checkCookie = () => {
    let input = document.cookie.split("=");
    if (input[0] == "MonSiteImmo") {
        cookieModal.classList.remove("active");
    } else {
        cookieModal.classList.add("active");
    }
};
// check cookie exist page already load
window.onload = () => {
    setTimeout(() => {
        checkCookie();
    }, 1000);
};
