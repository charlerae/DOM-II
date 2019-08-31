// MouseOver
const navbuttons = document.querySelector(".main-navigation .nav-link");
navbuttons.addEventListener("mouseover", function(e){
    e.target.style.backgroundcolor = "blue";
});

// KeyDown
let images = document.querySelectorAll(".img-content");

window.addEventListener("keydown", e => {
    if(e.keyCode === 65) {
        images.forEach(img => {
            img.style.transform = "rotate(180deg)";
        });
    }
});

// DoubleClick
const funbuslogo = document.querySelector(".logo-heading");

// funbuslogo.addEventListener("dblclick",)