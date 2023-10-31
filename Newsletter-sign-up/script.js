var submit = document.querySelector("#submit");
submit.addEventListener("click", () => {
    document.querySelector(".success").classList.remove("hidden");
    document.querySelector(".signInContainer").classList.add("hidden");
    document.querySelector(".imgSignIn").classList.add("hidden");
});