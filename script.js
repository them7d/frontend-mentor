var inp_cardholder = document.querySelector('#cardholder'),
  err_name = document.querySelector('#err_name'),
  err_cardnumber = document.querySelector(
    '.error-placeholder.error-cardnumber'
  ),
  inp_cardnumber = document.querySelector('#cardnumber'),
  confirm = document.querySelector('#confirm'),
  inp_MM = document.querySelector('#month'),
  inp_YY = document.querySelector('#year'),
  err_exp = document.querySelector('.error-exp'),
  inp_cvc = document.querySelector('#cvc'),
  err_cvc = document.querySelector('.error-cvc'),
  card_name_holder = document.querySelector('#card_name_holder'),
  card_number_holder = document.querySelector('#card_number_holder'),
  card_MM_holder = document.querySelector('#MM'),
  card_YY_holder = document.querySelector('#YY'),
  card_cvc_holder = document.querySelector('#cvc_holder'),
  thank_screen = document.querySelector('.thank-screen'),
  inputs = [inp_cardholder, inp_cardnumber, inp_MM, inp_YY, inp_cvc],
  cardPlaceholders = [card_name_holder, card_number_holder, card_MM_holder, card_YY_holder, card_cvc_holder];
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('keyup', () => {
    if (inputs[i].value !== '') {
      console.log(`${inputs[i].value}= ${cardPlaceholders[i].textContent}`);
      sendData(inputs[i], cardPlaceholders[i]);
    }
  })
}
inp_cardnumber.addEventListener("keyup", function (e) {
  e.target.value = e.target.value.replace(/[\s]/g, "").replace(/(.{4})/g, "$1 ").trim();
});
function resetclassbtn() {
  confirm.classList.remove("animate__headShake");
}
function triggererror() {
  confirm.classList.add("animate__headShake");
  setTimeout(resetclassbtn, 1000);
}
confirm.addEventListener('click', e => {
  e.preventDefault();
  validateInput(inp_cardnumber, err_cardnumber) || triggererror();
  validateInput(inp_MM, err_exp) || triggererror();
  validateInput(inp_YY, err_exp) || triggererror();
  validateInput(inp_cvc, err_cvc) || triggererror();
  inp_cardholder.value === '' ? cantbeBlank(inp_cardholder, err_name) : true;
  if (
    inp_cardholder.value !== '' &&
    validateInput(inp_cardnumber, err_cardnumber) === true &&
    validateInput(inp_MM, err_exp) === true &&
    validateInput(inp_YY, err_exp) === true &&
    validateInput(inp_cvc, err_cvc) === true
  ) {
    thank_screen.classList.remove('hidden');
  }
  else {
    return false;
  }
});

function cantbeBlank(inputElement, errorElement) {

  inputElement.classList.add('border-red');
  if (errorElement) {
    errorElement.textContent = "Can't be blank";
    errorElement.style.color = 'red';
  }
}

function sendData(input, placeholder) {

  placeholder.textContent = input.value;

}

function validateInput(inputElement, errorElement) {
  const inputValue = inputElement.value
  inputElement.classList.remove('border-red');
  if (errorElement) {
    errorElement.textContent = '';
  }
  if (inputValue === '') {
    cantbeBlank(inputElement, errorElement);
    return false;
  }
  else if (/^[a-zA-Z]/.test(inputValue)) {
    inputElement.classList.add('border-red')
    if (errorElement) {
      errorElement.textContent = 'Wrong format, numbers only';
      errorElement.style.color = 'red';
    }
    return false;
  }
  else {
    return true;
  }
}
