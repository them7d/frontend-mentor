var bill = document.querySelector("#bill").value,
      tip = document.querySelector("input[name='tabs']:checked"),
      numbersPerson = document.querySelector("#numberofpeople"),
      tipamount = document.querySelector("#tipamount"),
      total = document.querySelector("#total"),
      custom = document.querySelector("#customradiolabel"),
      custom_inp = document.querySelector("#custom");
numbersPerson.addEventListener("keyup", () => {
      updateResult(bill, document.querySelector("input[name='tabs']:checked").value, numbersPerson.value);
});
document.querySelectorAll("input[name='tabs']").forEach(el => {
      el.addEventListener("click", () => {
            updateResult(bill, document.querySelector("input[name='tabs']:checked").value, numbersPerson.value);
      });
});
custom.addEventListener("click", () => {
      custom.style.display = "none";
});
custom_inp.addEventListener("keyup", () => {
      updateResult(bill, custom_inp.value, numbersPerson.value);
});
document.querySelector("#reset").addEventListener("click", () => {
      tipamount.textContent = 0;
      total.textContent = 0;
      document.querySelector("#bill").value = 0;
      custom_inp = 0;
      numbersPerson.value = 0;

});
function updateResult(bill, tip, nop) {
      if (bill === '' || bill === "0" || tip === '' || tip === "0" || numbersPerson.value === '' || numbersPerson.value === "0") {
            tipamount.textContent = 0;
            total.textContent = 0;
      }
      else {
            tipamount.textContent = ((bill * (tip / 100)) / nop).toFixed(2);
            total.textContent = (((bill * (tip / 100)) / nop) + (bill / nop)).toFixed(2);
      }
}