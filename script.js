var bill = document.querySelector("#bill").value,
      tip = document.querySelector("input[name='tabs']:checked"),
      numbersPerson = document.querySelector("#numberofpeople").value,
      tipamount = document.querySelector("#tipamount"),
      total = document.querySelector("#total");
document.querySelectorAll("input[name='tabs']").forEach(el => {
      el.addEventListener("click", () => {
            tip = document.querySelector("input[name='tabs']:checked").value;
            tipamount.textContent = ((bill * (tip / 100)) / numbersPerson).toFixed(2);
            total.textContent = (((bill * (tip / 100)) / numbersPerson) + (bill / 5)).toFixed(2);
            console.log(((bill * (tip / 100)) / numbersPerson) + (bill / 5));
      });
});