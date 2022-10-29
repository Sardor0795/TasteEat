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
