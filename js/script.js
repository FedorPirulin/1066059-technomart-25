 Map
var map = document.querySelector(".map");
var popup = document.querySelector(".modal-map");
var feedback = document.querySelector(".map-button");
var feedbackPopup = document.querySelector(".modal-feedback");
var serviceListDelivery = document.querySelector(".services-list-delivery");
var serviceListWarranty = document.querySelector(".services-list-warranty");
var serviceListCredit = document.querySelector(".services-list-credit");
var descriptionDelivery = document.querySelector(".block-delivery");
var descriptionWarranty = document.querySelector(".block-warranty");
var descriptionCredit = document.querySelector(".block-credit");
var sliderDotOne = document.querySelector(".dot-button-one");
var sliderDotTwo = document.querySelector(".dot-button-two");
var sliderLeft = document.querySelector(".left-triangle");
var sliderRight = document.querySelector(".right-triangle");
var slideDrill = document.querySelector(".service-drill");
var slidePerforator = document.querySelector(".service-perforators");


map.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});
var close = popup.querySelector(".modal-close");
close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

//  ModalFeedback
feedback.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");
});
var close = feedbackPopup.querySelector(".modal-close");
close.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
});

// Services
serviceListDelivery.addEventListener("focus", function(evt) {
    evt.preventDefault();
    descriptionDelivery.classList.add("services-show");
    descriptionWarranty.classList.remove("services-show");
    descriptionCredit.classList.remove("services-show");
    descriptionDelivery.classList.remove("display-none");
});
serviceListWarranty.addEventListener("focus", function(evt) {
    evt.preventDefault();
    descriptionDelivery.classList.add("display-none");
    descriptionWarranty.classList.add("services-show");
    descriptionDelivery.classList.remove("services-show");
    descriptionCredit.classList.remove("services-show");
});
serviceListCredit.addEventListener("focus", function(evt) {
    evt.preventDefault();
    descriptionDelivery.classList.add("display-none");
    descriptionCredit.classList.add("services-show");
    descriptionWarranty.classList.remove("services-show");
    descriptionDelivery.classList.remove("services-show");
});

// Slider
sliderDotOne.addEventListener("focus", function(evt) {
    evt.preventDefault();
    slideDrill.classList.add("services-show");
    slidePerforator.classList.remove("services-show");
    slideDrill.classList.remove("display-none");
});

sliderDotTwo.addEventListener("focus", function(evt) {
    evt.preventDefault();
    slidePerforator.classList.add("services-show");
    slideDrill.classList.add("display-none");
});

//  ModalBuy

var buyButton = document.querySelector(".button-buy");
var popupBuy = document.querySelector(".modal-buy");
buyButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupBuy.classList.add("modal-show");
});
var close = popupBuy.querySelector(".modal-close");
close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupBuy.classList.remove("modal-show");
});
