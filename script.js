// script for side nav

const preloader = document.querySelector(".pre-loader");

window.addEventListener("load", () => {
    preloader.classList.add("disappear")
});

// script for top btn

const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        // topBtn.classList.add("appear");
    } else {
        topBtn.classList.remove("appear");
    }
});

// script for sidebar

const sidebar = document.querySelector(".side-bar");
const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-icon");

sidebar.style.right = "-250px";

menuBtn.addEventListener("click", () => {

    if (sidebar.style.right === "-250px") {
        sidebar.style.right = "0"
    } else {
        sidebar.style.right = "-250px"
    }

});

closeBtn.addEventListener("click", () => {

    if (sidebar.style.right === "0") {
        sidebar.style.right = "-250px"
    } else {
        sidebar.style.right = "0px"
    }

});

sidebar.addEventListener("click" , () => {
    if(sidebar.style.right === "0px"){
        sidebar.style.right = "-250px"
    } else {
        sidebar.style.right = "0px"
    }
});