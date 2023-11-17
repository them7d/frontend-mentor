var rang = document.querySelector('.rang_inp'),
      price_place = document.querySelector('.price'),
      count_view = document.querySelector('.count_view'),
      packages = [{ value: 10, type: 'k' }, { value: 50, type: 'k' }, { value: 100, type: 'k' }, { value: 500, type: 'k' }, { value: 1, type: 'm' }],
      yearly = document.querySelector('.yearly'),
      monthly_placeholder = document.querySelector('.year-month');
function update_data() {
      var yearly_check = document.querySelector('.yearly').checked;
      price_place.textContent = get_price(rang.value, yearly_check).toFixed(2);
      count_view.textContent = get_countview(rang.value - 1, yearly_check);
}
function get_price(value, yearly) {
      if (value === '1') {
            return calculate_price(8, yearly);
      }
      else if (value === '2') {
            return calculate_price(12, yearly);
      }
      else if (value === '3') {
            return calculate_price(16, yearly);
      }
      else if (value === '4') {
            return calculate_price(24, yearly);
      }
      else if (value === '5') {
            return calculate_price(36, yearly);
      }
}
function calculate_price(price, yearly) {
      if (yearly) {
            return (price * 12) * 0.75;
      }
      else {
            return price;
      }
}
function get_countview(index, yearly) {
      if (yearly) {
            if (packages[index].type === 'k') {
                  return packages[index].value * 12 + "K";
            }
            else {
                  return packages[index].value * 12 + "M";
            }
      } else {
            if (packages[index].type === 'k') {
                  return packages[index].value + "K";
            }
            else {
                  return packages[index].value + "M";
            }
      }
}

// handle events

yearly.addEventListener('click', () => {
      update_data();
      if (monthly_placeholder.textContent === '/month') {
            monthly_placeholder.textContent = '/year';
      }
      else {
            monthly_placeholder.textContent = '/month';
      }
});

// update date for mobile devices

rang.addEventListener("touchstart", () => {
      rang.addEventListener('touchmove', update_data)
}
);
rang.addEventListener("touchend", () => {
      rang.removeEventListener('touchmove', update_data)
});

// update data for desktop

rang.addEventListener("mousedown", () => {
      rang.addEventListener("mousemove", update_data);
});
rang.addEventListener("mouseup", () => {
      rang.removeEventListener("mousemove", update_data);
});