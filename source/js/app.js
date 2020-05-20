var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

/*
var successModal = document.querySelector(".feedback__modal--sent");
var successClose = successModal.querySelector(".feedback__modal--sent .modal__button");
var successLink = document.querySelector(".feedback__button");

successLink.addEventListener("submit", function (evt) {
  evt.preventDefault();
  successModal.classList.add("modal__show");
});

successClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  successModal.classList.remove("modal__show");
});
*/
