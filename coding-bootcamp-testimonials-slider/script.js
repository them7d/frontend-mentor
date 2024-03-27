// silder
var x = document.querySelectorAll(".slider-btn");
x.forEach((el) => {
      el.addEventListener("click", () => {
            // select next slide
            console.log("next slide");
            var slider = document.querySelector(".slide:not(.hidden)");
            // remove active slide
            document.querySelector(".slide.hidden").classList.remove("hidden");
            // active idle silde
            slider.classList.add("hidden");
      });
})
x.forEach((e) => console.log());