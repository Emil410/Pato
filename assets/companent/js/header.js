let opnleftBar = document.querySelector(".fa-bars");
let leftBar = document.querySelector("aside");
let clsleftBar = document.querySelector(".fa-x");
let body = document.querySelector("body");
opnleftBar.addEventListener("click", () => {
    leftBar.classList.remove("none");
    leftBar.classList.add("show");
    body.classList.add("black_background_aside");
});

clsleftBar.addEventListener("click", () => {
    leftBar.classList.remove("show");
    leftBar.classList.add("none");
    body.classList.remove("black_background_aside");
});
document.addEventListener("DOMContentLoaded", function() {
    let header = document.querySelector("header");
    let links = document.querySelectorAll("header a");
    let logoLink = document.querySelector(".logo_link");
    let i = document.querySelector(".fa-bars");

    window.addEventListener("scroll", function() {
        let scrollPosition = window.scrollY;

        if (scrollPosition > 0) {
            header.style.backgroundColor = "rgba(255, 255, 255, 0.933)";
            logoLink.innerHTML = '<img src="https://preview.colorlib.com/theme/pato/images/icons/logo2.png.webp" class="pato_img" alt="">';
            i.style.color = "black";
            for (let i = 0; i < links.length; i++) {
                links[i].classList.remove("white_color");
                links[i].classList.add("black_color");
            }
        } else {
            header.style.backgroundColor = "transparent";
            logoLink.innerHTML = '<img src="https://preview.colorlib.com/theme/pato/images/icons/logo.png.webp" class="pato_img" alt="">';
            i.style.color = "white";
            for (let i = 0; i < links.length; i++) {
                links[i].classList.remove("black_color");
                links[i].classList.add("white_color");
            }
        };
    });
});