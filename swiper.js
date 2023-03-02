//swiper
const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
  
    autoplay: {
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      600: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        allowSlidePrev: true,
        allowSlideNext: true,
      },
    },
  });

//tabs
function openLink(evt, animName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(animName).style.display = "flex";
    evt.currentTarget.className += " w3-red";
  }

//burgeris
const burger = document.getElementById("burger")
const links = document.querySelector(".links")



burger.addEventListener("click", function(){
    this.classList.toggle("rotate")
    links.classList.toggle("open")
})

const anchors = links.querySelectorAll("a");
const sections = document.querySelectorAll("section")

const navLinks = document.querySelectorAll('nav a');

