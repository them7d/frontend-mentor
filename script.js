document.querySelectorAll(".dropdownbtn").forEach(el => {
      el.addEventListener("click", () => {
            var img = el.children[0].children[0];
            console.log(img.getAttribute("src").indexOf("down"));
            if (img.getAttribute("src").indexOf("down") > -1) {
                  img.setAttribute("src", img.getAttribute("src").replace("down", "up"));
            }
            else {
                  img.setAttribute("src", img.getAttribute("src").replace("up", "down"));
            }
      });
})
document.querySelector(".colse-menu").addEventListener("click", () => {
      document.querySelector(".mobile").classList.add("animate__animated", "animate__fadeOutRight");
      setTimeout(() => {
            document.querySelector(".mobile").classList.remove("animate__animated", "animate__fadeOutRight");
            document.querySelector(".mobile-after").classList.add("after:hidden");
            document.querySelector(".mobile").classList.add("hidden");
            document.querySelector(".mobile-after").classList.add("hidden");
      }, 1000);
});
document.querySelector(".mobile-menubar").addEventListener("click", () => {
      document.querySelector(".mobile-after").classList.remove("after:hidden");
      document.querySelector(".mobile-after").classList.remove("hidden");
      document.querySelector(".mobile").classList.remove("hidden");
      document.querySelector(".mobile").classList.add("animate__animated", "animate__fadeInRight");
      setTimeout(() => {
            document.querySelector(".mobile").classList.remove("animate__animated", "animate__fadeInRight");
      }, 1000);

});