const stars = document.querySelectorAll(".stars-con>span"),
    starRated = document.querySelector("#star-rated");
var active,
    raintingface = document.querySelector(".raingFace"),
    thank = document.querySelector(".thank"),
    btn = document.querySelector(".btn.submit");
stars.forEach(star => {
    star.addEventListener("click", () => {
        document.querySelector(".active") ? document.querySelector(".active").classList.remove("active") : 0;
        starRated.textContent = star.textContent;
        star.classList.add("active");
    });
});
btn.addEventListener("click", () => {
    raintingface.classList.add("hidden");
    thank.classList.remove("hidden");
});