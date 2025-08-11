
const whTxt = document.querySelector(".top-nav-whatsapp-txt");
const whImg = document.querySelector(".top-nav-whatsapp");
whImg.addEventListener("mouseover", () => {
  whTxt.classList.add("top-nav-whatsapp-txt-active");
});

whImg.addEventListener("mouseout", () => {
  whTxt.classList.remove("top-nav-whatsapp-txt-active");
});

// nav scroll effects
const whBtn = document.querySelector(".whatsapp-btn");
const topNav = document.querySelector(".nuone-top-nav-container");
const mobNav = document.querySelector(".nuone-mobile-top-bar");

window.addEventListener("scroll", () => {
  whBtn.classList.toggle("whats-app-active", window.scrollY > 100);
  topNav.classList.toggle("top-nav-scroll", window.scrollY > 100);
  window.scrollY > 100
    ? mobNav.classList.add("mobile-nav-scroll")
    : mobNav.classList.remove("mobile-nav-scroll");
});

// mobile nav
const mobNavBtn = document.querySelector(".mb-menu-btn");
mobNavBtn.addEventListener("click", () => {
  const mobNavLinks = document.querySelector(".mob-nav-links");
  mobNavLinks.classList.toggle("mob-nav-active");
});

// whatsapp
function sayHi(value) {
  setTimeout(() => {
    window.open(`https://wa.me/94772938630?text=${value}`, "_blank");
  }, 1000);
}

// slick
$(".techs").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".projects").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".dark").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// footer year
const footerYear = document.getElementById("footerYear");
const currentYear = new Date().getFullYear();
footerYear.innerHTML = currentYear;
