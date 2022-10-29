const elHeaderMenuBtn = document.querySelector(".header__menu-btn-wrapper");

const elHeader = document.querySelector(".header");

elHeaderMenuBtn.onclick = () => {
  elHeaderMenuBtn.classList.toggle("active");
  elHeader.classList.toggle("mobile-menu");
  document.body.classList.toggle("overflow");
};
