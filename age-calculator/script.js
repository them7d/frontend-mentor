
const day = document.querySelector("#day"),
      month = document.querySelector("#month"),
      year = document.querySelector("#year"),
      submit = document.querySelector(".arrow-con"),
      dayPlaceholder = document.querySelector(".days-placeholder"),
      monthPlaceholder = document.querySelector(".months-placeholder"),
      yearPlaceholder = document.querySelector(".years-placeholder"),
      presentDate = new Date();
const day30 = ["4", "04", "6", "06", "9", "09", "11"],
      day31 = ["1", "01", "3", "03", "5", "05", "7", "07", "8", "08", "10", "12"];
function trigger_invalid(id, error_message) {
      var   container = document.querySelector(`#in_${id}`),
            error = document.querySelector(`.${id}-error_message`);
      container.classList.add("invalid_container");
      error.textContent = error_message;
}
function reset_validation_error() {
      ["day", "month", "year"].map((i) => {
            var   container = document.querySelector(`#in_${i}`),
                  error = document.querySelector(`.${i}-error_message`);
            container.classList.remove("invalid_container");
            error.textContent = "";
      });
}
function sortOnPlaceholders() {
      var date = new Date(`${year.value}-${month.value}-${day.value}`),
            years = Math.abs(presentDate.getFullYear() - date.getFullYear()),
            months = Math.abs(presentDate.getMonth() - date.getMonth()),
            days = Math.abs(presentDate.getDate() - date.getDate());
      if ((day.value === "" || day.value === 0) || (month.value === "" || month.value === 0 || 0 > month.value || month.value > 12) || (year.value == 0 || year.value === "" || 0 > year.value || year.value > presentDate.getFullYear())) {

            if(day.value == 0 || day.value === "" || 0 > day.value || day.value > 31){
                  if (day.value == 0 || day.value === "") {
                        trigger_invalid("day", "This field is required");
                  }
                  else {
                        trigger_invalid("day", "Must be a valid day");
                  }
            }
            if (month.value == 0 || month.value === "" || 0 > month.value || month.value > 12){ 
                  if(month.value == 0 || month.value === ""){
                        trigger_invalid("month", "This field is required");
                  }
                  else {
                        trigger_invalid("month", "Must be a valid month");
                  }
            }
            if (year.value == 0 || year.value === "" || 0 > year.value || year.value > presentDate.getFullYear()) {
                  if(year.value == 0 || year.value === ""){
                        trigger_invalid("year", "This field is required");
                  }
                  else if (year.value > presentDate.getFullYear()) {
                        trigger_invalid("year", "Must be in the past");
                  }
                  else {
                        trigger_invalid("year", "Must be a vaild year");
                  }
            }
      }
      else {
            reset_validation_error();
            if (date.getMonth() > presentDate.getMonth()) {
                  months = 12 - Math.abs(presentDate.getMonth() - month.value) + 1;
                  --years;
            }
            if (date.getDate() > presentDate.getDate()) {
                  day30.indexOf(month.value) > -1 ? days = 30 - Math.abs(presentDate.getDate() - day.value) + console.log(30) : days = 31 - Math.abs(presentDate.getDate() - day.value) + console.log(31);
                  --months;
            }
            yearPlaceholder.classList.add("on");
            yearPlaceholder.animate(
                  [
                        { "--date": 0 },
                        { "--date": years }
                  ], {
                  duration: 1000,
                  fill: 'forwards',
                  delay: 0,
                  iterations: 1
            });
            monthPlaceholder.classList.add("on");
            monthPlaceholder.animate(
                  [
                        { "--date": 0 },
                        { "--date": months }
                  ], {
                        duration: 500,
                        fill: 'forwards',
                        delay: 1000,
                        iterations: 1
            });
            dayPlaceholder.classList.add("on");
            dayPlaceholder.animate(
                  [
                        { "--date": 0 },
                        { "--date": days }
                  ],
                  {
                        duration: 500,
                        fill: 'forwards',
                        delay: 1500,
                        iterations: 1
                  }
            );
      }
}

submit.addEventListener("click", ()=>sortOnPlaceholders());