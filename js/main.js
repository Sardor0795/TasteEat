const elHeaderMenuBtn = document.querySelector(".header__menu-btn-wrapper");
const elHeader = document.querySelector(".header");
const elsSiteNav = document.querySelectorAll(".js-site-nav");

if (elHeaderMenuBtn) {
  elHeaderMenuBtn.onclick = () => {
    elHeaderMenuBtn.classList.toggle("active");
    elHeader.classList.toggle("mobile-menu");
    document.body.classList.toggle("overflow");
  };
}

if (elsSiteNav) {
  elsSiteNav.forEach((e) => {
    e.onclick = () => {
      elHeaderMenuBtn.classList.remove("active");
      elHeader.classList.remove("mobile-menu");
      document.body.classList.remove("overflow");
    };
  });
}

// Loader

const elLoader = document.querySelector(".loader-wrapper");

if (elLoader) {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      elLoader.classList.add("close");
    }, 500);
  });
}

// Sticky Navbar

const header = document.querySelector(".header");
const elNavBar = document.querySelector(".js-nav-bar");

if (elNavBar) {
  window.onscroll = () => {
    if (window.pageYOffset >= elNavBar.offsetTop + 100) {
      elNavBar.classList.add('sticky-menu')
    } else {
      elNavBar.classList.remove('sticky-menu')
    }
  }
}