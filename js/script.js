var map = document.querySelector(".map");
var popup = document.querySelector(".modal-map");

map.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  });

var close = document.querySelector(".modal-close");
close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
