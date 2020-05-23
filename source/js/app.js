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

var successModal = document.querySelector(".feedback__modal--sent");
var successClose = successModal.querySelector(".feedback__modal--sent .modal__button");
var successForm = document.querySelector(".feedback--js");

successForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  successModal.classList.add("modal__show");
});

successClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  successModal.classList.remove("modal__show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (successModal.classList.contains("modal__show")) {
      successModal.classList.remove("modal__show");
    }
  }
});

//googlemaps
function initMap() {
  var map = new google.maps.Map(document.getElementById("google-map"), {
    center: {lat:34.858587, lng: -111.788649},
    zoom: 7,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    styles: [
      {elementType: "geometry", stylers: [{color: "#f4f3ef"}]},
      {elementType: "labels.text.fill", stylers: [{color: "#9a8f75"}]},
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{color: "#000000"}]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{color: "#cbdfa3"}]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{color: "#2c501e"}]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{color: "#f7a000"}]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{color: "#e7cc67"}]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{color: "#b2ceff"}]
      }
    ]
  });
  var imageMarker = "img/icon-map-marker.svg";
  var marker = new google.maps.Marker ({
    position: {lat:34.878883, lng: -111.750628},
    map: map,
    icon: imageMarker,
    title: "Седона — небольшой городок в Аризоне, заслуживающий большего!",
  });
  map.hideControls();
}
