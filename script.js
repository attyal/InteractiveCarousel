// script.js

const carousel = document.querySelector(".carousel");

carousel.addEventListener("mouseover", (event) => {
    if (event.target.closest(".carousel-item")) {
        carousel.style.animationPlayState = "paused";
    }
});

carousel.addEventListener("mouseleave", () => {
    carousel.style.animationPlayState = "running";
});

function viewCategory(category) {
    alert("Displaying projects for " + category);
}