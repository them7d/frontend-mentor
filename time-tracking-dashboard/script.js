const daily_btn = document.querySelector("#daily-analysis"),
      weekly_btn = document.querySelector("#weekly-analysis"),
      monthly_btn = document.querySelector("#monthly-analysis");
var groups = ["work", "play", "study", "exercise", "social", "self-care"];
function getData(target, i) {
      fetch("./data.json").then(response => response.json()).then(response => data = response[i]["timeframes"][target]["current"]);
      return data;
}
function setData(target) {
      var data = "";
      document.querySelectorAll(".timing").forEach((el) => { el.textContent = target });
      for (let i = 0; i < groups.length; i++) {
            if (target === "day") {
                  target = "daily";
            }
            else if (target === "week") {
                  target = "weekly"
            }
            else if (target === "month") {
                  target = "monthly"
            }

            fetch("./data.json").then(response => response.json()).then(response => response[i]["timeframes"][target]["current"]).then(data => document.querySelector(`#${groups[i]}-time`).textContent = data);
            fetch("./data.json").then(response => response.json()).then(response => response[i]["timeframes"][target]["previous"]).then(data => document.querySelector(`.previous-${groups[i]}`).textContent = data);


      }
}
daily_btn.addEventListener("click", () => {
      setData("day");
});
weekly_btn.addEventListener("click", () => {
      setData("week");
});
monthly_btn.addEventListener("click", () => {
      setData("month");
});
setData("week");