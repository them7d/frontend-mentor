var menuBar = document.querySelector(".icon-menu-bars"),
      closeBtn = document.querySelector('.close-menu-button'),
      menuContainer = document.querySelector(".menu-container");
closeBtn.addEventListener("click", () => { 
      menuContainer.classList.add("sm:hidden");
});
menuBar.addEventListener("click", () => {
      menuContainer.classList.remove("sm:hidden");
});