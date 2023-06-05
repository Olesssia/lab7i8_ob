function isNotEmpty(value) {
  return value.trim() !== '';
}
function checkLength(value, minLength, maxLength) {
  const length = value.trim().length;
  return length >= minLength && length <= maxLength;
}
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function checkPasswordStrength(password) {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /\W|_/.test(password);

  return (
    password.length >= minLength &&
    hasUpperCase &&
    hasLowerCase &&
    hasNumber &&
    hasSpecialChar
  );
}
function validateDateOfBirth(dateOfBirth) {
  const today = new Date();
  const inputDate = new Date(dateOfBirth);
  const yearsDiff = today.getFullYear() - inputDate.getFullYear();
  const isLegalAge = yearsDiff >= 18;

  return isLegalAge;
}
function handleCountryChange() {
  var countrySelect = document.getElementById("country");
  var stateField = document.getElementById("stateField");
  var stateInput = document.getElementById("state");
  var stateList = document.getElementById("stateList");

  if (countrySelect.value === "Polska") {
    stateInput.style.display = "none";
    stateList.style.display = "inline-block";
    stateList.disabled = false;
  } else {
    stateList.style.display = "none";
    stateInput.style.display = "inline-block";
    stateList.disabled = true;
  }
}

const form = document.getElementById('myForm');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
const dobInput = document.getElementById('dob');
const dobError = document.getElementById('dobError');

function validateForm(event) {
  event.preventDefault();

  // email validation
  if (!isNotEmpty(emailInput.value)) {
    emailError.textContent = 'Please enter an email address.';
  } else if (!validateEmail(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address.';
  } else {
    emailError.textContent = ''; // Clear the error message
  }

  // password validation
  if (!isNotEmpty(passwordInput.value)) {
    passwordError.textContent = 'Please enter a password.';
  } else if (!checkPasswordStrength(passwordInput.value)) {
    passwordError.textContent = 'Please enter a stronger password.';
  } else {
    passwordError.textContent = ''; // Clear the error message
  }

  // date validation
  if (!isNotEmpty(dobInput.value)) {
    dobError.textContent = 'Please enter your date of birth.';
  } else if (!validateDateOfBirth(dobInput.value)) {
    dobError.textContent = 'You must be at least 18 years old.';
  } else {
    dobError.textContent = ''; // Clear the error message
  }

  if (
    emailError.textContent === '' &&
    passwordError.textContent === '' &&
    dobError.textContent === ''
  ) {
    // Form is valid
    alert('Form submitted successfully!');
    form.submit();
  }
}

form.addEventListener('submit', validateForm);

emailInput.addEventListener('input', function () {
  emailError.textContent = ''; // Clear the error message
});

passwordInput.addEventListener('input', function () {
  passwordError.textContent = ''; // Clear the error message
});

dobInput.addEventListener('input', function () {
  dobError.textContent = ''; // Clear the error message
});
