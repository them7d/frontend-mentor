var menuBar = document.querySelector(".icon-menu-bars"),
      closeBtn = document.querySelector('.close-menu-button'),
      menuContainer = document.querySelector(".menu-container");
closeBtn.addEventListener("click", () => {
      console.log("clicked");
      menuContainer.classList.add("xs:hidden");
});
menuBar.addEventListener("click", () => {
      console.log("clicked");
      menuContainer.classList.remove("xs:hidden");
});