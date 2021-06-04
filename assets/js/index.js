const burger = document.querySelector(".burger__menu");
const menu = document.querySelector(".header-main");
const overlay = document.querySelector(".overlay");
burger.addEventListener("click", function(){
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    document.body.classList.toggle("active");
    // overlay.classList.toggle("active")

});