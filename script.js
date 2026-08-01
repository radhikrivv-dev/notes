// =========================
// Education Hub Script
// =========================

// Hamburger Menu
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

// Close menu when clicking outside
document.addEventListener("click", function(e) {
    const menu = document.getElementById("menu");
    const btn = document.querySelector(".menu-btn");

    if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.remove("show");
    }
});

// Welcome Message
window.onload = function() {
    setTimeout(function() {
        alert("🎓 Welcome to Education Hub!");
    }, 500);
};

// Search Subjects
const searchBox = document.querySelector(".search-section input");

if (searchBox) {
    searchBox.addEventListener("keyup", function() {

        let value = this.value.toLowerCase();

        let cards = document.querySelectorAll(".card");

        cards.forEach(function(card) {

            let text = card.innerText.toLowerCase();

            if (text.indexOf(value) > -1) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
}

// Button Click Animation
document.querySelectorAll("button").forEach(function(btn) {

    btn.addEventListener("click", function() {

        this.style.transform = "scale(.95)";

        setTimeout(() => {
            this.style.transform = "scale(1)";
        },150);

    });

});

// Fade-in Cards
const cards = document.querySelectorAll(".card");

cards.forEach(function(card,index){

    card.style.opacity="0";
    card.style.transform="translateY(30px)";

    setTimeout(function(){

        card.style.transition=".5s";

        card.style.opacity="1";

        card.style.transform="translateY(0)";

    },index*150);

});

// Current Year in Footer (optional)
const year = new Date().getFullYear();

const footer = document.querySelector("footer p");

if(footer){
footer.innerHTML = "© " + year + " Education Hub";
}
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let current = 0;

function showSlide(index){
    slides.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(d => d.classList.remove("active"));
    dots[index].classList.add("active");
}
function nextSlide() {
    current++;
    if (current >= slide.length) {
        current = 0;
    }
    showSlide(current);
}

function prevSlide() {
    current--;
    if (current < 0) {
        current = slide.length - 1;
    }
    showSlide(current);
}


setInterval(nextSlide, 3000);

// Touch swipe support
let startX = 0;
let endX = 0;

const slider = document.querySelector(".slider");

slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

slider.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
});

slider.addEventListener("touchend", () => {

    if (startX - endX > 50) {
        nextSlide();   // Swipe left
    }

    if (endX - startX > 50) {
        prevSlide();   // Swipe right
    }

});
