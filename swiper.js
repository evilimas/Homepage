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
      700: {
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
    for (i = 0; i < tablinks.length; i++) {
      if (tablinks[i] != evt.currentTarget) {
        tablinks[i].classList.remove("active");
      }
    }
    document.getElementById(animName).style.display = "flex";
    evt.currentTarget.classList.add("active");
  }
//burgeris
const burger = document.getElementById("burger");
  const links = document.querySelector(".links");
  const anchors = links.querySelectorAll("a");
  
  burger.addEventListener("click", function () {
    this.classList.toggle("rotate");
    links.classList.toggle("open");
  });
  
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      burger.classList.toggle("rotate");
    }
  });
  
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", function () {
    let current = "";
    for (var section of sections) {
      if (window.pageYOffset >= section.offsetTop - 280) {
        current = section.getAttribute("id");
      }
    }
  
    for (var anchor of anchors) {
      anchor.classList.remove("selected");
      if (anchor.getAttribute("href") === "#" + current) {
        anchor.classList.add("selected");
      }
    }
  });
// Formu validacija

// Paimame formos element??
const form = document.querySelector('form.top');

// Pridedame "submit" ??vykio klausym??
form.addEventListener('submit', (event) => {
  // Pridedame "preventDefault" metod??, kad sustabdytume numatyt??j?? formos elges??
  event.preventDefault();

  // Paimame visus ??vesties laukus ir radio mygtukus
  const firstName = form.querySelector('input[name="firstName"]');
  const lastName = form.querySelector('input[name="lastName"]');
  const phoneNumber = form.querySelector('input[name="phoneNumber"]');
  const subscription = form.querySelector('input[name="message"]:checked');

  // Tikriname ar visi laukai yra u??pildyti
  if (firstName.value === '') {
    alert('Pra??ome ??vesti savo vard??');
    return;
  }

  if (lastName.value === '') {
    alert('Pra??ome ??vesti savo pavard??');
    return;
  }

  if (phoneNumber.value === '') {
    alert('Pra??ome ??vesti savo telefono numer??');
    return;
  }

  // Tikriname ar prenumeratos r????is yra pasirinkta
  if (!subscription) {
    alert('Pra??ome pasirinkti prenumeratos r??????');
    return;
  }

  // Jei visi laukai yra u??pildyti, siun??iame form??
  form.submit();
});
