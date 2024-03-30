var open_btn = document.querySelector(".open-navbar-mobile-btn"),
      close_btn = document.querySelector(".close-navbar-mobile-btn"),
      navbar = document.querySelector(".mobile-nav");
open_btn.addEventListener("click", () => {
      document.body.classList.add("overflow-hidden");
      open_btn.classList.add("hidden");
      close_btn.classList.remove("hidden");
      navbar.classList.remove("hidden");
});
close_btn.addEventListener("click", () => {
      document.body.classList.remove("overflow-hidden");
      open_btn.classList.remove("hidden");
      close_btn.classList.add("hidden");
      navbar.classList.add("hidden");

});