const burger = document.getElementById("burger")
const menu = document.querySelector(".menu")

burger.addEventListener("click", function(){
    this.classList.toggle("rotate")
    menu.classList.toggle("open")
})