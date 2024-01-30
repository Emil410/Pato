let opnleftBar = document.querySelector(".fa-bars");
let leftBar = document.querySelector("aside");
let clsleftBar = document.querySelector(".fa-x");
let body = document.querySelector("body");
opnleftBar.addEventListener("click", () => {
    leftBar.classList.remove("none")
    leftBar.classList.add("add");
    body.classList.add("black_background_aside");
});
clsleftBar.addEventListener("click", () => {
    leftBar.classList.remove("add");
    leftBar.classList.add("none");
    body.classList.remove("black_background_aside");
});